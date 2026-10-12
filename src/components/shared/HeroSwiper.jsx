"use client";

import { useEffect, useRef } from "react";

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === "true") {
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

function loadSlideHeroImage(slide) {
  if (!slide) return;
  const img = slide.querySelector("img.hero-slide-img[data-src]");
  if (!img) return;
  img.src = img.dataset.src;
  img.removeAttribute("data-src");
  img.loading = "lazy";
}

function loadAndPlaySlideVideo(slide) {
  if (!slide || !window.matchMedia("(min-width: 1024px)").matches) return;
  const video = slide.querySelector("video");
  if (!video) return;
  const source = video.querySelector("source");
  if (source && source.dataset.src && !video.dataset.loaded) {
    source.src = source.dataset.src;
    video.load();
    video.dataset.loaded = "true";
  }
  video.play().catch(() => {});
}

function pauseAllOtherVideos(swiperInstance, activeSlide) {
  if (!window.matchMedia("(min-width: 1024px)").matches) return;
  swiperInstance.slides.forEach((slide) => {
    if (slide !== activeSlide) {
      const video = slide.querySelector("video");
      if (video) video.pause();
    }
  });
}

export default function HeroSwiper({ children }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return undefined;

    let cancelled = false;

    (async () => {
      await loadScript("/assets/vendor/swiper/swiper-bundle.min.js");
      if (cancelled || !window.Swiper || el.swiper) return;

      new window.Swiper(el, {
        loop: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: el.querySelector(".swiper-button-next"),
          prevEl: el.querySelector(".swiper-button-prev"),
        },
        on: {
          init() {
            const activeSlide = this.el.querySelector(".swiper-slide-active");
            loadSlideHeroImage(activeSlide);
            loadAndPlaySlideVideo(activeSlide);
          },
          slideChangeTransitionStart() {
            const activeSlide = this.el.querySelector(".swiper-slide-active");
            loadSlideHeroImage(activeSlide);
            loadAndPlaySlideVideo(activeSlide);
            pauseAllOtherVideos(this, activeSlide);
          },
        },
      });
    })().catch((error) => {
      console.error("Failed to initialize hero carousel", error);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div ref={rootRef} className="swiper heroSwiper relative overflow-hidden w-full">
      {children}
    </div>
  );
}
