import { faClass } from "@/features/products/data/products";
import ProductCta from "@/features/products/components/ProductCta";

function AboutMedia({ category, content }) {
  const images = content.about.images || [];
  const primary = images[0];
  const secondary = images[1];
  const useMosaic = content.about.media !== "single" && Boolean(secondary);

  if (!primary) return null;

  if (!useMosaic) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-[#0b1220] shadow-20">
        <img
          src={primary}
          alt={category.name}
          loading="eager"
          decoding="async"
          width="960"
          height="720"
          className="w-full h-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div className="product-media-mosaic" dir="ltr">
      <div className="product-media-mosaic__left">
        <div className="relative overflow-hidden rounded-2xl h-full">
          <img
            src={primary}
            alt={category.name}
            loading="eager"
            decoding="async"
            className="w-full"
          />
        </div>
      </div>
      <div className="product-media-mosaic__right flex flex-col gap-4 sm:gap-5">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={secondary}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full"
          />
        </div>
        {content.about.videoUrl ? (
          <div
            className="sm:pt-5 sm:p-6.25 p-3.75 rounded-2xl bg-cover bg-center relative overflow-hidden flex items-center justify-center min-h-24 mt-auto"
            style={{
              backgroundColor: "#1a1a1a",
              backgroundImage: `url('${secondary}')`,
            }}
          >
            <div className="absolute inset-0 bg-secondary/70"></div>
            <div className="relative flex items-center z-10">
              <button
                type="button"
                data-type="youtube"
                data-src={content.about.videoUrl}
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
        ) : null}
      </div>
    </div>
  );
}

