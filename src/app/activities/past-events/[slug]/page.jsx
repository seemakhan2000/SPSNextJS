import { notFound } from "next/navigation";

import PastWebinarHero from "@/features/past-events/components/PastWebinarHero";
import PastWebinarDetail from "@/features/past-events/components/PastWebinarDetail";

import JsonLd from "@/features/products/seo/JsonLd";
import { breadcrumbJsonLd } from "@/features/products/seo/JsonLd";

import { PAST_EVENTS_PATH } from "@/features/past-events/constants/past-events.constants";

import {
  getPastWebinar,
  getPastWebinarStaticParams,
  pastWebinarPath,
} from "@/features/past-events/data/past-events";

import {
  pastWebinarJsonLd,
} from "@/features/past-events/seo/jsonLd";

import {
  pastWebinarMetadata,
} from "@/features/past-events/seo/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPastWebinarStaticParams();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const webinar = getPastWebinar(slug);

  if (!webinar) {
    return {
      title: "Past Webinar",
    };
  }

  return pastWebinarMetadata(webinar);
}

export default async function PastWebinarPage({ params }) {
  const { slug } = await params;

  const webinar = getPastWebinar(slug);

  if (!webinar) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          pastWebinarJsonLd(webinar),

          breadcrumbJsonLd([
            {
              name: "Home",
              path: "/",
            },
            {
              name: "Past Events",
              path: PAST_EVENTS_PATH,
            },
            {
              name: webinar.title,
              path: pastWebinarPath(webinar.slug),
            },
          ]),
        ]}
      />

      <main className="page-content">
        <PastWebinarHero webinar={webinar} />
        <PastWebinarDetail webinar={webinar} />
      </main>
    </>
  );
}