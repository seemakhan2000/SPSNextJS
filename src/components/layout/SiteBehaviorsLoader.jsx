"use client";

import dynamic from "next/dynamic";

const SiteBehaviors = dynamic(() => import("@/components/shared/SiteBehaviors"), {
  ssr: false,
});

export default function SiteBehaviorsLoader() {
  return <SiteBehaviors />;
}
