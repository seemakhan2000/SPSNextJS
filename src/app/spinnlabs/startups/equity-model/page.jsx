import StartupsBanner from "@/features/spinnlabs/components/StartupsBanner";
import EquityDetail from "@/features/spinnlabs/components/EquityDetail";

import JsonLd from "@/features/products/seo/JsonLd";

import { breadcrumbJsonLd } from "@/features/products/seo/JsonLd";

import {
  SPINNLABS_EQUITY_PATH,
  SPINNLABS_IMAGES,
  SPINNLABS_OVERVIEW_PATH,
  SPINNLABS_STARTUPS_PATH,
} from "@/features/spinnlabs/constants/spinnlabs.constants";

import { equityPage } from "@/features/spinnlabs/data/spinnlabs";

import { equityJsonLd } from "@/features/spinnlabs/seo/spinnlabsJsonLd";
import { equityMetadata } from "@/features/spinnlabs/seo/spinnlabsMetadata";

import { SITE_PHONE_HREF } from "@/lib/site";

export const metadata = equityMetadata();

export default function SpinnlabsEquityPage() {
  return (
    <>
      <JsonLd
        data={[
          equityJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            {
              name: "SPINN Labs",
              path: SPINNLABS_OVERVIEW_PATH,
            },
            {
              name: "Startups",
              path: SPINNLABS_STARTUPS_PATH,
            },
            {
              name: "Equity Model",
              path: SPINNLABS_EQUITY_PATH,
            },
          ]),
        ]}
      />

      <main className="page-content">
        <StartupsBanner
          title={equityPage.title}
          description={equityPage.bannerDescription}
          kicker={equityPage.kicker}
          image={SPINNLABS_IMAGES.banner}
          ctaLabel="Contact Us"
          ctaHref={SITE_PHONE_HREF}
          activeHref={SPINNLABS_EQUITY_PATH}
          crumbs={[
            { label: "Home", href: "/" },
            {
              label: "SPINN Labs",
              href: SPINNLABS_OVERVIEW_PATH,
            },
            {
              label: "Startups",
              href: SPINNLABS_STARTUPS_PATH,
            },
            { label: "Equity Model" },
          ]}
        />

        <EquityDetail />
      </main>
    </>
  );
}