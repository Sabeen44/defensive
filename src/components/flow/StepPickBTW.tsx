"use client";

import type { BTWProduct } from "@/types";
import { BTW_PRODUCTS } from "@/lib/products";
import OptionCard from "../ui/OptionCard";

interface Props {
  onSelect: (product: BTWProduct) => void;
}

export default function StepPickBTW({ onSelect }: Props) {
  return (
    <div>
      <h2 className="font-display text-[28px] text-navy mb-1.5">
        Choose your package
      </h2>
      <p className="font-body text-gray-500 mb-8">
        All sessions use a dual-control vehicle with a certified instructor.
      </p>

      <div className="flex flex-col gap-3.5">
        {BTW_PRODUCTS.map((product) => (
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
    </div>
  );
}
