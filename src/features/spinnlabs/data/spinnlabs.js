import {
  SPINNLABS_AGREEMENT_PATH,
  SPINNLABS_EQUITY_PATH,
  SPINNLABS_EXECUTE_PATH,
  SPINNLABS_EXPERTISE_PATH,
  SPINNLABS_INDUSTRY_PATH,
  SPINNLABS_LAUNCH_PATH,
  SPINNLABS_OVERVIEW_PATH,
  SPINNLABS_PLAN_PATH,
  SPINNLABS_PROPOSE_PATH,
  SPINNLABS_STARTUPS_PATH,
  SPINNLABS_ACADEMIA_PATH,
  SPINNLABS_IMAGES,
  SPINNLABS_LINKS,
  SPINNLABS_SIG_ITEMS,
} from "../constants/spinnlabs.constants";



const hub = {
  title: "Tech Hub for innovators and entrepreneurs",
  text: "A collaborative space that empowers ideas, innovation, and business growth through technology.",
  logo: SPINNLABS_IMAGES.overview.hubLogo,
  background: SPINNLABS_IMAGES.overview.hubBackground,
};



export const overviewPage = {
  title: "Overview",
  description:
    "SPINN Labs serves as a hub for innovators and entrepreneurs. As a member of our organization you will join a community of innovators, industry experts, academics and others who are seeking to make Pakistan and the world a better place.",
  kicker: "SPINN LABS",

  benefits: {
    title: "What members get",
    text: "Receive mentoring from tech industry experts, apply for funding, take part in tech meetups, and join training courses.",
    items: [
      {
        icon: "feather icon-users",
        title: "Expert mentoring",
        text: "Learn from tech industry experts who help you turn an idea into a working product.",
      },
      {
        icon: "feather icon-award",
        title: "Funding opportunities",
        text: "Apply for funding support as you grow your startup or research concept.",
      },
      {
        icon: "feather icon-globe",
        title: "Tech meetups",
        text: "Join a community of innovators, academics, and industry practitioners.",
      },
      {
        icon: "feather icon-book-open",
        title: "Training courses",
        text: "Build skills that match global industry requirements through applied learning.",
      },
    ],
  },

  stories: [
    {
      title: "Challenge the status quo",
      paragraphs: [
        "We are imaginative risk-takers, willing to challenge status quo assumptions and transform hardworking individuals into successful professionals.",
        "We consider multiple sources of evidence and diverse perspectives to review performance, note progress, and engage in continuous improvement.",
      ],
      image: SPINNLABS_IMAGES.overview.story1,
      imageAlt: "SPINN Labs community collaboration",
      reverse: false,
      tone: "light",
    },
    {
      title: "Unique potential, global skills",
      paragraphs: [
        "Appreciate every CS graduate has a unique potential to become a valuable resource.",
        "Base our work on knowledge insights about global industry skill requirements. Respect dignity, worth, and uniqueness of each individual.",
      ],
      image: SPINNLABS_IMAGES.overview.story2,
      imageAlt: "SPINN Labs academic and industry skill development",
      reverse: true,
      tone: "white",
    },
  ],

  hub,

  processImage: {
    title: "How SPINN Labs brings people together",
    text: "From mentoring and training to meetups and applied projects, SPINN Labs connects talent with industry practice.",
    image: SPINNLABS_IMAGES.overview.process,
    imageAlt: "SPINN Labs knowledge sharing and practice model",
  },

  cta: {
    title: "Ready to join SPINN Labs?",
    text: "Talk with SPS about mentoring, training, and the community around our innovation hub.",
    label: "Contact Us",
    href: SPINNLABS_LINKS.contact,
  },
};



export const academiaPage = {
  title: "Academia",
  description:
    "The Academic Outreach Program at SpinnLabs is focused on introducing the faculty and students to the technologies and opportunities that exist in industry today.",
  kicker: "SPINN LABS",

  sigs: {
    title: "Special Interest Groups",
    text: "We are currently leading Special Interest Groups in the following verticals.",
    image: SPINNLABS_IMAGES.academia.specialInterestGroups,
    imageAlt:
      "SPINN Labs academic outreach and special interest groups",
    items: SPINNLABS_SIG_ITEMS,
    stats: [
      { value: "180", suffix: "+", label: "Faculty & Mentors" },
      { value: "3500", suffix: "+", label: "Students Engaged" },
    ],
  },

  hub,

  cta: {
    title: "Bring faculty and students into industry practice",
    text: "Partner with SPINN Labs to introduce current technologies, special interest groups, and applied learning opportunities.",
    label: "Contact Us",
    href: SPINNLABS_LINKS.contact,
  },
};

/* =========================================================
   INDUSTRY
========================================================= */

