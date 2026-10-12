import { SITE_SHORT_NAME, absoluteUrl } from "@/lib/site";

import {
  INTERNSHIP_PATH,
  INTERNSHIP_CAREER_FIELDS_PATH,
  INTERNSHIP_WHO_WE_ARE_PATH,
  INTERNSHIP_APPLY_PATH,
  INTERNSHIP_IMAGES,
} from "../constants/internship.constants";

import {
  internshipPage,
  careerFieldsPage,
  whoWeArePage,
} from "../data/internship";

import { applyPage } from "../data/internship-apply";

/*
|--------------------------------------------------------------------------
| Internship Metadata
|--------------------------------------------------------------------------
*/

export function internshipMetadata() {
  const { title, description } = internshipPage;

  return {
    title,
    description,

    alternates: {
      canonical: INTERNSHIP_PATH,
    },

    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(INTERNSHIP_PATH),
      images: [INTERNSHIP_IMAGES.banner],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [INTERNSHIP_IMAGES.banner],
    },
  };
}

/*
|--------------------------------------------------------------------------
| Career Fields Metadata
|--------------------------------------------------------------------------
*/

export function careerFieldsMetadata() {
  const { title, description } = careerFieldsPage;

  return {
    title,
    description,

    alternates: {
      canonical: INTERNSHIP_CAREER_FIELDS_PATH,
    },

    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(INTERNSHIP_CAREER_FIELDS_PATH),
      images: [INTERNSHIP_IMAGES.banner],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [INTERNSHIP_IMAGES.banner],
    },
  };
}

/*
|--------------------------------------------------------------------------
| Who We Are Metadata
|--------------------------------------------------------------------------
*/

export function whoWeAreMetadata() {
  const { title, description } = whoWeArePage;

  return {
    title,
    description,

    alternates: {
      canonical: INTERNSHIP_WHO_WE_ARE_PATH,
    },

    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(INTERNSHIP_WHO_WE_ARE_PATH),
      images: [INTERNSHIP_IMAGES.banner],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [INTERNSHIP_IMAGES.banner],
    },
  };
}

/*
|--------------------------------------------------------------------------
| Apply Metadata
|--------------------------------------------------------------------------
*/

export function applyMetadata() {
  const { title, description } = applyPage;

  return {
    title,
    description,

    alternates: {
      canonical: INTERNSHIP_APPLY_PATH,
    },

    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(INTERNSHIP_APPLY_PATH),
      images: [INTERNSHIP_IMAGES.banner],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [INTERNSHIP_IMAGES.banner],
    },
  };
}