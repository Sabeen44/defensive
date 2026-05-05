"use client";

import type { UserType, ClassProduct } from "@/types";
import { CLASS_PRODUCTS } from "@/lib/products";
import OptionCard from "../ui/OptionCard";

interface Props {
  userType: UserType;
  onSelect: (product: ClassProduct) => void;
}

export default function StepPickClass({ userType, onSelect }: Props) {
  return (
    <div>
      <h2 className="font-display text-[28px] text-navy mb-1.5">
        Choose your class
      </h2>
      <p className="font-body text-gray-500 mb-8">
        Both meet Washington State requirements.
      </p>

      <div className="flex flex-col gap-3.5">
        {CLASS_PRODUCTS.map((product) => (
          <OptionCard
            key={product.id}
            title={product.name}
            subtitle={`$${product.price} · ${product.duration}`}
            detail={product.whoItsFor}
            badge={product.tag ?? undefined}
            onClick={() => onSelect(product)}
          />
        ))}
      </div>
    </div>
  );
}
