import { notFound } from "next/navigation";
import PageBanner from "@/features/products/components/PageBanner";
import ProductDetail from "@/features/products/components/ProductDetail";
import JsonLd from "@/features/products/seo/JsonLd";
import {
  breadcrumbJsonLd,
  categoryPath,
  getCategory,
  getProduct,
  getProductStaticParams,
  productJsonLd,
  productMetadata,
  productPath,
} from "@/features/products/data/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return getProductStaticParams();
}

export async function generateMetadata({ params }) {
  const { category, product } = await params;
  const categoryData = getCategory(category);
  const productData = getProduct(category, product);
  if (!categoryData || !productData) return { title: "Products" };
  return productMetadata(categoryData, productData);
}

export default async function ProductLearnMorePage({ params }) {
  const { category, product } = await params;
  const categoryData = getCategory(category);
  const productData = getProduct(category, product);
  if (!categoryData || !productData) notFound();

  return (
    <>
      <JsonLd
        data={[
          productJsonLd(categoryData, productData),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: categoryData.name, path: categoryPath(categoryData.slug) },
            {
              name: productData.name,
              path: productPath(categoryData.slug, productData.slug),
            },
          ]),
        ]}
      />
      <main className="page-content">
        <PageBanner
          title={`${categoryData.shortName} ${productData.name}`}
          description={productData.summary}
          kicker="OUR SOLUTIONS"
          image={categoryData.banner}
          titleClassName="xxl:text-8xl xl:text-xxl md:text-3xxl text-[32px] font-bold mb-2.5 text-white capitalize"
          crumbs={[
            { label: "Home", href: "/" },
            {
              label: categoryData.shortName,
              href: categoryPath(categoryData.slug),
            },
          ]}
        />
        <ProductDetail category={categoryData} product={productData} />
      </main>
    </>
  );
}
