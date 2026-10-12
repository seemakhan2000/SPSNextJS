"use client";

import { useEffect } from "react";

export default function Error({ error, retry, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const recover = typeof retry === "function" ? retry : reset;

  return (
    <section className="2xxl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10 pb-17.5">
      <div className="container text-center">
        <h1 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold capitalize mb-4">
          Something went wrong
        </h1>
        <p className="sm:text-lg text-base font-light mb-7.5">
          The page failed to load. Try again, or return to the homepage.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button type="button" className="btn btn-primary btn-rounded" onClick={() => recover?.()}>
            Try again
          </button>
          <a href="/" className="btn btn-secondary btn-rounded">
            Back to home
          </a>
        </div>
      </div>
    </section>
  );
}
