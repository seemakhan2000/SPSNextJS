import Link from "next/link";

import PageBanner from "@/features/products/components/PageBanner";

import InternshipNav from "@/features/internship/components/InternshipNav";
import InternshipApplyForm from "@/features/internship/components/InternshipApplyForm";

import JsonLd from "@/features/products/seo/JsonLd";
import { breadcrumbJsonLd } from "@/features/products/data/products";

import {
  INTERNSHIP_APPLY_PATH,
  INTERNSHIP_IMAGES,
  INTERNSHIP_PATH,
} from "@/features/internship/constants/internship.constants";

import { applyPage } from "@/features/internship/data/internship-apply";

import { applyJsonLd } from "@/features/internship/seo/intershipJsonLd";
import { applyMetadata } from "@/features/internship/seo/internshipMetadata";

export const metadata = applyMetadata();

export default function InternshipApplyPage() {
  return (
    <>
      <JsonLd
        data={[
          applyJsonLd(),

          breadcrumbJsonLd([
            {
              name: "Home",
              path: "/",
            },
            {
              name: "Internship Program 2026",
              path: INTERNSHIP_PATH,
            },
            {
              name: "Apply",
              path: INTERNSHIP_APPLY_PATH,
            },
          ]),
        ]}
      />

      <main className="page-content">
        <PageBanner
          title={applyPage.headline}
          description={applyPage.description}
          kicker={applyPage.kicker}
          image={INTERNSHIP_IMAGES.banner}
          overlay
          ctaLabel={applyPage.applyLabel}
          ctaHref={INTERNSHIP_APPLY_PATH}
          titleClassName="2xxl:text-4xl xl:text-3xxl md:text-xxl text-[26px] font-bold mb-2.5 text-white capitalize"
          crumbs={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Internship Program 2026",
              href: INTERNSHIP_PATH,
            },
            {
              label: "Apply",
            },
          ]}
        >
          <div className="mt-6">
            <Link
              href="#internship-path"
              className="btn btn-primary me-1.25 mb-2.5 group"
            >
              Choose your track

              <span className="size-11 min-w-11 bg-white rounded-2lg text-heading inline-flex items-center justify-center -my-2.75 md:-mr-5 ml-3 -mr-4 max-sm:hidden">
                <i className="feather icon-arrow-right group-hover:animate-toRightFromLeft"></i>
              </span>
            </Link>
          </div>
        </PageBanner>

        <InternshipNav activeId="apply" />

        <InternshipApplyForm />
      </main>
    </>
  );
}