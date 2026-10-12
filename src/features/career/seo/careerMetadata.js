import {
  SITE_SHORT_NAME,
  absoluteUrl,
} from "@/lib/site";

import { careerPage } from "../data/careerData";

import {
  CAREER_PATH,
  CAREER_BANNER,
} from "../constants/career.constants";

export function careerMetadata() {
  const { title, description } = careerPage;

  return {
    title,
    description,

    alternates: {
      canonical: CAREER_PATH,
    },

    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(CAREER_PATH),
      images: [CAREER_BANNER],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [CAREER_BANNER],
    },
  };
}