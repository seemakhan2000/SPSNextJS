import {
  SITE_NAME,
  absoluteUrl,
} from "@/lib/site";

import { careerPage } from "../data/careerData";
import { careerJobs } from "../data/careerJobs";

import { CAREER_PATH } from "../constants/career.constants";

export function careerJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    name: careerPage.title,
    description: careerPage.description,
    url: absoluteUrl(CAREER_PATH),

    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },

    mainEntity: careerJobs.map((job) => ({
      "@type": "JobPosting",

      title: job.title,
      description: job.summary,
      employmentType: "FULL_TIME",

      hiringOrganization: {
        "@type": "Organization",
        name: SITE_NAME,
        sameAs: absoluteUrl("/"),
      },

      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: job.location,
        },
      },

      occupationalCategory: job.category,

      validThrough: toIsoDate(job.lastDate),

      url: absoluteUrl(`${CAREER_PATH}#${job.slug}`),
    })),
  };
}

function toIsoDate(value) {
  const [month, day, year] = String(value).split("-");

  if (!year || !month || !day) {
    return undefined;
  }

  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}