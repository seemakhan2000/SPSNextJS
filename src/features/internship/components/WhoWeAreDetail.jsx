import Link from "next/link";
import ProductCta from "@/features/products/components/ProductCta";
import InternshipNav from "./InternshipNav";
import { whoWeArePage } from "../data/internship";

function WhoWeArePurpose() {
  const { purpose } = whoWeArePage;

  return (
    <section id="our-purpose" className="scroll-mt-20 xl:py-17.5 md:py-10 py-7.5 bg-light">
      <div className="container">
        <div className="text-start max-w-250 mx-auto">
          <div className="md:flex h-full relative z-1 duration-200 hover:-translate-y-2 group">
            <div className="rounded-3xl 2xxl:min-w-105 lg:min-w-87.5 md:min-w-70 min-w-full 2xxl:w-105 lg:w-87.5 md:w-70 w-full 2xxl:min-h-90 lg:min-h-70 md:min-h-62.5 sm:min-h-80 min-h-62.5 overflow-hidden relative before:absolute before:top-0 before:-left-[75%] before:z-0 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
              <img
                src={purpose.image}
                alt={purpose.imageAlt}
                width="420"
                height="360"
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
            </div>
            <div className="relative p-4 sm:p-5 self-center shadow-lg border border-gray-100 rounded-xl md:-ml-15 md:mr-0 sm:mx-5 bg-white lg:my-6 md:my-5 sm:-mt-5 -mt-4 w-full">
              <h2 className="text-lg font-semibold mb-1">{purpose.title}</h2>
              <p className="mb-0">{purpose.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeAreValues() {
  return (
    <section
      id="our-value"
      className="scroll-mt-20 2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 relative before:absolute before:left-0 before:top-0 before:size-full before:bg-secondary before:opacity-90 bg-blend-luminosity bg-fixed overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/images/spsimg/banner/p1.webp)" }}
    >
      <div className="container relative z-1">
        <div className="section-head style-1 mb-12 text-center">
          <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold text-white capitalize relative mb-0">
            Our Values
          </h2>
        </div>
        <div className="row gap-y-8 g-6 justify-center">
          {whoWeArePage.values.map((value) => (
            <div key={value.title} className="lg:w-1/3 sm:w-1/2 w-full flex">
              <div className="relative rounded-2xl p-8 bg-white/5 backdrop-blur-[30px] text-center text-white h-full w-full min-h-[280px] flex flex-col items-center justify-center border border-white/10">
                <div className="mx-auto size-12.5 rounded-full flex items-center justify-center mb-4 bg-primary shrink-0">
                  <i className={value.icon}></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-white/70 text-2sm/normal font-extralight mb-0">{value.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeAreMission() {
  const { mission, future } = whoWeArePage;

  return (
    <section className="py-12.5 md:py-17.5 bg-white overflow-hidden">
      <div className="container">
        <div id="mission" className="row items-center scroll-mt-20">
          <div className="lg:w-1/2 w-full order-2 lg:order-1 mb-7.5 lg:mb-0 lg:pr-7.5">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-1 bg-primary inline-block"></span>
              {mission.title}
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 text-justify mb-0">
              {mission.text}{" "}
              <span className="text-primary font-semibold">{mission.cta}</span>
            </p>
          </div>
          <div className="lg:w-1/2 w-full order-1 lg:order-2 mb-7.5 lg:mb-0">
            <div className="relative overflow-hidden rounded-2xl shadow-20">
              <img
                src={mission.image}
                alt={mission.imageAlt}
                width="720"
                height="400"
                loading="lazy"
                decoding="async"
                className="w-full h-[360px] object-cover"
              />
            </div>
          </div>
        </div>

        <div id="our-future" className="row items-center mt-12.5 md:mt-17.5 scroll-mt-20">
          <div className="lg:w-1/2 w-full mb-7.5 lg:mb-0">
            <div className="relative overflow-hidden rounded-2xl shadow-20">
              <img
                src={future.image}
                alt={future.imageAlt}
                width="720"
                height="400"
                loading="lazy"
                decoding="async"
                className="w-full h-[360px] object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full mb-7.5 lg:mb-0 lg:pl-7.5">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-1 bg-primary inline-block"></span>
              {future.title}
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 text-justify mb-6">
              Our plan is to welcome{" "}
              <span className="font-bold text-gray-900">{future.lead}</span> to our program by
              2026. We strive to promote our program on a global level and gather the world’s best
              talent under one roof.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 text-justify">{future.extra}</p>
            <div className="mt-8">
              <Link
                href={future.href}
                className="inline-flex items-center text-primary font-bold hover:underline gap-2"
              >
                {future.linkLabel}
                <i className="feather icon-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeAreDifferent() {
  const { different } = whoWeArePage;

  return (
    <section
      id="what-makes-us-different"
      className="scroll-mt-20 bg-secondary py-20 px-6 text-center text-white"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-16 tracking-tight pb-4">
          {different.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {different.items.map((item) => (
            <div key={item.title} className="flex flex-col items-center group">
              <div className="size-32 md:size-36 flex items-center justify-center rounded-full border border-white/40 mb-6 transition-all duration-300 group-hover:border-white group-hover:bg-white/5">
                <i className={`${item.icon} text-3xl md:text-4xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-white/70 text-sm md:text-base mb-0">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeAreExperts() {
  const { experts } = whoWeArePage;

  return (
    <>
      <section id="meet-our-experts" className="scroll-mt-20 py-12.5 bg-white overflow-hidden">
        <div className="container">
          <div className="row items-center">
            <div className="lg:w-1/2 w-full order-2 lg:order-1 mb-7.5 lg:mb-0 lg:pr-7.5">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-1 bg-primary inline-block"></span>
                {experts.title}
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 text-justify mb-0">
                {experts.text}
              </p>
            </div>
            <div className="lg:w-1/2 w-full order-1 lg:order-2 mb-7.5 lg:mb-0">
              <div className="relative overflow-hidden rounded-2xl shadow-20">
                <img
                  src={experts.image}
                  alt={experts.imageAlt}
                  width="720"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[360px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="xl:py-17.5 md:py-10 py-7.5">
        <div className="container">
          <div className="row box-hover-wrapper text-start">
            {experts.people.map((person) => (
              <div key={person.name} className="xl:w-1/4 sm:w-1/2 w-full mb-7.5">
                <div className="rounded-xxl border border-primary/10 bg-light duration-200 group hover:bg-secondary">
                  <div className="flex items-center 2xl:gap-5 2xl:p-5 gap-3 p-3.75">
                    <div className="bg-white overflow-hidden relative rounded-full 2xl:size-20 2xl:min-w-20 size-15 min-w-15 duration-200 flex items-center justify-center">
                      <i className="feather icon-users text-4xl 2xl:text-5xl leading-none text-primary"></i>
                    </div>
                    <div className="relative">
                      <h3 className="text-lg mb-0.75 group-hover:text-white">{person.name}</h3>
                      <span className="text-2sm font-medium text-primary block duration-200 group-hover:text-white/50">
                        {person.role}
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

export default function WhoWeAreDetail() {
  const { cta } = whoWeArePage;

  return (
    <>
      <InternshipNav activeId="who-we-are" />
      <WhoWeArePurpose />
      <WhoWeAreValues />
      <WhoWeAreMission />
      <WhoWeAreDifferent />
      <WhoWeAreExperts />
      <ProductCta title={cta.title} text={cta.text} href={cta.href} label={cta.label} />
    </>
  );
}
