"use client";

import { useState } from "react";

export default function ProductAccordion({ items, heading = "Frequently Asked Questions" }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="sm:mb-8.75 mb-5">
      {heading ? (
        <h2 className="md:text-2xxl text-xl sm:mb-5 mb-3 capitalize">{heading}</h2>
      ) : null}
      <div className="myAccordion style-1">
        {items.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={item.question} className="accordion-item mb-3">
              <button
                type="button"
                className={`accordion-header w-full text-left ${isOpen ? "open" : ""}`}
                onClick={() => setOpen(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <h3 className="accordion-button mb-0">{item.question}</h3>
                <span className={`arrow ${isOpen ? "active" : ""}`}>
                  <i
                    className={`icon feather icon-chevron-right ${isOpen ? "hidden" : "block"}`}
                  ></i>
                  <i
                    className={`icon feather icon-chevron-down ${isOpen ? "block" : "hidden"}`}
                  ></i>
                </span>
              </button>
              {isOpen ? (
                <div className="accordion-content show">
                  <div className="content-inner">
                    <p className="mb-0">{item.answer}</p>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
