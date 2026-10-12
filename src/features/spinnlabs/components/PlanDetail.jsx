import { planPage } from "../data/spinnlabs";

function PlanItem({ item }) {
  return (
    <li className="flex items-start gap-3.75 rounded-xxl bg-light py-4 px-4.5 mb-3.75 last:mb-0">
      <span
        className="size-10 min-w-10 rounded-full bg-primary text-white flex items-center justify-center text-sm"
        aria-hidden="true"
      >
        <i className="flaticon-check"></i>
      </span>
      <div className="overflow-hidden">
        <h3 className="text-lg mb-0.5 font-bold">{item.title}</h3>
        <p className="mb-0 text-2sm">{item.text}</p>
      </div>
    </li>
  );
}

export default function PlanDetail() {
  const { intro, groups } = planPage;

  return (
    <section className="2xxl:pt-17.5 2xxl:pb-12.5 md:pt-10 md:pb-7.5 sm:pt-10 pt-7.5 pb-5 bg-light">
      <div className="container">
        <div className="section-head style-1 sm:mb-7.5 mb-5 max-w-4xl">
          <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold leading-[1.3] mb-2.5">
            {intro.title}
          </h2>
          <p className="sm:text-lg text-base font-light leading-[1.7] text-bodycolor mb-0">
            {intro.text}
          </p>
        </div>
        <div className="rounded-2xl bg-white shadow-20 p-8.75">
          {groups.map((group, index) => (
            <div
              key={group.title}
              className={index === groups.length - 1 ? "" : "mb-7.5"}
            >
              <h3 className="text-xl font-bold mb-5 px-4.5 pl-[calc(1.125rem+2.5rem+0.9375rem)]">
                {group.title}
              </h3>
              <ul className="mb-0">
                {group.items.map((item) => (
                  <PlanItem key={item.title} item={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
