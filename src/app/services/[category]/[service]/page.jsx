import { notFound } from "next/navigation";
import PageBanner from "@/features/products/components/PageBanner";
import ServiceDetail from "@/features/services/components/ServiceDetail";
import JsonLd from "@/features/products/seo/JsonLd";
import { breadcrumbJsonLd } from "@/features/products/seo/JsonLd";
import {
  categoryPath,
  getCategory,
  getService,
  getServiceStaticParams,
  servicePath,
} from "@/features/services/data/services";

import { serviceJsonLd} from "@/features/services/seo/servicesJsonLd";
import {serviceMetadata} from "@/features/services/seo/serviceMetadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return getServiceStaticParams();
}

export async function generateMetadata({ params }) {
  const { category, service } = await params;
  const categoryData = getCategory(category);
  const serviceData = getService(category, service);
  if (!categoryData || !serviceData) return { title: "Services" };
  return serviceMetadata(categoryData, serviceData);
}

export default async function ServiceLearnMorePage({ params }) {
  const { category, service } = await params;
  const categoryData = getCategory(category);
  const serviceData = getService(category, service);
  if (!categoryData || !serviceData) notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(categoryData, serviceData),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: categoryData.name, path: categoryPath(categoryData.slug) },
            {
              name: serviceData.name,
              path: servicePath(categoryData.slug, serviceData.slug),
            },
          ]),
        ]}
      />
      <main className="page-content">
        <PageBanner
          title={serviceData.name}
          description={serviceData.summary}
          kicker="OUR SERVICES"
          image={categoryData.banner}
          titleClassName="2xxl:text-4xl xl:text-xxl md:text-3xxl text-[32px] font-bold mb-2.5 text-white capitalize"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            {
              label: categoryData.shortName,
              href: categoryPath(categoryData.slug),
            },
          ]}
        />
        <ServiceDetail category={categoryData} service={serviceData} />
      </main>
    </>
  );
}
