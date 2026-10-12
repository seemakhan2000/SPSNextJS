import { SITE_NAME, SITE_SHORT_NAME, absoluteUrl } from "@/lib/site";
import {
  SERVICE_BANNER,
  SERVICE_FALLBACK_IMAGE,
  SERVICE_VIDEO_FALLBACK,
} from "../constants/services.constants";

/* ------------------------------------------------------------------ */
/* FAMILIES (tabs)                                                     */
/* homeCategories = cards jo home/services page ke tab me show hote hain */
/* ------------------------------------------------------------------ */
export const serviceFamilies = [
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect systems, data, and identities.",
    image: "/assets/images/spsimg/p1.webp",
    team: { name: "SPS Team", role: "Enterprise Solutions" },
    categories: [
      "network-security",
      "smaas",
      "grc",
      "identity-access",
      "threat-management",
    ],
    homeCategories: ["network-security", "smaas", "grc", "identity-access", "threat-management"],
  },
  {
    slug: "cloud",
    name: "Cloud",
    description: "Scalable and secure cloud solutions for modern enterprises.",
    image: "/assets/images/spsimg/p1.webp",
    team: { name: "Cloud Team", role: "Business Solutions" },
    categories: ["devops", "migration-services"],
    homeCategories: ["devops", "migration-services"],
  },
  {
    slug: "ai-automation",
    name: "AI & Automation",
    description: "Intelligent automation to improve efficiency and decision-making.",
    image: "/assets/images/spsimg/p1.webp",
    team: { name: "Solutions Team", role: "Business Enhancements" },
    categories: ["automation", "data-science"],
    homeCategories: ["automation", "data-science"],
  },
  {
    slug: "collaboration",
    name: "Collaboration",
    description:
      "Learning initiatives and events that improve organizational engagement.",
    image: "/assets/images/spsimg/p1.webp",
    team: { name: "Collaboration Team", role: "Learning & Events" },
    categories: ["learning", "events"],
    homeCategories: ["learning", "events"],
  },
];

/* ------------------------------------------------------------------ */
/* CATEGORIES                                                          */
/* ------------------------------------------------------------------ */
export const categories = [
  {
    slug: "network-security",
    family: "cybersecurity",
    name: "Network Security",
    shortName: "Network Security",
    heading: "Our Network Security Services",
    description:
      "Safeguard your digital infrastructure with advanced network security solutions that provide real-time visibility, threat prevention, and continuous protection.",
    image: "/assets/images/spsimg/services/network.webp",
    banner: SERVICE_BANNER,
  },
  {
    slug: "smaas",
    family: "cybersecurity",
    name: "SMaaS",
    shortName: "SMaaS",
    heading: "Service Management as a Service",
    description:
      "Continuous monitoring, incident response, and operations support that keep enterprise environments healthy and ready to respond.",
    image: SERVICE_FALLBACK_IMAGE,
    banner: SERVICE_BANNER,
  },
  {
    slug: "grc",
    family: "cybersecurity",
    name: "GRC",
    shortName: "GRC",
    heading: "Governance, Risk & Compliance",
    description:
      "Policy, control, and audit-ready compliance services that help organizations reduce risk and meet regulatory requirements.",
    image: SERVICE_FALLBACK_IMAGE,
    banner: SERVICE_BANNER,
  },
  {
    slug: "identity-access",
    family: "cybersecurity",
    name: "Identity & Access",
    shortName: "Identity & Access",
    heading: "Identity & Access Management Services",
    description:
      "Secure authentication, authorization, and identity lifecycle services for workforce and customer access.",
    image: SERVICE_FALLBACK_IMAGE,
    banner: SERVICE_BANNER,
  },
  {
    slug: "threat-management",
    family: "cybersecurity",
    name: "Threat Management",
    shortName: "Threat Management",
    heading: "Threat Management Services",
    description:
      "Proactive detection, analysis, and response services that help contain threats before they become incidents.",
    image: SERVICE_FALLBACK_IMAGE,
    banner: SERVICE_BANNER,
  },
  {
    slug: "devops",
    family: "cloud",
    name: "DevOps",
    shortName: "DevOps",
    heading: "DevOps Services",
    description:
      "CI/CD, automation, and containerization services that help teams build, release, and operate cloud applications faster.",
    image: SERVICE_FALLBACK_IMAGE,
    banner: SERVICE_BANNER,
  },
  {
    slug: "migration-services",
    family: "cloud",
    name: "Migration Services",
    shortName: "Migration Services",
    heading: "Cloud Migration & Strategy",
    description:
      "A controlled path from current systems to secure, high-performance cloud environments.",
    image: SERVICE_FALLBACK_IMAGE,
    banner: SERVICE_BANNER,
  },
  {
    slug: "automation",
    family: "ai-automation",
    name: "Automation",
    shortName: "Automation",
    heading: "Business Process Automation",
    description:
      "Remove repetitive work from daily operations with workflow automation designed around how your teams already work.",
    image: SERVICE_FALLBACK_IMAGE,
    banner: SERVICE_BANNER,
  },
  {
    slug: "data-science",
    family: "ai-automation",
    name: "Data Science",
    shortName: "Data Science",
    heading: "AI-Powered Analytics",
    description:
      "Turn enterprise data into trusted insight, forecasting, and decision support.",
    image: SERVICE_FALLBACK_IMAGE,
    banner: SERVICE_BANNER,
  },
  {
    slug: "learning",
    family: "collaboration",
    name: "Learning",
    shortName: "Learning",
    heading: "Learning Services",
    description:
      "Training programs, workshops, and knowledge sharing that build skills across your organization.",
    image: SERVICE_FALLBACK_IMAGE,
    banner: SERVICE_BANNER,
  },
  {
    slug: "events",
    family: "collaboration",
    name: "Events",
    shortName: "Events",
    heading: "Event Services",
    description:
      "Event delivery, virtual platform training, and recording and editing services.",
    image: SERVICE_FALLBACK_IMAGE,
    banner: SERVICE_BANNER,
  },
];

