import { SITE_CONTACT, SITE_NAME, SITE_SHORT_NAME, absoluteUrl } from "@/lib/site";
import {
  PRODUCT_BANNER,
  PRODUCT_DETAIL_MEDIA,
  SPS_IMAGES as IMG,
  IBM_IMAGES as IBM,
  SPS_PRODUCT_IMAGES as PROD,
  ORCHESTRATE_TAB_IMAGES as AGENT,
  TESTIMONIAL_IMAGES as TESTI,
} from "../constants/product.constants";

export { PRODUCT_BANNER };

export const PRODUCT_PHONE_HREF = `tel:${SITE_CONTACT.phone.replace(/[^\d+]/g, "")}`;

export const PRODUCT_FALLBACK_IMAGE = PRODUCT_DETAIL_MEDIA.fallbackImage;

const FA_SUBSET = new Set([
  "arrow-right",
  "arrow-right-long",
  "boxes",
  "boxes-stacked",
  "brain",
  "briefcase",
  "broadcast-tower",
  "bug",
  "bullseye",
  "calendar-days",
  "cart-shopping",
  "chart-line",
  "circle",
  "circle-check",
  "circle-info",
  "circle-xmark",
  "clipboard-list",
  "clock",
  "cloud",
  "code",
  "code-branch",
  "cogs",
  "eye",
  "file-lines",
  "flask",
  "gears",
  "graduation-cap",
  "handshake",
  "headset",
  "heart",
  "industry",
  "lightbulb",
  "line-chart",
  "magnifying-glass",
  "network-wired",
  "paper-plane",
  "pen",
  "pie-chart",
  "play",
  "project-diagram",
  "robot",
  "rocket",
  "search",
  "server",
  "shield",
  "shield-halved",
  "sitemap",
  "star",
  "th-large",
  "tower-broadcast",
  "university",
  "user",
  "user-shield",
  "users",
  "users-gear",
  "video",
  "wallet",
  "wifi",
]);

const FA_ICON_ALIASES = {
  "id-card": "user-shield",
  lock: "shield",
  leaf: "heart",
  "chart-column": "chart-line",
  microchip: "cogs",
  link: "code-branch",
  "mobile-screen": "user",
  "clipboard-check": "clipboard-list",
  "building-lock": "shield-halved",
  "chart-area": "chart-line",
  "helmet-safety": "user-shield",
  "gauge-high": "chart-line",
  "file-invoice": "file-lines",
  "people-group": "users",
  "calendar-check": "calendar-days",
  "list-check": "clipboard-list",
  bell: "circle-info",
  "chart-pie": "pie-chart",
  table: "th-large",
  "magnifying-glass-chart": "magnifying-glass",
  "share-nodes": "sitemap",
  "user-secret": "user-shield",
  bolt: "rocket",
  "file-shield": "shield-halved",
  "user-lock": "user-shield",
  "id-badge": "user",
  laptop: "server",
  "satellite-dish": "tower-broadcast",
  database: "server",
  "diagram-project": "project-diagram",
  "folder-open": "file-lines",
  "wand-magic-sparkles": "lightbulb",
  "bug-slash": "bug",
  comments: "headset",
  "book-open": "file-lines",
  "mobile-screen-button": "user",
  "scale-balanced": "handshake",
  plug: "network-wired",
  "layer-group": "boxes-stacked",
  stamp: "file-lines",
  "building-columns": "university",
  fingerprint: "user-shield",
  key: "user-shield",
  "user-check": "user-shield",
  "clipboard-user": "clipboard-list",
  map: "sitemap",
  ban: "circle-xmark",
  "file-circle-check": "circle-check",
  smog: "cloud",
  "screwdriver-wrench": "gears",
  warehouse: "boxes-stacked",
  building: "industry",
  "map-location-dot": "sitemap",
  "file-contract": "file-lines",
  seedling: "heart",
  "arrows-spin": "gears",
  "envelope-open-text": "paper-plane",
  inbox: "boxes",
  gavel: "briefcase",
  filter: "magnifying-glass",
  share: "paper-plane",
  "wave-square": "chart-line",
  "triangle-exclamation": "circle-info",
  route: "sitemap",
  "heart-pulse": "heart",
  gauge: "chart-line",
  "clock-rotate-left": "clock",
  "box-open": "boxes",
  "truck-fast": "rocket",
};

export function faClass(icon = "") {
  const tokens = String(icon).trim().split(/\s+/);
  const nameToken = tokens.find(
    (token) =>
      token.startsWith("fa-") &&
      !["fa-solid", "fa-regular", "fa-brands", "fa-fw"].includes(token),
  );
  if (!nameToken) return "fa-solid fa-circle";
  const name = nameToken.slice(3);
  const mapped = FA_SUBSET.has(name) ? name : FA_ICON_ALIASES[name] || "circle";
  return `fa-solid fa-${mapped}`;
}

export const productFamilies = [
  {
    slug: "sps",
    name: "SPS Products",
    description:
      "SPS products streamline your business operations and maximize efficiency.",
    image: IMG.p1,
    team: { name: "SPS Team", role: "Enterprise Solutions" },
    categories: ["myid-self-verify", "azalio", "fabrico", "bms", "csm"],
  },
  {
    slug: "ibm",
    name: "IBM Products",
    description:
      "IBM solutions provide robust enterprise software and AI-powered tools for businesses.",
    image: IBM.ibm,
    team: { name: "IBM Team", role: "Business Solutions" },
    categories: ["automation", "data-ai", "security", "sustainability"],
  },
  {
    slug: "other",
    name: "Other Solutions",
    description:
      "Other solutions cover security, compliance, and business process enhancements.",
    image: IMG.p2,
    team: { name: "Solutions Team", role: "Business Enhancements" },
    categories: [
      "cloud-management",
      "analytics-tools",
      "iot-solutions",
      "blockchain",
    ],
  },
];

const defaultWhyChoose = (name) => ({
  eyebrow: `Why Choose ${name}`,
  title: "Built for enterprise outcomes",
  subtitle:
    "Secure, scalable capabilities designed to simplify work and accelerate results.",
  items: [
    {
      title: "Enterprise-ready platform",
      text: "Secure, scalable, and designed to integrate with the systems your teams already use.",
    },
    {
      title: "Faster time to value",
      text: "Reduce manual work, improve visibility, and give teams the tools they need to deliver.",
    },
  ],
  images: [IMG.p1, IMG.p3],
});

function product({
  slug,
  category,
  name,
  icon,
  summary,
  description,
  features = [],
  capabilities = [],
  whyChoose,
  tabs = [],
  images = [],
  videoUrl,
  videoPoster,
  externalUrl,
  ctaLabel = "Request a Quote",
  capabilitiesHeading,
  tabsHeading,
  headline,
  seoTitle,
  seoDescription,
}) {
  return {
    slug,
    category,
    name,
    icon,
    summary,
    description,
    headline: headline || name,
    features,
    capabilities,
    capabilitiesHeading: capabilitiesHeading || "AI-Powered Business Capabilities",
    tabsHeading: tabsHeading || "Build, run and manage AI agents",
    whyChoose: whyChoose || defaultWhyChoose(name),
    tabs,
    images: images.length ? images : [PRODUCT_FALLBACK_IMAGE],
    videoUrl: videoUrl || null,
    videoPoster: videoPoster || PRODUCT_DETAIL_MEDIA.video.poster,
    externalUrl: externalUrl || null,
    ctaLabel,
    seoTitle: seoTitle || name,
    seoDescription: seoDescription || summary,
  };
}

