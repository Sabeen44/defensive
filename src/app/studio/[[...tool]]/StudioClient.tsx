"use client";

import dynamic from "next/dynamic";
import type { NextStudioProps } from "next-sanity/studio/client-component";

const NextStudio = dynamic(
  () => import("next-sanity/studio/client-component").then((m) => m.NextStudio),
  { ssr: false }
);

export default function StudioClient({ config }: NextStudioProps) {
  return <NextStudio config={config} />;
}
