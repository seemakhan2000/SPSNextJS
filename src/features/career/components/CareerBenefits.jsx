
import { careerPage } from "../data/careerData";

export default function CareerBenefits() {
  const { benefitsIntro, benefits } = careerPage;

  return (
    <section id="benefits" className="scroll-mt-20 2xxl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10 bg-light">
      <div className="container">
        <div className="section-head style-1 mb-7.5 row items-end">
          <div className="xl:w-7/12 md:w-3/4">
            <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold capitalize">
              {benefitsIntro.title}
            </h2>
            <p>{benefitsIntro.text}</p>
          </div>
        </div>
        <div className="row box-hover-wrapper">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="xl:w-1/4 md:w-1/2 w-full mb-7.5">
              <div
                className={`benefit-card relative rounded-2xxl p-7.5 z-1 h-full flex flex-col after:absolute after:bg-white after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:duration-500 icon-bx-wraper [.box-hover.active]:after:bg-secondary box-hover group ${
                  index === 1 ? "active" : ""
                }`}
              >
                <div className="mb-auto">
                  <div className="relative size-15 block mb-7.5">
                    <span className="[.box-hover.active_&]:[--color-primary:#fff]">
                      <img
                        src={benefit.image}
                        alt={benefit.imageAlt}
                        width="60"
                        height="60"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  </div>
                  <div className="benefit-card-body">
                    <h3 className="text-xl font-bold mb-3 [.box-hover.active_&]:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-2sm font-light mb-0 [.box-hover.active_&]:text-white text-justify">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}