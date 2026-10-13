import { SITE_NAME, SITE_SHORT_NAME, absoluteUrl } from "@/lib/site";
import { PRODUCT_BANNER } from "../constants/product.constants";
import { categoryPath, productPath, getFamily } from "../data/products";


export default function JsonLd({ data }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}


export function productsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SPS Products",
    description:
      "SPS, IBM, and partner technology products for automation, identity, security, cloud, and sustainability.",
    url: absoluteUrl("/products"),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function productJsonLd(category, item) {
  const path =
    category.layout === "content"
      ? categoryPath(category.slug)
      : productPath(category.slug, item.slug);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: item.name,
    description: item.seoDescription,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: absoluteUrl(path),
    image: absoluteUrl(item.images[0] || category.image || PRODUCT_BANNER),
    brand: {
      "@type": "Brand",
      name: getFamily(category.family)?.name || SITE_SHORT_NAME,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(path),
    },
  };
}