export const industryPage = {
  title: "Industry",
  description:
    "The Industry Outreach Program at SpinnLabs is focused on understanding the challenges and opportunities faced by the industry and help solve them resulting in innovation, entrepreneurship and startups.",
  kicker: "SPINN LABS",

  outcomes: {
    title: "Innovation, entrepreneurship, and startups",
    text: "We work with industry to understand challenges and opportunities, then help solve them.",
    items: [
      {
        icon: "feather icon-cpu",
        title: "Innovation",
        text: "Identify industry challenges and apply new approaches that move practice forward.",
      },
      {
        icon: "feather icon-users",
        title: "Entrepreneurship",
        text: "Connect industry opportunities with people who can turn them into working ventures.",
      },
      {
        icon: "feather icon-award",
        title: "Startups",
        text: "Support the path from an industry problem to a new product, service, or company.",
      },
    ],
  },

  sigs: {
    title: "Special Interest Groups",
    text: "We are currently leading Special Interest Groups in the following verticals.",
    image: SPINNLABS_IMAGES.industry.specialInterestGroups,
    imageAlt:
      "SPINN Labs industry outreach and special interest groups",
    items: SPINNLABS_SIG_ITEMS,
    stats: [
      { value: "5", suffix: "", label: "Industry Verticals" },
      { value: "3", suffix: "", label: "Growth Outcomes" },
    ],
  },

  hub,

  cta: {
    title: "Partner with SPINN Labs on industry challenges",
    text: "Talk with SPS about special interest groups, industry outreach, and turning challenges into innovation and startups.",
    label: "Contact Us",
    href: SPINNLABS_LINKS.contact,
  },
};



export const expertisePage = {
  title: "Centers of Expertise",
  description:
    "At SPS, we believe in the power of collaboration, innovation, and collective expertise. We are thrilled to invite you to join our distinguished Center of Expertise, a fraternity of subject matter experts dedicated to advancing knowledge, fostering collaboration, and shaping the future of technology.",
  kicker: "SPINN LABS",

  apart: {
    title: "What sets us apart",
    text: "A community of subject matter experts advancing knowledge, collaboration, and the future of technology.",
    items: [
      {
        icon: "feather icon-users",
        title: "Dynamic community of experts",
        text: "Immerse yourself in a vibrant community of professionals who excel in their respective fields. Connect with like-minded experts who share your passion and commitment to pushing the boundaries of knowledge.",
      },
      {
        icon: "feather icon-globe",
        title: "Collaborative knowledge exchange",
        text: "Our Center of Expertise provides a platform for open dialogue and knowledge exchange. Engage in thought-provoking discussions, share insights, and collaborate on innovative solutions to industry challenges.",
      },
      {
        icon: "feather icon-book-open",
        title: "Access to exclusive resources",
        text: "Stay ahead of the curve with privileged access to cutting-edge research, industry reports, and curated content. Our members enjoy a wealth of resources designed to keep them informed and at the forefront of their expertise.",
      },
      {
        icon: "feather icon-target",
        title: "Influence industry trends",
        text: "Be a key player in shaping the future of information technology. Contribute your expertise to discussions, workshops, and events that influence industry best practices and set new standards.",
      },
      {
        icon: "feather icon-award",
        title: "Professional development",
        text: "Elevate your skills and knowledge through specialized workshops, training sessions, and events tailored to the evolving needs of our dynamic industry.",
      },
    ],
  },

  join: {
    title: "How to join",
    paragraphs: [
      "Becoming a part of our Center of Expertise is a simple step towards a more enriching professional journey. Register to unlock a world of opportunities, connections, and insights.",
      "Join our Global Centers of Expertise today and be a driving force in the evolution of information technology. Together, let's redefine excellence!",
    ],
    image: SPINNLABS_IMAGES.expertise.join,
    imageAlt: "SPS Global Centers of Expertise",
    label: "Join Us",
    href: SPINNLABS_LINKS.contact,
  },

  hub,

  cta: {
    title: "Join our Global Centers of Expertise",
    text: "Talk with SPS about becoming part of a community of subject matter experts shaping the future of technology.",
    label: "Join Us",
    href: SPINNLABS_LINKS.contact,
  },
};



