import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { sitemapEntries as productSitemapEntries } from "@/features/products/data/products";
import { sitemapEntries as serviceSitemapEntries } from "@/features/products/data/products";
import { CONTACT_PATH } from "@/features/contact/constants/contact.constants";
import { ABOUT_PATH } from "@/features/about/constants/about.constants";
import { CAREER_PATH } from "@/features/career/constants/career.constants";
import { INTERNSHIP_APPLY_PATH, INTERNSHIP_CAREER_FIELDS_PATH, INTERNSHIP_PATH, INTERNSHIP_WHO_WE_ARE_PATH } from "@/features/internship/constants/internship.constants";
import { PAST_EVENTS_PATH } from "@/features/past-events/constants/past-events.constants";
import { pastWebinars, pastWebinarPath } from "@/features/past-events/data/past-events";
import { ROUNDTABLE_PATH } from "@/features/roundtables/constants/roundtable.constants";
import {
  SPINNLABS_ACADEMIA_PATH,
  SPINNLABS_AGREEMENT_PATH,
  SPINNLABS_EXECUTE_PATH,
  SPINNLABS_EXPERTISE_PATH,
  SPINNLABS_EQUITY_PATH,
  SPINNLABS_LAUNCH_PATH,
  SPINNLABS_INDUSTRY_PATH,
  SPINNLABS_OVERVIEW_PATH,
  SPINNLABS_PLAN_PATH,
  SPINNLABS_PROPOSE_PATH,
  SPINNLABS_STARTUPS_PATH,
} from "@/features/spinnlabs/constants/spinnlabs.constants";
import { VITA_PATH } from "@/features/contracts/constants/contracts.constants";
import { verticalSitemapEntries } from "@/features/verticals/data/verticals";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}${ABOUT_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${CAREER_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${ROUNDTABLE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${PAST_EVENTS_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...pastWebinars.map((item) => ({
      url: `${SITE_URL}${pastWebinarPath(item.slug)}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    {
      url: `${SITE_URL}${INTERNSHIP_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${INTERNSHIP_CAREER_FIELDS_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}${INTERNSHIP_WHO_WE_ARE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}${INTERNSHIP_APPLY_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${SPINNLABS_OVERVIEW_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}${SPINNLABS_ACADEMIA_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}${SPINNLABS_INDUSTRY_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}${SPINNLABS_EXPERTISE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}${SPINNLABS_STARTUPS_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}${SPINNLABS_PROPOSE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}${SPINNLABS_PLAN_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}${SPINNLABS_AGREEMENT_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}${SPINNLABS_EXECUTE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}${SPINNLABS_LAUNCH_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}${SPINNLABS_EQUITY_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}${CONTACT_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${VITA_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...verticalSitemapEntries(),
    ...productSitemapEntries(),
    ...serviceSitemapEntries(),
  ];
}