export const categories = [
  {
    slug: "myid-self-verify",
    family: "sps",
    name: "MYID Self Verify",
    shortName: "MYID Self Verify",
    icon: "fa-solid fa-id-card",
    eyebrow: "Identity Products",
    heading: "Secure identity verification for the modern workplace",
    description:
      "MYID helps organizations allow their employees to manage their corporate identity through a secure and easy-to-use mobile application.",
    image: PROD.myid,
    banner: PRODUCT_BANNER,
  },
  {
    slug: "azalio",
    family: "sps",
    name: "Azalio",
    shortName: "Azalio",
    icon: "fa-solid fa-users-gear",
    eyebrow: "Workforce Products",
    heading: "Keep frontline teams engaged and productive",
    description:
      "Keep your frontline employees happy. Reward employees, track engagement, and manage workforce operations.",
    image: PROD.azalio,
    banner: PRODUCT_BANNER,
  },
  {
    slug: "fabrico",
    family: "sps",
    name: "Fabrico",
    shortName: "Fabrico",
    icon: "fa-solid fa-industry",
    eyebrow: "Manufacturing Products",
    heading: "Smart manufacturing and operations tools",
    description:
      "Fabrico provides smart manufacturing and automation tools to optimize industrial operations.",
    image: IMG.p4,
    banner: PRODUCT_BANNER,
  },
  {
    slug: "bms",
    family: "sps",
    layout: "content",
    name: "Business Management System",
    shortName: "BMS",
    icon: "fa-solid fa-briefcase",
    eyebrow: "SPS Products",
    heading: "How can BMS help your business?",
    description:
      "Get real-time insights into every aspect of your company’s performance, optimize processes and streamline business with our Business Management System.",
    image: PROD.bms,
    banner: PRODUCT_BANNER,
    content: {
      about: {
        eyebrow: "About BMS",
        title: "How can BMS help your business?",
        text: "With a fully-integrated system, employees across departments can use the same reliable information to meet their day-to-day needs. The system should bring the front office and back office together. It’s a full enterprise management solution. Once you’ve implemented the BMS, you’ll be able to identify areas that need improvement and make cost-effective decisions. This will enable you to unleash your full potential and take your company to the next level.",
        features: [
          "Fully integrated across departments",
          "Front office and back office together",
          "Full enterprise management solution",
          "Identify areas that need improvement",
          "Make cost-effective decisions",
          "One source of reliable information",
        ],
        images: [PROD.bms, IMG.img595],
        videoUrl: PRODUCT_DETAIL_MEDIA.video.url,
      },
      benefits: {
        title: "What are the benefits of BMS?",
        text: "BMS offers more than traditional ERP solutions. Our system is tailored to your business needs so you can streamline operations and collaborate effectively across departments. It provides essential real-time information about your company, highlighting areas for improvement — all from one platform.",
        items: [
          {
            icon: "fa-solid fa-sitemap",
            title: "More than traditional ERP",
            text: "BMS is built as a full enterprise management solution, not a disconnected set of modules.",
          },
          {
            icon: "fa-solid fa-users",
            title: "Built around your business",
            text: "The system is tailored so teams can streamline operations and collaborate across departments.",
          },
          {
            icon: "fa-solid fa-chart-line",
            title: "Real-time information",
            text: "See how the company is performing and where to improve — all from one platform.",
          },
        ],
        image: IMG.ab1,
      },
      cms: {
        eyebrow: "Content Management",
        title: "Integrated Content Management System",
        subtitle: "It’s business oriented.",
        items: [
          {
            title: "Manage products and services in BMS",
            text: "Companies can manage their products and services right in BMS instead of keeping them in a separate system.",
          },
          {
            title: "Publish website content in one click",
            text: "Create website content that will be published with just one click.",
          },
          {
            title: "No extra technical team required",
            text: "No more need for full-time technical resources to manage the website.",
          },
        ],
        images: [IMG.p1, IMG.p3],
      },
      areas: [
        { icon: "fa-solid fa-chart-line", title: "Sales" },
        { icon: "fa-solid fa-wallet", title: "Accounting" },
        { icon: "fa-solid fa-users", title: "HR" },
        { icon: "fa-solid fa-boxes", title: "Product Management" },
        { icon: "fa-solid fa-headset", title: "Services Management" },
        { icon: "fa-solid fa-bullseye", title: "Business Forecast" },
        { icon: "fa-solid fa-file-lines", title: "Business Statements" },
        { icon: "fa-solid fa-pen", title: "Web Content Management" },
        { icon: "fa-solid fa-graduation-cap", title: "Learning and Education" },
        { icon: "fa-solid fa-server", title: "IT" },
        { icon: "fa-solid fa-lightbulb", title: "Marketing" },
      ],
      areasEyebrow: "Business Management Areas",
      areasTitle: "One platform for the whole business",
      ctaTitle:
        "20 years of building digital products and we are just getting started!",
      ctaText:
        "Talk with SPS about putting BMS to work across sales, finance, operations, and the rest of the business.",
    },
  },
  {
    slug: "csm",
    family: "sps",
    layout: "content",
    name: "Cognitive Service Management",
    shortName: "CSM",
    icon: "fa-solid fa-shield-halved",
    eyebrow: "SPS Products",
    heading: "Cognitive Service Management",
    description:
      "CSM helps organizations augment security management by standardizing it around NIST. It helps Identify, Protect, Detect, Respond, Recover maturity of People, Processes & Technology of an organization, conduct risk assessment, create System Security Plan (SSP) and update Plan of Actions and Milestones on a quarterly basis.",
    image: PROD.csm,
    banner: PRODUCT_BANNER,
    content: {
      about: {
        eyebrow: "About CSM",
        title: "Fortify security management around NIST",
        text: "We empower organizations to fortify their security management through our comprehensive CSM. Our approach is rooted in standardization, specifically around the NIST framework. CSM serves as a powerful tool to elevate your security posture, focusing on the critical domains of Identify, Protect, Detect, Respond, and Recover.",
        features: [
          "Identify",
          "Protect",
          "Detect",
          "Respond",
          "Recover",
          "People, Processes & Technology",
        ],
        media: "single",
        images: [PROD.csmDashboard],
      },
      benefits: {
        title: "Key Features of Our CSM Services",
        text: "CSM standardizes security management around NIST so organizations can raise maturity, assess risk, and keep security plans current.",
        items: [
          {
            icon: "fa-solid fa-users",
            title: "Maturity Augmentation",
            text: "Enhance the maturity of People, Processes, and Technology with a holistic approach aligned to industry best practices.",
          },
          {
            icon: "fa-solid fa-sitemap",
            title: "NIST Framework Alignment",
            text: "CSM is designed around the NIST framework, offering a standardized foundation for security management.",
          },
          {
            icon: "fa-solid fa-magnifying-glass",
            title: "Risk Assessment",
            text: "Identify threats and vulnerabilities so teams can address security concerns and prioritize mitigation.",
          },
        ],
        image: PROD.csmDashboard,
      },
      cms: {
        eyebrow: "Benefits",
        title: "A structured path to a stronger security posture",
        subtitle: "Built for People, Processes, and Technology.",
        items: [
          {
            title: "System Security Plan (SSP) creation",
            text: "CSM facilitates the creation of a System Security Plan, providing a detailed roadmap for securing systems, networks, and data assets.",
          },
          {
            title: "Quarterly POA&M updates",
            text: "Plan of Actions and Milestones is reviewed and updated on a quarterly basis, aligning with the changing nature of cyber threats.",
          },
          {
            title: "Proactive risk mitigation",
            text: "Meticulous risk assessments help identify and mitigate potential risks before they escalate.",
          },
        ],
        images: [],
      },
      areas: [
        { icon: "fa-solid fa-magnifying-glass", title: "Identify" },
        { icon: "fa-solid fa-shield-halved", title: "Protect" },
        { icon: "fa-solid fa-eye", title: "Detect" },
        { icon: "fa-solid fa-headset", title: "Respond" },
        { icon: "fa-solid fa-rocket", title: "Recover" },
        { icon: "fa-solid fa-users", title: "People" },
        { icon: "fa-solid fa-gears", title: "Processes" },
        { icon: "fa-solid fa-server", title: "Technology" },
      ],
      areasEyebrow: "NIST Domains",
      areasTitle: "Identify, Protect, Detect, Respond, Recover",
      ctaTitle:
        "20 years of building digital products and we are just getting started!",
      ctaText:
        "Elevate your security management with CSM, tailored to fortify your organization against evolving cyber threats.",
    },
  },
  {
    slug: "automation",
    family: "ibm",
    name: "IBM Automation",
    shortName: "Automation",
    icon: "fa-solid fa-robot",
    eyebrow: "Smart Automation Products",
    heading: "Smart Automation Products",
    description:
      "Streamline operations, enhance efficiency, and gain real-time control with intelligent automation solutions.",
    image: IBM.watsonx,
    banner: PRODUCT_BANNER,
  },
  {
    slug: "data-ai",
    family: "ibm",
    name: "IBM Data & AI",
    shortName: "Data & AI",
    icon: "fa-solid fa-brain",
    eyebrow: "Data & AI Products",
    heading: "Turn enterprise data into trusted AI",
    description:
      "Data & AI solutions enable organizations to extract insights, make smarter decisions, and innovate faster.",
    image: IBM.ibm,
    banner: PRODUCT_BANNER,
  },
  {
    slug: "security",
    family: "ibm",
    name: "IBM Security",
    shortName: "Security",
    icon: "fa-solid fa-lock",
    eyebrow: "Security Products",
    heading: "Protect identities, data, and operations",
    description:
      "Our Security products protect critical assets, enforce compliance, and defend against cyber threats.",
    image: IMG.p3,
    banner: PRODUCT_BANNER,
  },
  {
    slug: "sustainability",
    family: "ibm",
    name: "IBM Sustainability",
    shortName: "Sustainability",
    icon: "fa-solid fa-leaf",
    eyebrow: "Sustainability Products",
    heading: "Measure, manage, and reduce environmental impact",
    description:
      "Sustainability solutions help organizations reduce environmental impact and drive sustainable growth.",
    image: IMG.p2,
    banner: PRODUCT_BANNER,
  },
  {
    slug: "cloud-management",
    family: "other",
    name: "Cloud Management",
    shortName: "Cloud Management",
    icon: "fa-solid fa-cloud",
    eyebrow: "Cloud Products",
    heading: "Secure, scalable cloud for modern workplaces",
    description:
      "Secure, scalable cloud solutions enabling modern workplaces, hybrid operations, and reliable application delivery.",
    image: IMG.p,
    banner: PRODUCT_BANNER,
  },
  {
    slug: "analytics-tools",
    family: "other",
    name: "Analytics Tools",
    shortName: "Analytics Tools",
    icon: "fa-solid fa-chart-column",
    eyebrow: "Analytics Products",
    heading: "Insights that improve every decision",
    description:
      "Analytics tools help teams explore data, monitor performance, and turn operational signals into action.",
    image: IMG.p2,
    banner: PRODUCT_BANNER,
  },
  {
    slug: "iot-solutions",
    family: "other",
    name: "IoT Solutions",
    shortName: "IoT Solutions",
    icon: "fa-solid fa-microchip",
    eyebrow: "IoT Products",
    heading: "Connect operations with intelligent devices",
    description:
      "IoT solutions connect equipment, facilities, and field operations so teams can monitor, automate, and optimize in real time.",
    image: IMG.p4,
    banner: PRODUCT_BANNER,
  },
  {
    slug: "blockchain",
    family: "other",
    name: "Blockchain",
    shortName: "Blockchain",
    icon: "fa-solid fa-link",
    eyebrow: "Blockchain Products",
    heading: "Trusted records across partners and processes",
    description:
      "Blockchain solutions create a shared, verifiable record for supply chain, identity, and multi-party business processes.",
    image: IMG.p3,
    banner: PRODUCT_BANNER,
  },
];

