import { ABOUT_PATH } from "@/features/about/constants/about.constants";

import {
  INTERNSHIP_APPLY_PATH,
  INTERNSHIP_CAREER_FIELDS_PATH,
  INTERNSHIP_PATH,
  INTERNSHIP_WHO_WE_ARE_PATH,
  INTERNSHIP_IMAGES,
} from "../constants/internship.constants";

export const internshipPage = {
  title: "Internship Program 2026",

  headline:
    "Start your professional Journey by joining the SPS Internship Program",

  description:
    "Join our hybrid internship program, open to graduate and undergraduate students. Choose your career track, learn industry tools, work with expert mentors, and earn professional certifications — all without leaving your campus.",

  kicker: "INTERNSHIP 2026",

  applyLabel: "Apply Now",

  overview: {
    title: "Overview",

    lead: "As a SPS Intern,",

    text: "you'll gain hands-on experience working at the cutting edge of technology, tackling real-world business challenges, and contributing to innovative solutions that drive business success. This is more than just an internship—it’s a chance to develop professionally, expand your skills, and make an impact alongside experienced leaders who will mentor and inspire you.",

    image: INTERNSHIP_IMAGES.overview.main,

    imageAlt: "SPS internship program participants collaborating",

    overlayImage: INTERNSHIP_IMAGES.overview.overlay,

    benefitsTitle: "Benefits",

    benefits: [
      {
        title: "Professional Development:",
        text: "Comprehensive training before, during, and after the internship to maximize learning and career readiness.",
      },
      {
        title: "Personal Growth:",
        text: "Opportunities to step out of comfort zones, fostering open-mindedness, effective communication, and adaptability.",
      },
      {
        title: "Real Responsibility:",
        text: "Interns are entrusted with meaningful tasks, preparing them for full-time employment opportunities.",
      },
      {
        title: "Flexible Work Environment:",
        text: "The hybrid nature of the internship accommodates varying schedules and promotes work-life balance.",
      },
      {
        title: "Networking:",
        text: "Interns build valuable connections with industry professionals, enhancing their professional network.",
      },
    ],
  },

  phases: {
    title: "Progressive Phases of Internship",

    items: [
      {
        title: "Trainee",
        phase: "Phase 1",
        image: INTERNSHIP_IMAGES.phases.trainee,
        text: "Participants receive foundational training on various products and services, preparing them for real-world applications.",
      },
      {
        title: "Shadower",
        phase: "Phase 1",
        image: INTERNSHIP_IMAGES.phases.shadower,
        text: "Interns observe and learn the dynamics of client interactions, including pre- and post-sales engagements.",
      },
      {
        title: "Apprentice",
        phase: "Phase 2",
        image: INTERNSHIP_IMAGES.phases.apprentice,
        text: "Upon demonstrating professional and business skills, interns gain opportunities to collaborate closely with teams, simulating coworker responsibilities.",
      },
      {
        title: "Full time intern",
        phase: "Phase 2",
        image: INTERNSHIP_IMAGES.phases.fullTime,
        text: "After successful completion of the apprenticeship phase and obtaining relevant certifications, participants are positioned to transition into paid roles.",
      },
    ],
  },

  areas: {
    title: "Areas of Internship",

    text: "Interns can choose from over 20 career roles across three main organizational functions:",

    footer:
      "Each field offers tailored experiences to develop relevant skills and industry knowledge",

    items: [
      {
        id: "operations-overview",
        title: "Operations",
        image: INTERNSHIP_IMAGES.areas.operations,
        text: "Human Resource, Accounting, Legal & Compliance, Administration",
      },
      {
        id: "technical",
        title: "Technical",
        image: INTERNSHIP_IMAGES.areas.technical,
        text: "Cybersecurity, Cloud Computing, AI & Automation, Learning & Events",
      },
      {
        id: "sales-overview",
        title: "Sales",
        image: INTERNSHIP_IMAGES.areas.sales,
        text: "Business Management , Sales , Marketing",
      },
    ],
  },

  highlights: [
    {
      id: "why-sps",

      title: "Why SPS?",

      image: INTERNSHIP_IMAGES.highlights.whySps,

      imageAlt: "Why choose SPS for your internship",

      items: [
        {
          title: "Professional Development:",
          text: "Training to maximize learning and career readiness.",
        },
        {
          title: "Personal Growth:",
          text: "Fostering open-mindedness, communication, and adaptability.",
        },
        {
          title: "Real Responsibility:",
          text: "Meaningful tasks preparing interns for full-time employment.",
        },
      ],
    },

    {
      id: "what-you-do",

      title: "What You’ll Do",

      image: INTERNSHIP_IMAGES.highlights.whatYouDo,

      imageAlt: "Interns collaborating on technology projects",

      items: [
        {
          text: "Collaborate on exciting technology-driven projects.",
        },
        {
          text: "Learn from senior team members in a dynamic, supportive work environment.",
        },
        {
          text: "Tackle complex business problems and develop innovative solutions.",
        },
        {
          text: "Gain exposure to cutting-edge tools and technologies in the tech industry.",
        },
      ],
    },

    {
      id: "eligibility",

      title: "Eligibility",

      image: INTERNSHIP_IMAGES.highlights.eligibility,

      imageAlt: "Students eligible for the SPS internship program",

      subtitle: "Who can apply?",

      intro: "We’re looking for passionate and driven students with:",

      items: [
        {
          text: "Strong communication and problem-solving skills.",
        },
        {
          text: "An eagerness to learn and grow in a professional environment.",
        },
        {
          text: "A passion for technology and innovation.",
        },
      ],

      closingTitle: "Ready to Launch Your Career?",

      closing:
        "If you’re excited to join us for 2026, please apply by submitting your resume and cover letter. We can’t wait to see the impact you’ll make at SPS!",
    },
  ],

  process: {
    title: "Application Process",

    text: "Our internship programs are highly competitive, and early applicants receive priority consideration for select roles. To maximize your opportunities, we encourage you to apply as early as possible. Don’t miss out—take the first step today!",

    steps: [
      {
        icon: "feather icon-file-text",
        title: "01. Application Submission",
        text: "Candidates submit an online application, including their resume, references, academic transcript and other details.",
      },
      {
        icon: "feather icon-users",
        title: "02. Screening",
        text: "Applicants undergo a structured screening process to assess their skills, motivation, and fit for the program.",
      },
      {
        icon: "feather icon-award",
        title: "03. Offer",
        text: "Successful applicants receive an offer to commence their internship journey with SPS.",
      },
    ],
  },

  processCards: [
    {
      title: "1. Application",
      text: "Submit your application online along with your resume & transcript.",
      image: INTERNSHIP_IMAGES.processCards.application,
    },
    {
      title: "2. Recorded Interview",
      text: "You need to record a short interview and upload it.",
      image: INTERNSHIP_IMAGES.processCards.recordedInterview,
    },
    {
      title: "3. Screening",
      text: "Prepare for the internship by completing preliminary tasks or learning modules.",
      image: INTERNSHIP_IMAGES.processCards.screening,
    },
    {
      title: "4. Offer",
      text: "Come on board and kick-start your internship journey with us!",
      image: INTERNSHIP_IMAGES.processCards.offer,
    },
  ],

  faqs: [
    {
      question:
        "How do I apply for the internship, and what documents are needed?",

      answer:
        "You can apply for the internship by submitting your online application. Please include your resume, video introduction, references, and academic transcript.",
    },

    {
      question:
        "What is the duration of the internship, and will a certificate be provided upon completion?",

      answer:
        "The internship induction is on quarterly basis however completion is driven by your commitment and engagement in the program, and Yes, a certificate will be issued upon request.",
    },

    {
      question:
        "Could you please clarify the mode of the internship, the minimum attendance requirements, and commitment?",

      answer:
        "The internship follows a hybrid model (virtual and in-person), and is designed to be manageable alongside your regular workload through flexible yet consistent engagement.",
    },

    {
      question:
        "What kind of trainings, certification, and projects will be available?",

      answer:
        "The SPS Internship Program offers industry-relevant certifications and real-world project experience, specific to the role selected by the intern.",
    },

    {
      question:
        "What kind of supervisory support will be available during the internship?",

      answer:
        "Trainee and Shadower are not paid. Apprentices are paid on assignment basis. Exceptional interns are offered monthly stipend.",
    },

    {
      question:
        "Can I post/publish about my work and certifications on my social media accounts?",

      answer:
        "Yes. You may share your internship experience and certifications on social media, following SPS guidelines for professional and confidential information.",
    },
  ],

  cta: {
    title: "Ready to join the SPS Internship Program 2026?",

    text: "Apply now or contact our internship team to start your professional journey with SPS.",

    label: "Apply Now",

    href: INTERNSHIP_APPLY_PATH,
  },
};