/* ------------------------------------------------------------------ */
/* DEFAULT CONTENT HELPERS                                             */
/* ------------------------------------------------------------------ */
const MOSAIC_IMAGES = [
  "/assets/images/spsimg/services/netlag.webp",
  "/assets/images/spsimg/services/network.webp",
];
const REVIEW_IMAGE = "/assets/images/spsimg/services/518.webp";
const INSIGHTS_IMAGE = "/assets/images/spsimg/services/724.webp";
const PLATFORM_IMAGES = [
  "/assets/images/spsimg/services/keysite.webp",
  "/assets/images/spsimg/services/giga.webp",
];

const FAMILY_PLATFORMS = {
  cybersecurity: [
    {
      title: "Gigamon",
      text: "Delivers scalable network traffic intelligence, enabling deep packet inspection, advanced filtering, and secure traffic analysis to strengthen network security and operational efficiency.",
    },
    {
      title: "Keysight",
      text: "Provides comprehensive network visibility and performance monitoring solutions that help detect anomalies, optimize traffic flows, and ensure reliable operations across enterprise networks.",
    },
  ],
  cloud: [
    {
      title: "AWS & Azure",
      text: "Supports secure cloud delivery on major public platforms, including identity, networking, automation, and workload placement for enterprise operations.",
    },
    {
      title: "IBM Cloud",
      text: "Helps teams run hybrid and regulated workloads with enterprise controls, migration support, and operational visibility across cloud and on-premises systems.",
    },
  ],
  "ai-automation": [
    {
      title: "Appian",
      text: "Accelerates process-centric applications and workflow automation so business teams can deliver usable software without a long custom-build cycle.",
    },
    {
      title: "IBM watsonx",
      text: "Supports trusted AI and analytics delivery with data readiness, governance, and integration into the systems your teams already use.",
    },
  ],
  collaboration: [
    {
      title: "Virtual Platforms",
      text: "Supports live and virtual delivery on the collaboration platforms your teams already use, with setup, moderation, and recording support.",
    },
    {
      title: "Learning Platforms",
      text: "Helps teams deliver training and knowledge sharing with structured content, hands-on labs, and reusable materials.",
    },
  ],
};

function familyForCategory(categorySlug) {
  return categories.find((c) => c.slug === categorySlug)?.family || "cybersecurity";
}

function defaultReview(name) {
  return {
    title: "Implementation Review & Testing",
    text: `With this second-tier service, SPS will help you optimize ${name}. We will validate, update, and test your environment to ensure secure and efficient operations.`,
    image: REVIEW_IMAGE,
    items: [
      {
        icon: "fa-solid fa-circle-check",
        title: "Configuration Validation",
        text: `Review the current ${name} setup against documentation and operating requirements, then update configuration so the service matches your environment.`,
      },
      {
        icon: "fa-solid fa-network-wired",
        title: "Testing & Validation",
        text: "Design and run validation tests to confirm connectivity, security controls, and application performance before the service is handed to operations.",
      },
      {
        icon: "fa-solid fa-file-lines",
        title: "Post-Testing Documentation",
        text: "SPS will document post-testing recommendations, including an end-user configuration guide and best practices for your operations teams.",
      },
    ],
  };
}

function defaultInsights(name) {
  return {
    title: "Service Insights",
    subtitle: "Comprehensive Documentation and Training",
    paragraphs: [
      `As a top-level service, SPS will document and diagram your ${name} environment, consolidating and summarizing where possible to eliminate redundancies.`,
      "This documentation includes operating scenarios, recommended controls, and a clear handover so your teams can run the service after implementation.",
      "Advanced end-user training sessions are offered for an additional charge.",
    ],
    image: INSIGHTS_IMAGE,
  };
}

function defaultPricing(name) {
  return {
    headers: [
      "Service Tier",
      "Description",
      "One Location",
      "Two to Ten Locations",
      "More than Ten Locations",
    ],
    rows: [
      [
        "Level 1: Basic Health Check",
        `Documentation review, configuration validation, and a health check of your ${name} environment.`,
        "$2k",
        "$4k",
        "$6k",
      ],
      [
        "Level 2: Implementation Review & Testing",
        "Configuration validation and testing, post-testing recommendations, and a best-practices summary.",
        "$30k",
        "$60k",
        "$90k",
      ],
      [
        "Level 3: Comprehensive Documentation & Training",
        `Re-document the ${name} environment, outline operating scenarios, and provide knowledge transfer; advanced end-user training for an additional charge.`,
        "$10k",
        "$15k",
        "$20k",
      ],
    ],
  };
}

function defaultPlatforms(name, categorySlug) {
  const family = familyForCategory(categorySlug);
  return {
    eyebrow: "Why Choose",
    title: "Supported Platforms",
    subtitle: `Our ${name} work across enterprise, cloud, and hybrid environments, helping teams keep operations secure, visible, and ready to scale.`,
    items: FAMILY_PLATFORMS[family] || FAMILY_PLATFORMS.cybersecurity,
    images: PLATFORM_IMAGES,
  };
}

