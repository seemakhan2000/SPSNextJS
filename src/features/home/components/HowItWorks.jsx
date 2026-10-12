import Link from "next/link";

import {
  howItWorksSteps,
  howItWorksStats,
} from "../data/HowItWorksData";

import {
  HOW_IT_WORKS_IMAGE,
  HOW_IT_WORKS_IMAGE_ALT,
  HOW_IT_WORKS_IMAGE_DIMENSIONS,
  HOW_IT_WORKS_APPOINTMENT_LINK,
} from "../constants/HowItWorks.constants";

export default function HowItWorks() {
  return (
    <>
      <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5">
        <div className="container">
          <div className="row content-wrapper style-3">
            <div className="xl:w-1/3 w-full mb-7.5 pe-xl-4">
              <div className="sm:mb-7.5 mb-5">
                <h2 className="xl:text-4xxl sm:text-3xxl text-2xxl font-bold capitalize mb-0">
                  How It Works
                </h2>

                <p className="sm:text-lg text-base leading-[1.6] font-light">
                  SPS helps organizations accelerate their Digital
                  Transformation journey by adopting Cloud, AI,
                  Cybersecurity, and other emerging technologies through a
                  structured, scalable approach.
                </p>
              </div>

              <div className="row">
                {howItWorksSteps.map((step) => (
                  <div
                    className="xl:w-full md:w-1/2 w-full"
                    key={step.title}
                  >
                    <div className="relative flex items-center gap-3.75 mb-5 group">
                      <div
                        className="size-15 flex items-center text-primary text-2xl justify-center bg-light rounded-full duration-500 group-hover:bg-primary group-hover:text-white relative before:absolute before:top-0 before:left-0 before:size-full before:bg-primary before:scale-0 before:opacity-10 before:rounded-full group-hover:before:scale-[1.3] after:absolute after:top-0 after:left-0 after:size-full after:bg-primary after:scale-0 after:opacity-5 after:rounded-full group-hover:after:scale-[1.6]"
                      >
                        <span>
                          <i className={`${step.icon} flex`}></i>
                        </span>
                      </div>

                      <div className="overflow-hidden">
                        <h3 className="text-xl mb-0 font-medium">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="xl:w-2/3 w-full">
              <div className="relative pb-10">
                <div className="sm:rounded-xxl rounded-lg lg:h-127.5 md:h-105 sm:h-80 h-62.5 bg-light relative overflow-hidden">
                  <img
                    loading="lazy"
                    src={HOW_IT_WORKS_IMAGE}
                    alt={HOW_IT_WORKS_IMAGE_ALT}
                    width={HOW_IT_WORKS_IMAGE_DIMENSIONS.width}
                    height={HOW_IT_WORKS_IMAGE_DIMENSIONS.height}
                    className="size-full object-cover"
                  />

                  <div
                    className="absolute bottom-0 left-0 bg-white pt-3.75 pr-3.75 rounded-se-2xxl before:bg-rounded-corner before:size-6.25 before:absolute before:bg-no-repeat before:bg-center before:bg-size-[100%] before:left-0 before:-top-6.25 after:bg-rounded-corner after:size-6.25 after:absolute after:bg-no-repeat after:bg-center after:bg-size-[100%] after:-right-6.25 after:bottom-0"
                  >
                    <Link
                      href={HOW_IT_WORKS_APPOINTMENT_LINK}
                      className="btn btn-lg btn-icon btn-secondary btn-shadow group"
                    >
                      Book Appointment

                      <span className="size-11 min-w-11 bg-white rounded-2lg text-heading inline-flex items-center justify-center -my-2.75 -mr-4.5 ml-3">
                        <i className="feather icon-arrow-right group-hover:animate-toRightFromLeft"></i>
                      </span>
                    </Link>
                  </div>
                </div>

                <div
                  className="md:absolute static bottom-0 2xxl:right-11.25 right-6.25 2xxl:max-w-120 2xxl:w-120 lg:max-w-112.5 lg:w-112.5 md:max-w-87.5 md:w-87.5 w-full max-md:mt-5 max-md:!transform-none"
                  data-speed="0.95"
                >
                  <div className="sm:p-6.25 p-4 rounded-2lg bg-primary">
                    <div className="row g-0">
                      {howItWorksStats.map((stat, index) => (
                        <div
                          key={stat.label}
                          className={
                            index === 0
                              ? "w-1/2 flex relative after:h-full after:w-px after:opacity-50 after:bg-linear-(--vertical-divider-gradient)"
                              : "w-1/2 flex"
                          }
                        >
                          <div className="m-auto text-center">
                            <span className="lg:text-5xl text-3xl font-bold text-white">
                              <span className="value">
                                {stat.value}
                              </span>
                              {stat.suffix}
                            </span>

                            <span className="sm:text-lg text-base font-light text-white block">
                              {stat.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}