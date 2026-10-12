import { faClass } from "../data/products";

export default function AgentTabs({
  tabs,
  heading = "Build, run and manage AI agents",
  ctaHref = "/#",
  ctaLabel = "Read more",
}) {
  if (!tabs?.length) return null;

  const isExternal = ctaHref.startsWith("http");

  return (
    <section className="clearfix bg-light 2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 sm:pt-12.5 pt-10 pb-10">
      <div className="container">
        <div className="md:mb-10 mb-5 text-center">
          <h2 className="2xxl:text-5xl lg:text-[38px] sm:text-3xxl text-2xxl font-bold capitalize">
            {heading}
          </h2>
        </div>
        <div className="custom-tab mb-10">
          <ul className="flex flex-wrap justify-center bg-white py-3.5 rounded-2xl" role="tablist">
            {tabs.map((tab, index) => (
              <li
                key={tab.label}
                className={`tab-title px-1.25 ${
                  index < tabs.length - 1 ? "border-r border-black/5" : ""
                } group max-xl:mb-1.25 ${index === 0 ? "active" : ""}`}
              >
                <button
                  type="button"
                  className="bg-white text-black block md:text-lg text-xs py-2.5 xl:px-4.5 lg:px-3.5 px-2.5 w-full lg:rounded-xxl rounded-2lg capitalize [.tab-title.active_&]:text-white [.tab-title.active_&]:bg-primary group-hover:bg-primary group-hover:text-white duration-500"
                >
                  <i className={`${faClass(tab.icon)} text-2xl mr-2.5`}></i>
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="tab-content-area pt-12.5">
            {tabs.map((tab, index) => (
              <div
                key={tab.label}
                className={`tab-content ${index === 0 ? "active" : ""}`}
              >
                <div className="row sm:!mx-5 items-center">
                  <div className="xl:w-1/2 xl:order-1 order-2">
                    <div className="sm:mb-7.5 mb-5">
                      <h3 className="sm:text-3xl text-xl font-bold">{tab.title}</h3>
                      <p className="sm:text-base text-sm font-normal">{tab.text}</p>
                    </div>
                    <ul className="text-secondary font-medium mb-7.5">
                      {tab.items.map((item) => (
                        <li
                          key={item}
                          className="w-full relative p-1.25 ps-7.5 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\\f109'] before:font-['flaticon'] before:text-primary before:top-2"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    {isExternal ? (
                      <a
                        href={ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-lg btn-primary btn-rounded btn-hover2 btn-shadow"
                      >
                        {ctaLabel}
                        <i className="feather icon-arrow-right ms-1"></i>
                      </a>
                    ) : (
                      <button
                        type="button"
                        data-open-appointment=""
                        className="btn btn-lg btn-primary btn-rounded btn-hover2 btn-shadow"
                      >
                        {ctaLabel}
                        <i className="feather icon-arrow-right ms-1"></i>
                      </button>
                    )}
                  </div>
                  <div className="xl:w-1/2 mb-7.5 xl:order-2 order-1">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={tab.image}
                        alt={tab.label}
                        width="720"
                        height="480"
                        loading="lazy"
                        decoding="async"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
