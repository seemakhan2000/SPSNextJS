import Link from "next/link";
import ProductAccordion from "@/features/products/components/ProductAccordion";
import ProductCta from "@/features/products/components/ProductCta";
import InternshipNav from "./InternshipNav";
import { internshipPage } from "../data/internship";
import { INTERNSHIP_APPLY_PATH } from "../constants/internship.constants";

const checkItemClass =
  "w-full py-1.5 pe-1 ps-10 relative text-sm leading-tight before:absolute before:left-0 before:font-black before:content-['\\f109'] before:font-['flaticon'] before:text-primary before:size-7 before:leading-7 before:text-center before:bg-white before:rounded-full before:shadow-sm before:top-1.5";

const benefitItemClass =
  "sm:w-full w-full py-3.5 pe-1.25 ps-12.5 relative text-base before:absolute before:left-0 before:font-black before:content-['\\f109'] before:font-['flaticon'] before:text-primary before:size-10 before:leading-10 before:text-center before:bg-white before:rounded-full before:shadow-1 before:top-2";

function InternshipOverview() {
  const { overview } = internshipPage;

  return (
    <section id="overview" className="scroll-mt-20 2xl:py-12.5 md:py-12.5 sm:py-12.5 py-12.5 bg-light">
      <div className="container">
        <div className="row content-wrapper style-25 items-center">
          <div className="lg:w-1/2 w-full mb-3.75">
            <div className="lg:pr-18.75 max-lg:mb-5">
              <div className="flex items-center relative max-lg:h-130 max-sm:!h-87.5">
                <img
                  src={overview.image}
                  alt={overview.imageAlt}
                  width="640"
                  height="520"
                  className="size-full object-cover rounded-2xl"
                />
                <img
                  src={overview.overlayImage}
                  alt=""
                  aria-hidden="true"
                  width="220"
                  height="260"
                  className="xl:-ml-32.5 -ml-25 xl:w-55 w-37.5 xl:h-65 h-45 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="sm:mb-7.5 mb-5">
              <h2 className="2xxl:text-xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize">
                {overview.title}
              </h2>
              <p className="xl:text-lg text-base font-normal text-justify md:mb-12 mb-6">
                <strong className="text-secondary font-semibold">{overview.lead}</strong> {overview.text}
              </p>
            </div>
            <h3 className="text-primary pb-3 mb-5 text-lg relative before:absolute before:bottom-0 before:left-0 before:right-0 before:h-px before:bg-size-[10px_1px] before:bg-repeat-x before:bg-linear-(--seprator-gradient)">
              {overview.benefitsTitle}
            </h3>
            <ul className="flex flex-col text-secondary font-medium mb-7.5">
              {overview.benefits.map((benefit) => (
                <li key={benefit.title} className={benefitItemClass}>
                  {benefit.title} <span className="font-normal">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function InternshipPhases() {
  const { phases } = internshipPage;

  return (
    <section id="phases-of-internship" className="scroll-mt-20 2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5">
      <div className="container">
        <div className="section-head style-1 mb-7.5 row items-end">
          <div className="sm:w-full">
            <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold capitalize mb-0 text-center">
              {phases.title}
            </h2>
          </div>
        </div>
        <div className="row box-hover-wrapper">
          {phases.items.map((phase, index) => (
            <div key={phase.title} className="xl:w-1/4 sm:w-1/2 w-full max-xl:mb-3.75">
              <div
                className={`box-hover group/box relative rounded-2xxl duration-300 ${
                  index === 0 ? "active [.box-hover.active]:bg-light" : ""
                }`}
              >
                <div className="bg-light z-2 relative overflow-hidden rounded-2xxl border-4 border-transparent duration-300 [.box-hover.active_&]:bg-secondary group-hover/box:bg-secondary">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={phase.image}
                    alt={phase.title}
                    width="300"
                    height="355"
                    className="w-full"
                  />
                  <span className="btn btn-primary !absolute -bottom-15 left-2.5 right-2.5 flex justify-center duration-300 [.box-hover.active_&]:bottom-2.5 group-hover/box:bottom-2.5">
                    <i className="feather icon-calendar mr-1.25"></i> {phase.title}
                  </span>
                </div>
                <div className="bg-light flex justify-between items-center -mt-5 relative z-1 gap-2.5 pt-8.75 px-2 pb-3.75 rounded-b-2xxl duration-300 [.box-hover.active_&]:bg-secondary group-hover/box:bg-secondary">
                  <span className="text-md font-normal text-secondary text-justify transition-colors duration-300 [.box-hover.active_&]:text-white group-hover/box:text-white">
                    {phase.text}
                  </span>
                </div>
                <ul className="flex gap-5 justify-center py-3 px-3-75 rounded-b-2xxl -translate-y-12.5 bg-light relative z-0 duration-300 [.box-hover.active_&]:translate-y-0 group-hover/box:translate-y-0">
                  <li>
                    <p className="text-secondary">{phase.phase}</p>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InternshipAreas() {
  const { areas } = internshipPage;

  return (
    <section id="areas-of-internship" className="scroll-mt-20 xl:py-17.5 md:py-5 py-7.5 bg-light">
      <div className="container">
        <div className="sm:mb-7.5 mb-5 text-center">
          <h2 className="text-2xl inline-block mb-0 relative after:absolute after:top-1/2 after:-left-40 after:w-37.5 after:h-px after:bg-black after:opacity-15 before:absolute before:top-1/2 before:-right-40 before:w-37.5 before:h-px before:bg-black before:opacity-15">
            {areas.title}
          </h2>
          <p className="mt-2">{areas.text}</p>
        </div>
        <div className="row">
          {areas.items.map((area) => (
            <div key={area.title} id={area.id} className="xl:w-1/3 md:w-1/2 w-full scroll-mt-20">
              <div className="relative z-1 lg:p-7.5 p-5 h-auto duration-200 bg-white rounded-3xl group transition-all">
                <div className="rounded-xxl mb-4 sm:h-62.5 h-50 relative overflow-hidden before:absolute before:top-0 before:-left-[75%] before:z-0 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
                  <img
                    src={area.image}
                    alt={area.title}
                    width="480"
                    height="250"
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                </div>
                <div className="relative">
                  <div className="mb-1.5">
                    <ul className="flex flex-wrap items-center">
                      <li className="bg-[rgba(var(--primary-rgb),0.1)] text-primary rounded-xxl font-medium text-sm py-2 pr-5 pl-8 leading-[1.4] relative inline-flex items-center after:absolute after:size-2.5 after:rounded-full after:bg-primary after:left-3.5 after:top-1/2 after:-translate-y-1/2">
                        {area.title}
                      </li>
                    </ul>
                  </div>
                  <p className="text-lg leading-snug m-0">{area.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-center">{areas.footer}</p>
      </div>
    </section>
  );
}

function InternshipHighlights() {
  return (
    <section className="xl:py-17.5 md:py-10 py-7.5 bg-secondary">
      <div className="container">
        <div className="mb-5 text-start max-w-250 mx-auto">
          {internshipPage.highlights.map((block) => (
            <div
              key={block.id}
              id={block.id}
              className="w-full mb-7.5 scroll-mt-20"
            >
              <div className="md:flex h-full relative z-1 duration-200 hover:-translate-y-2 group">
                <div className="rounded-3xl 2xxl:min-w-105 lg:min-w-87.5 md:min-w-70 min-w-full 2xxl:w-105 lg:w-87.5 md:w-70 w-full 2xxl:min-h-90 lg:min-h-70 md:min-h-62.5 sm:min-h-80 min-h-62.5 overflow-hidden relative before:absolute before:top-0 before:-left-[75%] before:z-0 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
                  <img
                    src={block.image}
                    alt={block.imageAlt}
                    width="420"
                    height="360"
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                </div>
                <div className="relative p-4 sm:p-5 self-center shadow-lg border border-gray-100 rounded-xl md:-ml-15 md:mr-0 sm:mx-5 bg-white lg:my-6 md:my-5 sm:-mt-5 -mt-4 w-full">
                  <h3 className="text-lg font-semibold mb-1">{block.title}</h3>
                  {block.subtitle ? (
                    <p className="text-md font-semibold mb-1">{block.subtitle}</p>
                  ) : null}
                  {block.intro ? <p>{block.intro}</p> : null}
                  <ul className="flex flex-col text-secondary font-medium">
                    {block.items.map((item) => (
                      <li key={item.title || item.text} className={checkItemClass}>
                        {item.title ? <span className="inline-block">{item.title}</span> : null}{" "}
                        <span className="font-normal text-sm block sm:inline">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  {block.closingTitle ? (
                    <p className="text-md font-semibold mb-1">{block.closingTitle}</p>
                  ) : null}
                  {block.closing ? <p>{block.closing}</p> : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InternshipProcess() {
  const { process, processCards } = internshipPage;

  return (
    <>
      <section id="application-process" className="scroll-mt-20 py-7.5 bg-light">
        <div className="container">
          <div className="bg-white py-7.5 sm:rounded-3xl rounded-xxl">
            <div className="mx-auto grid max-w-7xl gap-5 px-6 lg:px-8 grid-cols-1 md:grid-cols-2 md:gap-20">
              <div className="max-w-full flex flex-col justify-center">
                <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                  {process.title}
                </h2>
                <p className="mt-6 text-lg/8 text-gray-600 text-justify">{process.text}</p>
                <div className="mt-6">
                  <Link href={INTERNSHIP_APPLY_PATH} className="btn btn-primary group">
                    Apply Now
                    <span className="size-11 min-w-11 bg-white rounded-2lg text-heading inline-flex items-center justify-center -my-2.75 md:-mr-5 ml-3 -mr-4 max-sm:hidden">
                      <i className="feather icon-arrow-right group-hover:animate-toRightFromLeft"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <ul className="flex flex-col gap-y-20 relative w-full">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-100 -z-10 hidden sm:block"></div>
                {process.steps.map((step) => (
                  <li key={step.title} className="relative w-full">
                    <div className="flex items-start gap-x-8 w-full">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm border border-primary/20">
                        <i className={`${step.icon} text-xl`}></i>
                      </div>
                      <div className="pt-2 flex-1">
                        <h3 className="text-xl font-bold tracking-tight text-heading mb-3">
                          {step.title}
                        </h3>
                        <p className="text-base text-secondary w-full leading-relaxed">{step.text}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-17.5 pb-2">
        <div className="container">
          <div className="row box-hover-wrapper text-start">
            {processCards.map((card) => (
              <div key={card.title} className="xl:w-1/4 sm:w-1/2 w-full mb-7.5 flex">
                <div className="rounded-xxl border border-primary/10 bg-light duration-200 group hover:bg-secondary flex flex-col h-full p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white overflow-hidden relative rounded-full size-15 min-w-15 2xl:size-20 2xl:min-w-20 flex items-center justify-center">
                      <img
                        src={card.image}
                        alt=""
                        width="48"
                        height="48"
                        loading="lazy"
                        decoding="async"
                        className="max-h-[60%] max-w-[60%] object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-1 group-hover:text-white">{card.title}</h3>
                      <span className="text-2sm font-medium text-primary block group-hover:text-white/50">
                        {card.text}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function InternshipFaqs() {
  return (
    <section id="faqs" className="scroll-mt-20 pb-5">
      <div className="container">
        <div className="sm:mb-7.5 mb-5">
          <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold capitalize text-center">
            Frequently Asked Questions
          </h2>
        </div>
        <ProductAccordion items={internshipPage.faqs} heading="" />
      </div>
    </section>
  );
}

export default function InternshipDetail() {
  const { cta } = internshipPage;

  return (
    <>
      <InternshipNav />
      <InternshipOverview />
      <InternshipPhases />
      <InternshipAreas />
      <InternshipHighlights />
      <InternshipProcess />
      <InternshipFaqs />
      <ProductCta title={cta.title} text={cta.text} href={cta.href} label={cta.label} />
    </>
  );
}
