import BoundSwiper from "@/components/shared/BoundSwiper";
import { technologyPartners } from "../data/PartnersData";

export default function Partners() {
  return (
    <>
      <section className="2xxl:py-25 xl:py-17.5 sm:py-10 py-7.5 bg-light overflow-hidden">
        <div className="container">
          <div className="row g-0 items-center">
            <div className="xl:w-1/4 2lg:w-1/4">
              <div className="sm:mb-7.5">
                <h2 className="xl:text-4xxl sm:text-3xxl text-2xxl font-bold capitalize">
                  Our Technology Partners
                </h2>

                <p className="sm:text-lg text-base leading-[1.6] font-light mb-0">
                  We work with world-class technology vendors to deliver secure,
                  scalable, and innovative solutions across Cloud, AI,
                  Cybersecurity, and Enterprise IT.
                </p>
              </div>
            </div>

            <div className="lg:w-3/4 2xl:w-3/4">
              <BoundSwiper
                preset="awards"
                className="swiper awards-swiper xl:!ml-12.5 xl:!-mr-87.5 -mr-30 max-xl:mt-7.5"
              >
                <div className="swiper-wrapper">
                  {technologyPartners.map((partner) => (
                    <div className="swiper-slide" key={partner.id}>
                      <div className="flex flex-col justify-center bg-white sm:rounded-xxl rounded-lg md:py-11.25 md:px-8.75 py-8.75 px-6.25 gap-3 items-center text-center dz-img-box h-80">
                        
                        <div className="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                          <img
                            loading="lazy"
                            src={partner.image}
                            alt={partner.alt}
                            className="w-full h-full"
                          />
                        </div>

                        <div className="dz-content">
                          <h3 className="md:text-2xl text-xl mb-1.25 font-bold">
                            {partner.name}
                          </h3>

                          <p className="md:text-base text-sm mb-2 font-medium">
                            {partner.description}
                          </p>

                          <a
                            href={partner.href}
                            className="md:text-sm text-2xs text-primary"
                          >
                            Learn More
                          </a>
                        </div>

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