export const products = [
  product({
    slug: "myid-platform",
    category: "myid-self-verify",
    name: "MYID Self Verify",
    icon: "fa-solid fa-id-card",
    summary:
      "MYID Self Verify enables secure identity verification and access management for businesses.",
    description:
      "MYID helps organizations allow their employees to manage their corporate identity through a secure and easy-to-use mobile application. It reduces help-desk load while strengthening identity assurance.",
    features: [
      "Mobile identity verification",
      "Employee self-service identity management",
      "Secure access for corporate systems",
      "Reduced identity help-desk volume",
      "Audit-ready identity records",
      "Enterprise-grade security controls",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-mobile-screen",
        title: "Mobile Self-Service",
        text: "Give employees a simple way to prove and manage identity from their phone.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-user-shield",
        title: "Trusted Access",
        text: "Connect verified identity to the applications and resources people need.",
        image: IMG.p3,
      },
      {
        icon: "fa-solid fa-clipboard-check",
        title: "Compliance Evidence",
        text: "Keep verification history ready for auditors and security teams.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-building-lock",
        title: "Enterprise Controls",
        text: "Apply organization-wide policies without slowing onboarding or daily work.",
        image: IMG.p4,
      },
    ],
    images: [PROD.myid, IBM.ibm],
    externalUrl: "https://www.myidselfverify.com/",
    ctaLabel: "Visit MYID",
  }),
  product({
    slug: "azalio-platform",
    category: "azalio",
    name: "Azalio",
    icon: "fa-solid fa-users-gear",
    summary:
      "Azalio offers cloud-native solutions for workforce operations, engagement, and analytics.",
    description:
      "Azalio helps organizations keep frontline employees engaged, reward performance, and manage day-to-day workforce operations from one platform.",
    features: [
      "Frontline employee engagement",
      "Rewards and recognition",
      "Workforce operations tracking",
      "Cloud-native delivery",
      "Real-time operational insights",
      "Manager-friendly workflows",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-heart",
        title: "Employee Experience",
        text: "Keep teams motivated with recognition that is easy to give and easy to track.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-clipboard-list",
        title: "Operations",
        text: "Coordinate daily workforce activity without extra spreadsheets or tools.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-chart-line",
        title: "Engagement Insights",
        text: "See what is working and where teams need support.",
        image: IMG.p3,
      },
      {
        icon: "fa-solid fa-cloud",
        title: "Cloud Delivery",
        text: "Scale across locations with a cloud-native operating model.",
        image: IMG.p4,
      },
    ],
    images: [PROD.azalio, IMG.ab2],
    externalUrl: "https://www.azal.io/",
    ctaLabel: "Visit Azalio",
  }),
  product({
    slug: "fabrico-platform",
    category: "fabrico",
    name: "Fabrico",
    icon: "fa-solid fa-industry",
    summary:
      "Fabrico provides smart manufacturing and automation tools to optimize industrial operations.",
    description:
      "Fabrico gives manufacturers and operations teams a practical way to digitize shop-floor processes, improve visibility, and reduce unplanned downtime.",
    features: [
      "Shop-floor visibility",
      "Manufacturing workflow automation",
      "Equipment and operations tracking",
      "Quality and process insight",
      "Role-based plant dashboards",
      "Integration with industrial systems",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-gears",
        title: "Operations Control",
        text: "See production status and exceptions as they happen.",
        image: IMG.p4,
      },
      {
        icon: "fa-solid fa-robot",
        title: "Process Automation",
        text: "Replace paper and tribal knowledge with repeatable digital workflows.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-chart-area",
        title: "Performance Insight",
        text: "Track throughput, quality, and bottlenecks in one place.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-helmet-safety",
        title: "Plant Readiness",
        text: "Give supervisors and operators the same trusted operational picture.",
        image: IMG.p3,
      },
    ],
    images: [IMG.p4, IMG.img595],
    externalUrl: "https://fabrico.spsnet.com/",
    ctaLabel: "Visit Fabrico",
  }),
  product({
    slug: "watsonx-orchestrate",
    category: "automation",
    name: "IBM watsonx Orchestrate",
    icon: "fa-solid fa-robot",
    summary:
      "IBM watsonx Orchestrate is an AI-powered automation platform designed to transform enterprise workflows by integrating generative AI, predictive analytics, and seamless system orchestration.",
    description:
      "IBM watsonx Orchestrate helps organizations automate, orchestrate, and accelerate business processes using AI-driven decision-making. It empowers teams to streamline operations, reduce manual effort, and improve productivity through intelligent automation. IBM watsonx Orchestrate puts AI to work, helping you build, deploy, and manage powerful AI assistants and agents that automate workflows and processes with generative AI.",
    features: [
      "AI-powered workflow orchestration",
      "Intelligent task automation",
      "Seamless integration with enterprise apps",
      "No-code and low-code automation",
      "AI-driven insights and recommendations",
      "End-to-end process visibility",
      "Secure and scalable automation",
      "Enhanced workforce productivity",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-users",
        title: "Human Resources",
        text: "Streamline HR processes so teams can focus on onboarding, employee engagement, and delivering a more human experience.",
        image: IMG.p4,
      },
      {
        icon: "fa-solid fa-cart-shopping",
        title: "Procurement",
        text: "Improve sourcing efficiency, supplier management, and purchasing decisions through intelligent automation.",
        image: IMG.p3,
      },
      {
        icon: "fa-solid fa-chart-line",
        title: "Sales",
        text: "Boost productivity with automated lead qualification, smarter insights, and enhanced customer engagement.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-headset",
        title: "Customer Service",
        text: "Deliver conversational self-service and faster resolutions using NLP-powered customer support.",
        image: IMG.p1,
      },
    ],
    whyChoose: {
      eyebrow: "Why Choose IBM Automation",
      title: "Smarter Workflows with AI-Driven Orchestration",
      subtitle:
        "Intelligent Automation That Simplifies Work and Accelerates Outcomes.",
      items: [
        {
          title: "AI-Powered Orchestration",
          text: "Automate and coordinate complex workflows across teams and systems using intelligent, context-aware automation.",
        },
        {
          title: "Enterprise-Ready Automation",
          text: "Secure, scalable, and seamlessly integrated with enterprise applications to boost productivity and operational efficiency.",
        },
      ],
      images: [IMG.p1, IMG.p1],
    },
    tabs: [
      {
        icon: "fas fa-robot",
        label: "Multi-agent",
        title:
          "Orchestrate a team of AI agents that work together, so you don't have to",
        text: "Let AI agents plan, coordinate and take action together. Whether it's one agent handling a task or a team collaborating across tools, our platform intelligently assigns the right agents and resources to get work done, without human micromanagement.",
        items: [
          "Multi-agent task planning and intelligent execution",
          "Automated coordination across tools, APIs, and workflows",
          "Smart agent assignment based on task complexity and priority",
          "Real-time collaboration between specialized AI agents",
          "Reduced human intervention with autonomous decision-making",
        ],
        image: AGENT.agent1,
      },
      {
        icon: "fas fa-project-diagram",
        label: "Orchestration Agent",
        title: "Create AI assistants in minutes, no coding required",
        text: "Build, test and deploy AI agents with ease. Bring together your company data, the right tools and clear behavioral guidelines to design reusable agents that scale across your business.",
        items: [
          "No-code AI assistant builder with visual workflows",
          "Secure integration with company data and knowledge bases",
          "Predefined tools, actions, and behavioral rules for agents",
          "Test, refine, and reuse AI assistants across teams",
          "Rapid deployment of scalable AI assistants for business use",
        ],
        image: AGENT.agent2,
      },
      {
        icon: "fas fa-boxes-stacked",
        label: "Catalog Agent Builder",
        title: "The one-stop shop for enterprise-ready AI agents",
        text: "Our Agent Catalog features hundreds of specialized AI agents ready for immediate deployment. Filter by industry, function, or integration requirements to find the perfect solution.",
        items: [
          "Pre-built AI agents for enterprise business functions",
          "Industry-specific agents for finance, healthcare, retail, and more",
          "Filter agents by role, capability, or system integration",
          "Enterprise-grade security, governance, and compliance built in",
          "One-click deployment and lifecycle management for AI agents",
        ],
        image: AGENT.agent3,
      },
    ],
    images: [IBM.ibm, IBM.watsonx],
    videoUrl: PRODUCT_DETAIL_MEDIA.video.url,
    headline: "IBM watsonx Orchestrate – Intelligent Workflow Automation",
    seoTitle: "IBM watsonx Orchestrate",
    seoDescription:
      "IBM watsonx Orchestrate puts AI to work with assistants and agents that automate workflows and processes using generative AI.",
  }),
  product({
    slug: "watsonx-code-assistant",
    category: "automation",
    name: "IBM watsonx Code Assistant",
    icon: "fa-solid fa-code",
    summary:
      "IBM watsonx Code Assistant is an AI-powered coding companion that accelerates software development by generating high-quality code, automating repetitive tasks, and providing intelligent recommendations.",
    description:
      "IBM watsonx Code Assistant helps development teams write, modernize, and maintain code faster. It reduces repetitive work so engineers can focus on architecture, quality, and delivery.",
    features: [
      "AI-assisted code generation",
      "Intelligent recommendations",
      "Automation of repetitive coding tasks",
      "Support for modernization programs",
      "Faster developer onboarding",
      "Consistent coding guidance",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-code",
        title: "Code Generation",
        text: "Produce high-quality starter code and suggestions directly in the workflow.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-wand-magic-sparkles",
        title: "Modernization",
        text: "Accelerate updates to legacy applications with AI-assisted refactoring support.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-bug-slash",
        title: "Quality",
        text: "Catch common issues earlier and keep teams aligned on coding standards.",
        image: IMG.p3,
      },
      {
        icon: "fa-solid fa-people-group",
        title: "Team Velocity",
        text: "Help new and experienced developers move faster with shared guidance.",
        image: IMG.p4,
      },
    ],
    images: [IBM.ibm, IBM.watsonx],
  }),
  product({
    slug: "watsonx-assistant",
    category: "automation",
    name: "IBM watsonx Assistant",
    icon: "fa-solid fa-headset",
    summary:
      "IBM watsonx Assistant is an enterprise-grade AI assistant platform that delivers seamless, natural language interactions across customer and employee touchpoints.",
    description:
      "IBM watsonx Assistant helps organizations answer questions, complete requests, and route work through conversational experiences that stay on-brand and under enterprise control.",
    features: [
      "Natural language conversations",
      "Customer and employee assistants",
      "Multi-channel deployment",
      "Enterprise knowledge integration",
      "Handoff to human agents",
      "Governed AI experiences",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-comments",
        title: "Conversations",
        text: "Give users a natural way to get answers and complete tasks.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-book-open",
        title: "Knowledge",
        text: "Ground responses in approved enterprise content.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-headset",
        title: "Service Desks",
        text: "Deflect routine tickets and keep specialists focused on complex work.",
        image: IMG.p3,
      },
      {
        icon: "fa-solid fa-mobile-screen-button",
        title: "Channels",
        text: "Deploy the same assistant experience across web, mobile, and support tools.",
        image: IMG.p4,
      },
    ],
    images: [IBM.watsonx, IMG.ab2],
  }),
  product({
    slug: "watson-discovery",
    category: "automation",
    name: "IBM Watson Discovery",
    icon: "fa-solid fa-magnifying-glass",
    summary:
      "IBM Watson Discovery is an AI-powered enterprise search and text analytics platform that transforms unstructured data into actionable insights.",
    description:
      "IBM Watson Discovery helps teams find answers hidden in contracts, manuals, tickets, and other unstructured content so decisions are based on the full record, not a handful of files.",
    features: [
      "Enterprise search",
      "Unstructured text analytics",
      "Document understanding",
      "Insight extraction",
      "Secure content indexing",
      "Faster research and review cycles",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-file-lines",
        title: "Document Intelligence",
        text: "Turn large document collections into searchable, usable knowledge.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-magnifying-glass",
        title: "Enterprise Search",
        text: "Help people find the right passage instead of the right filename.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-lightbulb",
        title: "Insights",
        text: "Surface patterns and answers that would take hours to assemble manually.",
        image: IMG.p3,
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Control",
        text: "Keep sensitive content inside governed enterprise search boundaries.",
        image: IMG.p4,
      },
    ],
    images: [IBM.ibm, IMG.p2],
  }),
  product({
    slug: "watsonx-ai",
    category: "data-ai",
    name: "IBM watsonx.ai",
    icon: "fa-solid fa-brain",
    summary:
      "Build, train, and deploy generative AI with enterprise controls for data, models, and outcomes.",
    description:
      "IBM watsonx.ai gives SPS customers a studio for foundation models and machine learning so teams can move from experiments to production without losing governance.",
    features: [
      "Foundation model studio",
      "Prompt and model management",
      "Enterprise deployment options",
      "Data privacy controls",
      "Reusable AI assets",
      "Integration with business workflows",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-flask",
        title: "Experiment",
        text: "Test models and prompts against real business use cases.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-server",
        title: "Deploy",
        text: "Move successful AI work into production with operational guardrails.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-scale-balanced",
        title: "Govern",
        text: "Keep model usage, data access, and outcomes auditable.",
        image: IMG.p3,
      },
      {
        icon: "fa-solid fa-plug",
        title: "Integrate",
        text: "Connect AI outputs to the applications people already use.",
        image: IMG.p4,
      },
    ],
    images: [IBM.watsonx, IMG.ai],
  }),
  product({
    slug: "watsonx-data",
    category: "data-ai",
    name: "IBM watsonx.data",
    icon: "fa-solid fa-database",
    summary:
      "A fit-for-purpose data store that helps teams access, govern, and share trusted data for analytics and AI.",
    description:
      "IBM watsonx.data helps organizations open data to analytics and AI workloads while keeping cost, performance, and access under control.",
    features: [
      "Open data lakehouse architecture",
      "Workload-optimized query",
      "Governed data access",
      "Hybrid and multi-cloud support",
      "AI-ready data pipelines",
      "Lower cost for analytic workloads",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-layer-group",
        title: "Lakehouse",
        text: "Store and serve data in a format that analytics and AI teams can share.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-lock",
        title: "Access Control",
        text: "Give the right teams the right data without copying it everywhere.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-bolt",
        title: "Performance",
        text: "Run the right engine for the right workload instead of one oversized stack.",
        image: IMG.p3,
      },
      {
        icon: "fa-solid fa-cloud",
        title: "Hybrid Data",
        text: "Work with data where it already lives, on premises or in the cloud.",
        image: IMG.p4,
      },
    ],
    images: [IBM.ibm, IMG.p2],
  }),
  product({
    slug: "watsonx-governance",
    category: "data-ai",
    name: "IBM watsonx.governance",
    icon: "fa-solid fa-scale-balanced",
    summary:
      "Monitor, document, and control AI so the business can scale models with confidence.",
    description:
      "IBM watsonx.governance helps risk, compliance, and data science teams stay aligned on how AI is built, approved, and used.",
    features: [
      "AI lifecycle tracking",
      "Model risk documentation",
      "Policy and approval workflows",
      "Monitoring for drift and bias",
      "Audit-ready evidence",
      "Cross-team accountability",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-clipboard-check",
        title: "Documentation",
        text: "Keep a living record of models, data, and owners.",
        image: IMG.p3,
      },
      {
        icon: "fa-solid fa-eye",
        title: "Monitoring",
        text: "Watch for drift, unexpected outcomes, and policy exceptions.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-stamp",
        title: "Approvals",
        text: "Put the right reviewers in the loop before AI reaches production.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-building-columns",
        title: "Audit",
        text: "Produce evidence when regulators, customers, or boards ask how AI is governed.",
        image: IMG.p4,
      },
    ],
    images: [IBM.watsonx, IMG.p3],
  }),
  product({
    slug: "security-verify",
    category: "security",
    name: "IBM Security Verify",
    icon: "fa-solid fa-fingerprint",
    summary:
      "Modern identity and access management for workforce and customer applications.",
    description:
      "IBM Security Verify helps organizations control who can access which applications, with authentication, single sign-on, and identity governance that fits hybrid estates.",
    features: [
      "Single sign-on",
      "Multi-factor authentication",
      "Identity governance",
      "Workforce and customer IAM",
      "Adaptive access",
      "Application access catalogs",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-key",
        title: "Access",
        text: "Let people reach approved applications without extra passwords everywhere.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-user-check",
        title: "Authentication",
        text: "Add stronger proof of identity when the risk is higher.",
        image: IMG.p3,
      },
      {
        icon: "fa-solid fa-clipboard-user",
        title: "Governance",
        text: "Review entitlements and remove access that is no longer needed.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-mobile-screen",
        title: "User Experience",
        text: "Keep security strong without making everyday login painful.",
        image: IMG.p4,
      },
    ],
    images: [IMG.p3, IBM.ibm],
  }),
  product({
    slug: "qradar",
    category: "security",
    name: "IBM QRadar",
    icon: "fa-solid fa-satellite-dish",
    summary:
      "Detect threats faster by correlating security data across networks, users, and applications.",
    description:
      "IBM QRadar helps SOC teams investigate incidents with prioritized alerts and a correlated view of what is happening across the environment.",
    features: [
      "Security event correlation",
      "Threat detection",
      "Investigation workflows",
      "Network and log visibility",
      "Priority-based alerting",
      "SOC-ready reporting",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-bell",
        title: "Detection",
        text: "Reduce noise so analysts can focus on the alerts that matter.",
        image: IMG.p3,
      },
      {
        icon: "fa-solid fa-magnifying-glass",
        title: "Investigation",
        text: "Follow an incident across users, assets, and time.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-network-wired",
        title: "Visibility",
        text: "Bring logs and network context into one operational picture.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-user-shield",
        title: "SOC Operations",
        text: "Support 24x7 teams with a platform built for security operations.",
        image: IMG.p4,
      },
    ],
    images: [IMG.p3, IMG.p1],
  }),
  product({
    slug: "guardium",
    category: "security",
    name: "IBM Guardium",
    icon: "fa-solid fa-database",
    summary:
      "Discover, classify, and protect sensitive data across databases, files, and cloud stores.",
    description:
      "IBM Guardium helps organizations know where sensitive data lives, who is using it, and when activity looks unusual.",
    features: [
      "Sensitive data discovery",
      "Activity monitoring",
      "Policy enforcement",
      "Database and file coverage",
      "Compliance reporting",
      "Anomaly detection",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-map",
        title: "Discovery",
        text: "Find sensitive data before an auditor or attacker does.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-eye",
        title: "Monitoring",
        text: "Watch how data is accessed and flag unusual behavior.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-ban",
        title: "Protection",
        text: "Apply policies that reduce unnecessary exposure.",
        image: IMG.p3,
      },
      {
        icon: "fa-solid fa-file-circle-check",
        title: "Compliance",
        text: "Produce evidence for privacy, security, and industry requirements.",
        image: IMG.p4,
      },
    ],
    images: [IMG.p3, IMG.p2],
  }),
  product({
    slug: "envizi",
    category: "sustainability",
    name: "IBM Envizi",
    icon: "fa-solid fa-leaf",
    summary:
      "Capture environmental data and report ESG performance with less manual effort.",
    description:
      "IBM Envizi helps organizations collect energy, emissions, and sustainability data so reporting is faster, more accurate, and easier to defend.",
    features: [
      "ESG data collection",
      "Emissions tracking",
      "Sustainability reporting",
      "Utility and operations data",
      "Audit-friendly evidence",
      "Progress against targets",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-plug",
        title: "Data Capture",
        text: "Bring environmental data out of spreadsheets and into one system.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-smog",
        title: "Emissions",
        text: "Track the metrics leadership and regulators actually ask for.",
        image: IMG.p4,
      },
      {
        icon: "fa-solid fa-file-invoice",
        title: "Reporting",
        text: "Produce consistent sustainability reports without starting from scratch.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-bullseye",
        title: "Targets",
        text: "See whether reduction programs are moving the numbers.",
        image: IMG.p3,
      },
    ],
    images: [IMG.p2, IMG.p4],
  }),
  product({
    slug: "maximo",
    category: "sustainability",
    name: "IBM Maximo",
    icon: "fa-solid fa-screwdriver-wrench",
    summary:
      "Manage assets, maintenance, and reliability so operations last longer and waste less.",
    description:
      "IBM Maximo helps asset-intensive organizations plan maintenance, reduce unplanned downtime, and extend the life of critical equipment.",
    features: [
      "Asset lifecycle management",
      "Work order management",
      "Preventive maintenance",
      "Reliability insights",
      "Field technician support",
      "Inventory and spare parts visibility",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-warehouse",
        title: "Assets",
        text: "Know what you own, where it is, and what condition it is in.",
        image: IMG.p4,
      },
      {
        icon: "fa-solid fa-clipboard-list",
        title: "Maintenance",
        text: "Plan work instead of reacting to every breakdown.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-chart-line",
        title: "Reliability",
        text: "Use history and condition data to keep assets available.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-leaf",
        title: "Efficiency",
        text: "Reduce waste by maintaining equipment before it fails.",
        image: IMG.p3,
      },
    ],
    images: [IMG.p4, IMG.p1],
  }),
  product({
    slug: "tririga",
    category: "sustainability",
    name: "IBM TRIRIGA",
    icon: "fa-solid fa-building",
    summary:
      "Manage real estate, facilities, and workplace operations with a clearer view of cost and space.",
    description:
      "IBM TRIRIGA helps facilities and real estate teams manage space, leases, projects, and workplace experience from one operational platform.",
    features: [
      "Facilities and space management",
      "Lease and real estate records",
      "Workplace experience",
      "Capital project tracking",
      "Energy and operations insight",
      "Portfolio-level visibility",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-map-location-dot",
        title: "Space",
        text: "Understand how buildings and workplaces are actually used.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-file-contract",
        title: "Real Estate",
        text: "Keep leases, locations, and obligations in one place.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-screwdriver-wrench",
        title: "Facilities",
        text: "Coordinate building operations and workplace requests.",
        image: IMG.p4,
      },
      {
        icon: "fa-solid fa-seedling",
        title: "Sustainable Operations",
        text: "Connect facility decisions to cost, comfort, and environmental goals.",
        image: IMG.p3,
      },
    ],
    images: [IMG.p2, IMG.p4],
  }),
  product({
    slug: "microsoft-azure",
    category: "cloud-management",
    name: "Microsoft Azure Cloud",
    icon: "fa-solid fa-cloud",
    summary:
      "Scale business workloads with secure cloud infrastructure, identity, and operations.",
    description:
      "Microsoft Azure Cloud helps SPS customers migrate, modernize, and operate applications with the security and elasticity of a leading public cloud.",
    features: [
      "Cloud migration and landing zones",
      "Identity and access with Entra ID",
      "Secure network architecture",
      "Cost and operations management",
      "Backup and resilience",
      "Hybrid connectivity",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-server",
        title: "Infrastructure",
        text: "Run applications on a platform that can grow with demand.",
        image: IMG.p,
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Security",
        text: "Apply cloud-native controls without slowing delivery.",
        image: IMG.p3,
      },
      {
        icon: "fa-solid fa-arrows-spin",
        title: "Operations",
        text: "Monitor, patch, and optimize environments after go-live.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-link",
        title: "Hybrid",
        text: "Connect cloud services to systems that still need to stay on premises.",
        image: IMG.p1,
      },
    ],
    images: [IMG.p, IMG.c],
  }),
  product({
    slug: "microsoft-365",
    category: "cloud-management",
    name: "Microsoft 365 & Exchange Online",
    icon: "fa-solid fa-envelope-open-text",
    summary:
      "Give teams a secure modern workplace for email, files, meetings, and collaboration.",
    description:
      "Microsoft 365 and Exchange Online help organizations replace fragmented workplace tools with a governed, cloud-based productivity platform.",
    features: [
      "Email and calendaring",
      "Team collaboration",
      "File sharing and governance",
      "Meeting and voice experiences",
      "Identity-backed access",
      "Compliance and retention",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-inbox",
        title: "Communication",
        text: "Keep email, calendar, and meetings in one secure workplace.",
        image: IMG.p,
      },
      {
        icon: "fa-solid fa-folder-open",
        title: "Content",
        text: "Share files with the right people and keep records under control.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-users",
        title: "Collaboration",
        text: "Help teams work together without spreading data across unmanaged apps.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-gavel",
        title: "Compliance",
        text: "Apply retention, eDiscovery, and access policies at the workplace layer.",
        image: IMG.p3,
      },
    ],
    images: [IMG.p, IMG.ab2],
  }),
  product({
    slug: "cloud-security-compliance",
    category: "cloud-management",
    name: "Microsoft Security & Compliance",
    icon: "fa-solid fa-shield",
    summary:
      "Protect identities, endpoints, and cloud data with Microsoft security and compliance controls.",
    description:
      "Microsoft Security & Compliance helps organizations reduce risk as users, devices, and data move to the cloud.",
    features: [
      "Identity threat protection",
      "Endpoint and cloud security",
      "Data loss prevention",
      "Compliance score and controls",
      "Conditional access",
      "Incident investigation",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-user-shield",
        title: "Identity",
        text: "Stop common account attacks before they reach business systems.",
        image: IMG.p3,
      },
      {
        icon: "fa-solid fa-laptop",
        title: "Endpoints",
        text: "Protect the devices people use to access cloud work.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-file-shield",
        title: "Data",
        text: "Reduce accidental and malicious leakage of sensitive files.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-scale-balanced",
        title: "Compliance",
        text: "Map controls to the frameworks your auditors expect.",
        image: IMG.p4,
      },
    ],
    images: [IMG.p3, IMG.p],
  }),
  product({
    slug: "business-intelligence",
    category: "analytics-tools",
    name: "Business Intelligence",
    icon: "fa-solid fa-chart-column",
    summary:
      "Give leaders interactive dashboards that explain performance without waiting on static reports.",
    description:
      "Business Intelligence tools help SPS customers explore operational and financial data, share a single version of the truth, and brief stakeholders faster.",
    features: [
      "Interactive dashboards",
      "Self-service exploration",
      "Shared semantic models",
      "Scheduled executive packs",
      "Role-based access",
      "Embedded analytics",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-chart-pie",
        title: "Dashboards",
        text: "See the metrics that matter without exporting another spreadsheet.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-filter",
        title: "Exploration",
        text: "Let analysts slice data without opening a ticket for every question.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-share",
        title: "Sharing",
        text: "Publish trusted views to the teams that need them.",
        image: IMG.p3,
      },
      {
        icon: "fa-solid fa-lock",
        title: "Control",
        text: "Keep sensitive measures visible only to the right roles.",
        image: IMG.p4,
      },
    ],
    images: [IMG.p2, IMG.p3],
  }),
  product({
    slug: "operational-analytics",
    category: "analytics-tools",
    name: "Operational Analytics",
    icon: "fa-solid fa-chart-area",
    summary:
      "Monitor live operations so teams can act on delays, exceptions, and service quality in time.",
    description:
      "Operational Analytics connects process, service, and infrastructure data so managers can see what is happening now, not only what happened last month.",
    features: [
      "Near-real-time operational views",
      "Exception monitoring",
      "Service quality tracking",
      "Process bottleneck analysis",
      "Alerting for owners",
      "Historical trend comparison",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-wave-square",
        title: "Live Views",
        text: "Watch operations as they unfold instead of waiting for a weekly pack.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-triangle-exclamation",
        title: "Exceptions",
        text: "Find the small number of issues that need attention today.",
        image: IMG.p3,
      },
      {
        icon: "fa-solid fa-route",
        title: "Process",
        text: "See where work stalls between teams and systems.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-bell",
        title: "Alerts",
        text: "Notify the owner who can actually fix the problem.",
        image: IMG.p4,
      },
    ],
    images: [IMG.p2, IMG.p1],
  }),
  product({
    slug: "connected-operations",
    category: "iot-solutions",
    name: "Connected Operations",
    icon: "fa-solid fa-microchip",
    summary:
      "Connect equipment and facilities so operations teams can monitor conditions in real time.",
    description:
      "Connected Operations helps organizations collect device and sensor data, spot abnormal conditions, and give field and plant teams a shared operational picture.",
    features: [
      "Device and sensor connectivity",
      "Condition monitoring",
      "Facility and equipment views",
      "Alerting on thresholds",
      "Historical telemetry",
      "Integration with operations tools",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-wifi",
        title: "Connect",
        text: "Bring equipment and sites onto a common data path.",
        image: IMG.p4,
      },
      {
        icon: "fa-solid fa-heart-pulse",
        title: "Monitor",
        text: "See health, usage, and environmental conditions as they change.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-bell",
        title: "Alert",
        text: "Notify the right operator when a threshold is crossed.",
        image: IMG.p3,
      },
      {
        icon: "fa-solid fa-gears",
        title: "Act",
        text: "Feed IoT insight into maintenance and operations workflows.",
        image: IMG.p2,
      },
    ],
    images: [IMG.p4, IMG.img595],
  }),
  product({
    slug: "industrial-telemetry",
    category: "iot-solutions",
    name: "Industrial Telemetry",
    icon: "fa-solid fa-industry",
    summary:
      "Capture plant and field telemetry so reliability, energy, and production decisions are based on facts.",
    description:
      "Industrial Telemetry gives manufacturers and utilities a practical way to collect, store, and review machine and site data without replacing every existing control system.",
    features: [
      "Plant and field telemetry",
      "Historian-style review",
      "Energy and production signals",
      "Secure data collection",
      "Operator dashboards",
      "Export to analytics platforms",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-gauge",
        title: "Signals",
        text: "Collect the measurements operators already trust.",
        image: IMG.p4,
      },
      {
        icon: "fa-solid fa-clock-rotate-left",
        title: "History",
        text: "Look back at what changed before an incident or outage.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-bolt",
        title: "Energy",
        text: "Understand consumption alongside production and asset health.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-chart-line",
        title: "Insight",
        text: "Send clean telemetry into analytics without extra spreadsheet work.",
        image: IMG.p3,
      },
    ],
    images: [IMG.p4, IMG.p2],
  }),
  product({
    slug: "trusted-records",
    category: "blockchain",
    name: "Trusted Records",
    icon: "fa-solid fa-link",
    summary:
      "Create a shared, verifiable record for multi-party processes that cannot rely on a single spreadsheet.",
    description:
      "Trusted Records helps partners track provenance, approvals, and handoffs with a tamper-evident history that each party can inspect.",
    features: [
      "Shared process records",
      "Tamper-evident history",
      "Partner access controls",
      "Provenance tracking",
      "Approval and handoff evidence",
      "Audit-friendly trails",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-handshake",
        title: "Multi-party Trust",
        text: "Give every partner the same record without handing over the system of record.",
        image: IMG.p3,
      },
      {
        icon: "fa-solid fa-box-open",
        title: "Provenance",
        text: "Follow an item, document, or decision from origin to outcome.",
        image: IMG.p1,
      },
      {
        icon: "fa-solid fa-stamp",
        title: "Approvals",
        text: "Record who signed, when, and against which version.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-file-shield",
        title: "Audit",
        text: "Produce a defensible trail for customers, regulators, and internal review.",
        image: IMG.p4,
      },
    ],
    images: [IMG.p3, IMG.p1],
  }),
  product({
    slug: "supply-chain-traceability",
    category: "blockchain",
    name: "Supply Chain Traceability",
    icon: "fa-solid fa-truck-fast",
    summary:
      "Trace goods, documents, and custody events across suppliers, logistics partners, and operators.",
    description:
      "Supply Chain Traceability helps organizations answer where something came from, who handled it, and whether the record still matches the physical movement of goods.",
    features: [
      "End-to-end chain of custody",
      "Supplier and logistics events",
      "Document attachment history",
      "Exception flags",
      "Partner onboarding",
      "Customer and auditor views",
    ],
    capabilities: [
      {
        icon: "fa-solid fa-route",
        title: "Chain of Custody",
        text: "See each handoff without reconciling five partner emails.",
        image: IMG.p4,
      },
      {
        icon: "fa-solid fa-file-circle-check",
        title: "Documents",
        text: "Keep certificates and shipping records attached to the same event history.",
        image: IMG.p2,
      },
      {
        icon: "fa-solid fa-triangle-exclamation",
        title: "Exceptions",
        text: "Flag missing scans, late events, or mismatched quantities.",
        image: IMG.p3,
      },
      {
        icon: "fa-solid fa-users",
        title: "Partners",
        text: "Invite suppliers and carriers into a controlled, shared process.",
        image: IMG.p1,
      },
    ],
    images: [IMG.p4, IMG.p3],
  }),
];

