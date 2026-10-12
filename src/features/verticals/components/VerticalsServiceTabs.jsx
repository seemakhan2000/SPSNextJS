"use client";

import { useState } from "react";
import Link from "next/link";
import { verticalServiceTabs } from "../data/verticals";

export default function VerticalsServiceTabs({ className = "bg-light" }) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeItems, setActiveItems] = useState(() =>
    Object.fromEntries(verticalServiceTabs.map((tab) => [tab.id, 0])),
  );

  const tab = verticalServiceTabs[activeTab];
  const itemIndex = activeItems[tab.id] || 0;
  const item = tab.items[itemIndex];

  return (
    <section className={`xl:py-17.5 md:py-10 py-7.5 ${className}`}>
      <div className="container">
        <div className="mb-7.5 max-w-3xl">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Related Capabilities
          </span>
          <h2 className="mb-0 text-[24px] font-bold capitalize text-heading md:text-[32px]">
            Services we bring to this industry
          </h2>
        </div>

        <div className="vertical-service-tabs rounded-xl border border-[#d8e0ea] bg-white p-4 md:p-5">
          <ul className="vertical-service-tabs__nav" role="tablist">
            {verticalServiceTabs.map((entry, index) => {
              const active = index === activeTab;
              return (
                <li key={entry.id} className={active ? "is-active" : undefined}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTab(index)}
                  >
                    <i className={`${entry.icon} mr-2`} aria-hidden="true"></i>
                    {entry.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="vertical-service-tabs__body">
            <ul className="vertical-service-tabs__list">
              {tab.items.map((entry, index) => {
                const active = index === itemIndex;
                return (
                  <li key={entry.title}>
                    <button
                      type="button"
                      className={active ? "is-active" : undefined}
                      onClick={() =>
                        setActiveItems((current) => ({
                          ...current,
                          [tab.id]: index,
                        }))
                      }
                    >
                      {entry.title}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="vertical-service-tabs__content">
              <p>{item.text}</p>
              <Link href={item.href} className="vertical-service-tabs__more">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
