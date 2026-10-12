import PageBanner from "@/features/products/components/PageBanner";
import JsonLd from "@/features/products/seo/JsonLd";

import AcademiaDetail from "@/features/spinnlabs/components/AcademiaDetail";

import { breadcrumbJsonLd } from "@/features/products/data/products";

import {
  SPINNLABS_ACADEMIA_PATH,
  SPINNLABS_IMAGES,
  SPINNLABS_OVERVIEW_PATH,
} from "@/features/spinnlabs/constants/spinnlabs.constants";

import { academiaPage } from "@/features/spinnlabs/data/spinnlabs";

import { academiaJsonLd } from "@/features/spinnlabs/seo/spinnlabsJsonLd";
import { academiaMetadata } from "@/features/spinnlabs/seo/spinnlabsMetadata";

import { SITE_PHONE_HREF } from "@/lib/site";

export const metadata = academiaMetadata();

export default function SpinnlabsAcademiaPage() {
  return (
    <>
      <JsonLd
        data={[
          academiaJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            {
              name: "SPINN Labs",
              path: SPINNLABS_OVERVIEW_PATH,
            },
            {
              name: "Academia",
              path: SPINNLABS_ACADEMIA_PATH,
            },
          ]),
        ]}
      />

      <main className="page-content">
        <PageBanner
          title={academiaPage.title}
          description={academiaPage.description}
          kicker={academiaPage.kicker}
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
            { label: "Academia" },
          ]}
        />

        <AcademiaDetail />
      </main>
    </>
  );
}