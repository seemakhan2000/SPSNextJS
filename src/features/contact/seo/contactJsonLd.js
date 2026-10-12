import {
  SITE_NAME,
  absoluteUrl,
  organizationJsonLd,
} from "@/lib/site";

import { CONTACT_PATH } from "../constants/contact.constants";

import { contactPage } from "../data/contactData";

export function contactJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",

    name: contactPage.title,
    description: contactPage.description,
    url: absoluteUrl(CONTACT_PATH),

    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },

    mainEntity: organizationJsonLd(),
  };
}