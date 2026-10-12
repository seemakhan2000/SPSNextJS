import { aboutPage } from "../data/aboutData";


export default function AboutProcess() {
  const { process } = aboutPage;

  return (
    <section className="relative z-1 bg-light 2xxl:pt-25 md:pt-17.5 sm:pt-12.5 py-10">
      <div className="container">
        <div className="row items-center">
          <div className="lg:w-1/2 w-full mb-7.5">
            <div className="relative overflow-hidden sm:rounded-3xl rounded-xxl">
              <img
                src={process.image}
                alt={process.imageAlt}
                width="720"
                height="520"
                loading="lazy"
                decoding="async"
                className="w-full"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full mb-7.5 lg:pl-7.5">
            <div className="sm:mb-7.5 mb-5">
              <h2 className="xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] mb-1.25">
                {process.title}
              </h2>
              <p className="text-lg font-light mb-7.5">{process.text}</p>
            </div>
            <div className="row">
              {process.steps.map((step) => (
                <div key={step.title} className="sm:w-1/2 w-full">
                  <div className="relative flex items-center gap-3.75 mb-5 group">
                    <div className="size-15 min-w-15 flex items-center text-primary text-2xl justify-center bg-white rounded-full duration-500 group-hover:bg-primary group-hover:text-white">
                      <span>
                        <i className={step.icon}></i>
                      </span>
                    </div>
                    <div className="overflow-hidden">
                      <h3 className="text-xl mb-0 font-medium">{step.title}</h3>
                      <p className="text-2sm mb-0">{step.text}</p>
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