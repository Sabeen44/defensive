import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { stripeProductId, studentName, email, dateSlot, location } = body;

    const product = await getStripe().products.retrieve(stripeProductId, {
      expand: ["default_price"],
    });

    const defaultPrice = product.default_price;
    if (!defaultPrice || typeof defaultPrice === "string") {
      throw new Error(`No default price set on product ${stripeProductId}`);
    }

    const enrollmentMetadata = {
      sanityClassDateId: dateSlot?.sanityId || "",
      student_name: studentName,
      date: dateSlot?.date || "",
      format: dateSlot?.format || "in-person",
      location: location?.name || "",
    };

    const session = await getStripe().checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      line_items: [{ price: defaultPrice.id, quantity: 1 }],
      metadata: enrollmentMetadata,
      payment_intent_data: { metadata: enrollmentMetadata },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Stripe error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

