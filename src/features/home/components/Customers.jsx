import BoundSwiper from "@/components/shared/BoundSwiper";

import { customers } from "../data/CustomersData";

import {
  CUSTOMERS_TITLE,
  CUSTOMERS_DEFAULT_CLASS_NAME,
  CUSTOMERS_DEFAULT_HEADING_CLASS_NAME,
} from "../constants/Customers.constants";

export default function Customers({
  className = CUSTOMERS_DEFAULT_CLASS_NAME,
  headingClassName = CUSTOMERS_DEFAULT_HEADING_CLASS_NAME,
}) {
  return (
    <>
      <section
        className={`2xxl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10 2xxl:pb-17.5 md:pb-10 pb-5 ${className}`}
      >
        <div className="container">
          <div className="row items-center">
            <div className="xl:w-1/3">
              <div
                className="sm:mb-7.5 mb-5 wow fadeInUp"
                data-wow-delay="0.4s"
                data-wow-duration="0.8s"
              >
                <h2 className={headingClassName}>
                  {CUSTOMERS_TITLE}
                </h2>
              </div>
            </div>

            <div className="xl:w-2/3 mb-7.5">
              <BoundSwiper
                preset="clients"
                className="swiper client-swiper2"
              >
                <div className="swiper-wrapper">
                  {customers.map((customer) => (
                    <div
                      key={customer.id}
                      className="swiper-slide wow bounceIn"
                      data-wow-delay={customer.delay}
                      data-wow-duration="0.8s"
                      role="group"
                      aria-label={customer.ariaLabel}
                    >
                      <div className={customer.className}>
                        <img
                          className={customer.imageClassName}
                          width={customer.width}
                          height={customer.height}
                          loading="lazy"
                          decoding="async"
                          src={customer.image}
                          alt={customer.alt}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </BoundSwiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}