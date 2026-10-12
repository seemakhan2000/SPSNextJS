import { SITE_SHORT_NAME, absoluteUrl } from "@/lib/site";

import {
  ROUNDTABLE_PATH,
  ROUNDTABLE_IMAGES,
} from "../constants/roundtable.constants";

import { roundtablePage } from "../data/roundtable";

export function roundtableMetadata() {
  const { title, description } = roundtablePage;

  return {
    title,
    description,
    alternates: {
      canonical: ROUNDTABLE_PATH,
    },
    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(ROUNDTABLE_PATH),
      images: [ROUNDTABLE_IMAGES.banner],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [ROUNDTABLE_IMAGES.banner],
    },
  };
}