"use client";

import { useState, useEffect } from "react";
import type { BTWProduct } from "@/types";
import { getBTWPackages } from "@/sanity/lib/client";
import OptionCard from "../ui/OptionCard";

interface Props {
  onSelect: (product: BTWProduct) => void;
}

export default function StepPickBTW({ onSelect }: Props) {
  const [products, setProducts] = useState<BTWProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBTWPackages()
      .then((data) =>
        setProducts(
          data.map((p: any) => ({
            id: p._id,
            name: p.name,
            tag: p.tag ?? null,
            price: p.price,
            description: p.description,
            sessions: p.sessions,
            savings: p.savings ?? null,
            stripeProductId: p.stripeProductId,
          }))
        )
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2 className="font-display text-[28px] text-navy mb-1.5">
        Choose your package
      </h2>
      <p className="font-body text-gray-500 mb-8">
        All sessions use a dual-control vehicle with a certified instructor.
      </p>

      {loading ? (
        <p className="text-sm text-gray-400 text-center py-4">Loading packages…</p>
      ) : (
        <div className="flex flex-col gap-3.5">
          {products.map((product) => (
            <OptionCard
              key={product.id}
              title={product.name}
              subtitle={`$${product.price}${product.savings ? ` · Save ${product.savings}` : ""}`}
              detail={product.description}
              badge={product.tag ?? undefined}
              onClick={() => onSelect(product)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
