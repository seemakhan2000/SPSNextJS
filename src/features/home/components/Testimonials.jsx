import { testimonialsResults } from "../data/TestimonialsData";

import {
  TESTIMONIALS_BACKGROUND,
  TESTIMONIALS_IMAGE,
  TESTIMONIALS_IMAGE_ALT,
  TESTIMONIALS_IMAGE_DIMENSIONS,
  TESTIMONIALS_CHIPS,
} from "../constants/Testimonials.constants";

export default function Testimonials() {
  return (
    <section
      className="sps-results clearfix pt-12.5 relative before:absolute before:left-0 before:top-0 before:size-full before:bg-secondary before:opacity-90 bg-primary bg-blend-multiply overflow-hidden bg-position-[right_center] bg-cover"
      style={{
        backgroundImage: `url(${TESTIMONIALS_BACKGROUND})`,
      }}
    >
      <div className="container relative z-1">
        <div className="row max-xl:flex-col-reverse items-center">
          <div className="xl:w-1/2 w-full">
            <div className="relative xl:w-162.5 sm:w-137.5 w-full max-xl:mx-auto max-xl:mt-7.5">
              <div className="xl:pr-37.5 lg:pr-20 sm:pr-12.5 relative overflow-hidden">
                <img
                  loading="lazy"
                  src={TESTIMONIALS_IMAGE}
                  alt={TESTIMONIALS_IMAGE_ALT}
                  width={TESTIMONIALS_IMAGE_DIMENSIONS.width}
                  height={TESTIMONIALS_IMAGE_DIMENSIONS.height}
                  decoding="async"
                  className="w-full sps-results__media"
                />
              </div>

              <div className="xxl:w-162.5 sm:w-150 w-87.5 aspect-square absolute -z-1 sm:-bottom-25 bottom-0 sm:-left-15 -left-2.5">
                <span className="w-4/5 rounded-full block absolute top-1/2 left-1/2 aspect-square border-2 border-white/10 animate-circleWrapper"></span>

                <span className="w-full rounded-full block absolute top-1/2 left-1/2 aspect-square border-2 border-white/10 animate-circleWrapper"></span>
              </div>

              <div className="sps-results__chip sps-results__chip--left max-sm:hidden">
                <strong>{TESTIMONIALS_CHIPS.left.value}</strong>
                <span>{TESTIMONIALS_CHIPS.left.label}</span>
              </div>

              <div className="sps-results__chip sps-results__chip--right max-sm:hidden">
                <strong>{TESTIMONIALS_CHIPS.right.value}</strong>
                <span>{TESTIMONIALS_CHIPS.right.label}</span>
              </div>
            </div>
          </div>

          <div className="xl:w-1/2 lg:w-5/6 w-full self-center mb-7.5">
            <div className="sps-results__eyebrow">
              <i
                className="fa-solid fa-minus"
                aria-hidden="true"
              ></i>

              In production
            </div>

            <h2 className="xl:text-4xxl sm:text-3xxl text-2xxl font-bold text-white mb-4">
              Innovation that holds up in the real world.
            </h2>

            <p className="sps-results__lead">
              SPS builds cloud, AI, and cybersecurity into live operations —
              so the change shows up as cost, speed, and security, not as a
              slide deck.
            </p>

            <div className="sps-results__list">
              {testimonialsResults.map((item) => (
                <article
                  className="sps-results__item"
                  key={item.title}
                >
                  <span
                    className="sps-results__icon"
                    aria-hidden="true"
                  >
                    <i className={item.icon}></i>
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                  <div className="sps-results__metric">
                    <strong>{item.metric}</strong>
                    <span>{item.metricLabel}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}