export const featuredSolutions = [
  {
    slug: "sps-digital-solutions",
    filter: "sps",
    filterClasses: "data-cloud data-ai",
    name: "SPS Digital Solutions",
    href: "/products/bms",
    image: IMG.c,
    imageAlt: "SPS digital solutions",
    summary: "AI-powered platforms and cloud-native apps tailored for your business.",
    items: [
      "AI Application Development",
      "Cloud Migration & Optimization",
      "Managed IT & DevOps Services",
    ],
  },
  {
    slug: "ibm-technology",
    filter: "ibm",
    filterClasses: "data-ai data-security",
    name: "IBM Technology",
    href: "/products/automation",
    image: IMG.c,
    imageAlt: "IBM technology solutions",
    summary: "Enterprise-grade AI, automation, and security solutions from IBM.",
    items: [
      "IBM Watson AI & Analytics",
      "IBM Security & IAM",
      "IBM Cloud & Hybrid Infrastructure",
    ],
  },
  {
    slug: "microsoft-solutions",
    filter: "other",
    filterClasses: "data-cloud data-security",
    name: "Microsoft Solutions",
    href: "/products/cloud-management",
    image: IMG.c,
    imageAlt: "Microsoft cloud solutions",
    summary: "Secure, scalable cloud solutions enabling modern workplaces.",
    items: [
      "Microsoft Azure Cloud",
      "Microsoft 365 & Exchange Online",
      "Microsoft Security & Compliance",
    ],
  },
  {
    slug: "security-compliance",
    filter: "other",
    filterClasses: "data-security",
    name: "Security Compliance",
    href: "/products/csm",
    image: IMG.c,
    imageAlt: "Security and compliance solutions",
    summary:
      "Advanced cybersecurity and compliance solutions to protect your digital assets.",
    items: [
      "Vulnerability Assessment & Penetration Testing",
      "SOC & Threat Monitoring",
      "Regulatory Compliance & Risk Management",
    ],
  },
];

