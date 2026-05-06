"use client";

import dynamic from "next/dynamic";

const SelectionFlow = dynamic(() => import("./SelectionFlow"), { ssr: false });

export default function SelectionFlowClient() {
  return <SelectionFlow />;
}
