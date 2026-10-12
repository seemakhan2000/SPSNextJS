import PageBanner from "@/features/products/components/PageBanner";
import JsonLd from "@/features/products/seo/JsonLd";

import ExpertiseDetail from "@/features/spinnlabs/components/ExpertiseDetail";

import { breadcrumbJsonLd } from "@/features/products/data/products";

import {
  SPINNLABS_EXPERTISE_PATH,
  SPINNLABS_IMAGES,
  SPINNLABS_OVERVIEW_PATH,
} from "@/features/spinnlabs/constants/spinnlabs.constants";

import { expertisePage } from "@/features/spinnlabs/data/spinnlabs";

import { expertiseJsonLd } from "@/features/spinnlabs/seo/spinnlabsJsonLd";
import { expertiseMetadata } from "@/features/spinnlabs/seo/spinnlabsMetadata";

import { SITE_PHONE_HREF } from "@/lib/site";

export const metadata = expertiseMetadata();

export default function SpinnlabsExpertisePage() {
  return (
    <>
      <JsonLd
        data={[
          expertiseJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            {
              name: "SPINN Labs",
              path: SPINNLABS_OVERVIEW_PATH,
            },
            {
              name: "Centers of Expertise",
              path: SPINNLABS_EXPERTISE_PATH,
            },
          ]),
        ]}
      />

      <main className="page-content">
        <PageBanner
          title={expertisePage.title}
          description={expertisePage.description}
          kicker={expertisePage.kicker}
          image={SPINNLABS_IMAGES.expertiseBanner}
          overlay
          ctaLabel="Contact Us"
          ctaHref={SITE_PHONE_HREF}
          crumbs={[
            { label: "Home", href: "/" },
            {
              label: "SPINN Labs",
              href: SPINNLABS_OVERVIEW_PATH,
            },
            { label: "Centers of Expertise" },
          ]}
        />

        <ExpertiseDetail />
      </main>
    </>
  );
}