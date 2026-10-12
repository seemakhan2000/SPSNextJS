import { verticals } from "../data/VerticalsData";

import {
  VERTICALS_KICKER,
  VERTICALS_TITLE,
} from "../constants/Verticals.constants";

function VerticalItem({ children }) {
  return (
    <li className="sps-vertical-item">
      <i className="flaticon-check" aria-hidden="true"></i>
      <span>{children}</span>
    </li>
  );
}

export default function Verticals() {
  return (
    <>
      <section className="2xxl:py-25 xl:py-17.5 md:py-12.5 sm:py-10 py-7.5 bg-light bg-cover">
        <div className="container">
          <div
            className="mb-7.5 text-center"
            data-wow-delay="0.2s"
            data-wow-duration="0.8s"
          >
            <span className="text-primary font-semibold leading-5 uppercase text-lg inline-flex gap-1.25 items-center">
              {VERTICALS_KICKER}
            </span>

            <h2 className="2xxl:text-2xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize mb-0 wow fadeInUp">
              {VERTICALS_TITLE}
            </h2>
          </div>

          <div className="row gx-lg-4 box-hover-wrapper">
            {verticals.map((vertical) => (
              <div
                key={vertical.id}
                className="xl:w-1/4 md:w-1/2 w-full mb-7.5 wow fadeInUp"
                data-wow-delay={vertical.delay}
                data-wow-duration="0.8s"
              >
                <div
                  className={`bg-center h-full relative rounded-2xl min-h-93.75 shadow-20 after:absolute after:top-0 after:left-0 after:size-full after:duration-700 after:rounded-2xl after:bg-white [.box-hover.active]:after:[background:var(--service-card-gradient)] box-hover bg-cover ${
                    vertical.active ? "active" : ""
                  }`}
                  style={{
                    backgroundImage: `url(${vertical.image})`,
                  }}
                >
                  <div className="relative z-1 flex flex-col h-full p-8.75">
                    <div>
                      <h3 className="w-[100%] text-2xl relative [.box-hover.active_&]:text-white">
                        {vertical.title}
                      </h3>

                      <p className="text-base mb-0 [.box-hover.active_&]:text-white read-more-text">
                        {vertical.description}
                      </p>

                      <button className="read-more-btn mt-auto font-medium text-primary duration-700 [.box-hover.active_&]:text-white">
                        Read More
                      </button>

                      <ul className="sps-vertical-list space-y-2 my-6 flex-grow text-base mb-0 [.box-hover.active_&]:text-white">
                        {vertical.items.map((item) => (
                          <VerticalItem key={item}>
                            {item}
                          </VerticalItem>
                        ))}
                      </ul>
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