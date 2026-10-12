
import { careerPage } from "../data/careerData";

export default function CareerValues() {
  return (
    <section
      id="our-value"
      className="scroll-mt-20 2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 relative before:absolute before:left-0 before:top-0 before:size-full before:bg-secondary before:opacity-90 bg-blend-luminosity bg-fixed overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/images/spsimg/banner/p1.webp)" }}
    >
      <div className="container relative z-1">
        <div className="section-head style-1 mb-12 text-center">
          <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold text-white capitalize relative mb-0">
            Our Values
          </h2>
        </div>
        <div className="row gap-y-8 g-6 justify-center">
          {careerPage.values.map((value) => (
            <div key={value.title} className="lg:w-1/3 sm:w-1/2 w-full flex">
              <div className="relative rounded-2xl p-8 bg-white/5 backdrop-blur-[30px] text-center text-white h-full w-full min-h-[280px] flex flex-col items-center justify-center border border-white/10">
                <div className="mx-auto size-12.5 rounded-full flex items-center justify-center mb-4 bg-primary shrink-0">
                  <i className={value.icon}></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/70 text-2sm/normal font-extralight mb-0">
                    {value.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}