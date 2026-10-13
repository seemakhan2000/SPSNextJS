import PageBanner from "@/features/products/components/PageBanner";
import FamilyExplorer from "@/features/products/components/FamilyExplorer";
import WhyChoose from "@/features/products/components/FamilyExplorer";
import ProductStats from "@/features/products/components/ProductStats";
import ProductCta from "@/features/products/components/ProductCta";
import JsonLd, {
  breadcrumbJsonLd as productBreadcrumbJsonLd,
} from "@/features/products/seo/JsonLd";
import {
  serviceFamilies,
  whyChooseItems,
  serviceStats,
  getCategory,
  categoryPath,
} from "@/features/services/data/services";

import { servicesJsonLd } from "@/features/services/seo/servicesJsonLd";
import {listingMetadata } from "@/features/services/seo/serviceMetadata";

export const metadata = listingMetadata();

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          servicesJsonLd(),
          productBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <main className="page-content">
        <PageBanner
          title="Our Services"
          description="Explore our comprehensive range of professional services designed to enhance security, streamline operations, and drive business success."
          kicker="OUR SERVICES"
          titleClassName="xxl:text-8xl xl:text-6xxl md:text-xxl text-[32px] font-bold mb-2.5 text-white capitalize"
          crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        />
        <FamilyExplorer
          families={serviceFamilies}
          getCategoryFn={getCategory}
          categoryPathFn={categoryPath}
          label="Our Services"
          heading="Comprehensive services to enhance security, streamline operations, and drive growth."
          viewAllHref="/services#service-families"
          viewAllLabel="View All Services"
          sectionId="service-families"
          navLabel="Service families"
        />
        <WhyChoose
          items={whyChooseItems}
          title="Why Choose Our Services"
          imageAlt="Services overview"
          experienceLine="Service Excellence"
        />
        <ProductStats items={serviceStats} />
        <ProductCta
          title="Ready to talk about these services?"
          text="Talk with SPS about the right mix of cybersecurity, cloud, and AI services for your organization."
        />
      </main>
    </>
  );
}
