import {
  SITE_SHORT_NAME,
  absoluteUrl,
} from "@/lib/site";

import {
  VITA_PATH,
  VITA_BANNER,
} from "../constants/contracts.constants";

import { vitaPage } from "../data/contractsData";
export function vitaMetadata() {
  const { title, description } = vitaPage;
  return {
    title,
    description,
    alternates: { canonical: VITA_PATH },
    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(VITA_PATH),
      images: [VITA_BANNER],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [VITA_BANNER],
    },
  };
}