import BoundSwiper from "@/components/shared/BoundSwiper";
import { PRODUCT_IMPACT_MEDIA } from "../constants/product.constants";

export default function ProductImpact({ items }) {
  if (!items?.length) return null;

  return (
    <section
      className="clearfix pt-12.5 relative before:absolute before:left-0 before:top-0 before:size-full before:bg-secondary before:opacity-90 bg-primary bg-blend-multiply overflow-hidden bg-position-[right_center] bg-cover"
      style={{
        backgroundImage: `url(${PRODUCT_IMPACT_MEDIA.background})`,
      }}
    >
      <div className="container relative z-1">
        <div className="row max-xl:flex-col-reverse">
          {/* Left Media */}
          <div className="xl:w-1/2 w-full">
            <div className="relative xl:w-162.5 sm:w-137.5 w-full max-xl:mx-auto max-xl:mt-7.5">
              <div className="xl:pr-37.5 lg:pr-20 sm:pr-12.5 relative overflow-hidden">
                <img
                  loading="lazy"
                  decoding="async"
                  src={PRODUCT_IMPACT_MEDIA.mainImage}
                  alt="AI and digital transformation"
                  width="525"
                  height="655"
                  className="w-full"
                />
              </div>

              {/* Animated Circles */}
              <div className="xxl:w-162.5 sm:w-150 w-87.5 aspect-square absolute -z-1 sm:-bottom-25 bottom-0 sm:-left-15 -left-2.5">
                <span className="w-4/5 rounded-full block absolute top-1/2 left-1/2 aspect-square border-2 border-white/10 animate-circleWrapper">
                  <span className="bg-primary block size-2.5 rounded-full absolute right-17.5 top-17.5"></span>
                  <span className="bg-primary block size-2.5 rounded-full absolute left-2.5 top-40.75"></span>
                  <span className="bg-primary block size-2.5 rounded-full absolute right-3.75 top-37.5"></span>
                </span>

                <span className="w-full rounded-full block absolute top-1/2 left-1/2 aspect-square border-2 border-white/10 animate-circleWrapper">
                  <span className="bg-primary block size-2.5 rounded-full absolute right-19.5 top-25"></span>
                  <span className="bg-primary block size-2.5 rounded-full absolute right-0.5 bottom-62.5"></span>
                  <span className="bg-primary block size-2.5 rounded-full absolute left-0 top-62.5"></span>
                </span>
              </div>

              {/* Deployment Widget */}
              <div className="absolute 2xxl:-left-20 -left-10 bottom-16.25 max-sm:hidden">
                <div className="rounded-6xl shadow-1 flex items-center justify-center bg-white p-3.75 pr-3.75 animate-move3">
                  <div className="flex">
                    {PRODUCT_IMPACT_MEDIA.avatars.map((avatar) => (
                      <img
                        key={avatar}
                        className="size-10 rounded-full border-white border-2 first:ml-0 -ml-3"
                        src={avatar}
                        alt=""
                        width="40"
                        height="40"
                      />
                    ))}
                  </div>

                  <div className="clearfix ms-2">
                    <span className="sm:text-lg text-base leading-[1.2] font-bold block text-primary">
                      150k+
                    </span>

                    <span className="text-sm block">
                      Deployments Worldwide
                    </span>
                  </div>
                </div>
              </div>

              {/* Testimonial Widget */}
              <div className="absolute xl:right-20 md:-right-10 right-0 bottom-55 max-sm:hidden">
                <div className="shadow-info-widget-3 w-68.75 rounded-2xxl bg-white p-5 animate-move1">
                  <div className="flex gap-3 mb-3">
                    <div className="size-11.25 overflow-hidden rounded-full">
                      <img
                        loading="lazy"
                        src={PRODUCT_IMPACT_MEDIA.testimonialAvatar}
                        alt="Tech Leader"
                      />
                    </div>

                    <div>
                      <span className="text-secondary font-bold block">
                        Farhan Akmal
                      </span>

                      <ul className="flex gap-1.25">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <li
                            key={index}
                            className="text-base text-star"
                          >
                            <i className="fa fa-star"></i>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="text-2xs/[1.4] mb-0">
                    &quot;A powerful, scalable, and secure AI-driven platform
                    that has transformed our digital operations.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Content */}
          <div className="xl:w-1/2 lg:w-5/6 w-full self-center mb-7.5">
            <div className="sm:mb-7.5 mb-5">
              <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold capitalize text-white mb-0">
                Real Teams. Real Innovation. And Our Impact.
              </h2>
            </div>

            <div className="relative">
              <BoundSwiper
                preset="testimonials"
                className="swiper testimonial-swiper1"
              >
                <div className="swiper-wrapper">
                  {items.map((item) => (
                    <div
                      key={`${item.name}-${item.title}`}
                      className="swiper-slide"
                    >
                      <div className="flex bg-white sm:rounded-3xl rounded-xxl overflow-hidden relative max-sm:flex-col">
                        {/* Person */}
                        <div className="sm:min-w-52.5 sm:w-52.5 w-full relative overflow-hidden max-sm:flex items-center max-sm:p-5 max-sm:pb-0">
                          <div className="relative">
                            <img
                              loading="lazy"
                              decoding="async"
                              src={item.image}
                              alt={item.name}
                              width="210"
                              height="210"
                              className="max-sm:w-17.5 max-sm:rounded-lg"
                            />
                          </div>

                          <div className="sm:bg-light sm:p-3 p-3.75 sm:text-center">
                            <span className="sm:text-lg text-base text-secondary font-semibold block">
                              {item.name}
                            </span>

                            <span className="text-sm text-primary">
                              {item.role}
                            </span>
                          </div>
                        </div>

                        {/* Quote */}
                        <div className="sm:py-10 sm:px-7.5 p-5 flex flex-col items-center justify-center relative z-1 after:bg-qoute after:w-33.75 after:h-25 after:absolute after:right-7.5 after:bottom-8.75 after:-z-1 after:opacity-5">
                          <div className="relative z-1">
                            <h3 className="md:text-xl text-lg">
                              {item.title}
                            </h3>

                            <p className="text-secondary leading-[1.7] mb-0 max-md:text-sm">
                              {item.quote}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </BoundSwiper>

              {/* Navigation */}
              <div className="swiper1-button-prev absolute top-1/2 -translate-y-1/2 -left-17.5 opacity-20 cursor-pointer duration-500 hover:opacity-100 max-lg:hidden">
                <img
                  loading="lazy"
                  src={PRODUCT_IMPACT_MEDIA.arrows.previous}
                  alt="Prev"
                />
              </div>

              <div className="swiper1-button-next absolute top-1/2 -translate-y-1/2 -right-17.5 opacity-20 cursor-pointer duration-500 hover:opacity-100 max-lg:hidden">
                <img
                  loading="lazy"
                  src={PRODUCT_IMPACT_MEDIA.arrows.next}
                  alt="Next"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}