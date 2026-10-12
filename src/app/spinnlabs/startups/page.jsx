import StartupsBanner from "@/features/spinnlabs/components/StartupsBanner";
import StartupsDetail from "@/features/spinnlabs/components/StartupsDetail";

import JsonLd from "@/features/products/seo/JsonLd";

import { breadcrumbJsonLd } from "@/features/products/data/products";

import {
  SPINNLABS_IMAGES,
  SPINNLABS_OVERVIEW_PATH,
  SPINNLABS_STARTUPS_PATH,
} from "@/features/spinnlabs/constants/spinnlabs.constants";

import { startupsPage } from "@/features/spinnlabs/data/spinnlabs";

import { startupsJsonLd } from "@/features/spinnlabs/seo/spinnlabsJsonLd";
import { startupsMetadata } from "@/features/spinnlabs/seo/spinnlabsMetadata";

import { SITE_PHONE_HREF } from "@/lib/site";

export const metadata = startupsMetadata();

export default function SpinnlabsStartupsPage() {
  return (
    <>
      <JsonLd
        data={[
          startupsJsonLd(),
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
          ]),
        ]}
      />

      <main className="page-content">
        <StartupsBanner
          title={startupsPage.title}
          description={startupsPage.bannerDescription}
          kicker={startupsPage.kicker}
          image={SPINNLABS_IMAGES.banner}
          ctaLabel="Contact Us"
          ctaHref={SITE_PHONE_HREF}
          crumbs={[
            { label: "Home", href: "/" },
            {
              label: "SPINN Labs",
              href: SPINNLABS_OVERVIEW_PATH,
            },
            { label: "Startups" },
          ]}
        />

        <StartupsDetail />
      </main>
    </>
  );
}