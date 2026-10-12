import { roundtablePage } from "../data/roundtable";
import { ROUNDTABLE_IMAGES } from "../constants/roundtable.constants";

export default function RoundtableHero() {
  const { headline, audience, hosts, session, futureDates } = roundtablePage;

  return (
    <div className="roundtable-hero bg-cover bg-center relative z-1 w-full">
      <img
        src={ROUNDTABLE_IMAGES.banner}
        alt=""
        width="1920"
        height="700"
        fetchPriority="high"
        decoding="async"
        className="roundtable-hero__bg"
        aria-hidden="true"
      />

      <div className="roundtable-hero__inner relative z-1">
        <div>
          <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold text-yellow-400 leading-tight uppercase tracking-tight text-center">
            <i className="fa-solid fa-handshake text-white"></i> {headline}
          </h1>

          <p className="text-white text-sm md:text-base font-semibold uppercase mt-2 opacity-90 text-center">
            {audience}
          </p>
        </div>

        <div className="roundtable-hero__cols flex flex-col items-stretch gap-6 py-5 w-full">
          <div className="roundtable-hero__col flex flex-col gap-5">
            {hosts.map((host) => (
              <div
                key={host.id}
                className="bg-white/10 rounded-xl p-4 border-2 border-white flex-1"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={host.image}
                    alt={host.name}
                    width="120"
                    height="120"
                    className="size-30 rounded-full border-2 border-primary object-cover shadow-lg shrink-0"
                    decoding="async"
                  />

                  <div className="text-white min-w-0">
                    <button
                      type="button"
                      data-open-presenter={host.id}
                      className="text-base text-white text-left"
                    >
                      {host.role}:{" "}
                      <span className="font-bold text-yellow-400 underline">
                        {host.name}
                      </span>{" "}
                      <i className="fa-brands fa-linkedin"></i>
                    </button>

                    <p className="text-sm italic text-white mb-0">
                      {host.title}
                    </p>

                    <p className="text-sm italic text-white mb-0">
                      {host.org}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="roundtable-hero__col bg-white/10 rounded-xl p-4 border-2 border-white">
            <div className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-white roundtable-hero__badge">
              <i className="feather icon-arrow-right text-yellow-400 mr-1"></i>
              {session.badge}
            </div>

            <div className="mb-6">
              <p className="text-md font-semibold uppercase tracking-tight text-yellow-400 mb-0">
                {session.topicLabel}
              </p>

              <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl mb-0">
                {session.topic}
              </h2>
            </div>

            <hr className="border-white/10" />

            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="roundtable-hero__icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-yellow-400">
                  <i className="feather icon-calendar"></i>
                </div>

                <div>
                  <p className="text-xs font-medium text-yellow-400 mb-0">
                    {session.dateLabel}
                  </p>

                  <p className="text-sm text-white mb-0">
                    {session.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="roundtable-hero__icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-yellow-400">
                  <i className="feather icon-clock"></i>
                </div>

                <div>
                  <p className="text-xs font-medium text-yellow-400 mb-0">
                    {session.timeLabel}
                  </p>

                  <p className="text-sm text-white mb-0">
                    {session.time}{" "}
                    <span className="text-xs font-medium text-yellow-400">
                      {session.timezone}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="roundtable-hero__col bg-white/10 rounded-xl p-4 border-2 border-white flex flex-col">
            <div className="mb-6">
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-yellow-400 sm:text-3xl mb-0">
                {futureDates.title}
              </h2>
            </div>

            <hr className="border-white/10" />

            <ul className="text-white text-base mt-4 mb-0 roundtable-hero__dates">
              {futureDates.items.map((item) => (
                <li key={item.date}>
                  {item.date}: {item.topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}