import ProductCta from "@/features/products/components/ProductCta";
import SpinnlabsHub from "../components/SpinnlabsHub";
import SpinnlabsSigs from "../components/SpinnlabsSigs";
import { academiaPage } from "../data/spinnlabs";

export default function AcademiaDetail() {
  return (
    <>
      <SpinnlabsSigs sigs={academiaPage.sigs} />
      <SpinnlabsHub hub={academiaPage.hub} />
      <ProductCta
        title={academiaPage.cta.title}
        text={academiaPage.cta.text}
        href={academiaPage.cta.href}
        label={academiaPage.cta.label}
      />
    </>
  );
}
