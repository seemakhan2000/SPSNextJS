import { SITE_SHORT_NAME, absoluteUrl } from "@/lib/site";

import {
  CONTACT_PATH,
  CONTACT_BANNER,
} from "../constants/contact.constants";

import { contactPage } from "../data/contactData";

export function contactMetadata() {
  const { title, description } = contactPage;

  return {
    title,
    description,

    alternates: {
      canonical: CONTACT_PATH,
    },

    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(CONTACT_PATH),
      images: [CONTACT_BANNER],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [CONTACT_BANNER],
    },
  };
}