export const productWhyChoose = [
  {
    title: "Enterprise-Grade Products",
    text: "Robust, scalable, and secure solutions designed for modern business environments.",
  },
  {
    title: "Seamless Integration",
    text: "Easily integrate with existing systems, platforms, and workflows.",
  },
  {
    title: "Innovation-Driven",
    text: "Built with the latest technologies to support future growth and innovation.",
  },
  {
    title: "Expert Support",
    text: "Backed by experienced professionals ensuring reliable support and guidance.",
  },
];

export const productStats = [
  { value: "5", suffix: "K", label: "Years of strong strategic partnership" },
  { value: "76", suffix: "", label: "Projects delivered" },
  { value: "18", suffix: "", label: "Microsoft certifications" },
  { value: "24", suffix: "", label: "Other certifications" },
];

export const productFaqs = [
  {
    question: "What products do you offer?",
    answer:
      "We offer SPS, IBM, MYID Self Verify, Azalio, Fabrico, BMS, CSM, Automation, Data & AI, Security, and Sustainability products.",
  },
  {
    question: "Can these products be customized?",
    answer:
      "Yes, all products can be tailored to your organization’s specific needs, industry, and digital transformation goals.",
  },
  {
    question: "How can I request a product demo?",
    answer:
      "You can request a demo by clicking Request a Quote or contacting our sales team via phone or email.",
  },
  {
    question: "Are these products suitable for all industries?",
    answer:
      "Yes, our products are designed to support organizations across various industries, helping them achieve efficiency, security, and sustainability goals.",
  },
];