function item(data) {
  const name = data.name;
  const baseFeatures = data.features?.length
    ? [...data.features]
    : [
        "Discovery and current-state review",
        "Secure implementation planning",
        "Configuration and testing",
        "Operational handover",
        "Documentation and knowledge transfer",
        "Ongoing support options",
      ];
  const extraFeatures = [
    "Compliance and security assurance",
    "Scalable support for enterprise teams",
  ];
  extraFeatures.forEach((extra) => {
    if (baseFeatures.length < 8 && !baseFeatures.includes(extra)) {
      baseFeatures.push(extra);
    }
  });

  return {
    ctaLabel: "Request a Quote",
    videoPoster: "/assets/images/spsimg/ab2.webp",
    videoUrl: SERVICE_VIDEO_FALLBACK,
    ...data,
    images: data.images?.length > 1 ? data.images : MOSAIC_IMAGES,
    features: baseFeatures,
    review: data.review || defaultReview(name),
    insights: data.insights || defaultInsights(name),
    pricingTable: data.pricingTable || defaultPricing(name),
    platforms: data.platforms || defaultPlatforms(name, data.category),
    headline: data.headline || name,
    seoTitle: data.seoTitle || name,
    seoDescription: data.seoDescription || data.summary,
  };
}

/* ------------------------------------------------------------------ */
/* SERVICES                                                            */
/* ------------------------------------------------------------------ */
export const services = [
  /* ---------------- NETWORK SECURITY ---------------- */
  item({
    slug: "network-visibility-operations-services",
    category: "network-security",
    name: "Network Visibility Operations Services",
    icon: "fa-solid fa-robot",
    summary:
      "The SPS Network Visibility Operations Service suite offers three service levels—Basic Health Check, Configuration Review and Testing, and Comprehensive Documentation and Training tailored to specific client environments.",
    headline: "Network Basic Health Check",
    aboutEyebrow: "About Network Visibility Services",
    description:
      "SPS will review your network visibility solutions support documentation (run book) and diagrams. This will enable a validation of your network packet broker and/or bypass switches solution with respect to your network environment and security infrastructure. This service includes assistance with license file and software/firmware updates. In addition, we will review the configuration of NTP, Syslog, SNMP, and authentication services.",
    images: [
      "/assets/images/spsimg/services/netlag.webp",
      "/assets/images/spsimg/services/network.webp",
    ],
    features: [
      "Real-time network traffic visibility",
      "Proactive threat detection and monitoring",
      "Network performance analysis and optimization",
      "Configuration review and validation",
      "Continuous health checks and reporting",
      "Compliance and security assurance",
      "Detailed documentation and knowledge transfer",
      "Scalable support for enterprise networks",
    ],
    review: {
      title: "Configuration Review & Testing",
      text: "With this second-tier service, SPS will help you optimize your existing configuration. We will validate, update, and test your environment to ensure secure and efficient operations.",
      image: "/assets/images/spsimg/services/518.webp",
      items: [
        {
          icon: "fa-solid fa-circle-check",
          title: "Configuration Validation",
          text: "Validate physical cabling against diagrams and documentation. Update aggregation, filtering, and load balancing configurations. Review TLS/SSL decryption services to ensure compliance.",
        },
        {
          icon: "fa-solid fa-network-wired",
          title: "Testing & Validation",
          text: "Design and generate test traffic to validate security inspection, network connectivity, and application performance.",
        },
        {
          icon: "fa-solid fa-file-lines",
          title: "Post-Testing Documentation",
          text: "SPS will document post-testing recommendations, including an end-user configuration guide and best-practices for your security and network operations teams.",
        },
      ],
    },
    insights: {
      title: "Network Insights",
      subtitle: "Comprehensive Documentation and Training",
      paragraphs: [
        "As a top-level service, SPS will re-document and re-diagram your network visibility infrastructure, consolidating and summarizing where possible to eliminate redundancies.",
        "This documentation includes failure scenarios and remedies, demonstrates the value of bypass switches and inline high availability (HA) configurations, as well as an overview of any network packet broker (NPB) advanced features.",
        "Advanced end-user training sessions are offered for an additional charge.",
      ],
      image: "/assets/images/spsimg/services/724.webp",
    },
    pricingTable: {
      headers: [
        "Service Tier",
        "Description",
        "One Data Center",
        "Two to Ten Data Centers",
        "More than Ten Data Centers",
      ],
      rows: [
        [
          "Level 1: Basic Health Check",
          "Documentation review, software and license updates, syslog and SNMP validation, authentication set-up",
          "$2k",
          "$4k",
          "$6k",
        ],
        [
          "Level 2: Configuration Review & Testing",
          "Network packet broker (NPB) configuration validation and testing, post-testing recommendations, and best-practices summary",
          "$30k",
          "$60k",
          "$90k",
        ],
        [
          "Level 3: Comprehensive Documentation & Training",
          "Re-document and re-diagram network visibility infrastructure, outline failure scenarios and remedies, and demonstrate benefits of bypass switches, HA, and advanced features; advanced end-user training for an additional charge",
          "$10k",
          "$15k",
          "$20k",
        ],
      ],
    },
    platforms: {
      eyebrow: "Why Choose",
      title: "Supported Platforms",
      subtitle:
        "Our Network Visibility Operations Services work seamlessly across switches, routers, firewalls, cloud, and hybrid infrastructures, ensuring full monitoring and security across your IT ecosystem.",
      items: [
        {
          title: "Gigamon",
          text: "Delivers scalable network traffic intelligence, enabling deep packet inspection, advanced filtering, and secure traffic analysis to strengthen network security and operational efficiency.",
        },
        {
          title: "Keysight",
          text: "Provides comprehensive network visibility and performance monitoring solutions that help detect anomalies, optimize traffic flows, and ensure reliable operations across enterprise networks.",
        },
      ],
      images: [
        "/assets/images/spsimg/services/keysite.webp",
        "/assets/images/spsimg/services/giga.webp",
      ],
    },
  }),
  item({
    slug: "network-visibility-design-implementation-services",
    category: "network-security",
    name: "Network Visibility Design & Implementation Services",
    icon: "fa-solid fa-code",
    summary:
      "Design and deploy secure network architectures with robust security controls, segmentation, and policy enforcement to protect enterprise, cloud, and hybrid environments.",
    description:
      "SPS designs and implements network visibility architectures that give security and operations teams the traffic they need, where they need it. We plan packet broker placement, bypass switching, segmentation, and policy enforcement so monitoring tools can inspect traffic without disrupting production.",
    features: [
      "Secure network architecture design",
      "Packet broker and bypass switch planning",
      "Segmentation and policy enforcement",
      "Hybrid and cloud traffic visibility",
      "Low-disruption implementation",
      "Handover documentation for operations teams",
      "Compliance and security assurance",
      "Scalable support for enterprise networks",
    ],
    review: {
      title: "Architecture Review & Testing",
      text: "SPS will validate the proposed visibility architecture against your production traffic, security tools, and operating constraints before implementation.",
      image: "/assets/images/spsimg/services/518.webp",
      items: [
        {
          icon: "fa-solid fa-circle-check",
          title: "Design Validation",
          text: "Review packet broker placement, bypass switching, segmentation, and policy enforcement against diagrams and operating requirements.",
        },
        {
          icon: "fa-solid fa-network-wired",
          title: "Implementation Testing",
          text: "Test traffic steering, tool feeds, and failover so monitoring can inspect traffic without disrupting production.",
        },
        {
          icon: "fa-solid fa-file-lines",
          title: "Handover Documentation",
          text: "Provide as-built diagrams, configuration notes, and operating guidance for network and security teams.",
        },
      ],
    },
    insights: {
      title: "Design Insights",
      subtitle: "Comprehensive Documentation and Training",
      paragraphs: [
        "SPS will document and diagram the visibility architecture, including packet broker placement, bypass switches, and tool connectivity.",
        "This documentation includes failure scenarios, high-availability options, and an overview of advanced network packet broker features.",
        "Advanced end-user training sessions are offered for an additional charge.",
      ],
      image: "/assets/images/spsimg/services/724.webp",
    },
    pricingTable: {
      headers: [
        "Service Tier",
        "Description",
        "One Data Center",
        "Two to Ten Data Centers",
        "More than Ten Data Centers",
      ],
      rows: [
        [
          "Level 1: Architecture Assessment",
          "Current-state review, traffic mapping, and a recommended visibility design.",
          "$2k",
          "$4k",
          "$6k",
        ],
        [
          "Level 2: Design & Implementation",
          "Packet broker and bypass switch implementation, testing, and a best-practices summary.",
          "$30k",
          "$60k",
          "$90k",
        ],
        [
          "Level 3: Documentation & Training",
          "As-built diagrams, operating scenarios, and knowledge transfer; advanced training for an additional charge.",
          "$10k",
          "$15k",
          "$20k",
        ],
      ],
    },
    platforms: {
      eyebrow: "Why Choose",
      title: "Supported Platforms",
      subtitle:
        "Our Network Visibility Design & Implementation Services work across switches, routers, firewalls, cloud, and hybrid infrastructures.",
      items: [
        {
          title: "Gigamon",
          text: "Delivers scalable network traffic intelligence, enabling deep packet inspection, advanced filtering, and secure traffic analysis.",
        },
        {
          title: "Keysight",
          text: "Provides network visibility and performance monitoring that help validate traffic flows and keep enterprise networks reliable.",
        },
      ],
      images: [
        "/assets/images/spsimg/services/keysite.webp",
        "/assets/images/spsimg/services/giga.webp",
      ],
    },
  }),
  item({
    slug: "keysight-ixnetwork-training",
    category: "network-security",
    name: "Keysight IxNetwork Training",
    icon: "fa-solid fa-headset",
    summary:
      "Enhance your team’s network security skills with expert-led training and ongoing support to effectively manage threats, maintain compliance, and ensure secure network operations.",
    description:
      "SPS delivers expert-led Keysight IxNetwork training so your team can validate performance, security inspection, and resiliency with confidence. Sessions can be tailored to your environment and include practical labs, configuration walkthroughs, and knowledge transfer.",
    features: [
      "Hands-on IxNetwork labs",
      "Traffic generation and validation",
      "Security inspection testing",
      "Team knowledge transfer",
      "Configuration best practices",
      "Ongoing support after training",
      "Compliance and security assurance",
      "Scalable support for enterprise teams",
    ],
    review: {
      title: "Labs, Review & Testing",
      text: "SPS will tailor IxNetwork labs to your environment, then validate traffic generation, security inspection, and resiliency with your team.",
      image: "/assets/images/spsimg/services/518.webp",
      items: [
        {
          icon: "fa-solid fa-circle-check",
          title: "Curriculum Validation",
          text: "Align labs and configuration walkthroughs to the switches, tools, and inspection points your team actually operates.",
        },
        {
          icon: "fa-solid fa-network-wired",
          title: "Hands-on Testing",
          text: "Generate test traffic to validate performance, security inspection, and failover scenarios in a controlled lab.",
        },
        {
          icon: "fa-solid fa-file-lines",
          title: "Training Documentation",
          text: "Leave teams with lab guides, configuration notes, and recommended practices they can reuse after the session.",
        },
      ],
    },
    insights: {
      title: "Training Insights",
      subtitle: "Comprehensive Documentation and Knowledge Transfer",
      paragraphs: [
        "SPS documents the training scope, lab topology, and configuration steps so the team can repeat the work after the session.",
        "The material covers traffic generation, inspection validation, and recommended operating practices for Keysight IxNetwork.",
        "Advanced end-user training sessions are offered for an additional charge.",
      ],
      image: "/assets/images/spsimg/services/724.webp",
    },
    pricingTable: {
      headers: [
        "Service Tier",
        "Description",
        "One Team",
        "Two to Five Teams",
        "More than Five Teams",
      ],
      rows: [
        [
          "Level 1: Foundation Training",
          "Instructor-led IxNetwork overview, lab setup, and core traffic-generation exercises.",
          "$2k",
          "$4k",
          "$6k",
        ],
        [
          "Level 2: Applied Labs & Testing",
          "Environment-specific labs, security inspection testing, and a best-practices summary.",
          "$30k",
          "$60k",
          "$90k",
        ],
        [
          "Level 3: Documentation & Advanced Training",
          "Full lab documentation, operating scenarios, and advanced sessions for an additional charge.",
          "$10k",
          "$15k",
          "$20k",
        ],
      ],
    },
    platforms: {
      eyebrow: "Why Choose",
      title: "Supported Platforms",
      subtitle:
        "Keysight IxNetwork Training is delivered against the platforms and inspection points your network and security teams already operate.",
      items: [
        {
          title: "Keysight",
          text: "Hands-on IxNetwork labs that help teams generate traffic, validate inspection, and confirm network performance.",
        },
        {
          title: "Gigamon",
          text: "Visibility and traffic intelligence that complement training by showing how monitored traffic reaches security and performance tools.",
        },
      ],
      images: [
        "/assets/images/spsimg/services/keysite.webp",
        "/assets/images/spsimg/services/giga.webp",
      ],
    },
  }),

  /* ---------------- SMaaS ---------------- */
  item({
    slug: "service-management-as-a-service",
    category: "smaas",
    name: "Service Management as a Service",
    icon: "fa-solid fa-headset",
    summary:
      "Managed monitoring, operations, and incident response that keep systems available and issues contained.",
    description:
      "SMaaS gives your organization a managed operations layer for cloud and enterprise systems. SPS monitors health, coordinates response, and keeps stakeholders informed so issues are handled before they affect the business.",
    features: [
      "24x7 monitoring and alerting",
      "Incident triage and response",
      "Cloud and operations visibility",
      "Service reporting",
      "Runbook-driven support",
      "Escalation to specialist teams",
    ],
  }),
  item({
    slug: "cloud-monitoring-operations",
    category: "smaas",
    name: "Cloud Monitoring & Operations",
    icon: "fa-solid fa-cloud",
    summary:
      "Watch cloud workloads continuously and keep operations aligned with business availability needs.",
    description:
      "SPS monitors cloud infrastructure, applications, and supporting services so teams can see issues early and restore service quickly. Coverage can include metrics, logs, health checks, and operational reporting.",
    features: [
      "Workload health monitoring",
      "Log and metric visibility",
      "Availability reporting",
      "Operational playbooks",
      "Cloud operations support",
    ],
  }),

  /* ---------------- GRC ---------------- */
  item({
    slug: "governance-risk-compliance",
    category: "grc",
    name: "Governance, Risk & Compliance",
    icon: "fa-solid fa-clipboard-list",
    summary:
      "Enterprise-wide policies and controls that help you stay audit-ready.",
    description:
      "SPS helps organizations define, implement, and operate GRC programs that match their industry and risk profile. We connect policy, control evidence, and reporting so audits are easier and gaps are visible before they become findings.",
    features: [
      "Policy and control frameworks",
      "Risk assessment support",
      "Audit-ready evidence",
      "Compliance reporting",
      "Control gap remediation",
    ],
  }),

  /* ---------------- IDENTITY & ACCESS ---------------- */
  item({
    slug: "identity-access-management",
    category: "identity-access",
    name: "Identity & Access Management",
    icon: "fa-solid fa-user-shield",
    summary:
      "Secure authentication and authorization across workforce and application access.",
    description:
      "SPS implements identity and access services that strengthen login, privilege, and lifecycle management. The work covers access control, identity governance, and operational support so the right people have the right access.",
    features: [
      "Workforce identity services",
      "Access control and MFA",
      "Privileged access support",
      "Lifecycle management",
      "Application access integration",
    ],
  }),

  /* ---------------- THREAT MANAGEMENT ---------------- */
  item({
    slug: "threat-detection-response",
    category: "threat-management",
    name: "Threat Detection & Response",
    icon: "fa-solid fa-bug",
    summary:
      "Detect unusual activity and contain threats before they become a breach.",
    description:
      "SPS helps security teams detect, investigate, and contain threats across the environment. Services can include monitoring, threat analysis, and response planning tailored to your current tools and risk profile.",
    features: [
      "Threat monitoring",
      "Incident investigation",
      "Containment support",
      "Detection tuning",
      "Response playbooks",
    ],
  }),

  /* ---------------- DEVOPS ---------------- */
  item({
    slug: "cloud-application-development",
    category: "devops",
    name: "Cloud Application Development",
    icon: "fa-solid fa-code",
    summary:
      "Build and modernize applications with CI/CD, automation, and cloud-native practices.",
    description:
      "SPS helps teams design, build, and release cloud applications with pipelines, automation, and operational support. The goal is faster delivery without losing control of quality or security.",
    features: [
      "CI/CD pipeline design",
      "Cloud-native application delivery",
      "Automation and containerization",
      "Release process improvement",
      "Developer and ops alignment",
    ],
  }),
  item({
    slug: "it-ops-and-support",
    category: "devops",
    name: "IT Ops and Support",
    icon: "fa-solid fa-server",
    summary:
      "Keep cloud platforms and applications running with practical operations support.",
    description:
      "SPS provides IT operations support for cloud and hybrid environments, including monitoring, incident handling, and day-to-day platform care.",
    features: [
      "Platform operations",
      "Incident handling",
      "Environment health checks",
      "Release support",
      "Operational documentation",
    ],
  }),

  /* ---------------- MIGRATION SERVICES ---------------- */
  item({
    slug: "migrate-vmware-workload-to-cloud",
    category: "migration-services",
    name: "Migrate VMware Workload to Cloud",
    icon: "fa-solid fa-cloud-arrow-up",
    summary: "Move VMware workloads to the cloud with a low-disruption plan.",
    description:
      "SPS plans and executes VMware workload migrations to cloud platforms, covering assessment, sequencing, testing, and cutover so operations stay stable during the move.",
    features: [
      "Workload assessment",
      "Migration sequencing",
      "Cutover planning",
      "Testing and validation",
      "Post-migration support",
    ],
  }),
  item({
    slug: "migrate-ms-exchange-to-office-365",
    category: "migration-services",
    name: "Migrate MS Exchange to Office 365",
    icon: "fa-solid fa-envelope",
    summary: "Move Exchange mailboxes to Office 365 with minimal downtime.",
    description:
      "SPS migrates on-premises Microsoft Exchange to Office 365, including mailbox migration, coexistence, and user communication, so email keeps working throughout.",
    features: [
      "Mailbox migration",
      "Coexistence planning",
      "Security configuration",
      "User communication",
      "Post-migration support",
    ],
  }),
  item({
    slug: "migrate-ibm-power-to-cloud",
    category: "migration-services",
    name: "Migrate IBM Power to Cloud",
    icon: "fa-solid fa-server",
    summary: "Move IBM Power workloads to the cloud with a controlled plan.",
    description:
      "SPS helps organizations move IBM Power workloads to cloud environments with assessment, planning, testing, and cutover support.",
    features: [
      "Workload assessment",
      "Target architecture guidance",
      "Data migration",
      "Testing and validation",
      "Post-migration support",
    ],
  }),

  /* ---------------- CLOUD SECURITY ---------------- */

  /* ---------------- HYBRID / MULTI-CLOUD ---------------- */

  /* ---------------- AUTOMATION ---------------- */
  item({
    slug: "business-process-modeling-aris",
    category: "automation",
    name: "Business Process Modeling Using ARIS",
    icon: "fa-solid fa-sitemap",
    summary: "Model and document business processes with ARIS.",
    description:
      "SPS maps and models your business processes with ARIS so teams can see how work flows, find bottlenecks, and plan improvements.",
    features: [
      "Process discovery",
      "ARIS process modeling",
      "Bottleneck analysis",
      "Process documentation",
      "Improvement roadmap",
    ],
  }),
  item({
    slug: "business-process-automation-webmethods",
    category: "automation",
    name: "Business Process Automation Using webMethods",
    icon: "fa-solid fa-gears",
    summary: "Automate business processes and integrations with webMethods.",
    description:
      "SPS automates business processes and system integrations with webMethods, reducing manual handoffs and connecting the systems your teams already use.",
    features: [
      "Workflow automation",
      "System integration",
      "API management",
      "Exception handling",
      "Operational reporting",
    ],
  }),
  item({
    slug: "code-application-development-appian",
    category: "automation",
    name: "Code Application Development Using Appian",
    icon: "fa-solid fa-code",
    summary: "Build process-centric applications faster with Appian.",
    description:
      "SPS builds internal applications on Appian so business teams get working software without a long custom-build cycle.",
    features: [
      "Low-code application delivery",
      "Appian implementation support",
      "Process-centric design",
      "Integration with core systems",
      "User adoption support",
    ],
  }),

  /* ---------------- DATA SCIENCE ---------------- */
  item({
    slug: "generative-ai",
    category: "data-science",
    name: "Generative AI",
    icon: "fa-solid fa-brain",
    summary:
      "Apply generative AI to enterprise work with controls, data quality, and a clear use case.",
    description:
      "SPS helps organizations identify and implement generative AI use cases that fit their data, risk, and operating model. The focus is useful outcomes, not experimental tools with no owner.",
    features: [
      "Use-case identification",
      "Data readiness",
      "Controlled AI delivery",
      "Workflow integration",
      "Risk and quality review",
    ],
  }),
  item({
    slug: "data-analytics",
    category: "data-science",
    name: "Data Analytics",
    icon: "fa-solid fa-chart-line",
    summary: "Turn operational data into insight that teams can act on.",
    description:
      "SPS builds analytics that help leaders and operators see what is happening and what to do next. Work can include dashboards, reporting, and data pipelines that stay aligned with the business.",
    features: [
      "Analytics and reporting",
      "Data pipeline support",
      "Decision dashboards",
      "Data quality review",
      "Insight for operations teams",
    ],
  }),
  item({
    slug: "internet-of-things",
    category: "data-science",
    name: "Internet of Things",
    icon: "fa-solid fa-wifi",
    summary:
      "Connect operational data from devices and systems so teams can see and act on it.",
    description:
      "SPS helps organizations collect and use IoT data for monitoring, analytics, and operations. The service focuses on useful visibility, not unused sensor feeds.",
    features: [
      "Device and data connectivity",
      "Operational monitoring",
      "IoT analytics",
      "Integration with enterprise systems",
      "Secure data handling",
    ],
  }),

  /* ---------------- CHATBOTS ---------------- */

  /* ---------------- WORKFLOW OPTIMIZATION ---------------- */

  /* ---------------- LEARNING ---------------- */
  item({
    slug: "training-programs",
    category: "learning",
    name: "Training Programs",
    icon: "fa-solid fa-graduation-cap",
    summary: "Structured training programs tailored to your teams.",
    description:
      "SPS delivers instructor-led training programs tailored to your environment, with practical labs and clear learning outcomes.",
    features: [
      "Instructor-led sessions",
      "Hands-on labs",
      "Role-based curriculum",
      "Progress tracking",
      "Post-training support",
    ],
  }),
  item({
    slug: "workshops",
    category: "learning",
    name: "Workshops",
    icon: "fa-solid fa-chalkboard-user",
    summary: "Focused workshops that solve real team challenges.",
    description:
      "SPS runs focused, hands-on workshops that help teams work through real problems and leave with practical next steps.",
    features: [
      "Interactive sessions",
      "Use-case based exercises",
      "Expert facilitation",
      "Action plans",
      "Follow-up guidance",
    ],
  }),
  item({
    slug: "knowledge-sharing",
    category: "learning",
    name: "Knowledge Sharing",
    icon: "fa-solid fa-book-open",
    summary: "Capture and share knowledge across your organization.",
    description:
      "SPS helps teams document, organize, and share knowledge so skills and best practices stay available after projects end.",
    features: [
      "Knowledge documentation",
      "Best-practice guides",
      "Internal sessions",
      "Reusable materials",
      "Team handover",
    ],
  }),

  /* ---------------- EVENTS ---------------- */
  item({
    slug: "events-services",
    category: "events",
    name: "Events Services",
    icon: "fa-solid fa-calendar-days",
    summary: "End-to-end support for in-person and virtual events.",
    description:
      "SPS plans and supports corporate events, from setup and logistics to live delivery, for in-person and virtual audiences.",
    features: [
      "Event planning",
      "Live delivery support",
      "Audience engagement",
      "Technical setup",
      "Post-event reporting",
    ],
  }),
  item({
    slug: "virtual-platform-training",
    category: "events",
    name: "Virtual Platform Training",
    icon: "fa-solid fa-laptop",
    summary: "Train your teams to run events on virtual platforms.",
    description:
      "SPS trains hosts and organizers to run smooth virtual sessions, covering platform setup, moderation, and audience engagement.",
    features: [
      "Platform walkthroughs",
      "Host and moderator training",
      "Rehearsals",
      "Best practices",
      "Ongoing support",
    ],
  }),
  item({
    slug: "recording-editing",
    category: "events",
    name: "Recording & Editing",
    icon: "fa-solid fa-video",
    summary: "Professional recording and editing for sessions and events.",
    description:
      "SPS records and edits sessions, webinars, and events so content can be reused for training and communication.",
    features: [
      "Session recording",
      "Editing and post-production",
      "Captions and branding",
      "Secure delivery",
      "Content library setup",
    ],
  }),
];

