import { aboutPage } from "../data/aboutData";


export default function AboutAwards() {
  const { awards } = aboutPage;

  return (
    <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 py-10 pb-5">
      <div className="container">
        <div className="sm:mb-10 mb-7.5 max-w-4xl">
          <h2 className="xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] mb-1.25">
            {awards.title}
          </h2>
          <p className="text-lg font-light mb-0">{awards.text}</p>
        </div>
        <div className="row box-hover-wrapper gap-y-7.5">
          {awards.items.map((award, index) => (
            <div key={award.title} className="xl:w-1/3 sm:w-1/2 w-full">
              <div
                className={`[.box-hover.active]:bg-light box-hover rounded-2xxl relative duration-300 h-full ${
                  index === 0 ? "active" : ""
                }`}
              >
                <div className="bg-light [.box-hover.active_&]:bg-secondary z-2 border-4 border-transparent rounded-2xxl relative overflow-hidden">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={award.image}
                    alt={award.title}
                    width="480"
                    height="320"
                    className="w-full"
                  />
                </div>
                <div className="bg-light [.box-hover.active_&]:bg-secondary flex justify-between items-center -mt-5 relative z-1 gap-2.5 pt-8.75 px-5 pb-3.75 rounded-b-2xxl">
                  <div>
                    <h3 className="text-lg/[1.2] mb-1 [.box-hover.active_&]:text-white">
                      {award.title}
                    </h3>
                    <span className="text-2xs font-medium text-primary">
                      {award.subtitle}
                    </span>
                  </div>
                </div>
                <ul className="flex gap-5 justify-center py-3 px-3.75 rounded-b-2xxl -translate-y-12.5 bg-light relative z-0 duration-300 [.box-hover.active_&]:translate-y-0">
                  <li>
                    <i className="text-secondary">{award.note}</i>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
