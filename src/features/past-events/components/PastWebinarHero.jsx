import Link from "next/link";
import { PAST_EVENTS_BANNER, PAST_EVENTS_PATH } from "../constants/past-events.constants";

export default function PastWebinarHero({ webinar }) {
  return (
    <div className="past-webinar-hero bg-cover bg-center relative z-1 w-full">
      <img
        src={PAST_EVENTS_BANNER}
        alt=""
        width="1920"
        height="700"
        fetchPriority="high"
        decoding="async"
        className="past-webinar-hero__bg"
        aria-hidden="true"
      />
      <div className="container relative z-1 past-webinar-hero__inner">
        <nav aria-label="Breadcrumb" className="mb-6 text-center lg:text-left">
          <ul className="inline-block">
            <li className="inline-block text-base font-medium capitalize text-white">
              <Link href="/" className="text-white hover:text-white/80">
                Home
              </Link>
            </li>
            <li className="inline-block text-base font-medium capitalize text-white pl-2 before:content-['\\f101'] before:float-left before:text-white before:font-bold before:font-['Font_Awesome_5_Free'] before:text-sm before:pr-3 before:top-0.5 before:relative">
              <Link href={PAST_EVENTS_PATH} className="text-white hover:text-white/80">
                Past Events
              </Link>
            </li>
            <li className="inline-block text-base capitalize page-banner-crumb-current pl-2 before:content-['\\f101'] before:float-left before:text-white before:font-bold before:font-['Font_Awesome_5_Free'] before:text-sm before:pr-3 before:top-0.5 before:relative">
              {webinar.title}
            </li>
          </ul>
        </nav>

        <div className="row items-start">
          <div className="lg:w-1/2 w-full mb-7.5">
            <p className="past-webinar-hero__badge text-white font-bold px-4 py-2 rounded-full mb-6 inline-flex items-center uppercase text-sm tracking-widest">
              <i className="feather icon-video mr-2"></i> Past Webinar
            </p>
            <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold mb-8 text-yellow-400 leading-tight">
              {webinar.title}
            </h1>
            <div className="rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={webinar.host.image}
                  alt={webinar.host.name}
                  width="64"
                  height="64"
                  className="size-16 min-w-16 rounded-full border-2 border-primary object-cover"
                />
                <div className="text-white">
                  <p className="text-base text-white mb-1">
                    Hosted by <span className="font-bold">{webinar.host.name}</span>
                  </p>
                  <p className="text-sm italic text-white mb-0">{webinar.host.role}</p>
                </div>
              </div>
              <p className="text-white text-lg mb-0">
                <span className="text-yellow-400 font-bold">Date:</span> {webinar.date}
                <br />
                <span className="text-yellow-400 font-bold">Time:</span> {webinar.timezone}
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full mb-7.5">
            <div className="p-7.5 rounded-3xl border border-white/20">
              <h2 className="text-white text-2xl font-bold uppercase tracking-widest mb-6 text-center">
                Featured Speakers
              </h2>
              <div className="flex flex-col gap-4">
                {webinar.speakers.map((speaker) => (
                  <div
                    key={speaker.name}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        width="80"
                        height="80"
                        loading="lazy"
                        decoding="async"
                        className="size-20 min-w-20 rounded-full border-2 border-primary object-cover"
                      />
                      <div className="text-white">
                        <h3 className="text-xl text-white font-bold mb-1">{speaker.name}</h3>
                        <p className="text-base text-white opacity-80 leading-snug mb-0">{speaker.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}