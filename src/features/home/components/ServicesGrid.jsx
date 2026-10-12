// src/features/home/components/ServicesGrid.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  getHomeCategories,
  categoryPath,
  servicePath,
} from "@/features/home/data/servicesData";

const iconMap = {
  "network-security": "fa-solid fa-network-wired",
  smaas: "fa-solid fa-server",
  grc: "fa-solid fa-shield-halved",
  "identity-access": "fa-solid fa-user-shield",
  "threat-management": "fa-solid fa-bug",
  devops: "fa-solid fa-code-branch",
  "migration-services": "fa-solid fa-cloud-arrow-up",
  automation: "fa-solid fa-robot",
  "data-science": "fa-solid fa-brain",
  learning: "fa-solid fa-graduation-cap",
  events: "fa-solid fa-calendar-days",
};

const GAP = 20; // cards ke beech ka gap (px)
const DELAY = 3000; // har kitne ms baad slide ho

/* ------------------------------------------------------------------ */
/* Slider: right se left animation + active (dark blue) card shift     */
/* ------------------------------------------------------------------ */
function getPerView() {
  const w = window.innerWidth;
  if (w >= 1280) return 4; // <- kitne cards ek saath dikhane hain
  if (w >= 1024) return 3;
  if (w >= 640) return 2;
  return 1;
}

function Slider({ cards }) {
  const viewportRef = useRef(null);
  const paused = useRef(false);

  const [index, setIndex] = useState(0); // slider ki position
  const [perView, setPerView] = useState(4); // screen par kitne cards
  const [cardW, setCardW] = useState(0); // 1 card ki width (px)
  const [hovered, setHovered] = useState(null);

  const step = cardW + GAP; // 1 card ki width + gap
  const maxIndex = Math.max(0, cards.length - perView); // kitne slide ho sakte hain

  // Screen / container ki width ke hisaab se card ki width nikalo
  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      const n = getPerView();
      setPerView(n);
      setCardW((viewport.offsetWidth - GAP * (n - 1)) / n);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, []);

  // Autoplay: right se left, aakhir me wapas pehle card par
  useEffect(() => {
    if (maxIndex === 0) {
      setIndex(0);
      return;
    }
    setIndex((i) => Math.min(i, maxIndex));

    const id = setInterval(() => {
      if (paused.current) return;
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, DELAY);

    return () => clearInterval(id);
  }, [maxIndex]);

  // Sab cards screen par fit hon (jaise Cloud, AI, Collaboration) to koi default active nahi
  const autoActive = maxIndex === 0 ? null : index;
  const activeIndex = hovered !== null ? hovered : autoActive;

  return (
    <div
      ref={viewportRef}
      className="service-swiper overflow-hidden"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => {
        paused.current = false;
        setHovered(null);
      }}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          gap: GAP,
          transform: `translateX(-${index * step}px)`,
        }}
      >
        {cards.map((cat, i) => {
          const isActive = i === activeIndex;
          const icon = iconMap[cat.slug] || "fa-solid fa-shield-halved";

          return (
            <div
              key={cat.slug}
              className="shrink-0"
              style={{
                width: cardW
                  ? `${cardW}px`
                  : `calc((100% - ${GAP * (perView - 1)}px) / ${perView})`,
              }}
            >
              <div
                onMouseEnter={() => setHovered(i)}
                className={`h-95 relative rounded-2xxl p-7.5 z-1 flex flex-col after:absolute after:bg-light after:size-full after:top-0 after:left-0 after:-z-1 after:rounded-2xxl after:mask-[url(../images/bg02.svg)] after:mask-bottom-right after:duration-500 icon-bx-wraper [.box-hover.active]:after:bg-primary box-hover group ${
                  isActive ? "active" : ""
                }`}
              >
                <div className="mb-auto">
                  {/* ICON */}
                  <div className="relative size-15 block mb-2.5 text-center">
                    <span className="[.box-hover.active_&]:[--color-primary:#fff]">
                      <i className={`${icon} text-5xl text-primary`} />
                    </span>
                  </div>

                  {/* BACKGROUND ICON */}
                  <span className="absolute right-1.25 top-1.25 w-35 opacity-[0.025]">
                    <i className={`${icon} text-[60px]`} />
                  </span>

                  <div className="overflow-hidden">
                    <h3 className="text-xl font-bold mb-3 [.box-hover.active_&]:text-white">
                      {cat.name}
                    </h3>

                    {cat.cardParts?.length > 0 ? (
                      /* Paragraph ke andar inline links */
                      <p className="text-2sm font-light mb-0 [.box-hover.active_&]:text-white">
                        {cat.cardParts.map((part, k) =>
                          typeof part === "string" ? (
                            <span key={k}>{part}</span>
                          ) : (
                            <Link
                              key={part.slug}
                              className="n_links"
                              href={servicePath(cat.slug, part.slug)}
                            >
                              {part.text}
                            </Link>
                          ),
                        )}
                      </p>
                    ) : cat.cardLinks?.length > 0 ? (
                      /* Links ki list */
                      <ul className="[.box-hover.active_&]:text-white">
                        {cat.cardLinks.map((item) => (
                          <li key={item.slug}>
                            <Link
                              className="n_links"
                              href={servicePath(cat.slug, item.slug)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-2sm font-light mb-0 [.box-hover.active_&]:text-white">
                        {cat.cardText || cat.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* FOOTER */}
                <div className="relative pt-5 mt-5 mr-12.5 duration-500 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-(--icon-bx-footer-gradient) [.box-hover.active_&]:before:bg-linear-(--icon-bx-footer-white-gradient) before:duration-500 before:bg-[length:10px_1px] before:bg-repeat-x">
                  <span className="text-sm text-secondary flex items-center gap-2 leading-[1.2] [.box-hover.active_&]:text-white">
                    <i className="fa fa-circle text-tiny text-primary duration-500 [.box-hover.active_&]:text-secondary" />
                    Read More
                  </span>

                  <Link
                    href={categoryPath(cat.slug)}
                    aria-label={`Read more about ${cat.name} services`}
                    className="btn btn-primary btn-square shadow-btn-squre !absolute -right-20 -bottom-7.5 !text-xl !rounded-full"
                  >
                    <i
                      className="feather icon-arrow-up-right group-hover:animate-toTopRight"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ServicesGrid({ activeFamily }) {
  const cards = getHomeCategories(activeFamily);

  // key: tab badalne par slider naye sire se shuru hota hai
  return <Slider key={activeFamily} cards={cards} />;
}