export const startupsPage = {
  title: "Startups",
  description:
    "Experience our streamlined Six-Step Entrepreneurship Journey: Propose your startup story, vision, and unique selling points; Create a comprehensive business plan; Formulate an equity allocation model; Sign an entrepreneurship agreement; Execute with a focus on tracking milestones and adapting strategies; and Spin-Off when ready to become an independent business unit. Let's collaborate for your success!",
  bannerDescription:
    "A six-step entrepreneurship journey from idea to independent spin-off.",
  kicker: "SPINN LABS",

  bannerSteps: [
    {
      step: "01",
      label: "Propose Idea",
      icon: "feather icon-zap",
      href: SPINNLABS_PROPOSE_PATH,
    },
    {
      step: "02",
      label: "Create Plan",
      icon: "feather icon-edit",
      href: SPINNLABS_PLAN_PATH,
    },
    {
      step: "03",
      label: "Sign Agreement",
      icon: "feather icon-file-text",
      href: SPINNLABS_AGREEMENT_PATH,
    },
    {
      step: "04",
      label: "Execute Plan",
      icon: "feather icon-settings",
      href: SPINNLABS_EXECUTE_PATH,
    },
    {
      step: "05",
      label: "Launch Startup",
      icon: "feather icon-send",
      href: SPINNLABS_LAUNCH_PATH,
    },
    {
      step: "06",
      label: "Equity Model",
      icon: "feather icon-pie-chart",
      href: SPINNLABS_EQUITY_PATH,
    },
  ],

  journey: {
    title: "Our Six-Step Entrepreneurship Journey",
    text: "Streamline operations, enhance efficiency, and gain real-time control with intelligent automation solutions.",
    note: "We look forward to joining forces to support your success.",

    items: [
      {
        id: "propose-idea",
        step: "01",
        title: "Propose Idea",
        href: SPINNLABS_PROPOSE_PATH,
        text: "Share your startup's story, describe your idea, how it solves industry challenges, your team, mentors, core technology, and vision.",
      },
      {
        id: "create-plan",
        step: "02",
        title: "Create Plan",
        href: SPINNLABS_PLAN_PATH,
        text: "Craft a comprehensive business plan covering product development, branding, legal protection, and fair equity allocation.",
      },
      {
        id: "equity-model",
        step: "03",
        title: "Equity Model",
        href: SPINNLABS_EQUITY_PATH,
        text: "A financial framework that allocates ownership based on each party's contributions, ensuring fairness and shared responsibility.",
      },
      {
        id: "sign-agreement",
        step: "04",
        title: "Sign Agreement",
        href: SPINNLABS_AGREEMENT_PATH,
        text: "Review the terms carefully and sign to solidify the team's commitment to the project.",
      },
      {
        id: "execute-plan",
        step: "05",
        title: "Execute Plan",
        href: SPINNLABS_EXECUTE_PATH,
        text: "Monitor milestones, product development, branding, pricing, financials, and team performance to stay on track.",
      },
      {
        id: "launch-startup",
        step: "06",
        title: "Launch Startup",
        href: SPINNLABS_LAUNCH_PATH,
        text: "Spin off your venture, operate autonomously, pursue growth opportunities, and execute your business objectives.",
      },
    ],
  },

  technologies: {
    title: "Technologies",
    text: "Explore cutting-edge technologies including AI, IoT, cloud computing, and cybersecurity that drive innovation and business growth.",

    items: [
      {
        icon: "feather icon-cpu",
        title: "AI",
        text: "We develop AI-based solutions for corporates and startups. From strategy to execution, we guide clients through digital transformation leveraging Data Analytics, NLP, Computer Vision, Machine Learning, Deep Learning, and IoT.",
      },
      {
        icon: "feather icon-cloud",
        title: "Cloud",
        text: "From strategy to implementation, SPS specialists ensure you get the most out of cloud technologies, integrating the latest services to build secure industry solutions.",
      },
      {
        icon: "feather icon-shield",
        title: "Cybersecurity",
        text: "SPS Cybersecurity practices include Digital Trust, User and Data Security, Threat Management, SIEM systems, Application and Network Security, and Professional Services.",
      },
      {
        icon: "feather icon-globe",
        title: "IoT",
        text: "SPS IoT solutions integrate smart devices and sensors with industry applications to enable real-time insights, automation, and advanced analytics for businesses.",
      },
    ],
  },

  hub,

  cta: {
    title: "Start your entrepreneurship journey",
    text: "Talk with SPS about proposing an idea, building a plan, and spinning off an independent startup.",
    label: "Contact Us",
    href: SPINNLABS_LINKS.contact,
  },
};

/* =========================================================
   PROPOSE IDEA
========================================================= */