export const whyChooseItems = [
  {
    title: "Professional Services",
    text: "Expert-led services tailored to meet business and operational requirements.",
  },
  {
    title: "End-to-End Delivery",
    text: "Complete service lifecycle from planning and implementation to support.",
  },
  {
    title: "Customized Solutions",
    text: "Services designed to align with your unique business goals and challenges.",
  },
  {
    title: "Trusted Support",
    text: "Reliable support from experienced teams ensuring smooth operations.",
  },
];

export const serviceStats = [
  { value: "5", suffix: "K", label: "Years of strong strategic partnership" },
  { value: "76", suffix: "", label: "Projects delivered" },
  { value: "18", suffix: "", label: "Microsoft certifications" },
  { value: "24", suffix: "", label: "Other certifications" },
];

/* ------------------------------------------------------------------ */
/* LOOKUPS                                                             */
/* ------------------------------------------------------------------ */
const categoryMap = Object.fromEntries(categories.map((c) => [c.slug, c]));

export function categoryPath(slug) {
  return `/services/${slug}`;
}

export function servicePath(categorySlug, serviceSlug) {
  return `/services/${categorySlug}/${serviceSlug}`;
}

export function getCategory(slug) {
  return categoryMap[slug] || null;
}

export function getAllCategories() {
  return categories;
}

