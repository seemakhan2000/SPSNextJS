"use client";

import { useEffect } from "react";
import { DEFERRED_STYLES } from "@/lib/deferred-styles";

export default function DeferredStyles() {
  useEffect(() => {
    DEFERRED_STYLES.forEach((href) => {
      if (document.querySelector(`link[rel="stylesheet"][href="${href}"]`)) return;

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.media = "print";
      link.onload = () => {
        link.media = "all";
      };
      document.head.appendChild(link);
    });
  }, []);

  return null;
}
