"use client";

import { useState } from "react";
import { roundtablePage } from "../data/roundtable";

function Field({ name, id, label, type = "text" }) {
  return (
    <div className="w-full mb-7.5">
      <div className="relative">
        <input
          name={name}
          type={type}
          className={`py-3.75 text-lg text-left text-white border-b-2 border-white duration-300 focus:border-white placeholder:text-white/0 peer w-full${
            type === "tel" ? " dz-number" : ""
          }`}
          id={id}
          placeholder={label}
          required
        />
        <label
          className="absolute left-0 top-3.75 text-lg text-white duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5.5 peer-focus:text-white peer-placeholder-shown:text-white pointer-events-none"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    </div>
  );
}

export default function RoundtableForm() {
  const { form } = roundtablePage;
  const [status, setStatus] = useState(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const data = new FormData(formEl);
    const organization = String(data.get("dzOrganization") || "").trim();
    data.set(
      "dzMessage",
      `VISO Roundtable Series registration. Organization: ${organization || "Not provided"}.`,
    );
    data.set("dzToDo", "Roundtable");
    setPending(true);
    setStatus({ type: "pending", message: "Submitting.." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      const ok = result.status === 1;
      setStatus({
        type: ok ? "success" : "error",
        message:
          result.msg ||
          (ok ? "Thank you. We will confirm your registration." : "Please try again."),
      });
      if (ok) formEl.reset();
    } catch {
      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or email support@spsnet.com.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="form-wrapper style-1">
      <div
        className="form-primary-panel sm:rounded-3xl rounded-xxl xl:py-12.5 xl:px-10 py-8.75 px-7.5 bg-primary bg-cover relative"
        style={{
          "--form-panel-bg": "url(/assets/images/background/bg02.webp)",
        }}
      >
        <div className="sm:mb-7.5 mb-5">
          <h2 className="sm:text-2xxl text-xl text-white mb-2">{form.title}</h2>
          <p className="text-white/80 mb-0">{form.text}</p>
        </div>
        <form method="POST" onSubmit={onSubmit}>
          <input type="hidden" name="dzToDo" value="Roundtable" />
          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
            <label htmlFor="roundtableWebsite">Company website</label>
            <input
              type="text"
              name="companyWebsite"
              id="roundtableWebsite"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div className="dzFormMsg" aria-live="polite">
            {status ? (
              <div
                className={`gen alert dz-alert ${
                  status.type === "error" ? "alert-danger" : "alert-success"
                }`}
              >
                {status.message}
              </div>
            ) : null}
          </div>
          <Field name="dzName" id="roundtableName" label="Your Name" />
          <Field name="dzEmail" id="roundtableEmail" label="Email Address" type="email" />
          <Field name="dzPhoneNumber" id="roundtablePhone" label="Phone Number" type="tel" />
          <Field name="dzOrganization" id="roundtableOrg" label="Organization" />
          <button
            type="submit"
            name="submit"
            value="submit"
            disabled={pending}
            className="btn btn-lg btn-icon btn-white group"
          >
            {pending ? "Sending" : "Register"}
            <span className="size-11 min-w-11 bg-secondary text-white rounded-2lg inline-flex items-center justify-center -my-2.75 -mr-4.5 ml-3 duration-500 group-hover:bg-white group-hover:text-secondary">
              <i className="feather icon-arrow-right group-hover:animate-toRightFromLeft"></i>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
