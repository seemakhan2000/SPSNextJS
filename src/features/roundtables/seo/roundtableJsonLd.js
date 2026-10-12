import { SITE_NAME, absoluteUrl } from "@/lib/site";

import { ROUNDTABLE_PATH } from "../constants/roundtable.constants";

import { roundtablePage } from "../data/roundtable";

export function roundtableJsonLd() {
  const { session } = roundtablePage;

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: roundtablePage.title,
    description: roundtablePage.description,
    url: absoluteUrl(ROUNDTABLE_PATH),
    eventAttendanceMode:
      "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    startDate: "2026-06-11T11:00:00-04:00",
    endDate: "2026-06-11T12:00:00-04:00",
    location: {
      "@type": "VirtualLocation",
      url: absoluteUrl(ROUNDTABLE_PATH),
    },
    organizer: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
    about: session.topic,
  };
}