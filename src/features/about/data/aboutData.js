import { CAREER_PATH } from "@/features/career/constants/career.constants";

export const aboutPage = {
  title: "About Us",
  description:
    "Software Productivity Strategists, Inc. (SPS) is a trusted technology partner delivering intelligent, secure, and scalable solutions powered by AI, Cloud, and Cybersecurity to accelerate digital transformation.",
  kicker: "ABOUT SPS",

  mission: {
    title: "Our Mission & Vision",
    paragraphs: [
      "Our primary differentiator is our ability to seamlessly integrate AI Development, Cloud & Infrastructure Services, Cybersecurity, Learning & Training, and Event Management into modern enterprise solutions.",
      "Internally, SPS leverages its own advanced skillsets to build award-winning productivity tools that are actively used to enhance, validate, and strengthen the development solutions we deliver to our clients.",
    ],
  },

  story: {
    title: "About SPS",
    paragraphs: [
      "Software Productivity Strategists, Inc. (SPS) is an enterprise-class innovator specializing in industry solutions powered by AI and Cloud technologies.",
      "With expertise across the complete technology lifecycle—including product design, development, deployment, security, operations, monitoring, and support—SPS helps organizations build, deploy, and secure high-performance applications with confidence.",
      "Our award-winning team includes IBM-certified inventors and champions who have earned recognition through multiple worldwide competitions, reflecting our commitment to innovation, excellence, and leadership in technology.",
    ],
  },

  whoWeAre: {
    title: "Who we are",
    text: "At Software Productivity Strategists (SPS) Inc., we identify ourselves as an AI company where all our experiences and expertise of the past three decades have come together into one core. We develop AI based solutions for corporations and startups. From strategy to execution, we guide our clients through their next digital transformation, leveraging technologies like Analytics, Natural Language Processing, Computer Vision, Machine Learning and IoT.",
    image: "/assets/images/spsimg/aboutus/501.webp",
    imageAlt: "SPS team collaborating on digital transformation",
    experienceLine: "Service Excellence",
  },

  whyChoose: [
    {
      title: "AI at the core",
      text: "Three decades of experience come together in AI solutions for enterprises and startups.",
    },
    {
      title: "Full lifecycle delivery",
      text: "Design, development, deployment, security, operations, monitoring, and support.",
    },
    {
      title: "Award-winning talent",
      text: "IBM-certified inventors and champions recognized in worldwide competitions.",
    },
    {
      title: "Tools we use ourselves",
      text: "We build productivity tools in-house, then use them to strengthen client delivery.",
    },
  ],

  highlights: {
    title: "Highlights of the Past Two Decades",
    text: "SPS started business operations over 25 years ago with a mission to help organizations improve software development productivity. Since then, we have come a long way—delivering innovative solutions, building trusted partnerships, and continuously evolving to meet the changing needs of modern enterprises.",
    items: [
      {
        period: "Early 90s",
        title: "App Development and CASE",
        text: "Start of application development and computer-aided software engineering.",
        icon: "feather icon-cpu",
      },
      {
        period: "Mid 90s",
        title: "Internet Security",
        text: "Start of internet security and web infrastructure design.",
        icon: "feather icon-globe",
      },
      {
        period: "Late 90s",
        title: "K-12 Education",
        text: "Start of K-12 focus with Alexandria City Public Schools.",
        icon: "feather icon-book-open",
      },
      {
        period: "Early 2000s",
        title: "Virtual Learning",
        text: "Start of virtual learning focus with HP.",
        icon: "feather icon-monitor",
      },
      {
        period: "Mid 2000s",
        title: "Cybersecurity",
        text: "Renewed focus on cybersecurity and information assurance.",
        icon: "feather icon-shield",
      },
      {
        period: "Late 2000s",
        title: "Training as a Service",
        text: "Start of e-learning and training as a service.",
        icon: "feather icon-headphones",
      },
      {
        period: "2015 — SMILE",
        title: "Learning Events",
        text: "Security Mobile Infrastructure Learning Events.",
        icon: "feather icon-smartphone",
      },
      {
        period: "2018 — SCALE",
        title: "AI Practice",
        text: "Security, Cloud, Artificial Intelligence Learning, and Events.",
        icon: "feather icon-cloud",
      },
    ],
  },

  awards: {
    title: "Achievements and Awards",
    text: "SPS started business operations over 25 years ago to help organizations improve software development productivity. Since then we have come a long way.",
    items: [
      {
        title: "AVNET Bluemix with IBM",
        subtitle: "Finalist & Social Justice Award",
        note: "Innovative & real-world impact",
        image: "/assets/images/spsimg/aboutus/c1.webp",
      },
      {
        title: "Winner of the Avnet Bluemix Hackathon",
        subtitle: "Sniff It & Watchover IoT",
        note: "Mobile & IoT-based solutions",
        image: "/assets/images/spsimg/aboutus/c2.webp",
      },
      {
        title: "IBM Cognitive Build Challenge",
        subtitle: "Semi-finalist & Cloud Champions",
        note: "Award-winning innovation",
        image: "/assets/images/spsimg/aboutus/c3.webp",
      },
    ],
  },

  process: {
    title: "Our Process From Idea to Execution",
    text: "SPS started business operations over 25 years ago to help organizations improve software development productivity. Since then we have come a long way—turning ideas into secure, production-ready solutions.",
    image: "/assets/images/spsimg/aboutus/process.webp",
    imageAlt: "SPS process from idea to execution",
    steps: [
      {
        icon: "feather icon-search",
        title: "Discover",
        text: "Understand goals, risks, and the current environment.",
      },
      {
        icon: "feather icon-map",
        title: "Design",
        text: "Shape an AI, cloud, and security architecture that can scale.",
      },
      {
        icon: "feather icon-code",
        title: "Build",
        text: "Deliver products, integrations, and automations with quality.",
      },
      {
        icon: "feather icon-shield",
        title: "Operate",
        text: "Secure, monitor, train, and keep improving after go-live.",
      },
    ],
  },

  knowledge: {
    title: "Knowledge Sharing",
    text: "Sharing knowledge and inspiration is equally important in our professional spheres. It can foster vision and strengthen our professional ties. We regularly conduct trainings, workshops & general brainstorm sessions with other professionals. Some of the recent notable events are:",
    image: "/assets/images/spsimg/aboutus/knowledge.webp",
    imageAlt: "SPS knowledge sharing sessions",
    events: [
      {
        title: "IoT MOOC",
        text: "Launched in partnership with Avnet Monthly.",
      },
      {
        title: "Chatbot jumpstarts",
        text: "Hands-on sessions to help teams get started with chatbots.",
      },
      {
        title: "IoT workshops",
        text: "Workshops for young and old alike.",
      },
      {
        title: "Blockchain events",
        text: "Monthly events for practitioners and partners.",
      },
    ],
  },

  stats: [
    { value: "25", suffix: "+", label: "Years of operations" },
    { value: "20", suffix: "+", label: "Years of excellence" },
    { value: "3", suffix: "", label: "Flagship industry awards" },
    { value: "4", suffix: "", label: "Core practice areas" },
  ],

  cta: {
    title: "Careers at Software Productivity Strategists",
    text: "We're growing our business and expanding our roots — see all jobs available at the moment and apply.",
    label: "See Careers",
    href: CAREER_PATH,
  },
};
