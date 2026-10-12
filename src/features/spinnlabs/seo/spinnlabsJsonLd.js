import { SITE_NAME, absoluteUrl } from "@/lib/site";

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

function pageJsonLd(page, path) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: absoluteUrl(path),

    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };
}

export function overviewJsonLd() {
  return pageJsonLd(
    overviewPage,
    SPINNLABS_OVERVIEW_PATH,
  );
}

export function academiaJsonLd() {
  return pageJsonLd(
    academiaPage,
    SPINNLABS_ACADEMIA_PATH,
  );
}

export function industryJsonLd() {
  return pageJsonLd(
    industryPage,
    SPINNLABS_INDUSTRY_PATH,
  );
}

export function expertiseJsonLd() {
  return pageJsonLd(
    expertisePage,
    SPINNLABS_EXPERTISE_PATH,
  );
}

export function startupsJsonLd() {
  return pageJsonLd(
    startupsPage,
    SPINNLABS_STARTUPS_PATH,
  );
}

export function proposeJsonLd() {
  return pageJsonLd(
    proposePage,
    SPINNLABS_PROPOSE_PATH,
  );
}

export function planJsonLd() {
  return pageJsonLd(
    planPage,
    SPINNLABS_PLAN_PATH,
  );
}

export function agreementJsonLd() {
  return pageJsonLd(
    agreementPage,
    SPINNLABS_AGREEMENT_PATH,
  );
}

export function executeJsonLd() {
  return pageJsonLd(
    executePage,
    SPINNLABS_EXECUTE_PATH,
  );
}

export function launchJsonLd() {
  return pageJsonLd(
    launchPage,
    SPINNLABS_LAUNCH_PATH,
  );
}

export function equityJsonLd() {
  return pageJsonLd(
    equityPage,
    SPINNLABS_EQUITY_PATH,
  );
}