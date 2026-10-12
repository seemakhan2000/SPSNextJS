import ProductCta from "@/features/products/components/ProductCta";
import Verticals from "@/features/home/components/Verticals";
import SpinnlabsHub from "../components/SpinnlabsHub";
import { startupsPage } from "../data/spinnlabs";

function StartupsJourney() {
  const { journey } = startupsPage;

  return (
    <section className="xl:py-17.5 md:py-10 py-7.5 bg-light">
      <div className="container">
        <div className="section-head style-1 sm:mb-12.5 mb-7.5 max-w-4xl">
          <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold leading-[1.3] mb-2.5">
            {journey.title}
          </h2>
          <p className="sm:text-lg text-base font-light leading-[1.7] text-bodycolor mb-0">
            {journey.text}
          </p>
        </div>
        <div className="row box-hover-wrapper">
          {journey.items.map((item, index) => {
            const cardClass = `relative rounded-2xl h-full shadow-20 box-hover flex flex-col overflow-hidden bg-white p-8.75 ${
              index === 0 ? "active" : ""
            }`;
            const cardBody = (
              <>
                <span className="size-10 min-w-10 rounded-full bg-light text-primary font-bold flex items-center justify-center mb-5">
                  {item.step}
                </span>
                <h3 className="text-xl relative mb-2.5">{item.title}</h3>
                <p className="text-base font-medium leading-[1.7] mb-0">{item.text}</p>
              </>
            );

            return (
              <div key={item.id} id={item.id} className="xl:w-1/4 md:w-1/2 w-full mb-7.5 scroll-mt-25">
                {item.href ? (
                  <a href={item.href} className={`${cardClass} text-inherit`}>
                    {cardBody}
                  </a>
                ) : (
                  <div className={cardClass}>{cardBody}</div>
                )}
              </div>
            );
          })}
          <div className="w-full">
            <div className="rounded-2xl bg-white shadow-20 py-5 px-7.5 text-center">
              <p className="sm:text-lg text-base font-medium text-primary mb-0">
                {journey.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StartupsTechnologies() {
  const { technologies } = startupsPage;

  return (
    <section className="xl:py-17.5 md:py-10 py-7.5 bg-white">
      <div className="container">
        <div className="section-head style-1 sm:mb-12.5 mb-7.5 max-w-4xl">
          <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold leading-[1.3] mb-2.5">
            {technologies.title}
          </h2>
          <p className="sm:text-lg text-base font-light leading-[1.7] text-bodycolor mb-0">
            {technologies.text}
          </p>
        </div>
        <div className="row box-hover-wrapper">
          {technologies.items.map((item, index) => (
            <div key={item.title} className="xl:w-1/4 md:w-1/2 w-full mb-7.5">
              <div
                className={`relative rounded-2xl h-full shadow-20 box-hover flex flex-col overflow-hidden bg-white p-8.75 text-center ${
                  index === 0 ? "active" : ""
                }`}
              >
                <div className="bg-light size-15 rounded-full flex justify-center items-center shadow-icon-bx mb-5 mx-auto">
                  <i className={`${item.icon} text-2xl text-secondary`}></i>
                </div>
                <h3 className="text-xl relative mb-2.5">{item.title}</h3>
                <p className="text-base font-medium leading-[1.7] mb-0">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function StartupsDetail() {
  return (
    <>
      <StartupsJourney />
      <SpinnlabsHub hub={startupsPage.hub} />
      <Verticals />
      <StartupsTechnologies />
      <ProductCta
        title={startupsPage.cta.title}
        text={startupsPage.cta.text}
        href={startupsPage.cta.href}
        label={startupsPage.cta.label}
      />
    </>
  );
}
