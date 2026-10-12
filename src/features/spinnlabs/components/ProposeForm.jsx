"use client";

import { useState } from "react";
import { proposePage } from "../data/spinnlabs";

function autoCompleteFor(field) {
  if (field.name === "full_name") return "name";
  if (field.name === "email") return "email";
  if (field.name === "phone") return "tel";
  if (field.name === "project_name") return "organization";
  return undefined;
}

function ProposeField({ field }) {
  const isTextarea = field.type === "textarea";

  return (
    <div>
      <label className="propose-field-label" htmlFor={field.id}>
        <span className="q-num">{field.number}</span>
        {field.label}
        {field.required ? <span className="req"> *</span> : null}
      </label>
      {isTextarea ? (
        <textarea
          id={field.id}
          name={field.name}
          rows={field.required ? 4 : 3}
          required={Boolean(field.required)}
          placeholder={field.placeholder}
          className="propose-textarea"
        />
      ) : (
        <input
          id={field.id}
          name={field.name}
          type={field.type || "text"}
          required={Boolean(field.required)}
          placeholder={field.placeholder}
          autoComplete={autoCompleteFor(field)}
          className="propose-input"
        />
      )}
    </div>
  );
}

export default function ProposeForm() {
  const { sidebar, form } = proposePage;
  const [status, setStatus] = useState(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget;
    setPending(true);
    setStatus({ type: "pending", message: "Submitting.." });

    try {
      const response = await fetch("/api/startups/propose", {
        method: "POST",
        body: new FormData(formEl),
      });
      const data = await response.json();
      const ok = data.status === 1;
      setStatus({
        type: ok ? "success" : "error",
        message:
          data.msg ||
          (ok ? "Thank you. We will review your idea." : "Please try again."),
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
    <section className="propose-form bg-light">
      <div className="container">
        <div className="propose-form__layout">
          <aside>
            <div className="propose-form-sidebar">
              <h2>{sidebar.title}</h2>
              <p>{sidebar.text}</p>
              <ul className="propose-step-list">
                {sidebar.steps.map((step, index) => (
                  <li key={step}>
                    <span className="step-num">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <p className="propose-form-note">
                <i className="fa-solid fa-circle-info me-1"></i>
                Required fields are marked with <span className="text-white font-semibold">*</span>.
              </p>
            </div>
          </aside>

          <div className="propose-form-card">
            <div className="propose-form-card__head">
              <h2>{form.title}</h2>
              <p>{form.text}</p>
            </div>

            <form method="POST" onSubmit={onSubmit}>
              <input
                type="text"
                name="companyWebsite"
                tabIndex={-1}
                autoComplete="off"
                hidden
                aria-hidden="true"
              />
              {status ? (
                <div className="dzFormMsg" aria-live="polite">
                  <div
                    className={`gen alert dz-alert ${
                      status.type === "error" ? "alert-danger" : "alert-success"
                    }`}
                  >
                    {status.message}
                  </div>
                </div>
              ) : null}

              {form.sections.map((section) => (
                <div key={section.title} className="propose-form-section">
                  <div className="propose-section-head">
                    <span className="propose-section-icon">
                      <i className={section.icon}></i>
                    </span>
                    <div>
                      <h3>{section.title}</h3>
                      <p>{section.text}</p>
                    </div>
                  </div>
                  <div
                    className={
                      section.columns === 2
                        ? "propose-form-grid two-col"
                        : "propose-form-grid"
                    }
                  >
                    {section.fields.map((field) => (
                      <ProposeField key={field.id} field={field} />
                    ))}
                  </div>
                </div>
              ))}

              <div className="propose-form-footer">
                <p className="propose-form-note">{form.note}</p>
                <button
                  type="submit"
                  disabled={pending}
                  className="propose-submit-btn"
                >
                  {pending ? "Submitting" : form.submitLabel}
                  <span className="btn-icon">
                    <i className="feather icon-arrow-right"></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
