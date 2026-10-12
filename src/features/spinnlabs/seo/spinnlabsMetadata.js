import { SITE_SHORT_NAME, absoluteUrl } from "@/lib/site";

import {
  SPINNLABS_AGREEMENT_PATH,
  SPINNLABS_EQUITY_PATH,
  SPINNLABS_EXECUTE_PATH,
  SPINNLABS_EXPERTISE_PATH,
  SPINNLABS_INDUSTRY_PATH,
  SPINNLABS_LAUNCH_PATH,
  SPINNLABS_OVERVIEW_PATH,
  SPINNLABS_PLAN_PATH,
  SPINNLABS_PROPOSE_PATH,
  SPINNLABS_STARTUPS_PATH,
  SPINNLABS_ACADEMIA_PATH,
  SPINNLABS_IMAGES,
} from "../constants/spinnlabs.constants";

import {
  overviewPage,
  academiaPage,
  industryPage,
  expertisePage,
  startupsPage,
  proposePage,
  planPage,
  agreementPage,
  executePage,
  launchPage,
  equityPage,
} from "../data/spinnlabs";

function pageMetadata(page, path) {
  const { title, description } = page;

  return {
    title,
    description,

    alternates: {
      canonical: absoluteUrl(path),
    },

    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(path),
      images: [
        {
          url: absoluteUrl(SPINNLABS_IMAGES.banner),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [absoluteUrl(SPINNLABS_IMAGES.banner)],
    },
  };
}

export function overviewMetadata() {
  return pageMetadata(
    overviewPage,
    SPINNLABS_OVERVIEW_PATH,
  );
}

export function academiaMetadata() {
  return pageMetadata(
    academiaPage,
    SPINNLABS_ACADEMIA_PATH,
  );
}

export function industryMetadata() {
  return pageMetadata(
    industryPage,
    SPINNLABS_INDUSTRY_PATH,
  );
}

export function expertiseMetadata() {
  return pageMetadata(
    expertisePage,
    SPINNLABS_EXPERTISE_PATH,
  );
}

export function startupsMetadata() {
  return pageMetadata(
    startupsPage,
    SPINNLABS_STARTUPS_PATH,
  );
}

export function proposeMetadata() {
  return pageMetadata(
    proposePage,
    SPINNLABS_PROPOSE_PATH,
  );
}

export function planMetadata() {
  return pageMetadata(
    planPage,
    SPINNLABS_PLAN_PATH,
  );
}

export function agreementMetadata() {
  return pageMetadata(
    agreementPage,
    SPINNLABS_AGREEMENT_PATH,
  );
}

export function executeMetadata() {
  return pageMetadata(
    executePage,
    SPINNLABS_EXECUTE_PATH,
  );
}

export function launchMetadata() {
  return pageMetadata(
    launchPage,
    SPINNLABS_LAUNCH_PATH,
  );
}

export function equityMetadata() {
  return pageMetadata(
    equityPage,
    SPINNLABS_EQUITY_PATH,
  );
}