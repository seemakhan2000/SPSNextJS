import StartupsBanner from "@/features/spinnlabs/components/StartupsBanner";
import PlanDetail from "@/features/spinnlabs/components/PlanDetail";

import JsonLd from "@/features/products/seo/JsonLd";

import { breadcrumbJsonLd } from "@/features/products/data/products";

import {
  SPINNLABS_IMAGES,
  SPINNLABS_OVERVIEW_PATH,
  SPINNLABS_PLAN_PATH,
  SPINNLABS_STARTUPS_PATH,
} from "@/features/spinnlabs/constants/spinnlabs.constants";

import { planPage } from "@/features/spinnlabs/data/spinnlabs";

import { planJsonLd } from "@/features/spinnlabs/seo/spinnlabsJsonLd";
import { planMetadata } from "@/features/spinnlabs/seo/spinnlabsMetadata";

import { SITE_PHONE_HREF } from "@/lib/site";

export const metadata = planMetadata();

export default function SpinnlabsPlanPage() {
  return (
    <>
      <JsonLd
        data={[
          planJsonLd(),
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
              name: "Create Plan",
              path: SPINNLABS_PLAN_PATH,
            },
          ]),
        ]}
      />

      <main className="page-content">
        <StartupsBanner
          title={planPage.title}
          description={planPage.bannerDescription}
          kicker={planPage.kicker}
          image={SPINNLABS_IMAGES.banner}
          ctaLabel="Contact Us"
          ctaHref={SITE_PHONE_HREF}
          activeHref={SPINNLABS_PLAN_PATH}
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
            { label: "Create Plan" },
          ]}
        />

        <PlanDetail />
      </main>
    </>
  );
}