export const proposePage = {
  title: "Propose Idea",
  description: startupsPage.description,
  bannerDescription:
    "Share your startup idea, vision, and unique selling points with SPS.",
  kicker: "SPINN LABS",

  sidebar: {
    title: "Submit Your Startup Idea",
    text: "Walk us through your concept, market, team, and plan so we can evaluate the opportunity together.",

    steps: [
      "Share your contact details and project name.",
      "Describe the idea, vision, and why it matters.",
      "Outline the market, business model, and go-to-market plan.",
      "Introduce your team and how you will execute and grow.",
    ],

    note: "Required fields are marked with *.",
  },

  form: {
    title: "Submit an Idea",
    text: "Answer as completely as you can. You can expand any box as you write.",
    note: "By submitting, you confirm the information is accurate and ready for SPS review.",
    submitLabel: "Submit Idea",

    sections: [
      {
        icon: "fa-solid fa-user",
        title: "Contact & Project",
        text: "How we can reach you and what this project is called.",
        columns: 2,

        fields: [
          {
            id: "full_name",
            name: "full_name",
            number: "1",
            label: "Your Full Name",
            placeholder: "Enter your full name",
            required: true,
          },
          {
            id: "email",
            name: "email",
            type: "email",
            number: "2",
            label: "Email Address",
            placeholder: "you@email.com",
            required: true,
          },
          {
            id: "phone",
            name: "phone",
            type: "tel",
            number: "3",
            label: "Phone No.",
            placeholder: "Your phone number",
            required: true,
          },
          {
            id: "project_name",
            name: "project_name",
            number: "4",
            label: "Project Name",
            placeholder: "Name of your startup or idea",
            required: true,
          },
        ],
      },

      {
        icon: "fa-solid fa-lightbulb",
        title: "The Idea",
        text: "Tell us what you are building and why it matters to you.",

        fields: [
          {
            id: "question1",
            name: "question1",
            type: "textarea",
            number: "5",
            label: "Vision, Mission & Idea",
            placeholder:
              "Describe the problem, your solution, and the mission behind it.",
            required: true,
          },
          {
            id: "question2",
            name: "question2",
            type: "textarea",
            number: "6",
            label: "Why are you passionate about this idea?",
            placeholder: "What drives you to pursue this?",
          },
          {
            id: "question18",
            name: "question18",
            type: "textarea",
            number: "22",
            label: "What have you done so far to validate your idea?",
            placeholder:
              "Interviews, prototypes, early users, research, etc.",
          },
        ],
      },

      {
        icon: "fa-solid fa-chart-line",
        title: "Market Opportunity",
        text: "Who you serve and how you stand out.",

        fields: [
          {
            id: "question3",
            name: "question3",
            type: "textarea",
            number: "7",
            label: "What is the market opportunity?",
            placeholder: "Market size, demand, and why now.",
          },
          {
            id: "question4",
            name: "question4",
            type: "textarea",
            number: "8",
            label: "Who is your target audience?",
            placeholder: "Primary customers or users.",
          },
          {
            id: "question5",
            name: "question5",
            type: "textarea",
            number: "9",
            label: "What is your unique value proposition?",
            placeholder: "What makes this idea different and better?",
          },
          {
            id: "question9",
            name: "question9",
            type: "textarea",
            number: "13",
            label: "What is your competitive analysis?",
            placeholder:
              "Competitors, alternatives, and your advantage.",
          },
        ],
      },

      {
        icon: "fa-solid fa-briefcase",
        title: "Business Model & Plan",
        text: "How the idea becomes a sustainable business.",

        fields: [
          {
            id: "question6",
            name: "question6",
            type: "textarea",
            number: "10",
            label: "What is your revenue model?",
            placeholder: "How will the business make money?",
          },
          {
            id: "question7",
            name: "question7",
            type: "textarea",
            number: "11",
            label: "Do you have a business plan?",
            placeholder:
              "Yes/no, and a brief summary if you do.",
          },
          {
            id: "question8",
            name: "question8",
            type: "textarea",
            number: "12",
            label: "What is your go-to-market strategy?",
            placeholder:
              "How will you reach your first customers?",
          },
          {
            id: "question11",
            name: "question11",
            type: "textarea",
            number: "15",
            label: "What is your financial plan and funding needs?",
            placeholder: "Budget, runway, and funding required.",
          },
          {
            id: "question12",
            name: "question12",
            type: "textarea",
            number: "16",
            label: "What is your timeline for launch and growth?",
            placeholder:
              "Key milestones from now to launch and scale.",
          },
        ],
      },

      {
        icon: "fa-solid fa-users",
        title: "Team & Experience",
        text: "The people who will build and support this venture.",

        fields: [
          {
            id: "question10",
            name: "question10",
            type: "textarea",
            number: "14",
            label: "Who is on your team?",
            placeholder:
              "Founders, roles, and relevant skills.",
          },
          {
            id: "question21",
            name: "question21",
            type: "textarea",
            number: "20",
            label: "What is your personal background and experience?",
            placeholder:
              "Your relevant experience and expertise.",
          },
          {
            id: "question19",
            name: "question19",
            type: "textarea",
            number: "23",
            label: "Do you have a network of mentors or advisors?",
            placeholder:
              "Mentors, advisors, or industry support.",
          },
        ],
      },

      {
        icon: "fa-solid fa-shield-halved",
        title: "Strategy, Risk & Vision",
        text: "How you will grow, protect, and sustain the company.",

        fields: [
          {
            id: "question13",
            name: "question13",
            type: "textarea",
            number: "17",
            label: "What challenges do you anticipate?",
            placeholder:
              "Key risks and how you will address them.",
          },
          {
            id: "question14",
            name: "question14",
            type: "textarea",
            number: "18",
            label: "How do you plan to adapt to market changes?",
            placeholder:
              "Your approach to iteration and change.",
          },
          {
            id: "question15",
            name: "question15",
            type: "textarea",
            number: "19",
            label: "What is your long-term vision for the company?",
            placeholder:
              "Where you want this company to be in 5–10 years.",
          },
          {
            id: "question17",
            name: "question17",
            type: "textarea",
            number: "21",
            label: "What is your exit strategy?",
            placeholder:
              "Acquisition, IPO, long-term independent growth, etc.",
          },
          {
            id: "question20",
            name: "question20",
            type: "textarea",
            number: "24",
            label: "How do you plan to handle setbacks and failures?",
            placeholder:
              "How you recover, learn, and keep moving.",
          },
          {
            id: "question16",
            name: "question16",
            type: "textarea",
            number: "25",
            label:
              "How do you plan to handle intellectual property and legal issues?",
            placeholder:
              "Patents, trademarks, contracts, and compliance.",
          },
          {
            id: "question22",
            name: "question22",
            type: "textarea",
            number: "26",
            label:
              "Have you considered ethical and social implications of your business?",
            placeholder:
              "Impact, ethics, and responsibilities you have considered.",
          },
        ],
      },
    ],
  },
};


