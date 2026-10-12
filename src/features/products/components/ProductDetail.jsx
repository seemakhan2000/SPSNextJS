import { faClass } from "@/features/products/data/products";
import AgentTabs from "@/features/products/components/AgentTabs";

export default function ProductDetail({ category, product }) {
  const [primaryImage, secondaryImage] = product.images;
  const leftImage = primaryImage;
  const rightImage = secondaryImage || primaryImage;
  const ctaHref = product.externalUrl || "";
  const ctaLabel = product.externalUrl ? product.ctaLabel : "Read more";

  return (
    <>
      <section className="2xxl:py-25 xl:py-17.5 md:py-12.5 sm:py-10 py-7.5 content-wrapper style-36 bg-white">
        <div className="container">
          <div className="flex flex-wrap items-center -mx-2.5">
            <div className="lg:w-1/2 w-full px-2.5 mb-7.5">
              <div className="product-media-mosaic" dir="ltr">
                <div className="product-media-mosaic__left">
                  <div className="relative overflow-hidden rounded-2xl h-full">
                    <img
                      src={leftImage}
                      alt={product.name}
                      loading="eager"
                      decoding="async"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="product-media-mosaic__right flex flex-col gap-4 sm:gap-5">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={rightImage}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="w-full"
                    />
                  </div>
                  <div
                    className="sm:pt-5 sm:p-6.25 p-3.75 rounded-2xl bg-cover bg-center relative overflow-hidden flex items-center justify-center min-h-24 mt-auto"
                    style={{
                      backgroundColor: "#1a1a1a",
                      backgroundImage: `url('${product.videoPoster || "/assets/images/spsimg/ab2.webp"}')`,
                    }}
                  >
                    <div className="absolute inset-0 bg-secondary/70"></div>
                    <div className="relative flex items-center z-10">
                      <button
                        type="button"
                        data-type="youtube"
                        data-src={
                          product.videoUrl ||
                          "https://www.youtube.com/embed/aQOsNjzqB0U"
                        }
                        className="relative inline-block size-13.75 min-w-13.75 leading-13.75 text-center text-xl bg-white text-primary rounded-full popup-youtube"
                        aria-label="Play Video"
                      >
                        <i className="fa fa-play"></i>
                      </button>
                      <span className="text-base font-medium inline-block ml-2.5 text-white">
                        Play Video
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full px-2.5 self-center xl:!ps-12 lg:!ps-7.5">
              <div className="sm:mb-7.5 mb-5">
                <span className="inline-block rounded-5xl text-primary text-base leading-[1.5] font-semibold">
                  About {category.name}
                </span>
                <h2 className="2xxl:text-xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3]">
                  {product.headline || product.name}
                </h2>
                <p className="xl:text-lg sm:text-base text-sm leading-[1.6] font-normal">
                  {product.description}
                </p>
              </div>
              <ul className="flex flex-wrap text-secondary mb-5">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="sm:w-1/2 w-full p-1.5 text-base font-medium flex items-start gap-3"
                  >
                    <i className="fa-solid fa-arrow-right mt-1 text-primary"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              {product.externalUrl ? (
                <a
                  href={product.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg btn-primary btn-rounded btn-hover2 btn-shadow"
                >
                  {product.ctaLabel}
                </a>
              ) : (
                <button
                  type="button"
                  data-open-appointment=""
                  className="btn btn-lg btn-primary btn-rounded btn-hover2 btn-shadow"
                >
                  Read more
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {product.capabilities.length ? (
        <section className="2xxl:py-25 xl:py-17.5 md:py-12.5 sm:py-10 py-7.5 bg-light bg-cover">
          <div className="container">
            <div className="mb-7.5 text-center">
              <span className="inline-block rounded-5xl text-primary text-base leading-[1.5] font-semibold">
                Solutions
              </span>
              <h2 className="2xxl:text-5xl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] mb-0">
                {product.capabilitiesHeading}
              </h2>
            </div>
            <div className="row gx-lg-4 box-hover-wrapper">
              {product.capabilities.map((item, index) => (
                <div key={item.title} className="xl:w-1/4 md:w-1/2 w-full mb-7.5">
                  <div
                    className={`relative rounded-2xl h-full shadow-20 box-hover flex flex-col overflow-hidden ${
                      index === 0 ? "active" : ""
                    }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        opacity: 0.2,
                      }}
                    ></div>
                    <div className="relative z-10 flex flex-col justify-start h-full p-8.75">
                      <div className="bg-light size-20 rounded-2xxl flex justify-center items-center shadow-icon-bx ml-auto">
                        <i className={`${faClass(item.icon)} text-3xl text-secondary`}></i>
                      </div>
                      <div className="card-content mt-5">
                        <h3 className="text-xl relative">{item.title}</h3>
                        <p className="text-base font-medium mb-0">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 bg-white relative z-1 after:absolute after:top-0 after:left-0 after:size-full after:bg-cover after:-z-1 after:bg-content-wrapper">
        <div className="container">
          <div className="row items-center">
            <div className="lg:w-1/2 w-full mb-7.5 lg:!pe-6">
              <div className="sm:mb-7.5 mb-5">
                <div className="inline-block rounded-5xl text-primary text-base leading-[1.5] font-semibold">
                  {product.whyChoose.eyebrow}
                </div>
                <h2 className="2xxl:text-xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] mb-0">
                  {product.whyChoose.title}
                </h2>
                <p className="md:mb-12 mb-6 font-semibold text-lg text-primary">
                  {product.whyChoose.subtitle}
                </p>
              </div>
              <ul className="list-style-2">
                {product.whyChoose.items.map((item) => (
                  <li
                    key={item.title}
                    className="py-5 pr-1.25 sm:pl-30 pl-20 relative rounded-xxl bg-white mb-5 shadow-21"
                  >
                    <span
                      className="why-choose-check absolute sm:left-6.25 left-2.5 top-5 sm:size-20 size-13.75 rounded-full bg-primary text-white flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <i className="flaticon-check"></i>
                    </span>
                    <h3 className="text-xl mb-1.25 font-bold">{item.title}</h3>
                    <p className="mb-0 text-heading">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 w-full mb-3.75">
              <div className="xl:pl-27.5 sm:pl-12.5">
                <div className="flex items-center relative lg:h-auto sm:h-130 h-87.5">
                  <img
                    src={product.whyChoose.images[0] || primaryImage}
                    alt=""
                    width="210"
                    height="210"
                    loading="lazy"
                    decoding="async"
                    className="xl:size-52.5 w-37.5 h-45 border-[5px] border-white absolute md:-bottom-10 -bottom-1.25 md:-left-15 left-0 shadow-[0px_15px_50px_rgba(0,21,53,0.1)] rounded-3xl object-cover"
                  />
                  <img
                    src={product.whyChoose.images[1] || secondaryImage || primaryImage}
                    alt={product.name}
                    width="640"
                    height="640"
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {product.tabs.length ? (
        <AgentTabs
          tabs={product.tabs}
          heading={product.tabsHeading}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
        />
      ) : null}
    </>
  );
}