export const productImpacts = [
  {
    name: "Kenneth Fong",
    role: "AI Developer",
    image: TESTI.img1,
    title: "Outstanding AI Performance",
    quote:
      "Our AI engine improved processing speeds by 200%, allowing teams to automate workflows, detect threats faster, and scale cloud workloads effortlessly.",
  },
  {
    name: "Sarah Liu",
    role: "Cloud Architect",
    image: TESTI.img2,
    title: "Cloud Scalability",
    quote:
      "By shifting to our cloud-native framework, their organization reduced infrastructure costs by 40% and achieved near-zero downtime performance.",
  },
  {
    name: "Cybersecurity Analyst",
    role: "Cybersecurity Analyst",
    image: TESTI.img2,
    title: "Threat Detection Excellence",
    quote:
      "Our threat-intelligence engine helped them block 98% of attacks in real time, improving security posture across the entire enterprise network.",
  },
];

const categoryMap = Object.fromEntries(categories.map((item) => [item.slug, item]));
const familyMap = Object.fromEntries(productFamilies.map((item) => [item.slug, item]));

export function categoryPath(slug) {
  return `/products/${slug}`;
}

export function productPath(categorySlug, productSlug) {
  return `/products/${categorySlug}/${productSlug}`;
}

export function getAllCategories() {
  return categories;
}

