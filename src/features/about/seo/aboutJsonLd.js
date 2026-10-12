
import {
  SITE_NAME,
  absoluteUrl,
} from "@/lib/site";

import { ABOUT_PATH } from "../constants/about.constants";
import { aboutPage } from "../data/aboutData";

export function aboutJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: aboutPage.title,
    description: aboutPage.description,
    url: absoluteUrl(ABOUT_PATH),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };
}