export const planPage = {
  title: "Create Plan",
  description:
    "A checklist of essential tasks for conceiving a startup, from idea validation and legal setup to launch and growth.",
  bannerDescription:
    "Craft a comprehensive business plan covering product, branding, legal protection, and funding.",
  kicker: "SPINN LABS",

  intro: {
    title: "Startup checklist",
    text: "Conceiving a startup is an exciting but challenging process. To help you get started, here is a checklist of essential tasks to execute when conceiving a startup.",
  },

  groups: [
    {
      title: "Idea Generation and Validation",
      items: [
        {
          title: "Identify a Problem",
          text: "Start by identifying a real problem or need in the market that your startup can address.",
        },
        {
          title: "Market Research",
          text: "Conduct thorough market research to understand the target audience, competition, and industry trends.",
        },
        {
          title: "Idea Validation",
          text: "Test your startup idea with potential customers, gather feedback, and validate its viability.",
        },
      ],
    },
    {
      title: "Legal and Regulatory Considerations",
      items: [
        {
          title: "Business Structure",
          text: "Choose the legal structure for your startup (e.g., LLC, corporation, sole proprietorship).",
        },
        {
          title: "Name and Trademarks",
          text: "Select a unique business name and check for trademark availability.",
        },
        {
          title: "Permits and Licenses",
          text: "Identify and acquire any necessary permits and licenses for your industry and location.",
        },
      ],
    },
    {
      title: "Funding and Financing",
      items: [
        {
          title: "Funding Strategy",
          text: "Determine how you will finance your startup (e.g., self-funding, loans, investors, crowdfunding).",
        },
        {
          title: "Pitch Deck",
          text: "Prepare a compelling pitch deck for potential investors.",
        },
      ],
    },
    {
      title: "Team Building",
      items: [
        {
          title: "Co-Founders and Team",
          text: "Identify and recruit co-founders and key team members with the required skills and expertise.",
        },
        {
          title: "Advisors and Mentors",
          text: "Build a network of advisors and mentors who can provide guidance.",
        },
      ],
    },
    {
      title: "Product or Service Development",
      items: [
        {
          title: "Product/Service Definition",
          text: "Clearly define your product or service and its unique selling points.",
        },
        {
          title: "Prototyping",
          text: "Develop a prototype or minimum viable product (MVP) for testing.",
        },
        {
          title: "Development Roadmap",
          text: "Create a product development roadmap with milestones and timelines.",
        },
      ],
    },
    {
      title: "Branding and Marketing",
      items: [
        {
          title: "Brand Identity",
          text: "Develop a strong brand identity, including a logo, color scheme, and brand guidelines.",
        },
        {
          title: "Marketing Strategy",
          text: "Create a marketing strategy that encompasses online and offline channels.",
        },
        {
          title: "Website and Online Presence",
          text: "Establish an online presence with a professional website and social media profiles.",
        },
      ],
    },
    {
      title: "Sales and Distribution",
      items: [
        {
          title: "Sales Strategy",
          text: "Outline your sales strategy and set sales goals.",
        },
        {
          title: "Distribution Channels",
          text: "Determine how you will deliver your product or service to customers.",
        },
      ],
    },
    {
      title: "Customer Acquisition",
      items: [
        {
          title: "Customer Acquisition Plan",
          text: "Develop a plan for acquiring your first customers.",
        },
        {
          title: "Customer Relationship Management (CRM)",
          text: "Choose a CRM system to manage customer relationships.",
        },
      ],
    },
    {
      title: "Financial Management",
      items: [
        {
          title: "Financial Tools",
          text: "Set up financial tracking and accounting systems.",
        },
        {
          title: "Budgeting",
          text: "Create a budget for startup expenses and operations.",
        },
      ],
    },
    {
      title: "Networking and Support",
      items: [
        {
          title: "Networking",
          text: "Build relationships with other entrepreneurs, industry peers, and potential partners.",
        },
        {
          title: "Support Ecosystem",
          text: "Explore startup incubators, accelerators, and co-working spaces in your area.",
        },
      ],
    },
    {
      title: "Legal Documentation",
      items: [
        {
          title: "Contracts and Agreements",
          text: "Draft any necessary contracts, such as partnership agreements or employment contracts.",
        },
        {
          title: "Intellectual Property",
          text: "Protect your intellectual property through patents, trademarks, or copyrights as needed.",
        },
      ],
    },
    {
      title: "Technology and Tools",
      items: [
        {
          title: "Tech Stack",
          text: "Choose the technology stack for your product and consider the tools needed for operations and marketing.",
        },
      ],
    },
    {
      title: "Testing and Feedback",
      items: [
        {
          title: "Beta Testing",
          text: "Conduct beta testing with early users and gather feedback.",
        },
        {
          title: "Iterate",
          text: "Continuously improve your product or service based on user feedback.",
        },
      ],
    },
    {
      title: "Launch and Growth Plan",
      items: [
        {
          title: "Launch Strategy",
          text: "Develop a comprehensive launch plan to create buzz around your startup.",
        },
        {
          title: "Growth Strategies",
          text: "Outline strategies for scaling and expanding your business.",
        },
      ],
    },
    {
      title: "Adaptability and Resilience",
      items: [
        {
          title: "Pivot Plan",
          text: "Be prepared to pivot your business strategy if needed based on market feedback.",
        },
        {
          title: "Resilience",
          text: "Develop a mindset of resilience to face challenges and setbacks.",
        },
      ],
    },
    {
      title: "Business Planning",
      items: [
        {
          title: "Business Plan",
          text: "Create a comprehensive business plan outlining vision, mission, objectives, and strategies.",
        },
        {
          title: "Target Market",
          text: "Define your target market and develop clear buyer personas.",
        },
        {
          title: "Revenue Model",
          text: "Determine how your startup will generate revenue.",
        },
        {
          title: "Financial Projections",
          text: "Develop income statements, balance sheets, and cash flow forecasts.",
        },
      ],
    },
  ],
};

/* =========================================================
   AGREEMENT
========================================================= */

