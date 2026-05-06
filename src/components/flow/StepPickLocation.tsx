"use client";

import { useState, useEffect } from "react";
import type { Location } from "@/types";
import { getLocations } from "@/sanity/lib/client";

interface Props {
  onSelect: (location: Location) => void;
}

export default function StepPickLocation({ onSelect }: Props) {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getLocations()
      .then(setLocations)
      .finally(() => setLoading(false));
  }, []);

  const filtered = locations.filter(
    (loc) =>
      loc.name.toLowerCase().includes(query.toLowerCase()) ||
      loc.region.toLowerCase().includes(query.toLowerCase()) ||
      loc.address.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2 className="font-display text-[28px] text-navy mb-1.5">
        Choose a location
      </h2>
      <p className="font-body text-gray-500 mb-6">
        Search by city or neighborhood.
      </p>

      <input
        type="text"
        placeholder="e.g. Bellevue or Eastside"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-navy mb-3"
      />

      {loading ? (
        <p className="text-sm text-gray-400 text-center py-4">Loading locations…</p>
      ) : (
        <div className="flex flex-col gap-2.5">
          {filtered.map((loc) => (
            <button
              key={loc.slug}
              onClick={() => onSelect(loc)}
              className="w-full rounded-xl border-2 border-gray-200 bg-white p-4 text-left transition-all hover:border-navy"
            >
              <p className="font-semibold text-navy">{loc.name}</p>
              <p className="text-sm text-gray-500">{loc.address}</p>
            </button>
          ))}
          {!loading && filtered.length === 0 && (
            <p className="text-sm text-gray-400 text-center py-4">No locations match your search.</p>
          )}
        </div>
      )}
    </div>
  );
}
