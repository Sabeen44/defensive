"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import type { ClassProduct, BTWProduct, DateSlot, Location } from "@/types";

interface Props {
  product: ClassProduct | BTWProduct;
  dateSlot: DateSlot | null;
  location: Location | null;
}

export default function StepCheckout({ product, dateSlot, location }: Props) {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const hasTurnstile = !!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const [turnstileToken, setTurnstileToken] = useState<string | null>(
    hasTurnstile ? null : "dev-bypass"
  );
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    if (!turnstileToken) {
      setError("Please wait for the security check to complete.");
      return;
    }
    setProcessing(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stripeProductId: product.stripeProductId,
          studentName: formData.name,
          email: formData.email,
          dateSlot,
          location,
          turnstileToken,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error ?? "Something went wrong. Please try again.");
        setProcessing(false);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setProcessing(false);
    }
  };

  return (
    <div>
      <h2 className="font-display text-[28px] text-navy mb-1.5">
        Almost there
      </h2>
      <p className="font-body text-gray-500 mb-6">
        Review your order and enter your details to pay.
      </p>

      {/* Order summary */}
      <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 mb-6 space-y-1">
        <p className="font-semibold text-navy">{product.name}</p>
        {dateSlot && (
          <p className="text-sm text-gray-500">
            {dateSlot.date} · {dateSlot.time} · {dateSlot.format}
          </p>
        )}
        {location && (
          <p className="text-sm text-gray-500">{location.name}</p>
        )}
        <p className="text-lg font-bold text-navy pt-1">
          ${product.price.toLocaleString()}
        </p>
      </div>

      {/* Form */}
      <div className="space-y-3 mb-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full name
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
            placeholder="Jane Smith"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-navy"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
            placeholder="jane@example.com"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-navy"
          />
        </div>
      </div>

      {hasTurnstile && (
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onSuccess={(token) => setTurnstileToken(token)}
          options={{ theme: "light", size: "invisible" }}
        />
      )}

      {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

      <button
        onClick={handlePayment}
        disabled={processing || !formData.name || !formData.email}
        className="w-full bg-navy text-white rounded-xl py-3.5 font-semibold text-sm transition-opacity disabled:opacity-50 hover:opacity-90"
      >
        {processing ? "Redirecting to payment…" : `Pay $${product.price.toLocaleString()}`}
      </button>
    </div>
  );
}
