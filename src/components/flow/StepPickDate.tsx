"use client";

import type { ClassProduct, BTWProduct, DateSlot, ClassFormat } from "@/types";

interface Props {
  product: ClassProduct | BTWProduct;
  onSelect: (dateSlot: DateSlot) => void;
}

const MOCK_SLOTS: DateSlot[] = [
  { id: "slot-1", date: "Mon, May 11", time: "9:00 AM – 1:00 PM", format: "in-person", spotsRemaining: 4, sanityId: "mock-1" },
  { id: "slot-2", date: "Tue, May 12", time: "1:00 PM – 5:00 PM", format: "in-person", spotsRemaining: 2, sanityId: "mock-2" },
  { id: "slot-3", date: "Wed, May 13", time: "9:00 AM – 1:00 PM", format: "virtual",   spotsRemaining: 8, sanityId: "mock-3" },
  { id: "slot-4", date: "Thu, May 14", time: "5:00 PM – 9:00 PM", format: "in-person", spotsRemaining: 6, sanityId: "mock-4" },
  { id: "slot-5", date: "Sat, May 16", time: "9:00 AM – 1:00 PM", format: "in-person", spotsRemaining: 1, sanityId: "mock-5" },
  { id: "slot-6", date: "Sat, May 16", time: "9:00 AM – 5:00 PM", format: "virtual",   spotsRemaining: 10, sanityId: "mock-6" },
];

const FORMAT_LABEL: Record<ClassFormat, string> = {
  "in-person": "In-Person",
  virtual: "Virtual",
};

export default function StepPickDate({ product, onSelect }: Props) {
  return (
    <div>
      <h2 className="font-display text-[28px] text-navy mb-1.5">
        Pick a date & time
      </h2>
      <p className="font-body text-gray-500 mb-6">
        Choose a session that works for you.
      </p>

      <div className="flex flex-col gap-3">
        {MOCK_SLOTS.map((slot) => (
          <button
            key={slot.id}
            onClick={() => onSelect(slot)}
            className="w-full rounded-xl border-2 border-gray-200 bg-white p-4 text-left transition-all hover:border-navy"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-semibold text-navy">{slot.date}</p>
                <p className="text-sm text-gray-500">{slot.time}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                  {FORMAT_LABEL[slot.format]}
                </span>
                <span className={`text-xs ${slot.spotsRemaining <= 2 ? "text-red-500 font-medium" : "text-gray-400"}`}>
                  {slot.spotsRemaining} spot{slot.spotsRemaining !== 1 ? "s" : ""} left
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