export const agreementPage = {
  title: "Sign Agreement",
  description:
    "Review the Entrepreneurship Collaboration Agreement covering the business plan, contributions, equity, intellectual property, and dispute resolution.",
  bannerDescription:
    "Review the terms carefully and sign to solidify the team's commitment to the project.",
  kicker: "SPINN LABS",

  login: {
    label: "Login",
    href: SPINNLABS_LINKS.contact,
  },

  heading: "Entrepreneurship Collaboration Agreement",

  text: "The Entrepreneurship Agreement establishes an arrangement between parties intent to collaborate on a business venture. It outlines key provisions, including the development of a Business Plan, contributions from the Parties to make it financially viable, and the establishment of a for-profit entity upon achieving milestones. Equity distribution is based on contributions, and the Parties may permit additional individuals or entities to join. Disputes will be resolved through negotiation and arbitration. The agreement also covers intellectual property rights and various procedural details related to decision-making, costs, and dispute resolution. Amendments require written consent from all Parties.",
};

/* =========================================================
   EXECUTE PLAN
========================================================= */

export const executePage = {
  title: "Execute Plan",
  description:
    "A guide to executing a startup plan, from market research and funding through sales, scaling, and an exit strategy.",
  bannerDescription:
    "Monitor milestones, product development, branding, pricing, financials, and team performance to stay on track.",
  kicker: "SPINN LABS",

  intro: {
    title: "How to execute a startup plan",
    text: "Executing a startup plan involves a series of well-defined steps and a significant amount of dedication, hard work, and adaptability. Here is a comprehensive guide on what it takes to execute a startup plan.",
  },

  closing:
    "Executing a startup plan is a demanding and dynamic process. Success often requires a combination of a solid plan, hard work, adaptability, and a bit of luck. It is essential to remain agile, continuously learn, and stay committed to your vision. Remember that most successful startups face obstacles and failures along the way but use them as opportunities to learn and grow.",

  groups: [
    {
      title: "Idea and Market Research",
      items: [
        {
          text: "Start by coming up with a unique and viable business idea that solves a real problem or meets a market demand.",
        },
        {
          text: "Conduct thorough market research to understand your target audience, competition, and industry trends.",
        },
      ],
    },
    {
      title: "Business Plan",
      items: [
        {
          text: "Create a detailed business plan outlining your mission, vision, objectives, and strategies for success.",
        },
        {
          text: "Define your target market, marketing and sales strategies, financial projections, and operational plan.",
        },
      ],
    },
    {
      title: "Legal Structure and Registration",
      items: [
        {
          text: "Choose the appropriate legal structure and register your business with relevant authorities.",
        },
      ],
    },
    {
      title: "Funding",
      items: [
        {
          text: "Determine financial needs and secure funding through bootstrapping, loans, investors, or crowdfunding.",
        },
      ],
    },
    {
      title: "Team Building",
      items: [
        {
          text: "Recruit a skilled and motivated team that shares your vision and complements your expertise.",
        },
      ],
    },
    {
      title: "Product / Service Development",
      items: [
        {
          text: "Develop, test, and iterate your product or service based on real user feedback.",
        },
      ],
    },
    {
      title: "Marketing and Branding",
      items: [
        {
          text: "Develop a strong brand identity and marketing strategy.",
        },
        {
          text: "Utilize various marketing channels, such as social media, content marketing, and advertising, to reach your target audience.",
        },
      ],
    },
    {
      title: "Sales and Distribution",
      items: [
        {
          text: "Establish a sales process and distribution channels.",
        },
        {
          text: "Train your sales team and monitor their performance.",
        },
      ],
    },
    {
      title: "Customer Acquisition and Retention",
      items: [
        {
          text: "Focus on acquiring early customers and retaining them through excellent customer service and product quality.",
        },
        {
          text: "Implement customer feedback to improve your product or service continually.",
        },
      ],
    },
    {
      title: "Financial Management",
      items: [
        {
          text: "Set up robust financial systems and track your income, expenses, and cash flow.",
        },
        {
          text: "Stay within your budget and be prepared to pivot if financial conditions change.",
        },
      ],
    },
    {
      title: "Legal and Regulatory Compliance",
      items: [
        {
          text: "Ensure that your startup complies with all applicable laws, regulations, and licenses.",
        },
      ],
    },
    {
      title: "Scaling",
      items: [
        {
          text: "Plan for growth by scaling your operations, increasing your customer base, and expanding into new markets.",
        },
      ],
    },
    {
      title: "Adaptability",
      items: [
        {
          text: "Be prepared to pivot and make adjustments to your business plan as needed based on changing market conditions or customer feedback.",
        },
      ],
    },
    {
      title: "Networking and Partnerships",
      items: [
        {
          text: "Build a strong network of mentors, advisors, and industry peers who can offer guidance and support.",
        },
        {
          text: "Explore potential partnerships that can help your business grow.",
        },
      ],
    },
    {
      title: "Measuring Success",
      items: [
        {
          text: "Define key performance indicators (KPIs) and regularly assess your progress.",
        },
        {
          text: "Be willing to make data-driven decisions and adjust your strategies accordingly.",
        },
      ],
    },
    {
      title: "Resilience and Perseverance",
      items: [
        {
          text: "Expect setbacks and challenges, and be resilient in the face of adversity.",
        },
        {
          text: "Perseverance is often the key to overcoming obstacles and achieving success.",
        },
      ],
    },
    {
      title: "Exit Strategy",
      items: [
        {
          text: "Consider your long-term goals, whether it's building a sustainable business, going public, or selling the company.",
        },
      ],
    },
  ],
};

/* =========================================================
   LAUNCH STARTUP
========================================================= */

