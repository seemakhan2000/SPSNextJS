import StartupsBanner from "@/features/spinnlabs/components/StartupsBanner";
import ExecuteDetail from "@/features/spinnlabs/components/ExecuteDetail";

import JsonLd from "@/features/products/seo/JsonLd";

import { breadcrumbJsonLd } from "@/features/products/seo/JsonLd";

import {
  SPINNLABS_EXECUTE_PATH,
  SPINNLABS_IMAGES,
  SPINNLABS_OVERVIEW_PATH,
  SPINNLABS_STARTUPS_PATH,
} from "@/features/spinnlabs/constants/spinnlabs.constants";

import { executePage } from "@/features/spinnlabs/data/spinnlabs";

import { executeJsonLd } from "@/features/spinnlabs/seo/spinnlabsJsonLd";
import { executeMetadata } from "@/features/spinnlabs/seo/spinnlabsMetadata";

import { SITE_PHONE_HREF } from "@/lib/site";

export const metadata = executeMetadata();

export default function SpinnlabsExecutePage() {
  return (
    <>
      <JsonLd
        data={[
          executeJsonLd(),
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
              name: "Execute Plan",
              path: SPINNLABS_EXECUTE_PATH,
            },
          ]),
        ]}
      />

      <main className="page-content">
        <StartupsBanner
          title={executePage.title}
          description={executePage.bannerDescription}
          kicker={executePage.kicker}
          image={SPINNLABS_IMAGES.banner}
          ctaLabel="Contact Us"
          ctaHref={SITE_PHONE_HREF}
          activeHref={SPINNLABS_EXECUTE_PATH}
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
            { label: "Execute Plan" },
          ]}
        />

        <ExecuteDetail />
      </main>
    </>
  );
}