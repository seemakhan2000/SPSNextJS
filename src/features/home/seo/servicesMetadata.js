// features/services/servicesMetadata.js
import { SITE_NAME, SITE_SHORT_NAME, absoluteUrl } from "@/lib/site";
import { categoryPath, servicePath } from "./servicesUtils"; // Neeche banayenge

export const SERVICE_BANNER = "/assets/images/spsimg/banner/p1.webp";

export function listingMetadata() {
  const path = "/services";
  const title = "Our Services";
  const description = "Explore our comprehensive range of professional services designed to enhance security, streamline operations, and drive business success.";
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(path),
      images: [SERVICE_BANNER],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [SERVICE_BANNER],
    },
  };
}

export function categoryMetadata(category) {
  const path = categoryPath(category.slug);
  const title = category.name;
  const description = category.description;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(path),
      images: [category.image || SERVICE_BANNER],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [category.image || SERVICE_BANNER],
    },
  };
}

export function serviceMetadata(category, item) {
  const path = servicePath(category.slug, item.slug);
  const title = item.seoTitle || item.name;
  const description = item.seoDescription || item.summary;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(path),
      images: [item.images?.[0] || SERVICE_BANNER],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [item.images?.[0] || SERVICE_BANNER],
    },
  };
}