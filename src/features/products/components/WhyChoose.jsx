export default function WhyChoose({
  items,
  image = "/assets/images/spsimg/595.webp",
  title = "Why Choose Our Products & Solutions",
  imageAlt = "Products overview",
  experienceLabel = "Years of",
  experienceLine = "Industry Experience",
}) {
  return (
    <section
      className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 relative before:absolute before:left-0 before:top-0 before:size-full before:bg-secondary before:opacity-90 bg-blend-luminosity bg-fixed overflow-hidden bg-no-repeat bg-position-[right_center] bg-cover"
      style={{ backgroundImage: "url(/assets/images/spsimg/banner/p1.webp)" }}
    >
      <div className="container">
        <div className="row items-center">
          <div className="lg:w-1/2 w-full mb-7.5">
            <div className="relative xl:mr-12.5">
              <div className="relative overflow-hidden sm:rounded-3xl rounded-xxl">
                <img
                  loading="lazy"
                  decoding="async"
                  src={image}
                  alt={imageAlt}
                  width="600"
                  height="600"
                  className="mask-[url(/assets/images/shape/shape1.svg)] mask-center mask-no-repeat mask-size-[99%] w-full"
                />
              </div>
              <div className="absolute right-0 bottom-0 2xxl:w-45.5 sm:w-42.5 w-26.5">
                <div className="sn:p-6.25 sm:pt-5 p-3.75 rounded-2xl bg-primary text-center">
                  <span className="sm:text-5xxl text-2xxl font-bold text-white">
                    <span className="value" data-value="20">
                      20
                    </span>
                    +
                  </span>
                  <span className="sm:text-xl text-2xs font-medium mb-0 text-white/80">
                    {experienceLabel} <br /> {experienceLine}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full mb-7.5">
            <div className="section-head style-1 mb-7.5">
              <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold text-white capitalize relative [--bs-gutter-y:40px] mb-0">
                {title}
              </h2>
            </div>
            <div className="row ![--bs-gutter-y:40px] g-5">
              {items.map((item, index) => (
                <div key={item.title} className="sm:w-1/2 max-sm:!mt-5">
                  <div
                    className={`relative rounded-2xl p-5 bg-white/5 backdrop-blur-[30px] text-center text-white ${
                      index === 0
                        ? "after:w-px after:h-full after:opacity-20 after:-right-6.5 after:absolute after:-bottom-5 after:bg-linear-(--content-wrapper-gradient) before:w-full before:h-px before:opacity-20 before:-bottom-5 before:-right-6.5 before:absolute before:bg-linear-(--content-wrapper-2-gradient) max-sm:after:hidden max-sm:before:hidden"
                        : index === 1
                          ? "after:w-full after:h-px after:opacity-20 after:-left-6.5 after:absolute after:-bottom-5 after:bg-linear-(--content-wrapper-gradient) max-sm:after:hidden"
                          : index === 2
                            ? "before:w-px before:h-full before:opacity-20 before:-top-5 before:-right-6.5 before:absolute before:bg-linear-(--content-wrapper-2-gradient) max-sm:before:hidden"
                            : ""
                    }`}
                  >
                    <div className="mx-auto size-12.5 rounded-full flex items-center justify-center mb-2.5 bg-primary">
                      <span className="icon-cell">
                        <img
                          loading="lazy"
                          src="/assets/images/svg/check.svg"
                          alt=""
                          width="18"
                          height="18"
                        />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="sm:text-lg text-base text-white">{item.title}</h3>
                      <p className="text-white/70 text-2sm/normal font-extralight mb-0">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
