import PageBanner from "@/features/products/components/PageBanner";
import JsonLd from "@/features/products/seo/JsonLd";

import OverviewDetail from "@/features/spinnlabs/components/OverviewDetail";

import { breadcrumbJsonLd } from "@/features/products/seo/JsonLd";

import {
  SPINNLABS_IMAGES,
  SPINNLABS_OVERVIEW_PATH,
} from "@/features/spinnlabs/constants/spinnlabs.constants";

import { overviewPage } from "@/features/spinnlabs/data/spinnlabs";

import { overviewJsonLd } from "@/features/spinnlabs/seo/spinnlabsJsonLd";
import { overviewMetadata } from "@/features/spinnlabs/seo/spinnlabsMetadata";

import { SITE_PHONE_HREF } from "@/lib/site";

export const metadata = overviewMetadata();

export default function SpinnlabsOverviewPage() {
  return (
    <>
      <JsonLd
        data={[
          overviewJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            {
              name: "SPINN Labs",
              path: SPINNLABS_OVERVIEW_PATH,
            },
            {
              name: "Overview",
              path: SPINNLABS_OVERVIEW_PATH,
            },
          ]),
        ]}
      />

      <main className="page-content">
        <PageBanner
          title={overviewPage.title}
          description={overviewPage.description}
          kicker={overviewPage.kicker}
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
            { label: "Overview" },
          ]}
        />

        <OverviewDetail />
      </main>
    </>
  );
}