import Link from "next/link";
import { verticalFamilies } from "../data/verticals";

function VerticalItem({ href, children }) {
  return (
    <li className="sps-vertical-item">
      <i className="flaticon-check" aria-hidden="true"></i>
      <Link href={href}>{children}</Link>
    </li>
  );
}

export default function VerticalsHub() {
  return (
    <section className="2xxl:py-25 xl:py-17.5 md:py-12.5 sm:py-10 py-7.5 bg-light bg-cover">
      <div className="container">
        <div className="mb-7.5 text-center">
          <span className="text-primary font-semibold leading-5 uppercase text-lg inline-flex gap-1.25 items-center">
            SPS Verticals
          </span>
          <h2 className="2xxl:text-2xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize mb-0">
            Comprehensive Industry Solutions <br /> & Digital Transformation
          </h2>
        </div>
        <div className="row gx-lg-4 box-hover-wrapper">
          {verticalFamilies.map((family, index) => (
            <div key={family.id} className="xl:w-1/4 md:w-1/2 w-full mb-7.5">
              <div
                className={`bg-center h-full relative rounded-2xl min-h-93.75 shadow-20 after:absolute after:top-0 after:left-0 after:size-full after:duration-700 after:rounded-2xl after:bg-white [.box-hover.active]:after:[background:var(--service-card-gradient)] box-hover bg-cover${index === 0 ? " active" : ""}`}
                style={{ backgroundImage: `url(${family.image})` }}
              >
                <div className="relative z-1 flex flex-col h-full p-8.75">
                  <div>
                    <h3 className="w-[100%] text-2xl relative [.box-hover.active_&]:text-white">
                      {family.label}
                    </h3>
                    <p className="text-base mb-0 [.box-hover.active_&]:text-white read-more-text">
                      {family.description}
                    </p>
                    <button
                      type="button"
                      className="read-more-btn mt-auto font-medium text-primary duration-700 [.box-hover.active_&]:text-white"
                    >
                      Read More
                    </button>
                    <ul className="sps-vertical-list space-y-2 my-6 flex-grow text-base mb-0 [.box-hover.active_&]:text-white">
                      {family.items.map((item) => (
                        <VerticalItem key={item.href} href={item.href}>
                          {item.label}
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
  );
}
