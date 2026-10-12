
import VerticalsNav from "./VerticalsNav";
import VerticalsServiceTabs from "./VerticalsServiceTabs";
import VerticalSolutions from "./VerticalSolutions";
import Customers from "@/features/home/components/Customers";
import JsonLd from "@/features/products/seo/JsonLd";
import { breadcrumbJsonLd } from "@/features/products/data/products";
import { verticalPath } from "../data/verticals";
import { VERTICALS_PATH } from "../constants/verticals.constants";

import { verticalJsonLd } from "../seo/verticalsJsonLd";

const SECTION_SURFACES = ["bg-light", "bg-light-mist", "bg-light-ice"];

function StorySection({ story, className }) {
  return (
    <section className={`xl:py-17.5 md:py-10 py-7.5 ${className}`}>
      <div className="container">
        <div className="row">
          <div className="w-full">
            <div className="text-start max-w-450 mx-auto">
              <div className="md:flex gap-7.5">
                <div className="md:min-w-105 min-w-full min-h-62.5 md:w-105 w-full md:h-75 sm:h-87.5 h-62.5 max-md:mb-5 sm:rounded-3xl rounded-xxl relative overflow-hidden">
                  <img
                    loading="lazy"
                    src={story.image}
                    alt={story.alt}
                    width="700"
                    height="500"
                    className="size-full object-cover"
                  />
                </div>
                <div className="relative self-center">
                  <h2 className="lg:text-xxl text-[20px] text-justify">{story.title}</h2>
                  <p className="text-justify mb-0">{story.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductSection({ product, className }) {
  return (
    <div className={`xl:py-17.5 md:py-10 py-7.5 ${className}`}>
      <div className="container">
        <div className="row">
          <div className="w-full">
            <div className="flex flex-col justify-center items-center w-full mb-2.5">
              <h4 className="mb-1 text-2xl inline-block relative after:absolute after:top-1/2 after:-left-40 after:w-37.5 after:h-px after:bg-black after:opacity-15 before:absolute before:top-1/2 before:-right-40 before:w-37.5 before:h-px before:bg-black before:opacity-15">
                {product.heading}
              </h4>
              <h3 className="text-sm">{product.subtitle}</h3>
            </div>
            <div className="mb-5 text-start max-w-250 mx-auto">
              <div className="row">
                <div className="xl:w-full md:w-full mb-7.5">
                  <div className="relative z-1 lg:p-7.5 p-5 h-full duration-200 bg-white rounded-3xl md:flex group">
                    <div className="rounded-xxl xl:w-80 md:w-62.5 w-full xl:min-w-80 md:min-w-62.5 min-w-full md:h-full sm:h-62.5 h-50 relative overflow-hidden before:absolute before:top-0 before:-left-[75%] before:z-0 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
                      <img
                        src={product.image}
                        alt={product.alt}
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="md:p-5 md:ps-7.5 pt-6.25 self-center relative">
                      <p className="text-sm text-justify mb-0">{product.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HighlightsSection({ highlights, className }) {
  return (
    <section className={`xl:py-17.5 md:py-10 py-7.5 ${className}`}>
      <div className="container">
        <div className="text-center mb-7.5">
          <h2 className="lg:text-xxl text-[20px] font-bold mb-0">Challenges and Opportunities</h2>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7.5">
          {highlights.map((item) => (
            <article key={item.title} className="bg-white rounded-3xl p-7.5 shadow-sm">
              <h3 className="text-xl font-bold mb-2.5">{item.title}</h3>
              <p className="text-sm text-justify mb-0">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection({ cta }) {
  return (
    <section className="xl:py-17.5 md:py-10 py-7.5">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center bg-secondary rounded-3xl p-7.5 md:p-12.5">
          <h2 className="text-white lg:text-xxl text-[20px] font-bold mb-4">{cta.title}</h2>
          <p className="text-white/90 text-sm text-justify md:text-center mb-7.5">{cta.text}</p>
          <button type="button" data-open-appointment="" className="btn btn-primary">
            Schedule an Appointment
          </button>
        </div>
      </div>
    </section>
  );
}

export default function VerticalPage({ page }) {
  const path = verticalPath(page.family, page.slug);
  const hasSolutions = Boolean(page.solutions?.length);
  let surfaceIndex = 0;
  const nextSurface = () => SECTION_SURFACES[surfaceIndex++ % SECTION_SURFACES.length];

  return (
    <>
      <JsonLd
        data={[
          verticalJsonLd(page),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Verticals", path: VERTICALS_PATH },
            { name: page.title, path },
          ]),
        ]}
      />
      <main className="page-content">
        <div
          className="vertical-hero-banner relative z-1 w-full min-h-[22rem] bg-cover bg-center bg-secondary bg-white md:min-h-[26rem] lg:min-h-[28rem] before:absolute before:left-0 before:top-0 before:size-full before:bg-secondary before:opacity-70"
          style={{ backgroundImage: `url(${page.banner})` }}
        >
          <div
            className={`container relative z-1 vertical-hero${hasSolutions ? " vertical-hero--split" : ""}`}
          >
            <div className="vertical-hero__copy text-left">
              <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.18em] text-white/85">
                {page.kicker}
              </p>
              <h1 className="mb-4 text-[28px] font-bold capitalize leading-tight text-white md:text-xxl xl:text-5xl">
                {page.title}
              </h1>
              <p className="mb-0 text-sm leading-relaxed text-white text-justify">
                {page.description}
              </p>
            </div>
            {hasSolutions ? <VerticalSolutions solutions={page.solutions} /> : null}
          </div>
        </div>
        <VerticalsNav activeFamily={page.family} activeSlug={page.slug} />
        <VerticalsServiceTabs className={nextSurface()} />
        {page.product ? <ProductSection product={page.product} className={nextSurface()} /> : null}
        {page.stories?.map((story) => (
          <StorySection key={story.title} story={story} className={nextSurface()} />
        ))}
        {page.highlights?.length ? (
          <HighlightsSection highlights={page.highlights} className={nextSurface()} />
        ) : null}
        {page.cta ? <CtaSection cta={page.cta} /> : null}
        <Customers
          className={nextSurface()}
          headingClassName="2xxl:text-xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize mb-0"
        />
      </main>
    </>
  );
}
