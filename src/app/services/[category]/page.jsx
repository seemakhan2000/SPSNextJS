import { notFound } from "next/navigation";
import PageBanner from "@/features/products/components/PageBanner";
import CategoryProductCard from "@/features/products/components/CategoryProductCard";
import JsonLd from "@/features/products/seo/JsonLd";
import { breadcrumbJsonLd } from "@/features/products/data/products";
import {
  categoryPath,
  getCategory,
  getCategoryStaticParams,
  getServicesByCategory,
  servicePath,
} from "@/features/services/data/services";


import { categoryMetadata} from "@/features/services/seo/serviceMetadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return getCategoryStaticParams();
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const data = getCategory(category);
  if (!data) return { title: "Services" };
  return categoryMetadata(data);
}

export default async function ServiceCategoryPage({ params }) {
  const { category } = await params;
  const data = getCategory(category);
  if (!data) notFound();

  const items = getServicesByCategory(data.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: data.name, path: categoryPath(data.slug) },
        ])}
      />
      <main className="page-content">
        <PageBanner
          title={data.name}
          description="Discover our complete range of innovative, secure, and scalable technology solutions designed to support your business growth."
          kicker="OUR SERVICES"
          image={data.banner}
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
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
                  href={servicePath(data.slug, item.slug)}
                  exploreLabel="Explore Service"
                  columnClassName="xl:w-1/3 md:w-1/2 w-full mb-7.5"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
