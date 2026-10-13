import PageBanner from "@/features/products/components/PageBanner";
import JsonLd from "@/features/products/seo/JsonLd";

import { breadcrumbJsonLd } from "@/features/products/seo/JsonLd";

import AboutDetail from "@/features/about/components/AboutDetail";

import {
  ABOUT_BANNER,
  ABOUT_PATH,
} from "@/features/about/constants/about.constants";

import { aboutPage } from "@/features/about/data/aboutData";

import { aboutMetadata } from "@/features/about/seo/aboutMetadata";
import { aboutJsonLd } from "@/features/about/seo/aboutJsonLd";

import { SITE_PHONE_HREF } from "@/lib/site";

export const metadata = aboutMetadata();

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          aboutJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About Us", path: ABOUT_PATH },
          ]),
        ]}
      />

      <main className="page-content">
        <PageBanner
          title={aboutPage.title}
          description={aboutPage.description}
          kicker={aboutPage.kicker}
          image={ABOUT_BANNER}
          overlay
          ctaLabel="Contact Us"
          ctaHref={SITE_PHONE_HREF}
          crumbs={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]}
        />

        <AboutDetail />
      </main>
    </>
  );
}