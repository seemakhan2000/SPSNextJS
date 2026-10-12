import { SITE_CONTACT } from "@/lib/site";
import applyOptions from "@/lib/internship-apply-options.json";

export const internshipCities = applyOptions.cities;
export const internshipUniversities = applyOptions.universities;


const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function ordinal(n) {
  const v = n % 100;
  if (v >= 11 && v <= 13) return `${n}th`;
  if (n % 10 === 1) return `${n}st`;
  if (n % 10 === 2) return `${n}nd`;
  if (n % 10 === 3) return `${n}rd`;
  return `${n}th`;
}

function formatLongDate(date) {
  return `${ordinal(date.getDate())} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

export function getRegistrationWindow(now = new Date()) {
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  const start = day >= 16 ? new Date(year, month, 16) : new Date(year, month - 1, 16);
  const end = day >= 16 ? new Date(year, month + 1, 15) : new Date(year, month, 15);
  const batch = new Date(end.getFullYear(), end.getMonth() + 1, 1);

  return {
    start,
    end,
    rangeLabel: `${formatLongDate(start)} – ${formatLongDate(end)}`,
    batchLabel: MONTHS[batch.getMonth()],
    headline: `${formatLongDate(start)} – ${formatLongDate(end)} (For ${MONTHS[batch.getMonth()]} Batch)`,
  };
}

export const applyPage = {
  title: "Apply | Internship Program 2026",
  headline: "Apply to the SPS Internship Program",
  description:
    "Join our hybrid internship program, open to graduate and undergraduate students. Choose your career track, learn industry tools, work with expert mentors, and earn professional certifications — all without leaving your campus.",
  kicker: "INTERNSHIP 2026",
  applyLabel: "Apply Now",
  form: {
    title: "Internship application",
    text: "Complete your details, choose one internship path, and upload the required documents.",
    submitLabel: "Apply",
    privacy: "We do not share your information with any third parties.",
    helpEmail: SITE_CONTACT.internshipEmail,
  },
  intake: {
    title: "Internship Intake Information",
    windowLabel: "Current Registration Window",
    cycle:
      "The SPS Internship Program follows a monthly intake cycle for which registrations open on the 16th of every month and end on the 15th of the following month for the next available batch of the respective internship tracks.",
    autoUpdate:
      "Registration dates are updated automatically on the 15th of every month at midnight to display dates for the next available batch of the internship tracks.",
    review:
      "When you submit your application, you will be considered for the intake shown on the selected internship track. Please note that submitting your application early increases your chances of being reviewed and shortlisted for the internship before available positions are filled. If an intake reaches capacity, your application may be considered for the next available intake.",
    complete:
      "We encourage applicants to complete their application, upload all required documents, and respond promptly to any communication from the SPS Internship Team to ensure a smooth onboarding process.",
  },
  duplicateEmail:
    "It appears that you’ve already registered for the SPS Internship Program 2026. There’s no need to register again. If you have any questions or need further assistance, please contact Sofia Naz at sofia.naz@spsnet.com.",
  videoInstructions: {
    title: "Video Interview Submission Instructions",
    intro: "Please record and share your video interview following the guidelines below:",
    items: [
      {
        label: "Language",
        text: "The interview must be recorded in English.",
      },
      {
        label: "Quality",
        text: "Ensure the video has clear audio and video quality, with no background noise or interruptions.",
      },
      {
        label: "Content",
        text: "Introduce yourself and share details about your academic background, interests, skills, future goals, and motivation for joining the internship program. The more details you provide, the better we can understand you.",
      },
      {
        label: "Duration",
        text: "Keep the video between 3–5 minutes.",
      },
    ],
    submissionTitle: "Submission",
    submission: [
      "Upload your video to Google Drive or any other video-sharing platform (e.g., YouTube, Vimeo, etc.).",
      "Make sure the link is public or accessible without login or permission requests.",
    ],
  },
  pathGuide: {
    title: "Choose Your Internship Path at SPS",
    intro:
      "At SPS, you have a choice of four different internship tracks, each designed to help you learn in a different way depending on your interests and career goals. These tracks are connected — most interns naturally move from one to another as they gain clarity and experience.",
    instruction: "Please select one option from Projects, Competencies, Specializations, or Micro-Internships.",
    tracks: [
      {
        id: "project",
        title: "Project / Role-Based Internships (Start Here)",
        summary: "Work alongside real SPS teams and understand how work gets done.",
        body: "Project and role-based internships give you the opportunity to work alongside real SPS teams and understand how work gets done in a professional environment.",
        youWillTitle: "You will:",
        youWill: [
          "Be part of a customer project or an internal SPS function",
          "Observe and shadow how teams deliver real outcomes",
          "Learn how different roles collaborate in a working environment",
        ],
        examplesTitle: "Examples:",
        examples: [
          "Customer projects (e.g., cybersecurity, AI, cloud implementations)",
          "Internal roles (e.g., HR, Accounting, Legal, IT)",
        ],
        note: "Even though internal roles are not customer-facing, they operate like structured projects and are part of this same track.",
        whyTitle: "Why this track matters",
        whyIntro: "This is the best starting point for most interns because it gives you:",
        why: [
          "Broad exposure to how organizations actually work",
          "Visibility into different roles before choosing one",
          "Real-world context that classroom learning cannot provide",
        ],
      },
      {
        id: "competency",
        title: "Competency-Based Internships (Choose Your Role)",
        summary: "Focus on a specific role and start building your professional identity.",
        body: "As you gain exposure through projects or roles, you will notice that every team is made up of individuals with different skill sets, called competencies.",
        youWillTitle: "A single project may include:",
        youWill: [
          "Business Analysts",
          "Architects",
          "Front-End Developers",
          "Back-End Developers",
          "Testers / QA",
          "AI Specialists",
          "Cybersecurity Experts",
          "Cloud / Infrastructure Engineers",
        ],
        note: "Competencies represent what you do within a team.",
        whyTitle: "Why this track matters",
        whyIntro: "This track allows you to:",
        why: [
          "Focus on a specific role that interests you",
          "Build foundational skills in that area",
          "Start developing your professional identity",
        ],
        footer: "Competencies are generic and transferable, meaning they apply across many projects and industries.",
      },
      {
        id: "specialization",
        title: "Specialization-Based Internships (Master a Technology)",
        summary: "Combine your role with a specific technology, platform, or vendor.",
        body: "Once you understand your competency, the next step is specialization. Specializations focus on specific technologies, platforms, or vendors used to implement solutions.",
        youWillTitle: "For example:",
        youWill: [
          "AI using IBM Watsonx, Microsoft Azure AI, or AWS",
          "Cybersecurity using IBM Guardium, QRadar, Verify",
          "Cloud using AWS, Azure, or Google Cloud",
        ],
        whyTitle: "Why this track matters",
        whyIntro: "This is where you:",
        why: [
          "Gain deep technical expertise",
          "Work with industry-leading tools and platforms",
          "Earn certifications that strengthen your career prospects",
        ],
        footer: "Think of specialization as the combination of your role (competency) + the technology you use.",
      },
      {
        id: "micro",
        title: "Micro-Internships (Short-Term, Project-Focused)",
        summary: "Short, focused engagements around a specific project or problem.",
        body: "Micro-internships are short-term, focused engagements designed around a specific project or problem.",
        youWill: [
          "Typically 1 to 3 months long",
          "Clearly defined scope and outcomes",
          "End upon completion of the project",
        ],
        whyTitle: "Why this track matters",
        whyIntro: "This track is ideal if you want:",
        why: [
          "A quick, hands-on experience",
          "Exposure to a specific problem or use case",
          "The ability to explore SPS without a long-term commitment",
        ],
      },
    ],
    fit: {
      title: "How These Tracks Fit Together",
      intro: "Think of your journey like this:",
      icon: "feather icon-git-merge",
      items: [
        { step: "1", title: "Project / Role", text: "Understand real-world work" },
        { step: "2", title: "Competency", text: "Choose your role" },
        { step: "3", title: "Specialization", text: "Master a technology" },
        { step: "4", title: "Micro-Internships", text: "Apply your skills in focused engagements" },
      ],
    },
    choose: {
      title: "Which One Should You Choose?",
      intro: "Pick the path that matches where you are now.",
      icon: "feather icon-help-circle",
      items: [
        { question: "Not sure where to start?", answer: "Begin with Project / Role-Based" },
        { question: "Know what kind of work you like?", answer: "Choose a Competency" },
        { question: "Want deep technical expertise?", answer: "Pick a Specialization" },
        { question: "Want a short-term experience?", answer: "Try a Micro-Internship" },
      ],
    },
    takeaway: {
      title: "Key Takeaway",
      intro: "Each track plays a different role in your journey.",
      icon: "feather icon-check-circle",
      items: [
        { label: "Projects", text: "show you how work gets done." },
        { label: "Competencies", text: "define your role." },
        { label: "Specializations", text: "define your tools." },
        { label: "Micro-internships", text: "give you focused, short-term experience." },
      ],
    },
  },
  locations: [
    { value: "PK", label: "Pakistan (PK)" },
    { value: "US", label: "United States (US)" },
    { value: "Others", label: "Others" },
  ],
  degrees: [
    { value: "Bachelor", label: "Bachelor’s" },
    { value: "Masters", label: "Masters" },
    { value: "PhD", label: "PhD" },
  ],
  semesters: ["1", "2", "3", "4", "5", "6", "7", "8", "Recent Graduate"],
  rankings: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Others"],
  fields: [
    { value: "Engineering", label: "Engineering" },
    { value: "Business", label: "Business" },
    { value: "Corporate", label: "Corporate" },
    { value: "Others", label: "Others" },
  ],
  roles: [{ value: "AI Intern", label: "AI" }],
  supportTypes: [
    { value: "technical", label: "Technical" },
    { value: "financial", label: "Financial" },
    { value: "mentorship", label: "Mentorship" },
    { value: "other", label: "Other" },
  ],
  options: {
    help: "Select one option from Projects, Competencies, Specializations, or Micro-Internships.",
    optionalNote: "Required only if you have not selected a track above — otherwise entirely optional.",
    specializationHint: "Expand a Vendor, then a Product, to browse and select the specialization that matches your skills or interests.",
    microEmpty: "Opportunities Coming Soon",
    waitlist: "Applications are closed. Join the waiting list.",
  },
  projects: [
    {
      group: "Business",
      practices: [
        {
          name: "IT",
          items: [{ id: "166", title: "IT Support & Helpdesk", start: "Starting Oct 01, 2026" }],
        },
      ],
    },
    {
      group: "Technical",
      practices: [
        {
          name: "Cloud Practice",
          items: [
            { id: "149", title: "Business Management System (BMS)", waitlist: true },
            { id: "150", title: "Security Management Automation Platform", waitlist: true },
            { id: "151", title: "SPS Web Development", waitlist: true },
          ],
        },
      ],
    },
  ],
  competencies: [
    {
      group: "Business",
      practices: [
        {
          name: "IT",
          items: [
            { id: "30", title: "Endpoint Protection", start: "Starting Oct 01, 2026" },
            { id: "31", title: "Helpdesk", start: "Starting Oct 01, 2026" },
          ],
        },
      ],
    },
    {
      group: "Technical",
      practices: [
        {
          name: "Cloud Practice",
          items: [{ id: "51", title: "Frontend development", waitlist: true }],
        },
        {
          name: "AppDev Practice",
          items: [{ id: "56", title: "Backend Development using NodeJS", waitlist: true }],
        },
      ],
    },
  ],
  specializations: [
    {
      vendor: "Appian",
      products: [
        {
          name: "Appian Engineer",
          items: [{ id: "309", title: "Appian Developer", waitlist: true }],
        },
      ],
    },
    {
      vendor: "AWS",
      products: [
        {
          name: "Development",
          items: [{ id: "279", title: "Software Development Engineer", waitlist: true }],
        },
      ],
    },
    {
      vendor: "Fischer Identity",
      products: [
        {
          name: "IAM Roles",
          items: [
            { id: "308", title: "IAM Developer", start: "Starting Oct 01, 2026" },
            { id: "307", title: "IAM Implementer", start: "Starting Oct 01, 2026" },
          ],
        },
      ],
    },
    {
      vendor: "Fortinet",
      products: [
        {
          name: "Fortinet Security Fundamentals",
          items: [{ id: "315", title: "Fundamentals", start: "Starting Oct 01, 2026" }],
        },
        {
          name: "Forti Secure Networking",
          items: [
            { id: "267", title: "Secure Networking", waitlist: true },
            { id: "268", title: "Security Operations", waitlist: true },
          ],
        },
        {
          name: "FortiSASE- Secure Access Service Edge",
          items: [
            { id: "271", title: "FortiOS 7.6 Administrator", waitlist: true },
            { id: "272", title: "FortiSASE 25 Core Administrator", waitlist: true },
            { id: "273", title: "SD-WAN 7.6 Core Administrator", waitlist: true },
          ],
        },
        {
          name: "Cloud Security",
          items: [
            { id: "274", title: "FortiOS 7.6 Administrator", waitlist: true },
            { id: "275", title: "FortiWeb 8.0 Administrator", waitlist: true },
          ],
        },
      ],
    },
    {
      vendor: "IBM",
      products: [
        {
          name: "NLU Service",
          items: [{ id: "310", title: "NLU Service Engineer", waitlist: true }],
        },
        {
          name: "Security",
          items: [{ id: "76", title: "Guardium Data Security", start: "Starting Oct 01, 2026" }],
        },
      ],
    },
    {
      vendor: "Microsoft",
      products: [
        {
          name: "Data and AI",
          items: [{ id: "70", title: "Agentic DevOps with Microsoft Azure and GitHub" }],
        },
      ],
    },
    {
      vendor: "Trend Micro",
      products: [
        {
          name: "TrendAI Vision One",
          items: [
            { id: "57", title: "TrendAI Vision One Platform Practioner", waitlist: true },
            { id: "58", title: "TrendAI Vision One Platform Associate", waitlist: true },
            { id: "56", title: "TrendAI Vision One Platform Foundation", start: "Starting Oct 01, 2026" },
          ],
        },
      ],
    },
  ],
};