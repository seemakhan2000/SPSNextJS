import RoundtableHero from "@/features/roundtables/components/RoundtableHero";
import RoundtableDetail from "@/features/roundtables/components/RoundtableDetail";

import JsonLd from "@/features/products/seo/JsonLd";

import { breadcrumbJsonLd } from "@/features/products/data/products";

import { ROUNDTABLE_PATH } from "@/features/roundtables/constants/roundtable.constants";

import { roundtableJsonLd } from "@/features/roundtables/seo/roundtableJsonLd";
import { roundtableMetadata } from "@/features/roundtables/seo/roundtableMetadata";

export const metadata = roundtableMetadata();

export default function RoundtablesPage() {
  return (
    <>
      <JsonLd
        data={[
          roundtableJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            {
              name: "VISO Roundtable Series",
              path: ROUNDTABLE_PATH,
            },
          ]),
        ]}
      />

      <main className="page-content">
        <RoundtableHero />
        <RoundtableDetail />
      </main>
    </>
  );
}