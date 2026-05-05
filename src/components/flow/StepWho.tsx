// StepWho.tsx — example structure
"use client";

import { UserType } from "@/types";
import OptionCard from "../ui/OptionCard";

interface Props {
  onSelect: (type: UserType) => void;
}

export default function StepWho({ onSelect }: Props) {
  return (
    <div>
      <h2 className="font-display text-[28px] text-navy mb-1.5">
        Let's find the right course for you.
      </h2>
      <p className="font-body text-gray-500 mb-8">
        Answer a couple quick questions and we'll match you
        with exactly what you need — no guesswork.
      </p>

      <div className="flex flex-col gap-3.5">
        <OptionCard
          emoji="🎓"
          title="I'm a Teen"
          subtitle="Getting my first license"
          detail="Ages 15½–17 · Need driver's ed to get your permit"
          onClick={() => onSelect("teen")}
        />
        <OptionCard
          emoji="🚗"
          title="I'm an Adult"
          subtitle="Lessons, refresher, or license testing"
          detail="18+ · Behind-the-wheel, defensive driving, or DOL testing"
          onClick={() => onSelect("adult")}
        />
      </div>
    </div>
  );
}