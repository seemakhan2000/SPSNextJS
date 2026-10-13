import PageBanner from "@/features/products/components/PageBanner";
import PastEventsList from "@/features/past-events/components/PastEventsList";

import JsonLd from "@/features/products/seo/JsonLd";
import { breadcrumbJsonLd } from "@/features/products/seo/JsonLd";

import {
  PAST_EVENTS_BANNER,
  PAST_EVENTS_PATH,
} from "@/features/past-events/constants/past-events.constants";

import { pastEventsPage } from "@/features/past-events/data/past-events";

import { pastEventsJsonLd } from "@/features/past-events/seo/jsonLd";
import { pastEventsMetadata } from "@/features/past-events/seo/metadata";

import { SITE_PHONE_HREF } from "@/lib/site";

export const metadata = pastEventsMetadata();

export default function PastEventsPage() {
  return (
    <>
      <JsonLd
        data={[
          pastEventsJsonLd(),

          breadcrumbJsonLd([
            {
              name: "Home",
              path: "/",
            },
            {
              name: pastEventsPage.title,
              path: PAST_EVENTS_PATH,
            },
          ]),
        ]}
      />

      <main className="page-content">
        <PageBanner
          title={pastEventsPage.headline}
          description={pastEventsPage.description}
          kicker={pastEventsPage.kicker}
          image={PAST_EVENTS_BANNER}
          overlay
          ctaLabel="Contact Us"
          ctaHref={SITE_PHONE_HREF}
          crumbs={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: pastEventsPage.headline,
            },
          ]}
        />

        <PastEventsList />
      </main>
    </>
  );
}