// features/services/servicesJsonLd.js
import { SITE_NAME, absoluteUrl } from "@/lib/site";
import { categoryPath, servicePath } from "./servicesUtils";

export function servicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SPS Services",
    description: "Cybersecurity, cloud, and AI automation services for enterprise operations.",
    url: absoluteUrl("/services"),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };
}

export function serviceJsonLd(category, item) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.name,
    description: item.seoDescription || item.summary,
    url: absoluteUrl(servicePath(category.slug, item.slug)),
    image: absoluteUrl(item.images?.[0] || "/assets/images/spsimg/banner/p1.webp"),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
    areaServed: "US",
    serviceType: category.name,
  };
}

export function sitemapEntries() {
  const now = new Date();
  const weekly = "weekly";
  const monthly = "monthly";

  // Note: Yahan aapko `categories` aur `services` import karne honge
  // Filhal main isko placeholder rakh raha hoon, aap ise apne data se connect kar sakte hain.
  return [
    {
      url: absoluteUrl("/services"),
      lastModified: now,
      changeFrequency: weekly,
      priority: 0.9,
    },
  ];
}