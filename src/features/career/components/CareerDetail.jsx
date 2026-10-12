import ProductCta from "@/features/products/components/ProductCta";

import CareerJumpNav from "./CareerJumpNav";
import CareerJobs from "./CareerJobs";
import CareerValues from "./CareerValues";
import CareerDiversity from "./CareerDiversity";
import CareerBenefits from "./CareerBenefits";

import { careerPage } from "../data/careerData";

export default function CareerDetail() {
  return (
    <>
      <CareerJumpNav />
      <CareerJobs />
      <CareerValues />
      <CareerDiversity />
      <CareerBenefits />

      <ProductCta
        title={careerPage.cta.title}
        text={careerPage.cta.text}
        href={careerPage.cta.href}
        label={careerPage.cta.label}
      />
    </>
  );
}