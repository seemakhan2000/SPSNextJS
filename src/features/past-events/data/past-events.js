import {
  PAST_EVENTS_PATH,
  PAST_EVENTS_CTA,
  PAST_EVENTS_IMAGES,
} from "../constants/past-events.constants";

export const pastEventsPage = {
  title: "Webinars Past Events",
  headline: "Webinars Past Events",
  description:
    "Explore our past webinars featuring industry experts, insightful discussions, and valuable knowledge shared across technology and innovation.",
  kicker: "EVENTS & WEBINARS",

  introTitle: "Past from our webinars",

  introText:
    "Our past event schedules were more than just timelines; they were the roadmap to unforgettable experiences, blending entertainment, knowledge, and community spirit.",

  emptyText: "No webinars were listed for this year.",

  cta: {
    title: "Looking for an upcoming session?",
    text: "Talk with SPS about webinars, roundtables, and briefings for your team.",
    ...PAST_EVENTS_CTA,
  },
};

export const pastWebinars = [
  {
    slug: "nepra-kaspersky-compliance",
    year: "2025",

    title:
      "Achieving NEPRA Cybersecurity Compliance with Kaspersky",

    time: "15:00 – 16:00",

    date: "Friday, March 21st, 2025",

    timezone: "PK 3:00 PM - 4:00 PM",

    excerpt:
      "This webinar covers the critical steps for compliance and explores how Kaspersky's industrial cybersecurity solutions provide robust protection for power sector infrastructure.",

    host: {
      name: "Shahwar Khan",
      role: "SPS – Director NEPRA Compliance as a Service",
      image: PAST_EVENTS_IMAGES.shahwarKhan,
    },

    speakers: [
      {
        name: "Hafeez Aziz",
        role:
          "Kaspersky Manager Enterprise Business - Pakistan & Afghanistan",
        image: PAST_EVENTS_IMAGES.hafizAziz,
      },
      {
        name: "Hesham Abdulhadi",
        role:
          "Kaspersky Solution Presales Manager - Industrial Cybersecurity",
        image: PAST_EVENTS_IMAGES.heshamAbdulHadi,
      },
    ],

    goals: {
      title: "Goals and Objectives",

      text:
        "This webinar aims to equip power sector professionals with a comprehensive understanding of how Kaspersky's IT and OT cybersecurity solutions can support their organizations in achieving NEPRA compliance. Participants will gain an understanding of SPS's NEPRA Compliance as a Service, which aids in developing NEPRA-aligned cybersecurity policies, implementing evidence-based security controls, conducting risk and vulnerability assessments, strengthening data management and incident response, building compliance through continuous monitoring and audits, delivering effective awareness and training programs, and fulfilling regulatory reporting requirements.",

      items: [
        "Policy Development",
        "Risk Assessments",
      ],
    },

    agenda: {
      title: "Agenda",

      items: [
        "Welcome",
        "NEPRA Cybersecurity Regulations",
        "Kaspersky's Cybersecurity Offering",
        "Q&A",
        "Closing Remarks",
      ],
    },

    audience: {
      title: "Who should join",

      text:
        "C-level Executive (CEO, CISOs, CTO), IT & OT Security Managers, Network and System Administrators, Consultants, Power Sector Regulator & Policy Makers, Academic and Research Professionals.",

      tags: [
        "C-Level Execs",
        "IT/OT Managers",
        "Policy Makers",
      ],
    },

    startDate: "2025-03-21T15:00:00+05:00",
    endDate: "2025-03-21T16:00:00+05:00",
  },
];

export const pastEventYears = [
  "2025",
  "2024",
  "2023",
];

export function pastWebinarPath(slug) {
  return `${PAST_EVENTS_PATH}/${slug}`;
}

export function getPastWebinar(slug) {
  return (
    pastWebinars.find((item) => item.slug === slug) || null
  );
}

export function webinarsForYear(year) {
  return pastWebinars.filter(
    (item) => item.year === year
  );
}

export function getPastWebinarStaticParams() {
  return pastWebinars.map((item) => ({
    slug: item.slug,
  }));
}