import ProductCta from "@/features/products/components/ProductCta";
import SpinnlabsHub from "../components/SpinnlabsHub";
import SpinnlabsSigs from "../components/SpinnlabsSigs";
import { industryPage } from "../data/spinnlabs";

function IndustryOutcomes() {
  const { outcomes } = industryPage;

  return (
    <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 bg-white">
      <div className="container">
        <div className="section-head style-1 sm:mb-12.5 mb-7.5 max-w-4xl">
          <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold leading-[1.3] mb-2.5">
            {outcomes.title}
          </h2>
          <p className="sm:text-lg text-base font-light leading-[1.7] text-bodycolor mb-0">
            {outcomes.text}
          </p>
        </div>
        <div className="row box-hover-wrapper">
          {outcomes.items.map((item, index) => (
            <div key={item.title} className="xl:w-1/3 md:w-1/2 w-full mb-7.5">
              <div
                className={`relative rounded-2xl h-full shadow-20 box-hover flex flex-col overflow-hidden bg-white p-8.75 ${
                  index === 0 ? "active" : ""
                }`}
              >
                <div className="bg-light size-15 rounded-2xxl flex justify-center items-center shadow-icon-bx mb-5">
                  <i className={`${item.icon} text-2xl text-secondary`}></i>
                </div>
                <h3 className="text-xl relative mb-2.5">{item.title}</h3>
                <p className="text-base font-medium leading-[1.7] mb-0">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function IndustryDetail() {
  return (
    <>
      <IndustryOutcomes />
      <SpinnlabsSigs sigs={industryPage.sigs} className="bg-light" />
      <SpinnlabsHub hub={industryPage.hub} />
      <ProductCta
        title={industryPage.cta.title}
        text={industryPage.cta.text}
        href={industryPage.cta.href}
        label={industryPage.cta.label}
      />
    </>
  );
}
