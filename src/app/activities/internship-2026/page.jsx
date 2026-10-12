import Link from "next/link";
import PageBanner from "@/features/products/components/PageBanner";
import InternshipDetail from "@/features/internship/components/InternshipDetail";
import JsonLd from "@/features/products/seo/JsonLd";
import { breadcrumbJsonLd } from "@/features/products/data/products";
import {
  INTERNSHIP_APPLY_PATH,
  INTERNSHIP_PATH,
  INTERNSHIP_IMAGES,
} from "@/features/internship/constants/internship.constants";

import { internshipPage } from "@/features/internship/data/internship";

import { internshipJsonLd } from "@/features/internship/seo/intershipJsonLd";
import { internshipMetadata } from "@/features/internship/seo/internshipMetadata";

export const metadata = internshipMetadata();

export default function InternshipPage() {
  return (
    <>
      <JsonLd
        data={[
          internshipJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Internship Program 2026", path: INTERNSHIP_PATH },
          ]),
        ]}
      />
      <main className="page-content">
        <PageBanner
          title={internshipPage.headline}
          description={internshipPage.description}
          kicker={internshipPage.kicker}
        image={INTERNSHIP_IMAGES.banner}
          overlay
          ctaLabel={internshipPage.applyLabel}
          ctaHref={INTERNSHIP_APPLY_PATH}
          titleClassName="2xxl:text-4xl xl:text-3xxl md:text-xxl text-[26px] font-bold mb-2.5 text-white capitalize"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Internship Program 2026" },
          ]}
        >
          <div className="mt-6">
            <Link href={INTERNSHIP_APPLY_PATH} className="btn btn-primary me-1.25 mb-2.5 group">
              {internshipPage.applyLabel}
              <span className="size-11 min-w-11 bg-white rounded-2lg text-heading inline-flex items-center justify-center -my-2.75 md:-mr-5 ml-3 -mr-4 max-sm:hidden">
                <i className="feather icon-arrow-right group-hover:animate-toRightFromLeft"></i>
              </span>
            </Link>
          </div>
        </PageBanner>
        <InternshipDetail />
      </main>
    </>
  );
}