export function getCategory(slug) {
  return categoryMap[slug] || null;
}

export function getFamily(slug) {
  return familyMap[slug] || null;
}

export function getAllProducts() {
  return products;
}

export function getProductsByCategory(slug) {
  return products.filter((item) => item.category === slug);
}

export function getProduct(categorySlug, productSlug) {
  return (
    products.find(
      (item) => item.category === categorySlug && item.slug === productSlug,
    ) || null
  );
}

export function getRelatedProducts(categorySlug, productSlug, limit = 3) {
  return getProductsByCategory(categorySlug)
    .filter((item) => item.slug !== productSlug)
    .slice(0, limit);
}

export function getCategoryStaticParams() {
  return categories.map((item) => ({ category: item.slug }));
}

export function getProductStaticParams() {
  return products.map((item) => ({
    category: item.category,
    product: item.slug,
  }));
}

export function listingMetadata() {
  const path = "/products";
  const title = "Our Products";
  const description =
    "Discover our complete range of innovative, secure, and scalable technology solutions designed to support your business growth.";
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(path),
      images: [PRODUCT_BANNER],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [PRODUCT_BANNER],
    },
  };
}

export function categoryMetadata(category) {
  const path = categoryPath(category.slug);
  const title = category.name;
  const description = category.description;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(path),
      images: [category.image || PRODUCT_BANNER],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [category.image || PRODUCT_BANNER],
    },
  };
}

