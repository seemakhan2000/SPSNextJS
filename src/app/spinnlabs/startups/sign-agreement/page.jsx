import StartupsBanner from "@/features/spinnlabs/components/StartupsBanner";
import AgreementDetail from "@/features/spinnlabs/components/AgreementDetail";

import JsonLd from "@/features/products/seo/JsonLd";

import { breadcrumbJsonLd } from "@/features/products/seo/JsonLd";

import {
  SPINNLABS_AGREEMENT_PATH,
  SPINNLABS_IMAGES,
  SPINNLABS_OVERVIEW_PATH,
  SPINNLABS_STARTUPS_PATH,
} from "@/features/spinnlabs/constants/spinnlabs.constants";

import { agreementPage } from "@/features/spinnlabs/data/spinnlabs";

import { agreementJsonLd } from "@/features/spinnlabs/seo/spinnlabsJsonLd";
import { agreementMetadata } from "@/features/spinnlabs/seo/spinnlabsMetadata";

import { SITE_PHONE_HREF } from "@/lib/site";

export const metadata = agreementMetadata();

export default function SpinnlabsAgreementPage() {
  return (
    <>
      <JsonLd
        data={[
          agreementJsonLd(),
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
              name: "Sign Agreement",
              path: SPINNLABS_AGREEMENT_PATH,
            },
          ]),
        ]}
      />

      <main className="page-content">
        <StartupsBanner
          title={agreementPage.title}
          description={agreementPage.bannerDescription}
          kicker={agreementPage.kicker}
          image={SPINNLABS_IMAGES.banner}
          ctaLabel="Contact Us"
          ctaHref={SITE_PHONE_HREF}
          activeHref={SPINNLABS_AGREEMENT_PATH}
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
            { label: "Sign Agreement" },
          ]}
        />

        <AgreementDetail />
      </main>
    </>
  );
}