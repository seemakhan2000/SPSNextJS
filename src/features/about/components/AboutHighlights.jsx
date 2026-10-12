import { aboutPage } from "../data/aboutData";



export default function AboutHighlights() {
  const { highlights } = aboutPage;

  return (
    <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 bg-light">
      <div className="container">
        <div className="section-head style-1 sm:mb-12.5 mb-7.5 max-w-4xl">
          <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold capitalize leading-[1.3] mb-2.5">
            {highlights.title}
          </h2>
          <p className="sm:text-lg text-base font-light mb-0">{highlights.text}</p>
        </div>
        <div className="row box-hover-wrapper">
          {highlights.items.map((item, index) => (
            <div key={item.period} className="xl:w-1/4 md:w-1/2 w-full mb-7.5">
              <div
                className={`relative rounded-2xl h-full shadow-20 box-hover flex flex-col overflow-hidden bg-white p-8.75 ${
                  index === 0 ? "active" : ""
                }`}
              >
                <div className="bg-light size-20 rounded-2xxl flex justify-center items-center shadow-icon-bx mb-5">
                  <i className={`${item.icon} text-3xl text-secondary`}></i>
                </div>
                <span className="inline-block text-primary text-sm font-semibold mb-1.25">
                  {item.period}
                </span>
                <h3 className="text-xl relative mb-2.5">{item.title}</h3>
                <p className="text-base font-medium mb-0">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}