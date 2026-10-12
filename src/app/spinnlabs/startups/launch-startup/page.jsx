import StartupsBanner from "@/features/spinnlabs/components/StartupsBanner";
import LaunchDetail from "@/features/spinnlabs/components/LaunchDetail";

import JsonLd from "@/features/products/seo/JsonLd";

import { breadcrumbJsonLd } from "@/features/products/data/products";

import {
  SPINNLABS_IMAGES,
  SPINNLABS_LAUNCH_PATH,
  SPINNLABS_OVERVIEW_PATH,
  SPINNLABS_STARTUPS_PATH,
} from "@/features/spinnlabs/constants/spinnlabs.constants";

import { launchPage } from "@/features/spinnlabs/data/spinnlabs";

import { launchJsonLd } from "@/features/spinnlabs/seo/spinnlabsJsonLd";
import { launchMetadata } from "@/features/spinnlabs/seo/spinnlabsMetadata";

import { SITE_PHONE_HREF } from "@/lib/site";

export const metadata = launchMetadata();

export default function SpinnlabsLaunchPage() {
  return (
    <>
      <JsonLd
        data={[
          launchJsonLd(),
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
              name: "Launch Startup",
              path: SPINNLABS_LAUNCH_PATH,
            },
          ]),
        ]}
      />

      <main className="page-content">
        <StartupsBanner
          title={launchPage.title}
          description={launchPage.bannerDescription}
          kicker={launchPage.kicker}
          image={SPINNLABS_IMAGES.banner}
          ctaLabel="Contact Us"
          ctaHref={SITE_PHONE_HREF}
          activeHref={SPINNLABS_LAUNCH_PATH}
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
            { label: "Launch Startup" },
          ]}
        />

        <LaunchDetail />
      </main>
    </>
  );
}