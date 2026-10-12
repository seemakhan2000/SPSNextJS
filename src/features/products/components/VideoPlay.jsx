"use client";

import { useEffect, useState } from "react";

export default function VideoPlay({ src, poster, label = "Play Video", variant = "inline" }) {
  const [open, setOpen] = useState(false);
  const stacked = variant === "stacked";

  useEffect(() => {
    if (!open) return undefined;
    function onKey(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.classList.add("no-scroll");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  if (!src) return null;

  return (
    <>
      <div
        className={
          stacked
            ? "relative size-full min-h-50 rounded-2xl overflow-hidden aspect-video bg-cover bg-center flex items-center justify-center"
            : "sm:pt-5 sm:p-6.25 p-3.75 rounded-2xl bg-cover bg-center relative overflow-hidden flex items-center justify-center"
        }
        style={{
          backgroundColor: "#1a1a1a",
          backgroundImage: `url('${poster}')`,
        }}
      >
        <div className="absolute inset-0 bg-secondary/70"></div>
        <div
          className={
            stacked
              ? "relative z-10 flex flex-col items-center gap-3"
              : "relative flex items-center z-10"
          }
        >
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative inline-block size-13.75 min-w-13.75 leading-13.75 text-center text-xl bg-white text-primary rounded-full"
            aria-label={label}
          >
            <i className="fa fa-play"></i>
          </button>
          <span
            className={
              stacked
                ? "text-white font-bold text-base tracking-wide"
                : "text-base font-medium inline-block ml-2.5 text-white"
            }
          >
            {label}
          </span>
        </div>
      </div>
      {open ? (
        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center p-5 bg-secondary/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <iframe
              src={`${src}${src.includes("?") ? "&" : "?"}autoplay=1`}
              title={label}
              className="size-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
