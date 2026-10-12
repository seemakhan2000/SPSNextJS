"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { verticalFamilies, verticalPath } from "../data/verticals";

export default function VerticalsNav({ activeFamily = null, activeSlug = null }) {
  const defaultId = activeFamily || verticalFamilies[0].id;
  const [previewId, setPreviewId] = useState(defaultId);
  const panelId = useId();

  useEffect(() => {
    setPreviewId(activeFamily || verticalFamilies[0].id);
  }, [activeFamily]);

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") {
        setPreviewId(activeFamily || verticalFamilies[0].id);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeFamily]);

  const preview =
    verticalFamilies.find((family) => family.id === previewId) || verticalFamilies[0];
  const activeHref =
    activeFamily && activeSlug ? verticalPath(activeFamily, activeSlug) : null;

  return (
    <section
      className="verticals-nav"
      onMouseLeave={() => setPreviewId(activeFamily || verticalFamilies[0].id)}
    >
      <nav className="verticals-nav__bar" aria-label="Industry verticals">
        <ul className="verticals-nav__families">
          {verticalFamilies.map((family) => {
            const current = family.id === activeFamily;
            const previewing = family.id === previewId;
            return (
              <li key={family.id} className="verticals-nav__family">
                <button
                  type="button"
                  className={`verticals-nav__trigger${previewing ? " is-active" : ""}${current ? " is-current" : ""}`}
                  aria-expanded={previewing}
                  aria-controls={panelId}
                  onMouseEnter={() => setPreviewId(family.id)}
                  onFocus={() => setPreviewId(family.id)}
                  onClick={() => setPreviewId(family.id)}
                >
                  <span className="verticals-nav__icon" aria-hidden="true">
                    <i className={family.icon}></i>
                  </span>
                  <span className="verticals-nav__label">{family.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div id={panelId} className="verticals-nav__panel">
        <div className="verticals-nav__panel-inner">
          <p className="verticals-nav__kicker">{preview.label}</p>
          <ul className="verticals-nav__links">
            {preview.items.map((item, index) => {
              const current = item.href === activeHref;
              return (
                <li key={item.href} className="verticals-nav__link-item">
                  {index > 0 ? (
                    <span className="verticals-nav__rule" aria-hidden="true">
                      |
                    </span>
                  ) : null}
                  <Link
                    href={item.href}
                    className={`verticals-nav__link${current ? " is-current" : ""}`}
                    aria-current={current ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
