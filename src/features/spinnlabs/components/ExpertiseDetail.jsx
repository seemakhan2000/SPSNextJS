import Link from "next/link";
import ProductCta from "@/features/products/components/ProductCta";
import SpinnlabsHub from "../components/SpinnlabsHub";
import { expertisePage } from "../data/spinnlabs";

function ExpertiseApart() {
  const { apart } = expertisePage;

  return (
    <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 bg-light">
      <div className="container">
        <div className="section-head style-1 sm:mb-12.5 mb-7.5 max-w-4xl">
          <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold leading-[1.3] mb-2.5">
            {apart.title}
          </h2>
          <p className="sm:text-lg text-base font-light leading-[1.7] text-bodycolor mb-0">
            {apart.text}
          </p>
        </div>
        <div className="row box-hover-wrapper">
          {apart.items.map((item, index) => (
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

function ExpertiseJoin() {
  const { join } = expertisePage;

  return (
    <section className="xxl:pt-25 xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 bg-white">
      <div className="container">
        <div className="row items-center">
          <div className="lg:w-1/2 w-full mb-7.5">
            <div className="relative overflow-hidden sm:rounded-3xl rounded-xxl">
              <img
                src={join.image}
                alt={join.imageAlt}
                width="720"
                height="480"
                loading="lazy"
                decoding="async"
                className="w-full"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full mb-7.5 lg:pl-7.5">
            <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold leading-[1.3] mb-4">
              {join.title}
            </h2>
            {join.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="sm:text-lg text-base font-light leading-[1.7] text-bodycolor mb-4 last:mb-7.5"
              >
                {paragraph}
              </p>
            ))}
            <Link
              href={join.href}
              className="btn btn-lg btn-primary btn-rounded btn-hover2 btn-shadow"
            >
              {join.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ExpertiseDetail() {
  return (
    <>
      <ExpertiseJoin />
      <ExpertiseApart />
      <SpinnlabsHub hub={expertisePage.hub} titleClassName="text-white xl:text-xxl sm:text-3xxl text-2xxl font-bold leading-[1.25] mb-3" />
      <ProductCta
        title={expertisePage.cta.title}
        text={expertisePage.cta.text}
        href={expertisePage.cta.href}
        label={expertisePage.cta.label}
      />
    </>
  );
}