export const internshipNav = [
  {
    id: "how-it-works",

    label: "How it works",

    icon: "feather icon-help-circle",

    href: INTERNSHIP_PATH,

    items: [
      {
        label: "Overview",
        href: `${INTERNSHIP_PATH}#overview`,
      },
      {
        label: "Areas of internship",
        href: `${INTERNSHIP_PATH}#areas-of-internship`,
      },
      {
        label: "Why SPS",
        href: `${INTERNSHIP_PATH}#why-sps`,
      },
      {
        label: "What you do",
        href: `${INTERNSHIP_PATH}#what-you-do`,
      },
      {
        label: "Eligibility",
        href: `${INTERNSHIP_PATH}#eligibility`,
      },
      {
        label: "Application Process",
        href: `${INTERNSHIP_PATH}#application-process`,
      },
      {
        label: "FAQs",
        href: `${INTERNSHIP_PATH}#faqs`,
      },
    ],
  },

  {
    id: "career-fields",

    label: "Career Fields",

    icon: "feather icon-briefcase",

    href: INTERNSHIP_CAREER_FIELDS_PATH,

    items: [
      {
        label: "Operations",
        href: `${INTERNSHIP_CAREER_FIELDS_PATH}#operations`,
      },
      {
        label: "Technical",
        href: `${INTERNSHIP_CAREER_FIELDS_PATH}#technical`,
      },
      {
        label: "Sales",
        href: `${INTERNSHIP_CAREER_FIELDS_PATH}#sales`,
      },
    ],
  },

  {
    id: "who-we-are",

    label: "Who we are",

    icon: "feather icon-info",

    href: INTERNSHIP_WHO_WE_ARE_PATH,

    items: [
      {
        label: "Our purpose",
        href: `${INTERNSHIP_WHO_WE_ARE_PATH}#our-purpose`,
      },
      {
        label: "Our values",
        href: `${INTERNSHIP_WHO_WE_ARE_PATH}#our-value`,
      },
      {
        label: "Mission",
        href: `${INTERNSHIP_WHO_WE_ARE_PATH}#mission`,
      },
      {
        label: "What makes us different",
        href: `${INTERNSHIP_WHO_WE_ARE_PATH}#what-makes-us-different`,
      },
      {
        label: "Our Future",
        href: `${INTERNSHIP_WHO_WE_ARE_PATH}#our-future`,
      },
      {
        label: "Meet our experts",
        href: `${INTERNSHIP_WHO_WE_ARE_PATH}#meet-our-experts`,
      },
    ],
  },

  {
    id: "apply",

    label: "Apply",

    icon: "feather icon-edit",

    href: INTERNSHIP_APPLY_PATH,

    items: [
      {
        label: "Application form",
        href: INTERNSHIP_APPLY_PATH,
      },
      {
        label: "Intake information",
        href: `${INTERNSHIP_APPLY_PATH}#intake`,
      },
      {
        label: "Choose your path",
        href: `${INTERNSHIP_APPLY_PATH}#internship-path`,
      },
    ],
  },
];