export function getServicesByCategory(slug) {
  return services.filter((s) => s.category === slug);
}

export function getService(categorySlug, serviceSlug) {
  return (
    services.find(
      (s) => s.category === categorySlug && s.slug === serviceSlug,
    ) || null
  );
}

/* ------------------------------------------------------------------ */
/* HOME / SERVICES TABS CARDS                                          */
/* text  -> sirf paragraph dikhao                                      */
/* links -> service links ki list dikhao                               */
/* ------------------------------------------------------------------ */
const homeCardContent = {
  "network-security": {
    parts: [
      { link: "network-visibility-operations-services", text: "Network Visibility Operations Services" },
      ", ",
      { link: "network-visibility-design-implementation-services", text: "Network Visibility Design & Implementation Services" },
      ", and ",
      { link: "keysight-ixnetwork-training", text: "Keysight IxNetwork Training" },
      ".",
    ],
  },
  smaas: {
    parts: [
      { link: "service-management-as-a-service", text: "Service Management as a Service" },
      ", including cloud monitoring and operations solutions.",
    ],
  },
  grc: {
    parts: [
      { link: "governance-risk-compliance", text: "Governance, Risk & Compliance" },
      " solutions for enterprise-wide policies and controls.",
    ],
  },
  "identity-access": {
    parts: [
      { link: "identity-access-management", text: "Identity & Access Management" },
      " solutions for secure authentication and authorization.",
    ],
  },
  "threat-management": {
    parts: [
      { link: "threat-detection-response", text: "Threat Management" },
      " solutions for proactive detection and mitigation of cyber threats.",
    ],
  },
  devops: {
    links: ["cloud-application-development", "it-ops-and-support"],
  },
  "migration-services": {
    links: [
      "migrate-vmware-workload-to-cloud",
      "migrate-ms-exchange-to-office-365",
      "migrate-ibm-power-to-cloud",
    ],
  },
  automation: {
    links: [
      "business-process-modeling-aris",
      "business-process-automation-webmethods",
      "code-application-development-appian",
    ],
  },
  "data-science": {
    links: ["generative-ai", "internet-of-things", "data-analytics"],
  },
  learning: {
    links: ["training-programs", "workshops", "knowledge-sharing"],
  },
  events: {
    links: ["events-services", "virtual-platform-training", "recording-editing"],
  },
};

