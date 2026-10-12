"use client";

import { useState } from "react";
import Link from "next/link";

import { careerJobs } from "../data/careerJobs";
import { careerPage } from "../data/careerData";
export default function CareerJobs() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="career-opportunities"
      className="scroll-mt-20 2xxl:pt-10 2xxl:pb-17.5 md:pt-10 md:pb-10 sm:pt-12.5 pt-10 pb-5"
    >
      <div className="container">
        <div className="sm:mb-7.5 mb-5">
          <h2 className="xl:text-2xxl sm:text-1xxl text-xl font-bold capitalize">
            {careerPage.opportunities.title}
          </h2>
          <p className="sm:text-md text-base leading-[1.6] font-light mb-0">
            {careerPage.opportunities.text}
          </p>
        </div>
        <div className="myAccordion style-1 job-accordion" data-bound="true">
          {careerJobs.map((job, index) => {
            const isOpen = open === index;
            const panelId = `job-panel-${job.slug}`;
            return (
              <div key={job.slug} id={job.slug} className="accordion-item mb-5">
                <div
                  className={`accordion-header rounded-xl ${isOpen ? "open" : ""}`}
                >
                  <button
                    type="button"
                    className="job-header-copy text-white text-left"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <h3 className="accordion-button mb-2 !text-xl !font-bold !p-0 text-white">
                      {job.title}
                      <i
                        className="feather icon-chevron-down text-primary ml-2"
                        style={{ fontSize: "14px" }}
                      ></i>
                    </h3>
                    <p className="mb-0 text-white text-[14px] leading-relaxed">
                      {job.summary}
                    </p>
                  </button>
                  <div className="job-header-meta text-white">
                    <JobMeta label="Location" value={job.location} />
                    <JobMeta label="Category" value={job.category} />
                    <JobMeta label="Last Date" value={job.lastDate} />
                    <div className="flex flex-col items-center gap-2.5">
                      <span className="font-bold text-md uppercase mb-0">Apply</span>
                      <Link
                        href={careerPage.applyHref}
                        className="btn btn-primary btn-hover1"
                        aria-label={`Apply for ${job.title}`}
                      >
                        <span className="md:block hidden">Apply Now</span>
                        <span className="md:hidden">
                          <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                {isOpen ? (
                  <div
                    id={panelId}
                    className="accordion-content show bg-white rounded-xl shadow-lg border border-black/10 overflow-hidden"
                  >
                    <div className="content-inner !pt-6 !pb-10 !px-8 space-y-8 bg-light">
                      <div className="grid grid-cols-1 gap-4 text-sm">
                        <div className="flex flex-wrap">
                          <span className="font-semibold w-32 text-lg">Job Title :</span>
                          <span className="font-bold text-secondary text-lg ml-1">
                            {job.title}
                          </span>
                        </div>
                        <div className="flex flex-wrap border-t border-black/10 pt-2">
                          <span className="font-semibold w-32 text-lg">Education :</span>
                          <span className="font-bold text-secondary text-lg ml-1">
                            {job.education}
                          </span>
                        </div>
                        <div className="flex flex-wrap border-t border-black/10 pt-2">
                          <span className="font-semibold w-32 text-lg">Location :</span>
                          <span className="font-bold text-secondary text-lg ml-1">
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-secondary mb-4">
                          Knowledge & Skills
                        </h4>
                        <p className="text-sm mb-4 leading-relaxed">{job.skillsIntro}</p>
                        <ul className="space-y-2 list-disc list-inside text-sm mb-0">
                          {job.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-secondary mb-4">
                          Job Description
                        </h4>
                        <p className="text-sm mb-4 leading-relaxed">
                          {job.descriptionIntro}
                        </p>
                        <ul className="space-y-2 list-disc list-inside text-sm mb-0">
                          {job.description.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-secondary mb-4">
                          Job Qualification
                        </h4>
                        <ul className="space-y-2 list-disc list-inside text-sm mb-0">
                          {job.qualifications.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function JobMeta({ label, value }) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <span className="font-bold text-md uppercase mb-0">{label}</span>
      <span className="text-[14px]">{value}</span>
    </div>
  );
}