export const careerFieldsPage = {
  title: "Career Fields",

  headline: internshipPage.headline,

  description:
    "Choose your internship track across Operations, Technical, and Sales. Build resume-ready experience with SPS mentors, industry tools, and professional certifications.",

  kicker: internshipPage.kicker,

  applyLabel: internshipPage.applyLabel,

  resume: {
    title: "Make your resume stand out with SPS internship",

    text: "Sharing knowledge and inspiration is equally important in our professional spheres. It can foster vision and strengthen our professional ties. We offer virtual internships, which will help you grow not only professionally but also personally. Our team has extensive, global networks in Technical, Sales, and operations. We have an award-winning team that includes IBM-certified inventors and champions who have won multiple worldwide competitions.",

    image: INTERNSHIP_IMAGES.careerFields.resume,

    imageAlt:
      "Student building a professional resume through the SPS internship",
  },

  functions: [
    {
      id: "operations",

      title: "Operations",

      subtitle:
        "We offer internship opportunities in all major operations functions.",

      buttons: [
        {
          label: "Human Resource",
          href: "#human-resources",
          className:
            "btn bg-linear-to-r border-transparent text-white from-cyan-500 to-blue-500 me-1.25 mb-2.5",
        },

        {
          label: "Accounting",
          href: "#accounting",
          className:
            "btn bg-linear-to-t border-transparent text-white from-sky-500 to-indigo-500 me-1.25 mb-2.5",
        },

        {
          label: "Legal and Compliance",
          href: "#legal",
          className:
            "btn bg-linear-65 border-transparent text-white from-teal-400 to-indigo-400 me-1.25 mb-2.5",
        },

        {
          label: "Administration",
          href: "#operations",
          className:
            "btn bg-linear-to-bl border-transparent text-white from-violet-500 to-fuchsia-500 me-1.25 mb-2.5",
        },
      ],
    },

    {
      id: "sales",

      title: "Sales",

      subtitle:
        "We offer internship opportunities in all major Sales and marketing functions.",

      buttons: [
        {
          label: "Business Management",
          href: "#sales",
          className:
            "btn bg-linear-to-r border-transparent text-white from-cyan-500 to-blue-500 me-1.25 mb-2.5",
        },

        {
          label: "Sales",
          href: "#sales",
          className:
            "btn bg-linear-to-t border-transparent text-white from-sky-500 to-indigo-500 me-1.25 mb-2.5",
        },

        {
          label: "Marketing",
          href: "#sales",
          className:
            "btn bg-linear-65 border-transparent text-white from-teal-400 to-indigo-400 me-1.25 mb-2.5",
        },
      ],
    },
  ],

  roles: [
    {
      id: "human-resources",

      title: "1. Human Resources",

      image: INTERNSHIP_IMAGES.careerFields.humanResources,

      imageAlt: "Human resources internship at SPS",

      text: "Human resources is viewed as one of the fundamental departments of a business as it is responsible for further enhancing the learning and development of its employees. Human resource internship we will prepare you for the challenges which you will encounter in industries. HR internships involve active participation in the recruitment process, human resource operations, Employee management, talent acquisition, hiring, onboarding, offboarding, and day-to-day human resource tasks. Our HR internships will make your resume stand out from the crowd and advance your career.",
    },

    {
      id: "accounting",

      title: "2. Accounting & Finance",

      image: INTERNSHIP_IMAGES.careerFields.accounting,

      imageAlt: "Accounting and finance internship at SPS",

      text: "As an accounting intern or finance intern, you have the opportunity to boost your resume and stand out as a top candidate. You will develop critical, real-world knowledge. This will help you to build yourself for world-leading financial institutions including investment banks, commercial banks, hedge funds, asset managers, insurance firms, financial technology companies, and accounting firms",
    },

    {
      id: "legal",

      title: "3. Legal & Compliance",

      image: INTERNSHIP_IMAGES.careerFields.legal,

      imageAlt: "Legal and compliance internship at SPS",

      text: "Law internships are ideal for those considering law school and graduates of law school. As a law intern, you will support and learn from top industry professionals how to practically implement your knowledge, doing case management, and legal research. After this internship you will know which professional and academic background, you may choose.",

      closingTitle: "Ready to Launch Your Career?",

      closing:
        "If you’re excited to join us for 2026, please apply by submitting your resume and cover letter. We can’t wait to see the impact you’ll make at SPS!",
    },
  ],

  cta: internshipPage.cta,
};

