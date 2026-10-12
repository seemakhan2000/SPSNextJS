"use client";

import { useEffect, useState } from "react";
import { INTRO, SLIDES } from "../data/homeData";

function IconChevron({ direction }) {
  const points = direction === "left" ? "15 6 9 12 15 18" : "9 6 15 12 9 18";
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <polyline points={points} />
    </svg>
  );
}

function IconArrow({ direction }) {
  if (direction === "left") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const current = SLIDES[active];

  const goTo = (index) => {
    setActive(index);
    setProgress(0);
  };

  const nextSlide = () => goTo((active + 1) % SLIDES.length);
  const prevSlide = () => goTo((active - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((value) => (value >= 100 ? value : value + 1));
    }, 100);
    return () => window.clearInterval(timer);
  }, [active]);

  useEffect(() => {
    if (progress < 100) return undefined;
    const timer = window.setTimeout(() => {
      setActive((index) => (index + 1) % SLIDES.length);
      setProgress(0);
    }, 80);
    return () => window.clearTimeout(timer);
  }, [progress]);

  return (
    <section className="live-hero" aria-label="Featured solutions">
      <div className="live-hero__media" aria-hidden="true">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`live-hero__slide${index === active ? " is-active" : ""}`}
          >
            <img src={slide.poster} alt="" />
            {index === active ? (
              <video muted loop playsInline autoPlay poster={slide.poster}>
                <source src={slide.video} type="video/webm" />
              </video>
            ) : null}
          </div>
        ))}
        <div className="live-hero__shade" />
        <div className="live-hero__shade-left" />
      </div>

      <button type="button" className="live-hero__nav live-hero__nav--prev" onClick={prevSlide} aria-label="Previous slide">
        <IconChevron direction="left" />
      </button>
      <button type="button" className="live-hero__nav live-hero__nav--next" onClick={nextSlide} aria-label="Next slide">
        <IconChevron direction="right" />
      </button>

      <div className="live-hero__inner">
        <div className="live-hero__copy">
          <p className="live-hero__eyebrow">
            <span />
            {INTRO.eyebrow}
          </p>
          <h1>
            {INTRO.title} <span>{INTRO.highlight}</span>
          </h1>
          <p className="live-hero__lead">{INTRO.description}</p>
          <div className="live-hero__actions">
            <a className="live-hero__btn live-hero__btn--primary" href={INTRO.primaryHref}>
              {INTRO.primaryLabel}
              <IconArrow direction="right" />
            </a>
            <button type="button" className="live-hero__btn live-hero__btn--ghost" data-open-appointment="">
              {INTRO.secondaryLabel}
            </button>
          </div>
        </div>

        <div className="live-hero__card">
          <img src={current.poster} alt="" />
          <video key={current.video} muted loop playsInline autoPlay poster={current.poster}>
            <source src={current.video} type="video/webm" />
          </video>
          <div className="live-hero__card-shade" />
          <div className="live-hero__card-body">
            <div className="live-hero__card-top">
              <span className="live-hero__pill">
                <span />
                Live preview
              </span>
              <span className="live-hero__count">
                {String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
              </span>
            </div>
            <div>
              <p className="live-hero__card-kicker">{current.category}</p>
              <h2>
                {current.title} <span>{current.highlight}</span>
              </h2>
              <p>{current.description}</p>
              <div className="live-hero__card-controls">
                <div>
                  <button type="button" onClick={prevSlide} aria-label="Previous slide">
                    <IconArrow direction="left" />
                  </button>
                  <button type="button" onClick={nextSlide} aria-label="Next slide">
                    <IconArrow direction="right" />
                  </button>
                </div>
                <div className="live-hero__dots">
                  {SLIDES.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      className={index === active ? "is-active" : ""}
                      onClick={() => goTo(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="live-hero__progress">
                <span style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
