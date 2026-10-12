"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CONTACT_PATH } from "@/features/contact/constants/contact.constants";
import { internshipNav } from "../data/internship";

export default function InternshipNav({ activeId = "how-it-works" }) {
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    function onClick() {
      setOpenId(null);
    }
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <section className="overflow-visible border-b border-black/10 bg-white py-1 shadow-sm">
      <nav className="container overflow-visible" aria-label="Internship program sections">
        <ul className="flex flex-wrap items-center gap-2 py-3 mb-0 lg:gap-6">
          {internshipNav.map((item) => {
            const open = openId === item.id;
            const current = item.id === activeId;
            return (
              <li
                key={item.id}
                className="relative"
                onMouseEnter={() => setOpenId(item.id)}
                onMouseLeave={() => setOpenId(null)}
              >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border font-medium duration-300 ${
                      current
                        ? "bg-primary text-white border-primary"
                        : "border-black/15 text-bodycolor hover:bg-primary hover:text-white hover:border-primary"
                    }`}
                    aria-current={current ? "page" : undefined}
                    aria-expanded={open}
                    aria-haspopup="true"
                    onClick={(event) => {
                      event.stopPropagation();
                      setOpenId(open ? null : item.id);
                    }}
                  >
                    <i className={`${item.icon} text-xl`} aria-hidden="true"></i>
                    <span className="text-sm font-bold uppercase tracking-wide">{item.label}</span>
                  </Link>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    display: open ? "block" : "none",
                    position: "absolute",
                    zIndex: 9999,
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                  className="w-60 shadow-2xl rounded-b-xl border border-gray-200 pt-2"
                  onClick={(event) => event.stopPropagation()}
                >
                  <ul
                    className="flex flex-col m-0 p-0 list-none rounded-b-xl"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    {item.items.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="block px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-primary font-semibold text-left"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
          <li>
            <Link
              href={CONTACT_PATH}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/15 text-bodycolor font-medium hover:bg-primary hover:text-white hover:border-primary duration-300"
            >
              <i className="feather icon-mail text-xl" aria-hidden="true"></i>
              <span className="text-sm font-bold uppercase tracking-wide">Contact Us</span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