export const whoWeArePage = {
  title: "Who We Are",

  headline: internshipPage.headline,

  description: internshipPage.description,

  kicker: internshipPage.kicker,

  applyLabel: internshipPage.applyLabel,

  purpose: {
    title: "Our Purpose",

    text: "At SPS, we inspire and encourage people to believe in and challenge themselves, discover their passion, and realize their potential. Our team is dedicated, driven by our purpose, and unified by our values.",

    image: INTERNSHIP_IMAGES.whoWeAre.purpose,

    imageAlt: "SPS team unified by purpose and values",
  },

  values: [
    {
      icon: "feather icon-shield",
      title: "Honesty",
      text: "To be truthful in all our endeavors; to be honest and forthright with one another and with our customers.",
    },

    {
      icon: "feather icon-check-circle",
      title: "Integrity",
      text: "To say what we mean. To deliver what we promise, and to stand for what is right.",
    },

    {
      icon: "feather icon-heart",
      title: "Respect",
      text: "To treat one another with dignity and fairness, appreciating the diversity of our workforce and the uniqueness of each employee.",
    },

    {
      icon: "feather icon-user-check",
      title: "Trust",
      text: "To build confidence through teamwork and open, candid communication.",
    },

    {
      icon: "feather icon-briefcase",
      title: "Responsibility",
      text: "To take responsibility for our actions and to speak up — without fear of retribution — to report concerns in the workplace including violations of law, regulations, and company policies, and to seek clarification and guidance whenever there is doubt.",
    },

    {
      icon: "feather icon-globe",
      title: "Citizenship",
      text: "To obey all of the laws in the countries with which we do business and to do our part to make the communities in which we live and work better.",
    },
  ],

  mission: {
    title: "Mission:",

    text: "Our mission is to empower every person and every organization to achieve their goals. We believe that by working with people who share our global vision, motivation, and passion for technology and innovation, we can have the biggest impact on the world. As an intern at SPS, you will be part of our deputation.",

    cta: "Come join us!",

    image: INTERNSHIP_IMAGES.whoWeAre.mission,

    imageAlt: "SPS team working together on the internship mission",
  },

  future: {
    title: "Our Future:",

    lead: "200+ interns every year",

    text: "Our plan is to welcome 200+ interns every year to our program by 2026. We strive to promote our program on a global level and gather the world’s best talent under one roof.",

    extra:
      "We welcome entrepreneurs, graduates, undergraduates, and start-up organizations to join us in our mission.",

    linkLabel: "Learn more about our vision",

    href: ABOUT_PATH,

    image: INTERNSHIP_IMAGES.whoWeAre.future,

    imageAlt:
      "Global technology talent joining the SPS internship program",
  },

  different: {
    title: "What makes us different",

    items: [
      {
        icon: "feather icon-award",
        title: "Quality",
        text: "The best at what we do",
      },

      {
        icon: "feather icon-shield",
        title: "Credibility",
        text: "The most trusted",
      },

      {
        icon: "feather icon-user",
        title: "Employability",
        text: "Empowering tomorrow's talent",
      },

      {
        icon: "feather icon-zap",
        title: "Innovation",
        text: "Redefining education",
      },
    ],
  },

  experts: {
    title: "Meet our experts",

    text: "Our diverse team includes over talented and experienced individuals. We are unified by our purpose and core values. We inspire and encourage people to believe in themselves, discover their passion and realize their potential.",

    image: INTERNSHIP_IMAGES.whoWeAre.experts,

    imageAlt: "SPS internship program experts",

    people: [
      {
        name: "Adnan Rasheed",
        role: "VP Cloud",
      },
      {
        name: "Arshad Ali",
        role: "SpinnLabs",
      },
      {
        name: "Diane Yingling",
        role: "VP Events & Learning",
      },
      {
        name: "Neelofar Malik",
        role: "VP Operations",
      },
    ],
  },

  cta: internshipPage.cta,
};