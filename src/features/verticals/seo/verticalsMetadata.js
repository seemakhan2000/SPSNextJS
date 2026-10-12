import { SITE_SHORT_NAME, absoluteUrl } from "@/lib/site";

import { VERTICALS_PATH, VERTICALS_BANNER } from "../constants/verticals.constants";

import { verticalPath } from "../data/verticals";

export function listingMetadata() {
  const title = "Industry Verticals";
  const description =
    "Industry-specific programs in cybersecurity, cloud, and AI — built for public sector, healthcare, retail, energy, financial services, and more.";

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(VERTICALS_PATH),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(VERTICALS_PATH),
      siteName: SITE_SHORT_NAME,
      images: [
        {
          url: absoluteUrl(VERTICALS_BANNER),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export function verticalMetadata(page) {
  const path = verticalPath(page.family, page.slug);

  const title = page.title;
  const description = page.description;

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: SITE_SHORT_NAME,
      images: page.banner
        ? [
            {
              url: absoluteUrl(page.banner),
              width: 1200,
              height: 630,
              alt: page.title,
            },
          ]
        : [],
    },
  };
}