function SideImages({ images, title }) {
  if (!images?.length) return null;

  if (images.length === 1) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-[#0b1220] shadow-21">
        <img
          src={images[0]}
          alt={title}
          width="640"
          height="640"
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div className="xl:pl-27.5 sm:pl-12.5">
      <div className="flex items-center relative lg:h-auto sm:h-130 h-87.5">
        <img
          src={images[0]}
          alt=""
          width="210"
          height="210"
          loading="lazy"
          decoding="async"
          className="xl:size-52.5 w-37.5 h-45 border-[5px] border-white absolute md:-bottom-10 -bottom-1.25 md:-left-15 left-0 shadow-[0px_15px_50px_rgba(0,21,53,0.1)] rounded-3xl object-cover"
        />
        <img
          src={images[1]}
          alt={title}
          width="640"
          height="640"
          loading="lazy"
          decoding="async"
          className="size-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
}

export default function BmsDetail({ category }) {
  const content = category.content;
  if (!content) return null;

  const cmsImages = content.cms?.images || [];

  return (
    <>
      <section className="2xxl:py-25 xl:py-17.5 md:py-12.5 sm:py-10 py-7.5 content-wrapper style-36 bg-white">
        <div className="container">
          <div className="flex flex-wrap items-center -mx-2.5">
            <div className="lg:w-1/2 w-full px-2.5 mb-7.5">
              <AboutMedia category={category} content={content} />
            </div>
            <div className="lg:w-1/2 w-full px-2.5 self-center xl:!ps-12 lg:!ps-7.5">
              <div className="sm:mb-7.5 mb-5">
                <span className="inline-block rounded-5xl text-primary text-base leading-[1.5] font-semibold">
                  {content.about.eyebrow}
                </span>
                <h2 className="2xxl:text-xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3]">
                  {content.about.title}
                </h2>
                <p className="xl:text-lg sm:text-base text-sm leading-[1.6] font-normal">
                  {content.about.text}
                </p>
              </div>
              <ul className="flex flex-wrap text-secondary mb-5">
                {content.about.features.map((feature) => (
                  <li
                    key={feature}
                    className="sm:w-1/2 w-full p-1.5 text-base font-medium flex items-start gap-3"
                  >
                    <i className="fa-solid fa-arrow-right mt-1 text-primary"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                data-open-appointment=""
                className="btn btn-lg btn-primary btn-rounded btn-hover2 btn-shadow"
              >
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 bg-light">
        <div className="container">
          <div className="row g-lg-5 items-center">
            <div className={`${content.benefits.image ? "lg:w-7/12" : "w-full"} mb-2.5`}>
              <div className="mb-7.5 max-w-150">
                <h2 className="2xxl:text-xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3]">
                  {content.benefits.title}
                </h2>
                <p className="text-base font-normal">{content.benefits.text}</p>
              </div>
              {content.benefits.items.map((item, index) => (
                <div
                  key={item.title}
                  className={`relative py-5 px-6.25 bg-white sm:rounded-xxl rounded-lg flex items-start gap-6.25 shadow-icon-bx-9 duration-200 hover:-translate-y-1.25 mb-5 ${
                    index === 1 ? "sm:ml-6.25" : "mr-6.25"
                  }`}
                >
                  <div className="xl:text-4xl text-3xl text-secondary flex-shrink-0">
                    <i className={faClass(item.icon)}></i>
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="xl:text-xl text-lg mb-1.25">{item.title}</h3>
                    <p className="max-xl:text-sm mb-0">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            {content.benefits.image ? (
              <div className="lg:w-5/12 mb-7.5">
                <div className="relative overflow-hidden sm:rounded-xxl rounded-lg border border-black/10 bg-[#0b1220]">
                  <img
                    loading="lazy"
                    src={content.benefits.image}
                    alt={content.benefits.title}
                    width="840"
                    height="1080"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 bg-white relative z-1 after:absolute after:top-0 after:left-0 after:size-full after:bg-cover after:-z-1 after:bg-content-wrapper">
        <div className="container">
          <div className="row items-center">
            <div className={`${cmsImages.length ? "lg:w-1/2" : "w-full"} w-full mb-7.5 lg:!pe-6`}>
              <div className="sm:mb-7.5 mb-5">
                <div className="inline-block rounded-5xl text-primary text-base leading-[1.5] font-semibold">
                  {content.cms.eyebrow}
                </div>
                <h2 className="2xxl:text-xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] mb-0">
                  {content.cms.title}
                </h2>
                <p className="md:mb-12 mb-6 font-semibold text-lg text-primary">
                  {content.cms.subtitle}
                </p>
              </div>
              <ul className="list-style-2">
                {content.cms.items.map((item) => (
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
            {cmsImages.length ? (
              <div className="lg:w-1/2 w-full mb-3.75">
                <SideImages images={cmsImages} title={content.cms.title} />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="2xxl:py-25 xl:py-17.5 md:py-12.5 sm:py-10 py-7.5 bg-light bg-cover">
        <div className="container">
          <div className="mb-7.5 text-center">
            <span className="inline-block rounded-5xl text-primary text-base leading-[1.5] font-semibold">
              {content.areasEyebrow}
            </span>
            <h2 className="2xxl:text-5xl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] mb-0">
              {content.areasTitle}
            </h2>
          </div>
          <div className="row gx-lg-4 box-hover-wrapper">
            {content.areas.map((item, index) => (
              <div key={item.title} className="xl:w-1/4 md:w-1/2 w-full mb-7.5">
                <div
                  className={`relative rounded-2xl h-full shadow-20 box-hover flex flex-col overflow-hidden ${
                    index === 0 ? "active" : ""
                  }`}
                >
                  <div className="relative z-10 flex flex-col justify-start h-full p-8.75">
                    <div className="bg-light size-20 rounded-2xxl flex justify-center items-center shadow-icon-bx ml-auto">
                      <i className={`${faClass(item.icon)} text-3xl text-secondary`}></i>
                    </div>
                    <div className="card-content mt-5">
                      <h3 className="text-xl relative mb-0">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductCta
        title={content.ctaTitle}
        text={content.ctaText}
        label="Request Consultation"
      />
    </>
  );
}
