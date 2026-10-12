
import PageBanner from "@/features/products/components/PageBanner";
import { faClass, PRODUCT_PHONE_HREF } from "@/features/products/data/products";
import { SITE_CONTACT } from "@/lib/site";

import { highlights } from "../data/comingSoonData";

export default function ComingSoonContent() {
  return (
    <>
      <PageBanner
        title="Coming Soon"
        description="We are working hard to bring you something amazing. This page is currently under construction."
        kicker="LAUNCHING SOON"
        image="/assets/images/spsimg/banner/p1.webp"
        titleClassName="2xxl:text-8xl xl:text-6xxl md:text-xxl text-[32px] font-bold mb-2.5 text-white capitalize"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Coming Soon" },
        ]}
      />
      <section className="2xxl:py-25 xl:py-17.5 md:py-12.5 sm:py-10 py-7.5 bg-white relative overflow-hidden">
        <div className="container relative z-1">
          <div className="text-center sm:mb-12.5 mb-7.5">
            <span
              className="coming-soon-watermark pointer-events-none select-none"
              aria-hidden="true"
            >
              SOON
            </span>
            <span className="inline-block rounded-5xl text-primary text-base leading-[1.5] font-semibold">
              Stay Tuned
            </span>
            <h2 className="2xxl:text-5xl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] relative">
              This page is on the way
            </h2>
            <p className="xl:text-lg sm:text-base text-sm leading-[1.6] font-normal max-w-3xl mx-auto mb-0">
              The page you opened is not live yet. Check back soon, explore our
              products, or contact SPS if you need help in the meantime.
            </p>
          </div>
          <div className="row box-hover-wrapper">
            {highlights.map((item, index) => (
              <div key={item.title} className="md:w-1/3 w-full mb-7.5">
                <div
                  className={`relative rounded-2xl h-full shadow-20 box-hover flex flex-col overflow-hidden bg-white p-8.75 ${
                    index === 0 ? "active" : ""
                  }`}
                >
                  <div className="bg-light size-20 rounded-2xxl flex justify-center items-center shadow-icon-bx mb-5">
                    <i
                      className={`${faClass(item.icon)} text-3xl text-secondary`}
                    ></i>
                  </div>
                  <h3 className="text-xl relative mb-2.5">{item.title}</h3>
                  <p className="text-base font-medium mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2.5">
            <a href="/" className="btn btn-lg btn-primary btn-rounded btn-hover1">
              Back to home
            </a>
            <a
              href="/products"
              className="btn btn-lg btn-secondary btn-rounded"
            >
              View products
            </a>
            <button
              type="button"
              data-open-appointment=""
              className="btn btn-lg btn-primary btn-rounded btn-hover2"
            >
              Request a Quote
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-7.5 text-secondary">
            <a
              href={PRODUCT_PHONE_HREF}
              className="inline-flex items-center gap-2 font-medium hover:text-primary"
            >
              <i className="feather icon-phone-call"></i>
              {SITE_CONTACT.phone}
            </a>
            <a
              href={`mailto:${SITE_CONTACT.email}`}
              className="inline-flex items-center gap-2 font-medium hover:text-primary"
            >
              <i className="fa-solid fa-paper-plane"></i>
              {SITE_CONTACT.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
