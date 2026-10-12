import ProductCta from "@/features/products/components/ProductCta";
import { pastEventsPage } from "@/features/past-events/data/past-events";

export default function PastWebinarDetail({ webinar }) {
  const { cta } = pastEventsPage;

  return (
    <>
      <section className="xl:py-17.5 md:py-10 py-7.5 bg-light">
        <div className="container">
          <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold capitalize text-center mb-7.5">
            About this webinar
          </h2>
          <div className="row">
            <div className="md:w-1/3 w-full mb-7.5">
              <div className="rounded-xxl bg-white h-full p-7.5 border border-black/5">
                <h3 className="text-xl text-primary mb-4">{webinar.goals.title}</h3>
                <p className="text-2sm text-justify mb-5">{webinar.goals.text}</p>
                <ul className="mb-0">
                  {webinar.goals.items.map((item) => (
                    <li
                      key={item}
                      className="relative ps-7.5 py-1.5 text-sm font-medium before:absolute before:left-0 before:font-black before:content-['\\f109'] before:font-['flaticon'] before:text-primary before:top-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-1/3 w-full mb-7.5">
              <div className="rounded-xxl bg-white h-full p-7.5 border border-black/5">
                <h3 className="text-xl text-primary mb-4">{webinar.agenda.title}</h3>
                <ol className="mb-0">
                  {webinar.agenda.items.map((item, index) => (
                    <li key={item} className="flex items-center gap-3 py-1.5 text-sm font-medium">
                      <span className="size-8 min-w-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="md:w-1/3 w-full mb-7.5">
              <div className="rounded-xxl bg-white h-full p-7.5 border border-black/5">
                <h3 className="text-xl text-primary mb-4">{webinar.audience.title}</h3>
                <p className="text-2sm mb-5">{webinar.audience.text}</p>
                <div className="flex flex-wrap gap-2">
                  {webinar.audience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-light text-primary rounded text-xs font-semibold uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductCta title={cta.title} text={cta.text} href={cta.href} label={cta.label} />
    </>
  );
}
