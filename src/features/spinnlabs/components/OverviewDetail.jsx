import Customers from "@/features/home/components/Customers";
import ProductCta from "@/features/products/components/ProductCta";
import SpinnlabsHub from "../components/SpinnlabsHub";
import { overviewPage } from "../data/spinnlabs";

function OverviewBenefits() {
  const { benefits } = overviewPage;

  return (
    <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 bg-white">
      <div className="container">
        <div className="section-head style-1 sm:mb-12.5 mb-7.5 max-w-4xl">
          <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold leading-[1.3] mb-2.5">
            {benefits.title}
          </h2>
          <p className="sm:text-lg text-base font-light leading-[1.7] text-bodycolor mb-0">
            {benefits.text}
          </p>
        </div>
        <div className="row box-hover-wrapper">
          {benefits.items.map((item, index) => (
            <div key={item.title} className="xl:w-1/4 md:w-1/2 w-full mb-7.5">
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

function OverviewStories() {
  return (
    <>
      {overviewPage.stories.map((story) => (
        <section
          key={story.title}
          className={`2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 ${
            story.tone === "light" ? "bg-light" : "bg-white"
          }`}
        >
          <div className="container">
            <div className="row items-center">
              <div
                className={`lg:w-1/2 w-full mb-7.5 ${
                  story.reverse ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative overflow-hidden sm:rounded-3xl rounded-xxl">
                  <img
                    src={story.image}
                    alt={story.imageAlt}
                    width="720"
                    height="480"
                    loading="lazy"
                    decoding="async"
                    className="w-full"
                  />
                </div>
              </div>
              <div
                className={`lg:w-1/2 w-full mb-7.5 ${
                  story.reverse ? "lg:order-2 lg:pl-7.5" : "lg:order-1 lg:pr-7.5"
                }`}
              >
                <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold leading-[1.3] mb-4">
                  {story.title}
                </h2>
                {story.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="sm:text-lg text-base font-light leading-[1.7] text-bodycolor mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

function OverviewProcess() {
  const { processImage } = overviewPage;

  return (
    <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 bg-white">
      <div className="container">
        <div className="section-head style-1 sm:mb-10 mb-7.5 max-w-4xl">
          <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold leading-[1.3] mb-2.5">
            {processImage.title}
          </h2>
          <p className="sm:text-lg text-base font-light leading-[1.7] text-bodycolor mb-0">
            {processImage.text}
          </p>
        </div>
        <div className="overflow-hidden sm:rounded-3xl rounded-xxl bg-light">
          <img
            src={processImage.image}
            alt={processImage.imageAlt}
            width="1200"
            height="640"
            loading="lazy"
            decoding="async"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default function OverviewDetail() {
  return (
    <>
      <OverviewBenefits />
      <OverviewStories />
      <SpinnlabsHub hub={overviewPage.hub} />
      <OverviewProcess />
      <Customers headingClassName="2xxl:text-xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize mb-0" />
      <ProductCta
        title={overviewPage.cta.title}
        text={overviewPage.cta.text}
        href={overviewPage.cta.href}
        label={overviewPage.cta.label}
      />
    </>
  );
}
