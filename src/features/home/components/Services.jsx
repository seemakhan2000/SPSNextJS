// src/features/home/components/Services.jsx
"use client";

import { useState } from "react";
import ServiceTabs from "./ServiceTabs";
import ServicesGrid from "./ServicesGrid";

const descriptions = {
  cybersecurity:
    "SPS Cybersecurity team has the following practices: Digital Trust (User Security, Data Security, Mobile Device Management), Threat Management (Cybersecurity Program, SIEM systems, Application Security, Network Security), Keysight (Professional Services, Help Desk Services, Security Operations), and SAP Security.",
  cloud:
    "SPS Cloud team offers services in DevOps (CI/CD Pipelines, Automation, Containerization) and Migration Services (Cloud Strategy, Application Migration, Data Migration, Multi-cloud Solutions).",
  "ai-automation":
    "SPS AI & Automation team offers solutions in Automation (Robotic Process Automation, Workflow Automation) and Data Science (Machine Learning, Predictive Analytics, AI Model Development).",
  collaboration:
    "SPS Collaboration team focuses on enhancing organizational learning and engagement through Learning initiatives and Events.",
};

export default function Services() {
  const [activeFamily, setActiveFamily] = useState("cybersecurity");

  return (
    <div className="text-center">
      <div className="xl:py-10.5 md:py-10 py-7.5">
        <div className="container">
          <div className="row">
            <div className="w-full">
              <div className="mb-5 text-start">
                <div className="custom-tab">
                  {/* TABS */}
                  <ServiceTabs
                    activeFamily={activeFamily}
                    onFamilyChange={setActiveFamily}
                  />

                  <div className="tab-contents">
                    <div className="tab-content active">
                      <div className="w-full">
                        {/* DESCRIPTION */}
                        <div className="sm:mb-7.5 mb-5 mt-5">
                          <p className="text-sm text-center px-5">
                            {descriptions[activeFamily]}
                          </p>
                        </div>

                        {/* CARDS */}
                        <div className="mb-5 text-start">
                          <ServicesGrid activeFamily={activeFamily} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}