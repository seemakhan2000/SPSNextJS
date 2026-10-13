
import JsonLd from "@/features/products/seo/JsonLd";

import ContractsDetail from "@/features/contracts/components/ContractsDetail";

import {
  VITA_BANNER,
  VITA_PATH,
} from "@/features/contracts/constants/contracts.constants";

import { vitaPage } from "@/features/contracts/data/contractsData";

import { vitaJsonLd } from "@/features/contracts/seo/contractsJsonLd";
import { vitaMetadata } from "@/features/contracts/seo/contractsMetadata";

import { breadcrumbJsonLd } from "@/features/products/seo/JsonLd";

export const metadata = vitaMetadata();

export default function VitaPage() {
  return (
    <>
      <JsonLd
        data={[
          vitaJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contracts", path: VITA_PATH },
            { name: "VITA Pricing", path: VITA_PATH },
          ]),
        ]}
      />

      <main className="page-content">
        <div
          className="2xxl:pt-1 2xxl:pb-46 lg:pt-21.5 lg:pb-21.5 sm:pt-20 sm:pb-20 pt-10 pb-19.5 bg-cover bg-center relative z-1 w-full before:absolute before:left-0 before:top-0 before:size-full before:bg-gradient-to-r before:from-black/70 before:to-black/50 before:content-['']"
          style={{ backgroundImage: `url(${VITA_BANNER})` }}
        >
          <div className="p-12 relative z-1">
            <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold text-yellow-400 leading-tight drop-shadow-lg uppercase tracking-tight text-left">
              {vitaPage.title}
            </h1>

            <div className="flex flex-col items-start gap-2.5 mt-4">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium rounded-full bg-white text-heading cursor-default pointer-events-none">
                <span className="size-1.5 rounded-full bg-primary"></span>
                VITA Contract Number: {vitaPage.contractNumber}
              </span>

              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium rounded-full bg-white text-heading cursor-default pointer-events-none">
                <span className="size-1.5 rounded-full bg-secondary"></span>
                Contract Title: {vitaPage.contractTitle}
              </span>
            </div>
          </div>
        </div>

        <ContractsDetail />
      </main>
    </>
  );
}

