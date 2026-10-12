"use client";

import { useState } from "react";

function Field({
  name,
  id,
  label,
  type = "text",
  half = true,
  required = true,
}) {
  const widthClass = half
    ? "sm:w-1/2 w-full mb-7.5"
    : "w-full mb-7.5";

  const inputClass =
    "py-3.75 text-lg text-left text-white border-b-2 border-white duration-300 focus:border-white placeholder:text-white/0 peer w-full";

  const labelClass =
    "absolute left-0 top-3.75 text-lg text-white duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5.5 peer-focus:text-white peer-placeholder-shown:text-white pointer-events-none";

  return (
    <div className={widthClass}>
      <div className="relative">

        {type === "textarea" ? (
          <textarea
            name={name}
            className={inputClass}
            id={id}
            rows="6"
            placeholder={label}
            required={required}
          />
        ) : (
          <input
            name={name}
            type={type}
            className={`${inputClass}${
              type === "tel" ? " dz-number" : ""
            }`}
            id={id}
            placeholder={label}
            required={required}
          />
        )}

        <label
          className={labelClass}
          htmlFor={id}
        >
          {label}
        </label>

      </div>
    </div>
  );
}

export default function ContactForm({
  title,
  subtitle,
}) {
  const [status, setStatus] = useState(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    setPending(true);

    setStatus({
      type: "pending",
      message: "Submitting..",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });

      const data = await response.json();

      const ok = data.status === 1;

      setStatus({
        type: ok ? "success" : "error",
        message:
          data.msg ||
          (ok
            ? "Thank you for contacting SPS."
            : "Please try again."),
      });

      if (ok) {
        form.reset();
      }
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
        className="form-primary-panel sm:rounded-3xl rounded-xxl xl:py-12.5 xl:px-10 py-7.5 px-6.25 bg-primary bg-cover relative"
        style={{
          "--form-panel-bg":
            "url(/assets/images/background/bg02.webp)",
        }}
      >
        <div className="sm:mb-7.5 mb-5">
          <h2 className="xl:text-3xxl sm:text-3xxl text-2xxl text-white mb-0">
            {title}
          </h2>

          <p className="text-lg text-white mb-0 font-medium">
            {subtitle}
          </p>
        </div>

        <form
          method="POST"
          onSubmit={onSubmit}
        >
          <input
            type="hidden"
            name="dzToDo"
            value="Contact"
          />

          <div
            className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
            aria-hidden="true"
          >
            <label htmlFor="companyWebsite">
              Company website
            </label>

            <input
              type="text"
              name="companyWebsite"
              id="companyWebsite"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div
            className="dzFormMsg"
            aria-live="polite"
          >
            {status ? (
              <div
                className={`gen alert dz-alert ${
                  status.type === "error"
                    ? "alert-danger"
                    : "alert-success"
                }`}
              >
                {status.message}
              </div>
            ) : null}
          </div>

          <div className="row">
            <Field
              name="dzFirstName"
              id="contactFirstName"
              label="First Name"
            />

            <Field
              name="dzLastName"
              id="contactLastName"
              label="Last Name"
            />

            <Field
              name="dzEmail"
              id="contactEmail"
              label="Your Email"
              type="email"
            />

            <Field
              name="dzPhoneNumber"
              id="contactPhone"
              label="Phone Number"
              type="tel"
              required={false}
            />

            <Field
              name="dzMessage"
              id="contactMessage"
              label="Message"
              type="textarea"
              half={false}
            />

            <div className="w-full">
              <button
                type="submit"
                name="submit"
                value="submit"
                disabled={pending}
                className="btn btn-lg btn-icon btn-white group"
              >
                {pending ? "Sending" : "Submit"}

                <span className="size-11 min-w-11 bg-secondary text-white rounded-2lg inline-flex items-center justify-center -my-2.75 -mr-4.5 ml-3 duration-500 group-hover:bg-white group-hover:text-secondary">
                  <i className="feather icon-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}