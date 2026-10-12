import {
  SITE_NAME,
  absoluteUrl,
} from "@/lib/site";

import { VITA_PATH } from "../constants/contracts.constants";
import { vitaPage } from "../data/contractsData";



export function vitaJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: vitaPage.title,
    description: vitaPage.description,
    url: absoluteUrl(VITA_PATH),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
    about: {
      "@type": "GovernmentService",
      name: vitaPage.contractTitle,
      identifier: vitaPage.contractNumber,
    },
  };
}