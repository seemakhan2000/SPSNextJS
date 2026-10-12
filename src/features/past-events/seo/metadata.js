import {
  SITE_SHORT_NAME,
  absoluteUrl,
} from "@/lib/site";

import {
  PAST_EVENTS_PATH,
  PAST_EVENTS_BANNER,
} from "../constants/past-events.constants";

import { pastEventsPage } from "../data/past-events";

export function pastEventsMetadata() {
  const { title, description } = pastEventsPage;

  return {
    title,
    description,

    alternates: {
      canonical: PAST_EVENTS_PATH,
    },

    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(PAST_EVENTS_PATH),
      images: [PAST_EVENTS_BANNER],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [PAST_EVENTS_BANNER],
    },
  };
}

export function pastWebinarMetadata(item) {
  const canonicalPath = `${PAST_EVENTS_PATH}/${item.slug}`;

  return {
    title: item.title,
    description: item.excerpt,

    alternates: {
      canonical: canonicalPath,
    },

    openGraph: {
      title: `${item.title} | ${SITE_SHORT_NAME}`,
      description: item.excerpt,
      url: absoluteUrl(canonicalPath),
      images: [PAST_EVENTS_BANNER],
    },

    twitter: {
      card: "summary_large_image",
      title: `${item.title} | ${SITE_SHORT_NAME}`,
      description: item.excerpt,
      images: [PAST_EVENTS_BANNER],
    },
  };
}