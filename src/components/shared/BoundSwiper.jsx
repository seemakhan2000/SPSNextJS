"use client";

import { useEffect, useRef } from "react";

const SWIPER_CSS = "/assets/vendor/swiper/swiper-bundle.min.css";
const SWIPER_JS = "/assets/vendor/swiper/swiper-bundle.min.js";

const PRESETS = {
  awards: {
    loop: true,
    slidesPerView: 1.5,
    autoplay: { delay: 3000, disableOnInteraction: false },
    breakpoints: {
      320: { slidesPerView: 1.5 },
      575: { slidesPerView: 2.5 },
      767: { slidesPerView: 3 },
      991: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    },
  },
  clients: {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: { delay: 3000, disableOnInteraction: false },
    breakpoints: {
      320: { slidesPerView: 2 },
      575: { slidesPerView: 3 },
      767: { slidesPerView: 4 },
    },
  },
  testimonials: {
    loop: true,
    speed: 800,
    autoplay: { delay: 4500, disableOnInteraction: false },
  },
};

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === "true" || existing.getAttribute("data-loaded") === "true") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

function ensureStylesheet(href) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`link[rel="stylesheet"][href="${href}"]`);
    if (existing) {
      const finish = () => {
        existing.media = "all";
        resolve();
      };
      if (existing.sheet || existing.media === "all") {
        finish();
        return;
      }
      existing.addEventListener("load", finish, { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.onload = () => resolve();
    link.onerror = reject;
    document.head.appendChild(link);
  });
}

function maxSlidesPerView(options = {}) {
  const values = [options.slidesPerView];
  if (options.breakpoints) {
    Object.values(options.breakpoints).forEach((bp) => values.push(bp.slidesPerView));
  }
  let max = 1;
  for (const value of values) {
    if (typeof value === "number" && value > max) max = value;
  }
  return max;
}

function withSafeLoop(el, options = {}) {
  const next = { ...options };
  if (!next.loop || !el) return next;
  const count = el.querySelectorAll(".swiper-slide").length;
  const needed = Math.ceil(maxSlidesPerView(next)) * 2;
  if (count < needed) next.loop = false;
  return next;
}

function presetOptions(preset, el) {
  const options = { ...PRESETS[preset] };
  if (preset === "testimonials") {
    const parent = el.parentElement;
    options.navigation = {
      nextEl: parent?.querySelector(".swiper1-button-next"),
      prevEl: parent?.querySelector(".swiper1-button-prev"),
    };
  }
  return options;
}

export default function BoundSwiper({ preset, className, children }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || !PRESETS[preset]) return undefined;

    let cancelled = false;

    (async () => {
      await ensureStylesheet(SWIPER_CSS);
      await loadScript(SWIPER_JS);
      if (cancelled || !window.Swiper || el.swiper) return;

      el.dataset.swiperBound = "1";
      new window.Swiper(el, withSafeLoop(el, presetOptions(preset, el)));

      if (cancelled && el.swiper) {
        el.swiper.destroy(true, true);
        delete el.dataset.swiperBound;
      }
    })().catch((error) => {
      console.error("Failed to initialize carousel", error);
    });

    return () => {
      cancelled = true;
      if (el.swiper) el.swiper.destroy(true, true);
      delete el.dataset.swiperBound;
    };
  }, [preset]);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}
