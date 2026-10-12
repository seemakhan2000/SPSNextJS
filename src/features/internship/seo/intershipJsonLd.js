import { SITE_NAME, absoluteUrl } from "@/lib/site";

import {
  INTERNSHIP_PATH,
  INTERNSHIP_CAREER_FIELDS_PATH,
  INTERNSHIP_WHO_WE_ARE_PATH,
  INTERNSHIP_APPLY_PATH,
  INTERNSHIP_YEAR,
} from "../constants/internship.constants";

import {
  internshipPage,
  careerFieldsPage,
  whoWeArePage,
} from "../data/internship";

import { applyPage } from "../data/internship-apply";



export function internshipJsonLd() {
  return {
    "@context": "https://schema.org",

    "@type": "EducationalOccupationalProgram",

    name: internshipPage.title,

    description: internshipPage.description,

    url: absoluteUrl(INTERNSHIP_PATH),

    educationalProgramMode: "hybrid",

    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },

    timeToComplete: "P3M",
  };
}


export function careerFieldsJsonLd() {
  return {
    "@context": "https://schema.org",

    "@type": "WebPage",

    name: `${internshipPage.title} Career Fields`,

    description: careerFieldsPage.description,

    url: absoluteUrl(INTERNSHIP_CAREER_FIELDS_PATH),

    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };
}


export function whoWeAreJsonLd() {
  return {
    "@context": "https://schema.org",

    "@type": "WebPage",

    name: `${internshipPage.title} Who We Are`,

    description: whoWeArePage.description,

    url: absoluteUrl(INTERNSHIP_WHO_WE_ARE_PATH),

    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };
}



export function applyJsonLd() {
  return {
    "@context": "https://schema.org",

    "@type": "WebPage",

    name: `Apply | Internship Program ${INTERNSHIP_YEAR}`,

    description: applyPage.description,

    url: absoluteUrl(INTERNSHIP_APPLY_PATH),

    isPartOf: {
      "@type": "WebSite",

      name: SITE_NAME,

      url: absoluteUrl("/"),
    },

    about: {
      "@type": "EducationalOccupationalProgram",

      name: `Internship Program ${INTERNSHIP_YEAR}`,

      url: absoluteUrl(INTERNSHIP_PATH),
    },
  };
}