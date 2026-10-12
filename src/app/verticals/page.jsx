import PageBanner from "@/features/products/components/PageBanner";
import ProductCta from "@/features/products/components/ProductCta";
import JsonLd from "@/features/products/seo/JsonLd";
import VerticalsNav from "@/features/verticals/components/VerticalsNav";
import VerticalsHub from "@/features/verticals/components/VerticalsHub";
import { breadcrumbJsonLd } from "@/features/products/data/products";

import {
  VERTICALS_BANNER,
  VERTICALS_PATH,
} from "@/features/verticals/data/verticals";

import { listingMetadata } from "@/features/verticals/seo/verticalsMetadata";
import { verticalsListingJsonLd } from "@/features/verticals/seo/verticalsJsonLd";

export const metadata = listingMetadata();

export default function VerticalsIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          verticalsListingJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Verticals", path: VERTICALS_PATH },
          ]),
        ]}
      />
      <main className="page-content">
        <PageBanner
          title="Industry Verticals"
          description="Industry-specific programs in cybersecurity, cloud, and AI — built for public sector, healthcare, retail, energy, financial services, and more."
          kicker="INDUSTRY VERTICALS"
          overlay
          image={VERTICALS_BANNER}
          crumbs={[{ label: "Home", href: "/" }, { label: "Verticals" }]}
        />
        <VerticalsNav />
        <VerticalsHub />
        <ProductCta
          title="Ready to talk about your industry?"
          text="Talk with SPS about the right mix of cybersecurity, cloud, and AI for the sector you serve."
        />
      </main>
    </>
  );
}
