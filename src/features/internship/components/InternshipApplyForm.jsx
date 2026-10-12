"use client";

import { useMemo, useState } from "react";
import {
  applyPage,
  getRegistrationWindow,
  internshipCities,
  internshipUniversities,
} from "../data/internship-apply";

function Field({ id, label, required, hint, children }) {
  return (
    <div>
      <label className="propose-field-label" htmlFor={id}>
        {label}
        {required ? <span className="req"> *</span> : null}
      </label>
      {children}
      {hint ? <p className="internship-apply-hint">{hint}</p> : null}
    </div>
  );
}

function TextInput({ id, name, type = "text", required, placeholder, autoComplete }) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className="propose-input"
    />
  );
}

function SelectInput({ id, name, required, placeholder, options, value, onChange }) {
  const controlled = value !== undefined;
  return (
    <select
      id={id}
      name={name}
      required={required}
      value={controlled ? value : undefined}
      defaultValue={controlled ? undefined : ""}
      onChange={onChange}
      className="propose-input"
    >
      <option value="">{placeholder}</option>
      {options.map((option) =>
        typeof option === "string" ? (
          <option key={option} value={option}>
            {option}
          </option>
        ) : (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        )
      )}
    </select>
  );
}

function FilterSelect({ id, name, required, placeholder, options, value, onChange }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((item) => item.toLowerCase().includes(q));
  }, [options, query]);

  return (
    <div className="internship-filter-select">
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={`Search ${placeholder.toLowerCase()}`}
        className="propose-input internship-filter-select__search"
        aria-label={`Search ${placeholder}`}
      />
      <select
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="propose-input"
      >
        <option value="">{placeholder}</option>
        {filtered.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
        {!filtered.includes("Other") ? <option value="Other">Other</option> : null}
      </select>
    </div>
  );
}

function FileInput({ id, name, required, accept, hint, value, onChange }) {
  return (
    <label className="internship-file" htmlFor={id}>
      <input
        id={id}
        name={name}
        type="file"
        required={required}
        accept={accept}
        onChange={onChange}
      />
      <span className="internship-file__btn">Choose file</span>
      <span className="internship-file__name">{value ? value.name : "No file chosen"}</span>
      {hint ? <span className="internship-file__hint">{hint}</span> : null}
    </label>
  );
}

function OptionCard({ kind, item, selected, onSelect }) {
  const value = `${kind}:${item.id}`;
  return (
    <label className={`internship-option${item.waitlist ? " is-waitlist" : ""}${selected === value ? " is-selected" : ""}`}>
      <input
        type="radio"
        name="internship_option"
        value={value}
        checked={selected === value}
        onChange={() => onSelect(value)}
      />
      <span>
        <strong>{item.title}</strong>
        {item.start ? <em>{item.start}</em> : null}
        {item.waitlist ? <em>{applyPage.options.waitlist}</em> : null}
      </span>
    </label>
  );
}

function GroupAccordion({ title, children, defaultOpen = false }) {
  return (
    <details className="internship-acc" open={defaultOpen || undefined}>
      <summary>{title}</summary>
      <div className="internship-acc__body">{children}</div>
    </details>
  );
}

