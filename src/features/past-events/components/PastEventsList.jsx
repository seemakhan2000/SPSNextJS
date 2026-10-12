"use client";

import { useState } from "react";
import Link from "next/link";
import {
  pastEventYears,
  pastEventsPage,
  pastWebinarPath,
  webinarsForYear,
} from "@/features/past-events/data/past-events";

function EventCard({ event }) {
  return (
    <Link
      href={pastWebinarPath(event.slug)}
      className="rounded-xxl border border-primary/10 bg-light duration-200 group hover:bg-secondary flex flex-col h-full p-5"
    >
      <p className="text-2sm font-medium text-primary mb-3 group-hover:text-white/70">
        <i className="feather icon-clock mr-1.25"></i>
        {event.time}
      </p>
      <h3 className="text-lg mb-2 group-hover:text-white">{event.title}</h3>
      <p className="text-2sm mb-5 group-hover:text-white/80">{event.excerpt}</p>
      <div className="mt-auto pt-4 border-t border-black/10 group-hover:border-white/20 flex items-center gap-4">
        <img
          src={event.host.image}
          alt={event.host.name}
          width="48"
          height="48"
          loading="lazy"
          decoding="async"
          className="size-12 min-w-12 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold mb-0 group-hover:text-white">
            {event.host.name}
          </p>
          <p className="text-xs text-bodycolor mb-0 group-hover:text-white/70">
            {event.host.role}
          </p>
        </div>
      </div>
      <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:text-white">
        View webinar <i className="feather icon-arrow-right"></i>
      </span>
    </Link>
  );
}

export default function PastEventsList() {
  const [year, setYear] = useState(pastEventYears[0]);
  const events = webinarsForYear(year);

  return (
    <section className="xl:py-17.5 md:py-10 py-7.5 bg-white">
      <div className="container">
        <div className="md:mb-10 mb-5 text-center">
          <p className="text-primary font-semibold leading-5 uppercase text-lg mb-2">
            Events & Webinars
          </p>
          <h2 className="2xxl:text-xxl lg:text-[38px] sm:text-3xxl text-2xxl font-bold capitalize mb-2.5">
            {pastEventsPage.introTitle}
          </h2>
          <p className="text-lg max-w-4xl mx-auto mb-0">
            {pastEventsPage.introText}
          </p>
        </div>

        <div
          className="past-events-years mb-10"
          role="tablist"
          aria-label="Filter webinars by year"
        >
          {pastEventYears.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={item === year}
              className={`past-events-years__btn${item === year ? " is-active" : ""}`}
              onClick={() => setYear(item)}
            >
              <i className="feather icon-calendar"></i>
              {item}
            </button>
          ))}
        </div>

        {events.length ? (
          <div className="row">
            {events.map((event) => (
              <div key={event.slug} className="md:w-1/3 w-full mb-7.5">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-light rounded-xxl py-12.5 px-7.5 text-center">
            <p className="text-lg font-medium mb-0">
              {pastEventsPage.emptyText}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
