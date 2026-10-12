import { SITE_NAME, absoluteUrl } from "@/lib/site";
import { SERVICE_BANNER } from "../constants/service.constants";
import { servicePath } from "../data/services";

export function servicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SPS Services",
    description:
      "Cybersecurity, cloud, and AI automation services for enterprise operations.",
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
    description: item.seoDescription,
    url: absoluteUrl(servicePath(category.slug, item.slug)),
    image: absoluteUrl(item.images?.[0] || SERVICE_BANNER),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
    areaServed: "US",
    serviceType: category.name,
  };
}