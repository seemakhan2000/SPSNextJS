import PageBanner from "@/features/products/components/PageBanner";
import JsonLd from "@/features/products/seo/JsonLd";

import { breadcrumbJsonLd } from "@/features/products/seo/JsonLd";

import CareerDetail from "@/features/career/components/CareerDetail";

import {
  CAREER_BANNER,
  CAREER_PATH,
} from "@/features/career/constants/career.constants";

import { careerPage } from "@/features/career/data/careerData";

import { careerMetadata } from "@/features/career/seo/careerMetadata";
import { careerJsonLd } from "@/features/career/seo/careerJsonLd";

export const metadata = careerMetadata();

export default function CareerPage() {
  return (
    <>
      <JsonLd
        data={[
          careerJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Careers", path: CAREER_PATH },
          ]),
        ]}
      />

      <main className="page-content">
        <PageBanner
          title={careerPage.title}
          description={careerPage.description}
          kicker={careerPage.kicker}
          image={CAREER_BANNER}
          overlay
          titleClassName="2xxl:text-6xl xl:text-6xxl md:text-xxl text-[32px] font-bold mb-2.5 text-white capitalize"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Career" },
          ]}
        />

        <CareerDetail />
      </main>
    </>
  );
}