export const launchPage = {
  title: "Launch Startup",
  description:
    "A guide to spinning off a venture into an independent business unit, from timing and operations through culture, collaboration, and an exit strategy.",
  bannerDescription:
    "Spin off your venture, operate autonomously, pursue growth opportunities, and execute your business objectives.",
  kicker: "SPINN LABS",

  intro: {
    title: "Spin off an independent venture",
    text: "The concept of spinning off a venture into an independent business unit is often associated with larger organizations that have incubated or developed new projects or divisions. However, this approach can also be applied to startups or smaller businesses when the circumstances are appropriate. Here is an elaboration on this idea.",
  },

  closing:
    "The decision to spin off a venture into an independent business unit is a strategic one, and it should be based on a thorough analysis of the venture's readiness for independence, market conditions, and the organization's broader goals. When executed correctly, it can lead to increased focus, growth, and adaptability for both the parent organization and the spun-off unit.",

  groups: [
    {
      title: "Timing is Crucial",
      items: [
        {
          text: "Spinning off a venture should be carefully timed and not rushed.",
        },
        {
          text: "The ideal moment is when the venture reaches maturity, stability, and self-sufficiency.",
        },
      ],
    },
    {
      title: "Operational Independence",
      items: [
        {
          text: "The spun-off unit should operate autonomously with its own management and budget.",
        },
      ],
    },
    {
      title: "Distinct Objectives",
      items: [
        {
          text: "Define clear goals aligned with the venture's specific mission and purpose.",
        },
      ],
    },
    {
      title: "Focused Growth Opportunities",
      items: [
        {
          text: "Independent operations allow greater agility in pursuing targeted growth opportunities.",
        },
      ],
    },
    {
      title: "Resource Allocation",
      items: [
        {
          text: "Resources can be allocated efficiently based on the unit's specific priorities.",
        },
      ],
    },
    {
      title: "Risk Management",
      items: [
        {
          text: "Operational risks remain contained within the independent unit.",
        },
      ],
    },
    {
      title: "Financial Structure",
      items: [
        {
          text: "Establish a clear financial strategy, including independent funding or financing.",
        },
      ],
    },
    {
      title: "Legal and Organizational Structure",
      items: [
        {
          text: "Set up appropriate legal entities and governance structures.",
        },
      ],
    },
    {
      title: "Communication and Culture",
      items: [
        {
          text: "Communicate changes clearly to employees, customers, and stakeholders.",
        },
        {
          text: "Build a distinct culture while maintaining shared values with the parent organization.",
        },
      ],
    },
    {
      title: "Monitoring and Evaluation",
      items: [
        {
          text: "Regularly assess performance, objectives, and mission alignment.",
        },
      ],
    },
    {
      title: "Continued Collaboration",
      items: [
        {
          text: "Explore collaboration opportunities that offer mutual benefits.",
        },
      ],
    },
    {
      title: "Exit Strategy",
      items: [
        {
          text: "Define a clear exit strategy such as sale, IPO, or long-term independent operation.",
        },
      ],
    },
  ],
};

/* =========================================================
   EQUITY MODEL
========================================================= */

