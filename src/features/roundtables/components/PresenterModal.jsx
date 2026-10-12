"use client";

import { useEffect, useState } from "react";
import { roundtablePage } from "../data/roundtable";

export default function PresenterModal() {
  const [openId, setOpenId] = useState(null);
  const presenter = roundtablePage.hosts.find((host) => host.id === openId);

  useEffect(() => {
    function onClick(event) {
      const trigger = event.target.closest("[data-open-presenter]");
      if (trigger) {
        event.preventDefault();
        setOpenId(trigger.getAttribute("data-open-presenter"));
        return;
      }
      if (event.target.closest("[data-presenter-dialog]")) return;
      if (event.target.closest("[data-close-presenter]")) {
        setOpenId(null);
      }
    }
    function onKey(event) {
      if (event.key === "Escape") setOpenId(null);
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = presenter ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [presenter]);

  if (!presenter) return null;

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-secondary/80 backdrop-blur-sm"
      data-close-presenter=""
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-white p-8 sm:p-10 shadow-20"
        role="dialog"
        aria-modal="true"
        aria-labelledby="presenter-modal-title"
        data-presenter-dialog=""
      >
        <button
          type="button"
          className="absolute top-5 right-5 size-10 rounded-full bg-light text-secondary hover:bg-primary hover:text-white duration-300"
          data-close-presenter=""
          aria-label="Close"
        >
          <i className="feather icon-x"></i>
        </button>
        <div className="flex flex-col items-center text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-4 self-start">
            About {presenter.name}
          </p>
          <img
            src={presenter.image}
            alt={presenter.name}
            width="140"
            height="140"
            className="size-32 rounded-full object-cover border-4 border-primary mb-5"
          />
          <h2 id="presenter-modal-title" className="text-2xxl font-bold mb-1">
            {presenter.name}
          </h2>
          <p className="text-secondary font-medium mb-1">{presenter.title}</p>
          <p className="text-bodycolor text-sm mb-5">{presenter.org}</p>
          <p className="text-bodycolor text-base text-justify mb-0">{presenter.bio}</p>
        </div>
      </div>
    </div>
  );
}
