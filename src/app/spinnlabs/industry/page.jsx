import PageBanner from "@/features/products/components/PageBanner";
import JsonLd from "@/features/products/seo/JsonLd";

import IndustryDetail from "@/features/spinnlabs/components/IndustryDetail";

import { breadcrumbJsonLd } from "@/features/products/data/products";

import {
  SPINNLABS_IMAGES,
  SPINNLABS_INDUSTRY_PATH,
  SPINNLABS_OVERVIEW_PATH,
} from "@/features/spinnlabs/constants/spinnlabs.constants";

import { industryPage } from "@/features/spinnlabs/data/spinnlabs";

import { industryJsonLd } from "@/features/spinnlabs/seo/spinnlabsJsonLd";
import { industryMetadata } from "@/features/spinnlabs/seo/spinnlabsMetadata";

import { SITE_PHONE_HREF } from "@/lib/site";

export const metadata = industryMetadata();

export default function SpinnlabsIndustryPage() {
  return (
    <>
      <JsonLd
        data={[
          industryJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            {
              name: "SPINN Labs",
              path: SPINNLABS_OVERVIEW_PATH,
            },
            {
              name: "Industry",
              path: SPINNLABS_INDUSTRY_PATH,
            },
          ]),
        ]}
      />

      <main className="page-content">
        <PageBanner
          title={industryPage.title}
          description={industryPage.description}
          kicker={industryPage.kicker}
          image={SPINNLABS_IMAGES.banner}
          overlay
          ctaLabel="Contact Us"
          ctaHref={SITE_PHONE_HREF}
          crumbs={[
            { label: "Home", href: "/" },
            {
              label: "SPINN Labs",
              href: SPINNLABS_OVERVIEW_PATH,
            },
            { label: "Industry" },
          ]}
        />

        <IndustryDetail />
      </main>
    </>
  );
}