/**
 * Card data for the home/services tabs.
 * cardParts : paragraph with inline links  -> [ "text", { slug, text }, ... ]
 * cardLinks : plain list of links          -> [ { name, slug } ]
 */
export function getHomeCategories(familySlug) {
  const family = serviceFamilies.find((f) => f.slug === familySlug);
  if (!family) return [];

  return family.homeCategories
    .map((slug) => {
      const category = categoryMap[slug];
      if (!category) return null;

      const content = homeCardContent[slug] || {};

      const cardParts = (content.parts || []).map((p) =>
        typeof p === "string" ? p : { slug: p.link, text: p.text },
      );

      const cardLinks = (content.links || [])
        .map((s) => services.find((i) => i.category === slug && i.slug === s))
        .filter(Boolean)
        .map((i) => ({ name: i.name, slug: i.slug }));

      return {
        ...category,
        cardParts,
        cardLinks,
        cardText: category.description,
      };
    })
    .filter(Boolean);
}

/* ------------------------------------------------------------------ */
/* STATIC PARAMS                                                       */
/* ------------------------------------------------------------------ */
export function getCategoryStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function getServiceStaticParams() {
  return services.map((s) => ({
    category: s.category,
    service: s.slug,
  }));
}

/* ------------------------------------------------------------------ */
/* METADATA / JSON-LD / SITEMAP                                        */
/* ------------------------------------------------------------------ */
export function listingMetadata() {
  const path = "/services";
  const title = "Our Services";
  const description =
    "Explore our comprehensive range of professional services designed to enhance security, streamline operations, and drive business success.";
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(path),
      images: [SERVICE_BANNER],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [SERVICE_BANNER],
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
      images: [category.image || SERVICE_BANNER],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [category.image || SERVICE_BANNER],
    },
  };
}