export default function InternshipApplyForm() {
  const { intake, form, pathGuide, options, videoInstructions } = applyPage;
  const windowInfo = useMemo(() => getRegistrationWindow(), []);
  const [location, setLocation] = useState("PK");
  const [university, setUniversity] = useState("");
  const [city, setCity] = useState("");
  const [field, setField] = useState("");
  const [ranking, setRanking] = useState("");
  const [selected, setSelected] = useState("");
  const [resume, setResume] = useState(null);
  const [transcript, setTranscript] = useState(null);
  const [picture, setPicture] = useState(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const [pending, setPending] = useState(false);

  const selectedKind = selected.split(":")[0];
  const needsCityList = location === "PK";
  const needsOtherCity = location === "US" || location === "Others" || city === "Other";
  const needsOtherUniversity = university === "Other";
  const needsOtherField = field === "Others";
  const needsOtherRanking = ranking === "Others";

  async function onSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget;

    if (!selected) {
      setStatus({
        type: "error",
        message: "Please select one option from Projects, Competencies, or Specializations.",
      });
      formEl.querySelector("#internship-path")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (resume && resume.type !== "application/pdf") {
      setStatus({ type: "error", message: "Please upload your resume as a PDF (max 5MB)." });
      return;
    }
    if (transcript && transcript.type !== "application/pdf") {
      setStatus({ type: "error", message: "Please upload your transcript as a PDF (max 5MB)." });
      return;
    }
    if (resume && resume.size > 5 * 1024 * 1024) {
      setStatus({ type: "error", message: "Resume must be 5MB or smaller." });
      return;
    }
    if (transcript && transcript.size > 5 * 1024 * 1024) {
      setStatus({ type: "error", message: "Transcript must be 5MB or smaller." });
      return;
    }
    if (picture && picture.size > 2 * 1024 * 1024) {
      setStatus({ type: "error", message: "Picture must be 2MB or smaller." });
      return;
    }

    setPending(true);
    setStatus({ type: "pending", message: "Submitting.." });

    try {
      const response = await fetch("/api/internship/apply", {
        method: "POST",
        body: new FormData(formEl),
      });
      const data = await response.json();
      const ok = data.status === 1;
      setStatus({
        type: ok ? "success" : "error",
        message:
          data.msg ||
          (ok
            ? "Thank you. Your internship application has been received."
            : "Please try again."),
      });
      if (ok) {
        formEl.reset();
        setLocation("PK");
        setUniversity("");
        setCity("");
        setField("");
        setRanking("");
        setSelected("");
        setResume(null);
        setTranscript(null);
        setPicture(null);
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or email internship@spsnet.com.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="internship-apply propose-form bg-light">
      <div className="container">
        <div className="internship-apply__layout">
          <aside id="intake" className="scroll-mt-20">
            <div className="propose-form-sidebar internship-apply-intake">
              <div className="internship-apply-intake__head">
                <div>
                  <p className="internship-apply-kicker">{intake.windowLabel}</p>
                  <h2>{intake.title}</h2>
                </div>
                <p className="internship-apply-window">{windowInfo.headline}</p>
              </div>
              <div className="internship-apply-intake__copy">
                <p>{intake.cycle}</p>
                <p>{intake.autoUpdate}</p>
                <p>{intake.review}</p>
              </div>
              <p className="propose-form-note">{intake.complete}</p>
            </div>
          </aside>

          <div className="propose-form-card">
            <div className="propose-form-card__head">
              <h2>{form.title}</h2>
              <p>{form.text}</p>
            </div>

            <form method="POST" onSubmit={onSubmit} encType="multipart/form-data">
              <input
                type="text"
                name="companyWebsite"
                tabIndex={-1}
                autoComplete="off"
                hidden
                aria-hidden="true"
              />
              <input type="hidden" name="internship_cohort" value="2026" />

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

              <div className="propose-form-section">
                <div className="propose-section-head">
                  <span className="propose-section-icon">
                    <i className="feather icon-user"></i>
                  </span>
                  <div>
                    <h3>Personal Information</h3>
                    <p>Tell us who you are and how we can reach you.</p>
                  </div>
                </div>
                <div className="propose-form-grid two-col">
                  <Field id="internship_cohort_display" label="Internship" required>
                    <select
                      id="internship_cohort_display"
                      className="propose-input"
                      value="2026"
                      disabled
                    >
                      <option value="2026">2026</option>
                    </select>
                  </Field>
                  <Field id="txt_fname" label="First Name" required>
                    <TextInput id="txt_fname" name="txt_fname" required autoComplete="given-name" />
                  </Field>
                  <Field id="txt_lname" label="Last Name" required>
                    <TextInput id="txt_lname" name="txt_lname" required autoComplete="family-name" />
                  </Field>
                  <Field id="txt_email" label="Email" required>
                    <TextInput
                      id="txt_email"
                      name="txt_email"
                      type="email"
                      required
                      autoComplete="email"
                    />
                  </Field>
                  <Field id="txt_contact" label="Phone Number" required>
                    <TextInput
                      id="txt_contact"
                      name="txt_contact"
                      type="tel"
                      required
                      autoComplete="tel"
                    />
                  </Field>
                  <Field id="location" label="Location" required>
                    <SelectInput
                      id="location"
                      name="location"
                      required
                      placeholder="Select Location"
                      options={applyPage.locations}
                      value={location}
                      onChange={(event) => {
                        setLocation(event.target.value);
                        setCity("");
                      }}
                    />
                  </Field>
                  {needsCityList ? (
                    <Field id="city" label="City" required>
                      <FilterSelect
                        id="city"
                        name="city"
                        required
                        placeholder="Select a City"
                        options={internshipCities}
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                      />
                    </Field>
                  ) : null}
                  {needsOtherCity ? (
                    <Field id="txt_other" label="City / Other" required>
                      <TextInput id="txt_other" name="txt_other" required placeholder="Enter your city" />
                    </Field>
                  ) : null}
                </div>
              </div>

              <div className="propose-form-section">
                <div className="propose-section-head">
                  <span className="propose-section-icon">
                    <i className="feather icon-book-open"></i>
                  </span>
                  <div>
                    <h3>Academic Information</h3>
                    <p>Share your university, degree, and current standing.</p>
                  </div>
                </div>
                <div className="propose-form-grid two-col">
                  <Field id="txt_university" label="University" required>
                    <FilterSelect
                      id="txt_university"
                      name="txt_university"
                      required
                      placeholder="Select University"
                      options={internshipUniversities}
                      value={university}
                      onChange={(event) => setUniversity(event.target.value)}
                    />
                  </Field>
                  {needsOtherUniversity ? (
                    <Field id="txt_university_other" label="University name" required hint="Please enter university name.">
                      <TextInput id="txt_university_other" name="txt_university_other" required />
                    </Field>
                  ) : null}
                  <Field id="degree_type" label="Degree Pursued" required>
                    <SelectInput
                      id="degree_type"
                      name="degree_type"
                      required
                      placeholder="Select Degree Pursued"
                      options={applyPage.degrees}
                    />
                  </Field>
                  <Field id="degree_majors" label="Major" required>
                    <TextInput id="degree_majors" name="degree_majors" required placeholder="e.g. Computer Science" />
                  </Field>
                  <Field id="txt_cgpa" label="CGPA" required>
                    <TextInput id="txt_cgpa" name="txt_cgpa" required placeholder="e.g. 3.60" />
                  </Field>
                  <Field id="curr_sem" label="Current semester" required>
                    <SelectInput
                      id="curr_sem"
                      name="curr_sem"
                      required
                      placeholder="Select Current semester"
                      options={applyPage.semesters}
                    />
                  </Field>
                  <Field id="txt_ranking" label="Ranking in Class">
                    <SelectInput
                      id="txt_ranking"
                      name="txt_ranking"
                      placeholder="Select Ranking in Class"
                      options={applyPage.rankings}
                      value={ranking}
                      onChange={(event) => setRanking(event.target.value)}
                    />
                  </Field>
                  {needsOtherRanking ? (
                    <Field id="txt_ranking_other" label="Other ranking">
                      <TextInput id="txt_ranking_other" name="txt_ranking_other" />
                    </Field>
                  ) : null}
                  <Field id="department" label="Choose your Field to Apply" required>
                    <SelectInput
                      id="department"
                      name="department"
                      required
                      placeholder="Select Field"
                      options={applyPage.fields}
                      value={field}
                      onChange={(event) => setField(event.target.value)}
                    />
                  </Field>
                  {needsOtherField ? (
                    <Field id="txt_other_field" label="Others" required>
                      <TextInput id="txt_other_field" name="txt_other_field" required />
                    </Field>
                  ) : null}
                  <Field id="role_name" label="Role" required>
                    <SelectInput
                      id="role_name"
                      name="role_name"
                      required
                      placeholder="Select Role"
                      options={applyPage.roles}
                    />
                  </Field>
                </div>
              </div>

              <div id="internship-path" className="propose-form-section scroll-mt-20">
                <div className="propose-section-head">
                  <span className="propose-section-icon">
                    <i className="feather icon-compass"></i>
                  </span>
                  <div>
                    <h3>Selection Instructions</h3>
                    <p>{pathGuide.instruction}</p>
                  </div>
                </div>

                <div className="internship-path-guide">
                  <h4>{pathGuide.title}</h4>
                  <p>{pathGuide.intro}</p>
                  <div className="internship-path-grid">
                    {pathGuide.tracks.map((track) => (
                      <details key={track.id} className="internship-acc">
                        <summary>
                          <span>{track.title}</span>
                          <small>{track.summary}</small>
                        </summary>
                        <div className="internship-acc__body">
                          <p>{track.body}</p>
                          {track.youWill ? (
                            <>
                              {track.youWillTitle ? <h5>{track.youWillTitle}</h5> : null}
                              <ul>
                                {track.youWill.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </>
                          ) : null}
                          {track.examples ? (
                            <>
                              <h5>{track.examplesTitle}</h5>
                              <ul>
                                {track.examples.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </>
                          ) : null}
                          {track.note ? <p>{track.note}</p> : null}
                          {track.why ? (
                            <>
                              <h5>{track.whyTitle}</h5>
                              <p>{track.whyIntro}</p>
                              <ul>
                                {track.why.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </>
                          ) : null}
                          {track.footer ? <p>{track.footer}</p> : null}
                        </div>
                      </details>
                    ))}
                  </div>
                  <div className="internship-path-notes">
                    <article className="internship-note-card">
                      <div className="internship-note-card__head">
                        <span className="internship-note-card__icon">
                          <i className={pathGuide.fit.icon}></i>
                        </span>
                        <div>
                          <h5>{pathGuide.fit.title}</h5>
                          <p>{pathGuide.fit.intro}</p>
                        </div>
                      </div>
                      <ol className="internship-note-steps">
                        {pathGuide.fit.items.map((item) => (
                          <li key={item.step}>
                            <span>{item.step}</span>
                            <div>
                              <strong>{item.title}</strong>
                              <small>{item.text}</small>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </article>
                    <article className="internship-note-card">
                      <div className="internship-note-card__head">
                        <span className="internship-note-card__icon">
                          <i className={pathGuide.choose.icon}></i>
                        </span>
                        <div>
                          <h5>{pathGuide.choose.title}</h5>
                          <p>{pathGuide.choose.intro}</p>
                        </div>
                      </div>
                      <ul className="internship-note-qa">
                        {pathGuide.choose.items.map((item) => (
                          <li key={item.question}>
                            <strong>{item.question}</strong>
                            <span>{item.answer}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                    <article className="internship-note-card">
                      <div className="internship-note-card__head">
                        <span className="internship-note-card__icon">
                          <i className={pathGuide.takeaway.icon}></i>
                        </span>
                        <div>
                          <h5>{pathGuide.takeaway.title}</h5>
                          <p>{pathGuide.takeaway.intro}</p>
                        </div>
                      </div>
                      <ul className="internship-note-takeaways">
                        {pathGuide.takeaway.items.map((item) => (
                          <li key={item.label}>
                            <i className="feather icon-check" aria-hidden="true"></i>
                            <p>
                              <strong>{item.label}</strong> {item.text}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </div>
              </div>

              <div className="propose-form-section">
                <div className="propose-section-head">
                  <span className="propose-section-icon">
                    <i className="feather icon-briefcase"></i>
                  </span>
                  <div>
                    <h3>Projects</h3>
                    <p>
                      Choose Project <span className="internship-counter">{selectedKind === "project" ? "1 / 1" : "0 / 1"}</span>
                    </p>
                  </div>
                </div>
                <p className="internship-apply-hint">{options.help}</p>
                {applyPage.projects.map((group) => (
                  <GroupAccordion key={group.group} title={group.group}>
                    {group.practices.map((practice) => (
                      <div key={practice.name} className="internship-practice">
                        <h4>{practice.name}</h4>
                        {practice.items.map((item) => (
                          <OptionCard
                            key={item.id}
                            kind="project"
                            item={item}
                            selected={selected}
                            onSelect={setSelected}
                          />
                        ))}
                      </div>
                    ))}
                  </GroupAccordion>
                ))}
              </div>

              <div className="propose-form-section">
                <div className="propose-section-head">
                  <span className="propose-section-icon">
                    <i className="feather icon-cpu"></i>
                  </span>
                  <div>
                    <h3>Competencies</h3>
                    <p>
                      Choose Competency <span className="internship-counter">{selectedKind === "competency" ? "1 / 1" : "0 / 1"}</span>
                    </p>
                  </div>
                </div>
                {applyPage.competencies.map((group) => (
                  <GroupAccordion key={group.group} title={group.group}>
                    {group.practices.map((practice) => (
                      <div key={practice.name} className="internship-practice">
                        <h4>{practice.name}</h4>
                        {practice.items.map((item) => (
                          <OptionCard
                            key={item.id}
                            kind="competency"
                            item={item}
                            selected={selected}
                            onSelect={setSelected}
                          />
                        ))}
                      </div>
                    ))}
                  </GroupAccordion>
                ))}
              </div>

              <div className="propose-form-section">
                <div className="propose-section-head">
                  <span className="propose-section-icon">
                    <i className="feather icon-award"></i>
                  </span>
                  <div>
                    <h3>Specializations</h3>
                    <p>
                      Choose Specialization{" "}
                      <span className="internship-counter">
                        {selectedKind === "specialization" ? "Selected" : "Optional — track already selected"}
                      </span>
                    </p>
                  </div>
                </div>
                <p className="internship-apply-hint">{options.specializationHint}</p>
                <p className="internship-apply-hint">{options.optionalNote}</p>
                {applyPage.specializations.map((vendor) => (
                  <GroupAccordion key={vendor.vendor} title={vendor.vendor}>
                    {vendor.products.map((product) => (
                      <div key={product.name} className="internship-practice">
                        <h4>{product.name}</h4>
                        {product.items.map((item) => (
                          <OptionCard
                            key={item.id}
                            kind="specialization"
                            item={item}
                            selected={selected}
                            onSelect={setSelected}
                          />
                        ))}
                      </div>
                    ))}
                  </GroupAccordion>
                ))}
              </div>

              <div className="propose-form-section">
                <div className="propose-section-head">
                  <span className="propose-section-icon">
                    <i className="feather icon-zap"></i>
                  </span>
                  <div>
                    <h3>Micro-Internships</h3>
                    <p>Apply to Micro-Internships</p>
                  </div>
                </div>
                <p className="internship-empty">{options.microEmpty}</p>
                <div className="propose-form-grid two-col">
                  <Field id="project_title" label="Project Title">
                    <TextInput id="project_title" name="project_title" />
                  </Field>
                  <Field id="support_type" label="Type of Support Needed">
                    <SelectInput
                      id="support_type"
                      name="support_type"
                      placeholder="Select Support Type"
                      options={applyPage.supportTypes}
                    />
                  </Field>
                  <div className="internship-span-2">
                    <Field id="project_description" label="Project Description">
                      <textarea
                        id="project_description"
                        name="project_description"
                        className="propose-textarea"
                        rows={4}
                      />
                    </Field>
                  </div>
                  <Field id="txt_reference_professor_name" label="Reference Professor Name">
                    <TextInput id="txt_reference_professor_name" name="txt_reference_professor_name" />
                  </Field>
                  <Field id="txt_reference_professor_designation" label="Reference Professor Designation">
                    <TextInput
                      id="txt_reference_professor_designation"
                      name="txt_reference_professor_designation"
                    />
                  </Field>
                  <Field id="txt_reference_professor_number" label="Reference Professor Contact Number">
                    <TextInput
                      id="txt_reference_professor_number"
                      name="txt_reference_professor_number"
                      type="tel"
                    />
                  </Field>
                  <Field id="txt_reference_professor_email" label="Reference Professor Email">
                    <TextInput
                      id="txt_reference_professor_email"
                      name="txt_reference_professor_email"
                      type="email"
                    />
                  </Field>
                </div>
              </div>

              <div className="propose-form-section">
                <div className="propose-section-head">
                  <span className="propose-section-icon">
                    <i className="feather icon-paperclip"></i>
                  </span>
                  <div>
                    <h3>Documents & Media</h3>
                    <p>Upload your resume, transcript, and optional video interview.</p>
                  </div>
                </div>
                <div className="propose-form-grid two-col">
                  <div className="internship-span-2">
                    <Field id="video" label="Video interview link">
                      <TextInput
                        id="video"
                        name="video"
                        type="url"
                        placeholder="Paste your video link (e.g. Google Drive, YouTube)"
                      />
                    </Field>
                    <button
                      type="button"
                      className="internship-link-btn"
                      onClick={() => setVideoOpen(true)}
                    >
                      Video Interview Submission Instructions
                    </button>
                  </div>
                  <Field id="resume" label="Resume" required hint="PDF only, max 5MB">
                    <FileInput
                      id="resume"
                      name="resume"
                      required
                      accept="application/pdf"
                      value={resume}
                      onChange={(event) => setResume(event.target.files?.[0] || null)}
                    />
                  </Field>
                  <Field id="transcript" label="Degree/Transcript" required hint="PDF only, max 5MB">
                    <FileInput
                      id="transcript"
                      name="transcript"
                      required
                      accept="application/pdf"
                      value={transcript}
                      onChange={(event) => setTranscript(event.target.files?.[0] || null)}
                    />
                  </Field>
                  <Field id="picture" label="Picture (Passport sized)" hint="JPG, PNG or GIF, max 2MB">
                    <FileInput
                      id="picture"
                      name="picture"
                      accept="image/jpeg,image/png,image/gif"
                      value={picture}
                      onChange={(event) => setPicture(event.target.files?.[0] || null)}
                    />
                  </Field>
                </div>
              </div>

              <div className="propose-form-footer">
                <p className="propose-form-note">*{form.privacy}</p>
                <button type="submit" disabled={pending} className="propose-submit-btn">
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

      {videoOpen ? (
        <div className="internship-modal" role="dialog" aria-modal="true" aria-labelledby="video-instructions-title">
          <div className="internship-modal__panel">
            <div className="internship-modal__head">
              <h2 id="video-instructions-title">{videoInstructions.title}</h2>
              <button type="button" onClick={() => setVideoOpen(false)} aria-label="Close">
                <i className="feather icon-x"></i>
              </button>
            </div>
            <p>{videoInstructions.intro}</p>
            <ul>
              {videoInstructions.items.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}:</strong> {item.text}
                </li>
              ))}
              <li>
                <strong>{videoInstructions.submissionTitle}:</strong>
                <ul>
                  {videoInstructions.submission.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            </ul>
            <button type="button" className="btn btn-primary" onClick={() => setVideoOpen(false)}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
