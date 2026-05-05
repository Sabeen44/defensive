import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { productName, price, studentName, email, dateSlot, location } = body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: productName,
              description: dateSlot
                ? `${dateSlot.date} · ${dateSlot.time} · ${dateSlot.format}`
                : `At ${location?.name}`,
              metadata: {
                student_name: studentName,
                date: dateSlot?.date || "",
                format: dateSlot?.format || "in-person",
                location: location?.name || "",
              },
            },
            unit_amount: price * 100, // Stripe uses cents
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      // No reCAPTCHA needed — Stripe Radar handles fraud detection
      // Enable Stripe Radar in your Stripe Dashboard for bot protection
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}