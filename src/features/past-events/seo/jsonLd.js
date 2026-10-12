import {
  SITE_NAME,
  absoluteUrl,
} from "@/lib/site";

import { PAST_EVENTS_PATH } from "../constants/past-events.constants";

export function pastEventsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    name: "Webinars Past Events",

    description:
      "Explore our past webinars featuring industry experts, insightful discussions, and valuable knowledge shared across technology and innovation.",

    url: absoluteUrl(PAST_EVENTS_PATH),

    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };
}

export function pastWebinarJsonLd(item) {
  const webinarPath =
    `${PAST_EVENTS_PATH}/${item.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Event",

    name: item.title,
    description: item.excerpt,

    url: absoluteUrl(webinarPath),

    eventStatus:
      "https://schema.org/EventScheduled",

    eventAttendanceMode:
      "https://schema.org/OnlineEventAttendanceMode",

    startDate: item.startDate,
    endDate: item.endDate,

    organizer: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };
}