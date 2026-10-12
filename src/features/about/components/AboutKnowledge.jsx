import { aboutPage } from "../data/aboutData";



export default function AboutKnowledge() {
  const { knowledge } = aboutPage;

  return (
    <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5">
      <div className="container">
        <div className="row items-center">
          <div className="lg:w-1/2 w-full mb-7.5">
            <div className="relative xl:mr-12.5">
              <div className="sm:rounded-xxl rounded-lg lg:h-127.5 md:h-105 sm:h-80 h-62.5 bg-light relative overflow-hidden">
                <img
                  src={knowledge.image}
                  alt={knowledge.imageAlt}
                  width="900"
                  height="620"
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full mb-7.5">
            <div className="sm:mb-7.5 mb-5">
              <div className="inline-block rounded-5xl text-primary text-base leading-[1.5] font-semibold">
                Community
              </div>
              <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold capitalize leading-[1.3] mb-2.5">
                {knowledge.title}
              </h2>
              <p className="sm:text-lg text-base font-light mb-0">{knowledge.text}</p>
            </div>
            <ul className="mb-0">
              {knowledge.events.map((event) => (
                <li
                  key={event.title}
                  className="flex items-start gap-3.75 rounded-xxl bg-light py-4 px-4.5 mb-3.75 last:mb-0"
                >
                  <span
                    className="size-10 min-w-10 rounded-full bg-primary text-white flex items-center justify-center text-sm"
                    aria-hidden="true"
                  >
                    <i className="flaticon-check"></i>
                  </span>
                  <div className="overflow-hidden">
                    <h3 className="text-lg mb-0.5 font-bold">{event.title}</h3>
                    <p className="mb-0 text-2sm">{event.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
