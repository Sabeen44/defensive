"use client";

import type { UserType, GoalType } from "@/types";
import OptionCard from "../ui/OptionCard";

interface Props {
  userType: UserType;
  onSelect: (goal: GoalType) => void;
}

export default function StepGoal({ userType, onSelect }: Props) {
  return (
    <div>
      <h2 className="font-display text-[28px] text-navy mb-1.5">
        What do you need?
      </h2>
      <p className="font-body text-gray-500 mb-8">
        {userType === "teen"
          ? "Choose between a classroom course or hands-on driving lessons."
          : "Pick the type of training that fits your situation."}
      </p>

      <div className="flex flex-col gap-3.5">
        <OptionCard
          emoji="📚"
          title="Defensive Driving Class"
          subtitle={userType === "teen" ? "8-hour or 4-hour course" : "4-hour or 8-hour course"}
          detail="Virtual or in-person · Meets WA state requirements"
          onClick={() => onSelect("class")}
        />
        <OptionCard
          emoji="🚗"
          title="Behind-the-Wheel Lessons"
          subtitle="One-on-one with a licensed instructor"
          detail="2, 5, or 10-hour packages · Dual-control vehicle"
          onClick={() => onSelect("btw")}
        />
      </div>
    </div>
  );
}
