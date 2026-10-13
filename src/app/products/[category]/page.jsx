
import { notFound } from "next/navigation";

import PageBanner from "@/features/products/components/PageBanner";
import CategoryProductCard from "@/features/products/components/CategoryProductCard";
import BmsDetail from "@/features/products/components/BmsDetail";

import JsonLd, {
  breadcrumbJsonLd,
  productJsonLd,
} from "@/features/products/seo/JsonLd";

import { categoryMetadata } from "@/features/products/seo/Metadata";

import {
  categoryPath,
  getCategory,
  getCategoryStaticParams,
  getProductsByCategory,
} from "@/features/products/data/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return getCategoryStaticParams();
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const data = getCategory(category);
  if (!data) return { title: "Products" };
  return categoryMetadata(data);
}


export default async function ProductCategoryPage({ params }) {
  const { category } = await params;
  const data = getCategory(category);
  if (!data) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: data.name, path: categoryPath(data.slug) },
  ];

  if (data.layout === "content") {
    return (
      <>
        <JsonLd
          data={[
            productJsonLd(data, {
              name: data.name,
              slug: data.slug,
              seoDescription: data.description,
              images: [data.image],
            }),
            breadcrumbJsonLd(crumbs),
          ]}
        />
        <main className="page-content">
          <PageBanner
            title={data.name}
            description={data.description}
            kicker="OUR SOLUTIONS"
            image={data.banner}
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: data.shortName },
            ]}
          />
          <BmsDetail category={data} />
        </main>
      </>
    );
  }

  const items = getProductsByCategory(data.slug);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <main className="page-content">
        <PageBanner
          title={data.name}
          description="Discover our complete range of innovative, secure, and scalable technology solutions designed to support your business growth."
          kicker="OUR SOLUTIONS"
          image={data.banner}
          crumbs={[
            { label: "Home", href: "/" },
            { label: data.shortName },
          ]}
        />
        <section className="2xxl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10 2xxl:pb-17.5 md:pb-10 pb-5">
          <div className="container">
            <div className="section-head style-3 row items-end">
              <div className="mb-7.5">
                <h2 className="2xxl:text-5xxl xl:text-xxl lg:text-4xl sm:text-3xxl text-2xxl font-bold">
                  {data.heading}
                </h2>
                <p className="xl:text-lg sm:text-base text-sm font-light mb-0">
                  {data.description}
                </p>
              </div>
            </div>
            <div className="row box-hover-wrapper">
              {items.map((item) => (
                <CategoryProductCard
                  key={item.slug}
                  product={item}
                  categorySlug={data.slug}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
