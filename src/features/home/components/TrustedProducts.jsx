
import Link from "next/link";

import { trustedProducts } from "../data/TrustedProductsData";

import {
  TRUSTED_PRODUCTS_IMAGE,
  TRUSTED_PRODUCTS_EXPERIENCE,
  TRUSTED_PRODUCT_IMAGES,
} from "../constants/TrustedProducts.constants";

export default function TrustedProducts() {
  return (
    <>
      <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 relative overflow-hidden bg-secondary">
        <div className="container relative z-10">
          <div className="row items-center">

            {/* Image + Experience */}
            <div className="lg:w-1/2 w-full mb-7.5">
              <div className="relative xl:mr-12.5">
                <div className="relative overflow-hidden sm:rounded-3xl rounded-xxl">
                  <img
                    loading="lazy"
                    src={TRUSTED_PRODUCTS_IMAGE}
                    alt="img5"
                    width="600"
                    height="600"
                    className="mask-[url(images/shape/shape1.svg)] mask-center mask-no-repeat mask-size-[99%] w-full"
                  />
                </div>

                <div className="absolute right-0 bottom-0 2xxl:w-45.5 sm:w-42.5 w-26.5">
                  <div className="sn:p-6.25 sm:pt-5 p-3.75 rounded-2xl bg-primary text-center">
                    <span className="sm:text-5xxl text-2xxl font-bold text-white">
                      <span
                        className="value"
                        data-value={TRUSTED_PRODUCTS_EXPERIENCE.value}
                      >
                        {TRUSTED_PRODUCTS_EXPERIENCE.value}
                      </span>

                      {TRUSTED_PRODUCTS_EXPERIENCE.suffix}
                    </span>

                    <span className="sm:text-xl text-2xs font-medium mb-0 text-white/80">
                      Years <br />
                      Driving Innovation
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2 w-full mb-7.5">
              <div className="section-head style-1 mb-7.5">
                <h2 className="xl:text-4xxl sm:text-3xxl text-2xxl font-bold text-white capitalize relative [--bs-gutter-y:40px] mb-0">
                  Organization Trusted SPS Products
                </h2>
              </div>

              <div className="row ![--bs-gutter-y:40px] g-5">
                {trustedProducts.map((product, index) => {
                  const image = TRUSTED_PRODUCT_IMAGES[product.imageKey];

                  return (
                    <div
                      key={product.name}
                      className="sm:w-1/2 max-sm:!mt-5"
                    >
                      <div
                        className={`
                          relative rounded-2xl p-5 bg-white/5 backdrop-blur-[30px]
                          text-center text-white
                          ${
                            index === 0
                              ? "after:w-px after:h-full after:opacity-20 after:-right-6.5 after:absolute after:-bottom-5 after:bg-linear-(--content-wrapper-gradient) before:w-full before:h-px before:opacity-20 before:-bottom-5 before:-right-6.5 before:absolute before:bg-linear-(--content-wrapper-2-gradient) max-sm:after:hidden max-sm:before:hidden"
                              : index === 1
                                ? "after:w-full after:h-px after:opacity-20 after:-left-6.5 after:absolute after:-bottom-5 after:bg-linear-(--content-wrapper-gradient) max-sm:after:hidden"
                                : index === 2
                                  ? "before:w-px before:h-full before:opacity-20 before:-top-5 before:-right-6.5 before:absolute before:bg-linear-(--content-wrapper-2-gradient) max-sm:before:hidden"
                                  : ""
                          }
                        `}
                      >
                        <div className="mx-auto size-25 rounded-full flex items-center justify-center mb-2.5">
                          <span>
                            <img
                              loading="lazy"
                              src={image.src}
                              alt={image.alt}
                              width={image.width}
                              height={image.height}
                            />
                          </span>
                        </div>

                        <div className="icon-content">
                          <h4 className="sm:text-lg text-base text-white">
                            <Link
                              href={product.href}
                              className="text-white"
                            >
                              {product.name}
                            </Link>
                          </h4>

                          <p className="text-white/70 text-2sm/normal font-extralight mb-0">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

