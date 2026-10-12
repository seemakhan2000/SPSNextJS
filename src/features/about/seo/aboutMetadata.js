import {
  SITE_NAME,
  SITE_SHORT_NAME,
  absoluteUrl,
} from "@/lib/site";

import {
  ABOUT_PATH,
  ABOUT_BANNER,
} from "../constants/about.constants";

import { aboutPage } from "../data/aboutData";

export function aboutMetadata() {
  const { title, description } = aboutPage;

  return {
    title,
    description,
    alternates: {
      canonical: ABOUT_PATH,
    },
    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(ABOUT_PATH),
      images: [ABOUT_BANNER],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [ABOUT_BANNER],
    },
  };
}

