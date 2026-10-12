import { faClass } from "@/features/products/data/products";

export default function ServiceDetail({ category, service }) {
  const [primaryImage, secondaryImage] = service.images;
  const leftImage = primaryImage;
  const rightImage = secondaryImage || primaryImage;

  return (
    <>
      <section className="2xxl:py-25 xl:py-17.5 md:py-7.5 sm:py-10 py-5 content-wrapper style-36 bg-white overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="lg:w-1/2 w-full mb-7.5 flex items-center">
              <div className="row w-full">
                <div className="w-1/2">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img src={leftImage} alt={service.name} className="w-full" />
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="row">
                    <div className="w-full mb-5">
                      <div className="relative overflow-hidden rounded-2xl">
                        <img src={rightImage} alt="" className="w-full" />
                      </div>
                    </div>
                    <div className="w-full">
                      <div
                        className="sm:pt-5 sm:p-6.25 p-3.75 rounded-2xl bg-cover bg-center relative overflow-hidden flex items-center justify-center"
                        style={{
                          backgroundColor: "#1a1a1a",
                          backgroundImage: `url('${service.videoPoster || "/assets/images/spsimg/ab2.webp"}')`,
                        }}
                      >
                        <div className="absolute inset-0 bg-secondary/70"></div>
                        <div className="relative flex items-center z-10">
                          <button
                            type="button"
                            data-type="youtube"
                            data-src={
                              service.videoUrl ||
                              "https://www.youtube.com/embed/NQ1cvwEvh44?si=H6fHKYzL4ZBSa332"
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
              </div>
            </div>
            <div className="lg:w-1/2 w-full self-center xl:!ps-12 lg:!ps-7.5">
              <div className="sm:mb-7.5 mb-5">
                <span className="inline-block rounded-5xl text-primary text-base leading-[1.5] font-semibold">
                  {service.aboutEyebrow || `About ${category.name}`}
                </span>
                <h2 className="2xxl:text-xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3]">
                  {service.headline || service.name}
                </h2>
                <p className="xl:text-lg sm:text-base text-sm leading-[1.6] font-normal">
                  {service.description}
                </p>
              </div>
              {service.features?.length ? (
                <ul className="flex flex-wrap text-secondary">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="sm:w-1/2 w-full p-1.5 text-base font-medium flex items-start gap-3"
                    >
                      <i className="fa-solid fa-arrow-right mt-1 text-primary"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {service.review ? (
        <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 bg-light">
          <div className="container">
            <div className="row g-lg-5 items-center">
              <div className="lg:w-7/12 mb-2.5">
                <div className="mb-7.5 max-w-150">
                  <h2 className="2xxl:text-xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3]">
                    {service.review.title}
                  </h2>
                  <p className="text-base font-normal">{service.review.text}</p>
                </div>
                {service.review.items.map((item, index) => (
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
              <div className="lg:w-5/12 mb-7.5">
                <div className="relative overflow-hidden sm:rounded-xxl rounded-lg xl:h-175 sm:h-150 h-112.5">
                  <img
                    loading="lazy"
                    src={service.review.image}
                    alt={service.review.title}
                    width="840"
                    height="1080"
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {service.insights ? (
        <section className="2xxl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10 pb-10">
          <div className="container">
            <div className="row g-3 g-lg-4 items-center">
              <div className="lg:w-5/12">
                <div className="mb-0">
                  <h2 className="2xxl:text-xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3]">
                    {service.insights.title}
                  </h2>
                  <h3 className="xl:text-2xl md:text-xl text-lg font-semibold text-primary mb-5">
                    {service.insights.subtitle}
                  </h3>
                  {service.insights.paragraphs.map((paragraph, index) => (
                    <p
                      key={paragraph}
                      className={`xl:text-lg text-base font-light ${
                        index === service.insights.paragraphs.length - 1 ? "mb-0" : ""
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className="lg:w-7/12">
                <div className="relative overflow-hidden rounded-2xl xl:h-125 sm:h-100 h-62.5 xl:ml-6">
                  <img
                    loading="lazy"
                    src={service.insights.image}
                    alt={service.insights.title}
                    width="1050"
                    height="750"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {service.pricingTable ? (
        <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 bg-light relative z-1 after:absolute after:top-0 after:left-0 after:size-full after:bg-cover after:-z-1 after:bg-content-wrapper">
          <div className="relative z-20 max-w-7xl mx-auto px-4">
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 border-collapse">
                <thead className="bg-secondary text-white">
                  <tr>
                    {service.pricingTable.headers.map((header) => (
                      <th
                        key={header}
                        className="px-4 py-3 border border-gray-900 text-left text-sm font-semibold"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-blue-100 text-black">
                  {service.pricingTable.rows.map((row) => (
                    <tr key={row[0]} className="border border-gray-300">
                      {row.map((cell, index) => (
                        <td
                          key={`${row[0]}-${index}`}
                          className={`px-4 py-3 border border-gray-300 ${
                            index === 0 ? "font-medium" : index > 1 ? "text-center" : ""
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}

      {service.platforms ? (
        <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 bg-white relative z-1 after:absolute after:top-0 after:left-0 after:size-full after:bg-cover after:-z-1 after:bg-content-wrapper">
          <div className="relative z-20 max-w-7xl mx-auto px-4">
            <div className="row items-center">
              <div className="lg:w-1/2 w-full mb-7.5 lg:!pe-6">
                <div className="sm:mb-7.5 mb-5">
                  <div className="inline-block rounded-5xl text-primary text-base leading-[1.5] font-semibold">
                    {service.platforms.eyebrow}
                  </div>
                  <h2 className="2xxl:text-xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] mb-0">
                    {service.platforms.title}
                  </h2>
                  <p className="md:mb-12 mb-6 font-semibold text-lg text-primary">
                    {service.platforms.subtitle}
                  </p>
                </div>
                <ul className="list-style-2">
                  {service.platforms.items.map((item) => (
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
                      src={service.platforms.images[0]}
                      alt=""
                      className="xl:size-52.5 w-37.5 h-45 border-[5px] border-white absolute md:-bottom-10 -bottom-1.25 md:-left-15 left-0 shadow-[0px_15px_50px_rgba(0,21,53,0.1)] rounded-3xl object-cover"
                    />
                    <img
                      src={service.platforms.images[1] || service.platforms.images[0]}
                      alt={service.platforms.title}
                      className="size-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
