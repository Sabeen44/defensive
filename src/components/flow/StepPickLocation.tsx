"use client";

import { useState } from "react";
import type { Location } from "@/types";

const MOCK_LOCATIONS: Location[] = [
  { name: "Seattle Downtown",  region: "Seattle",  slug: "seattle-downtown", address: "123 1st Ave, Seattle, WA 98101",       coordinates: { lat: 47.6062, lng: -122.3321 } },
  { name: "Bellevue",          region: "Eastside", slug: "bellevue",         address: "456 156th Ave NE, Bellevue, WA 98007",  coordinates: { lat: 47.6101, lng: -122.2015 } },
  { name: "Redmond",           region: "Eastside", slug: "redmond",          address: "789 Redmond Way, Redmond, WA 98052",    coordinates: { lat: 47.6740, lng: -122.1215 } },
  { name: "Kirkland",          region: "Eastside", slug: "kirkland",         address: "321 Market St, Kirkland, WA 98033",     coordinates: { lat: 47.6815, lng: -122.2087 } },
  { name: "Renton",            region: "South",    slug: "renton",           address: "654 Rainier Ave S, Renton, WA 98057",   coordinates: { lat: 47.4829, lng: -122.2171 } },
];

interface Props {
  onSelect: (location: Location) => void;
}

export default function StepPickLocation({ onSelect }: Props) {
  const [query, setQuery] = useState("");

  const filtered = MOCK_LOCATIONS.filter(
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
        {filtered.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-4">No locations match your search.</p>
        )}
      </div>
    </div>
  );
}
