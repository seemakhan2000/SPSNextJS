import Link from "next/link";
import PageBanner from "@/features/products/components/PageBanner";
import WhoWeAreDetail from "@/features/internship/components/WhoWeAreDetail";
import JsonLd from "@/features/products/seo/JsonLd";
import { breadcrumbJsonLd } from "@/features/products/data/products";
import {
  INTERNSHIP_APPLY_PATH,
  INTERNSHIP_BANNER,
  INTERNSHIP_PATH,
  INTERNSHIP_WHO_WE_ARE_PATH,
  whoWeAreJsonLd,
  whoWeAreMetadata,
  whoWeArePage,
} from "@/features/internship/data/internship";

export const metadata = whoWeAreMetadata();

export default function InternshipWhoWeArePage() {
  return (
    <>
      <JsonLd
        data={[
          whoWeAreJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Internship Program 2026", path: INTERNSHIP_PATH },
            { name: "Who We Are", path: INTERNSHIP_WHO_WE_ARE_PATH },
          ]),
        ]}
      />
      <main className="page-content">
        <PageBanner
          title={whoWeArePage.headline}
          description={whoWeArePage.description}
          kicker={whoWeArePage.kicker}
         image={INTERNSHIP_IMAGES.banner}
          overlay
          ctaLabel={whoWeArePage.applyLabel}
          ctaHref={INTERNSHIP_APPLY_PATH}
          titleClassName="2xxl:text-4xl xl:text-3xxl md:text-xxl text-[26px] font-bold mb-2.5 text-white capitalize"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Internship Program 2026", href: INTERNSHIP_PATH },
            { label: "Who We Are" },
          ]}
        >
          <div className="mt-6">
            <Link href={INTERNSHIP_APPLY_PATH} className="btn btn-primary me-1.25 mb-2.5 group">
              {whoWeArePage.applyLabel}
              <span className="size-11 min-w-11 bg-white rounded-2lg text-heading inline-flex items-center justify-center -my-2.75 md:-mr-5 ml-3 -mr-4 max-sm:hidden">
                <i className="feather icon-arrow-right group-hover:animate-toRightFromLeft"></i>
              </span>
            </Link>
          </div>
        </PageBanner>
        <WhoWeAreDetail />
      </main>
    </>
  );
}
