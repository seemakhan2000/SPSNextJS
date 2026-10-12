import Link from "next/link";
import PageBanner from "@/features/products/components/PageBanner";
import CareerFieldsDetail from "@/features/internship/components/CareerFieldsDetail";
import JsonLd from "@/features/products/seo/JsonLd";
import { breadcrumbJsonLd } from "@/features/products/data/products";
import {
  INTERNSHIP_APPLY_PATH,
  INTERNSHIP_BANNER,
  INTERNSHIP_CAREER_FIELDS_PATH,
  INTERNSHIP_PATH,
  careerFieldsPage,
} from "@/features/internship/data/internship";

import {
  careerFieldsMetadata,
} from "@/features/internship/seo/internshipMetadata";

import {
  careerFieldsJsonLd,
} from "@/features/internship/seo/intershipJsonLd";


export const metadata = careerFieldsMetadata();

export default function InternshipCareerFieldsPage() {
  return (
    <>
      <JsonLd
        data={[
          careerFieldsJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Internship Program 2026", path: INTERNSHIP_PATH },
            { name: "Career Fields", path: INTERNSHIP_CAREER_FIELDS_PATH },
          ]),
        ]}
      />
      <main className="page-content">
        <PageBanner
          title={careerFieldsPage.headline}
          description={careerFieldsPage.description}
          kicker={careerFieldsPage.kicker}
         image={INTERNSHIP_BANNER}
          overlay
          ctaLabel={careerFieldsPage.applyLabel}
          ctaHref={INTERNSHIP_APPLY_PATH}
          titleClassName="2xxl:text-4xl xl:text-3xxl md:text-xxl text-[26px] font-bold mb-2.5 text-white capitalize"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Internship Program 2026", href: INTERNSHIP_PATH },
            { label: "Career Fields" },
          ]}
        >
          <div className="mt-6">
            <Link href={INTERNSHIP_APPLY_PATH} className="btn btn-primary me-1.25 mb-2.5 group">
              {careerFieldsPage.applyLabel}
              <span className="size-11 min-w-11 bg-white rounded-2lg text-heading inline-flex items-center justify-center -my-2.75 md:-mr-5 ml-3 -mr-4 max-sm:hidden">
                <i className="feather icon-arrow-right group-hover:animate-toRightFromLeft"></i>
              </span>
            </Link>
          </div>
        </PageBanner>
        <CareerFieldsDetail />
      </main>
    </>
  );
}