export const equityPage = {
  title: "Equity Model",
  description:
    "Implement the Slicing Pie model for fair equity allocation based on real at-risk contributions of time, money, ideas, and resources.",
  bannerDescription:
    "A financial framework that allocates ownership based on each party's contributions, ensuring fairness and shared responsibility.",
  kicker: "SPINN LABS",

  video: {
    src: "https://www.youtube.com/embed/sqUHmlFPpkY",
    poster: SPINNLABS_IMAGES.equity.poster,
    label: "Play Video",
  },

  blocks: [
    {
      id: "equity-distribution",
      layout: "copy-media",
      media: "video",
      mediaSide: "right",
      title: "Equity Distribution",
      kicker:
        "We Implement the Slicing Pie Model for Fair Equity Allocation",
      paragraphs: [
        "The Slicing Pie model ensures a perfectly fair equity split by aligning ownership with real at-risk contributions such as time, money, ideas, relationships, equipment, and facilities. The model dynamically adjusts as contributions evolve.",
      ],
    },

    {
      id: "equity-share",
      layout: "copy-media",
      media: "video",
      mediaSide: "left",
      title:
        "Individual Equity Share = Individual Slices ÷ Total Slices",
      paragraphs: [
        "This formula provides a perfect equity split at any given moment, adapting as your venture progresses. It remains in effect until your company achieves breakeven or secures sufficient capital to compensate participants for their contributions. At this point, the equity split becomes static and determines how dividends or proceeds from a sale are distributed.",
        "Slicing Pie not only ensures an equitable equity split but also aids in calculating a fair buyout price when a team member departs before breakeven. This model is embraced by entrepreneurs worldwide, and the resources below offer comprehensive guidance on implementing it effectively in your company. Slicing Pie is, without a doubt, the fairest way to allocate equity.",
      ],
    },

    {
      id: "fair-and-easy",
      layout: "split",
      columns: [
        {
          title: "Always 100% Fair",
          paragraphs: [
            "The Slicing Pie model is anchored in real-world events and automatically adapts to maintain fairness over time, regardless of evolving circumstances. Our founder startup calculator aids in determining the value of your founder equity and equitably allocating equity among founders, employees, and partners.",
          ],
        },
        {
          title: "Managing Your Equity Split is as Easy as Pie",
          paragraphs: [
            "Our Pie Slicer software simplifies the process of keeping track of your equity split. Slicing Pie's equity allocations evolve in response to participants' contributions of time, money, ideas, relationships, facilities, supplies, equipment, or any other essential resources your company relies on.",
          ],
        },
      ],
    },

    {
      id: "pie-slicer-formula",
      layout: "copy-media",
      mediaSide: "left",
      image: SPINNLABS_IMAGES.equity.pieSlicerFormula,
      imageAlt: "Pie Slicer formula",
      title: "The Pie Slicer follows the Slicing Pie formula",
      paragraphs: [
        "Slicing Pie is a universal formula for creating a perfectly fair equity split in an early-stage, bootstrapped startup. Traditional, old-fashioned equity splits are based on guesses about the future, negotiation skills and rules-of-thumb. The Slicing Pie model is different because it is based on what participants actually contribute over time.",
        "The Pie Slicer applies the Slicing Pie formula as outlined in the book Slicing Pie and The Slicing Pie Handbook.",
      ],
    },

    {
      id: "track-contributions",
      layout: "copy-media",
      mediaSide: "right",
      image: SPINNLABS_IMAGES.equity.trackContributions,
      imageAlt: "Track contributions",
      title: "Keep track of what people actually contribute.",
      paragraphs: [
        "The Slicing Pie Pie Slicer application will help you and your team keep track of your individual contributions and calculate the pie based on the calculations in Slicing Pie. Keep track of time, expenses, supplies, equipment, royalties on ideas, commissions on sales and any other contribution an individual could make.",
        "Contributions can be set to repeat at regular intervals. Set a monthly rent contribution or a weekly payroll, for instance.",
      ],
    },

    {
      id: "manage-access",
      layout: "copy-media",
      mediaSide: "left",
      image: SPINNLABS_IMAGES.equity.manageAccess,
      imageAlt: "Manage access and monitor contributions",
      title: "Manage access and monitor contributions.",
      paragraphs: [
        "Team members can submit their own contributions through their own account. Pie administrators can manage what individual users can see or do in the Pie Slicer. For instance, the Employee setting allows the user to see only their own contributions while the Executive setting allows the user to see all contributions.",
        "Pie administrators can allow someone to enter contributions directly or require approval before slices are added.",
      ],
    },

    {
      id: "the-well",
      layout: "copy-media",
      mediaSide: "right",
      image: SPINNLABS_IMAGES.equity.theWell,
      imageAlt: "Track cash investments with the Well",
      title: "Track direct cash investments with the Well.",
      paragraphs: [
        "The Well feature allows the team to track cash investments in the company. When money is invested it is held in the Well. When money is drawn from the Well to cover company expenses, the Pie Slicer allocates slices to each participant in the Well according to their share.",
        "The Well helps prevent unnecessary equity allocations by only calculating slices when investment funds are consumed.",
      ],
    },

    {
      id: "customize-variables",
      layout: "copy-media",
      mediaSide: "left",
      image: SPINNLABS_IMAGES.equity.customizeVariables,
      imageAlt: "Customize equity variables",
      title:
        "Customize variables based on your company's policies.",
      paragraphs: [
        "The Pie Slicer's default settings are set to reflect best practices for fairness as outlined in the Slicing Pie books. However, variables can be changed to reflect your industry norms or company policy.",
        "For example, Pie administrators can edit commission and royalty rates, set up their own project categories or determine how to calculate mileage rates.",
      ],
    },

    {
      id: "due-diligence",
      layout: "copy-media",
      mediaSide: "right",
      image: SPINNLABS_IMAGES.equity.dueDiligence,
      imageAlt: "Due diligence reports and charts",
      title: "Make due diligence a snap.",
      paragraphs: [
        "The Pie Slicer includes logs, reports and charts based on the team's contributions providing valuable insight for managers and potential investors.",
        "Gain a deeper understanding of how your team is spending their time, investing their cash, and consuming other inputs such as supplies or equipment.",
      ],
    },

    {
      id: "departures",
      layout: "copy-media",
      mediaSide: "left",
      image: SPINNLABS_IMAGES.equity.departures,
      imageAlt: "Handle departures fairly",
      title:
        "Handle departures fairly while protecting the interests of the company.",
      paragraphs: [
        "When someone leaves the company, the Pie Slicer will help calculate the fair buyout price and re-allocate slices depending on the circumstances of the separation.",
        "Slicing Pie protects the interests of both the company and the individual employees. Being fair to ex-employees is as important as being fair with employees.",
      ],
    },

    {
      id: "cap-table",
      layout: "copy-media",
      mediaSide: "right",
      image: SPINNLABS_IMAGES.equity.capTable,
      imageAlt: "Fair cap table",
      title: "Your cap table is always fair!",
      paragraphs: [
        "With Slicing Pie, your cap table always shows the fairest split no matter what changes. All other models and online tools create one-off, fixed equity splits based on estimates and guesses.",
        "Slicing Pie is the only equity model that guarantees a perfectly fair split.",
      ],
    },
  ],
};

/* =========================================================
   PAGE LOOKUP
========================================================= */

export const SPINNLABS_PAGES = {
  overview: overviewPage,
  academia: academiaPage,
  industry: industryPage,
  expertise: expertisePage,
  startups: startupsPage,
  propose: proposePage,
  plan: planPage,
  agreement: agreementPage,
  execute: executePage,
  launch: launchPage,
  equity: equityPage,
};

export function getSpinnLabsPage(slug) {
  return SPINNLABS_PAGES[slug] || null;
}