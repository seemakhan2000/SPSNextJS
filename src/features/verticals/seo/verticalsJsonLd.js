import { SITE_NAME, absoluteUrl } from "@/lib/site";

import { VERTICALS_PATH } from "../constants/verticals.constants";
import { verticalPath } from "../data/verticals";

export function verticalJsonLd(page) {
  const path = verticalPath(page.family, page.slug);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };
}

export function verticalsListingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Industry Verticals",
    url: absoluteUrl(VERTICALS_PATH),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };
}