export function productMetadata(category, item) {
  const path = productPath(category.slug, item.slug);
  const title = item.seoTitle;
  const description = item.seoDescription;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(path),
      images: [item.images[0] || PRODUCT_BANNER],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [item.images[0] || PRODUCT_BANNER],
    },
  };
}

export function productsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SPS Products",
    description:
      "SPS, IBM, and partner technology products for automation, identity, security, cloud, and sustainability.",
    url: absoluteUrl("/products"),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function productJsonLd(category, item) {
  const path =
    category.layout === "content"
      ? categoryPath(category.slug)
      : productPath(category.slug, item.slug);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: item.name,
    description: item.seoDescription,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: absoluteUrl(path),
    image: absoluteUrl(item.images[0] || category.image || PRODUCT_BANNER),
    brand: {
      "@type": "Brand",
      name: getFamily(category.family)?.name || SITE_SHORT_NAME,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(path),
    },
  };
}

export function sitemapEntries() {
  const now = new Date();
  /** @type {const} */
  const weekly = "weekly";
  /** @type {const} */
  const monthly = "monthly";

  return [
    {
      url: absoluteUrl("/products"),
      lastModified: now,
      changeFrequency: weekly,
      priority: 0.9,
    },
    ...categories.map((item) => ({
      url: absoluteUrl(categoryPath(item.slug)),
      lastModified: now,
      changeFrequency: monthly,
      priority: 0.8,
    })),
    ...products.map((item) => ({
      url: absoluteUrl(productPath(item.category, item.slug)),
      lastModified: now,
      changeFrequency: monthly,
      priority: 0.7,
    })),
  ];
}

export const FEATURED_FILTERS = [
  {
    id: "all",
    label: "All Solutions",
    filter: "*",
  },
  {
    id: "sps",
    label: "SPS Products",
    filter: ".data-ai",
  },
  {
    id: "ibm",
    label: "IBM Products",
    filter: ".data-cloud",
  },
  {
    id: "other",
    label: "Other Solutions",
    filter: ".data-security",
  },
];

export const FILTERS = [
  {
    id: "all",
    label: "All Solutions",
    filter: "*",
  },
  {
    id: "ai",
    label: "AI",
    filter: ".data-ai",
  },
  {
    id: "cloud",
    label: "Cloud",
    filter: ".data-cloud",
  },
  {
    id: "security",
    label: "Security",
    filter: ".data-security",
  },
];

export const featuredSection = {
  title: "Our Featured Technology Solution",
  description:
    "Explore the latest AI, Cloud, and Security solutions from leading technology partners to drive innovation and digital transformation.",
};

/* PAGE BANNER DATA */
export const pageBanner = {
  kicker: "OUR SOLUTIONS",
  titleClassName:
    "2xxl:text-4xl xl:text-6xxl md:text-xxl text-[32px] font-bold mb-2.5 text-white capitalize",
  ctaLabel: "Request a Quote",
  overlay: false,
  defaultCrumbs: [{ label: "Home", href: "/" }],
  socials: [
    { href: "/coming-soon", label: "Instagram", icon: "fa-brands fa-instagram" },
    { href: "/coming-soon", label: "Facebook", icon: "fa-brands fa-facebook-f" },
    { href: "/coming-soon", label: "Twitter", icon: "fa-brands fa-x-twitter" },
    { href: "/coming-soon", label: "YouTube", icon: "fa-brands fa-youtube" },
  ],
};

export const productPortfolio = {
  title: "Product Portfolio",

  description:
    "We offer a wide range of products tailored to digital transformation, automation, and security.",

  descriptionSecondary:
    "Our products empower organizations to streamline operations, leverage data & AI, enhance security, and achieve sustainability goals.",

  categoriesTitle: "Product Categories",
};

export const pricingSection = {
  title: "Choose the Right Product Plan",

  description:
    "Flexible plans designed to meet the needs of businesses of all sizes — from startups to large enterprises.",

  featureTitle: "Product Features",

  featureBadge: "Best Value",

  featureDescription:
    "Compare features across plans and choose what fits your business needs.",

  features: [
    "Core Platform Access",
    "Identity & Access Management",
    "Security & Compliance Tools",
    "Cloud & Application Integration",
    "Advanced Analytics & Reporting",
    "Role-Based Access Control",
    "Email & Ticket Support",
    "Dedicated Technical Assistance",
  ],

  plans: [
    {
      name: "Free",
      note: "/ Starter",
      action: "Get Started",
      included: 3,
      featured: false,
    },
    {
      name: "$25",
      note: "/ Month",
      action: "Most Popular",
      included: 5,
      featured: true,
    },
    {
      name: "$40",
      note: "/ Month",
      action: "Contact Sales",
      included: 8,
      featured: false,
    },
  ],
};

export const relatedProductsSection = {
  title: "Related Products",
  description: "Explore more solutions in this category.",
  ctaLabel: "Explore Product",
};

export const whyChooseData = {
  title: "Why Choose Our Products & Solutions",

  imageAlt: "Products overview",

  experienceLabel: "Years of",

  experienceLine: "Industry Experience",

  items: [
    {
      title: "Proven Expertise",
      text: "Leverage our extensive industry experience and proven technology expertise.",
    },
    {
      title: "Innovative Solutions",
      text: "Access innovative products and solutions designed for modern business needs.",
    },
    {
      title: "Scalable & Secure",
      text: "Build on secure, scalable solutions that grow with your organization.",
    },
    {
      title: "Business Impact",
      text: "Drive efficiency, productivity, and measurable business outcomes.",
    },
  ],
};