export function serviceMetadata(category, svc) {
  const path = servicePath(category.slug, svc.slug);
  const title = svc.seoTitle;
  const description = svc.seoDescription;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      url: absoluteUrl(path),
      images: [svc.images[0] || SERVICE_BANNER],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_NAME}`,
      description,
      images: [svc.images[0] || SERVICE_BANNER],
    },
  };
}

export function servicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SPS Services",
    description:
      "Cybersecurity, cloud, AI automation, and collaboration services for enterprise operations.",
    url: absoluteUrl("/services"),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };
}

export function serviceJsonLd(category, svc) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.name,
    description: svc.seoDescription,
    url: absoluteUrl(servicePath(category.slug, svc.slug)),
    image: absoluteUrl(svc.images[0] || SERVICE_BANNER),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
    areaServed: "US",
    serviceType: category.name,
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
      url: absoluteUrl("/services"),
      lastModified: now,
      changeFrequency: weekly,
      priority: 0.9,
    },
    ...categories.map((c) => ({
      url: absoluteUrl(categoryPath(c.slug)),
      lastModified: now,
      changeFrequency: monthly,
      priority: 0.8,
    })),
    ...services.map((s) => ({
      url: absoluteUrl(servicePath(s.category, s.slug)),
      lastModified: now,
      changeFrequency: monthly,
      priority: 0.7,
    })),
  ];
}