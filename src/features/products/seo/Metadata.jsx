import { SITE_SHORT_NAME, absoluteUrl } from "@/lib/site";
import { PRODUCT_BANNER } from "../constants/product.constants";
import { categoryPath, productPath } from "../data/products";

export function listingMetadata() {
  const path = "/products";
  const title = "Our Products";
  const description =
    "Discover our complete range of innovative, secure, and scalable technology solutions designed to support your business growth.";
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(path),
      images: [PRODUCT_BANNER],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [PRODUCT_BANNER],
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
      images: [category.image || PRODUCT_BANNER],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [category.image || PRODUCT_BANNER],
    },
  };
}

export function productMetadata(category, item) {
  const path = productPath(category.slug, item.slug);
  const title = item.seoTitle;
  const description = item.seoDescription;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(path),
      images: [item.images[0] || PRODUCT_BANNER],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [item.images[0] || PRODUCT_BANNER],
    },
  };
}