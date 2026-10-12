import AboutIntro from "./AboutIntro";
import AboutWhoWeAre from "./AboutWhoWeAre";
import AboutHighlights from "./AboutHighlights";
import AboutAwards from "./AboutAwards";
import AboutProcess from "./AboutProcess";
import AboutKnowledge from "./AboutKnowledge";

import ProductStats from "@/features/products/components/ProductStats";
import ProductCta from "@/features/products/components/ProductCta";

import { aboutPage } from "../data/aboutData";

export default function AboutDetail() {
  return (
    <>
      <AboutIntro />
      <AboutWhoWeAre />
      <AboutHighlights />
      <AboutAwards />
      <AboutProcess />
      <AboutKnowledge />

      <ProductStats items={aboutPage.stats} />

      <ProductCta
        title={aboutPage.cta.title}
        text={aboutPage.cta.text}
        href={aboutPage.cta.href}
        label={aboutPage.cta.label}
      />
    </>
  );
}