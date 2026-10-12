import { SITE_NAME, SITE_SHORT_NAME, absoluteUrl } from "@/lib/site";
import {
  SERVICE_BANNER,
  SERVICE_FALLBACK_IMAGE,
  NETWORK_IMAGE,
  NETLAG_IMAGE,
  MOSAIC_IMAGES,
  REVIEW_IMAGE,
  INSIGHTS_IMAGE,
  PLATFORM_IMAGES,
  VIDEO_POSTER,
} from "../constants/service.constants";

export const serviceFamilies = [
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect systems, data, and identities.",
    image: SERVICE_FALLBACK_IMAGE,
    team: { name: "SPS Team", role: "Enterprise Solutions" },
    categories: [
      "network-security",
      "smaas",
      "grc",
      "identity-access",
      "threat-management",
    ],
  },
  {
    slug: "cloud",
    name: "Cloud",
    description: "Scalable and secure cloud solutions for modern enterprises.",
    image: SERVICE_FALLBACK_IMAGE,
    team: { name: "Cloud Team", role: "Business Solutions" },
    categories: [
      "devops",
      "migration-services",
      "cloud-security",
      "hybrid-multi-cloud",
    ],
  },
  {
    slug: "ai-automation",
    name: "AI & Automation",
    description: "Intelligent automation to improve efficiency and decision-making.",
    image: SERVICE_FALLBACK_IMAGE,
    team: { name: "Solutions Team", role: "Business Enhancements" },
    categories: [
      "automation",
      "data-science",
      "chatbots",
      "workflow-optimization",
    ],
  },
];

export const categories = [
  {
    slug: "network-security",
    family: "cybersecurity",
    name: "Network Security",
    shortName: "Network Security",
    heading: "Our Network Security Services",
    description:
      "Safeguard your digital infrastructure with advanced network security solutions that provide real-time visibility, threat prevention, and continuous protection.",
    image: NETWORK_IMAGE,
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
    slug: "cloud-security",
    family: "cloud",
    name: "Cloud Security & Governance",
    shortName: "Cloud Security",
    heading: "Cloud Security & Governance",
    description:
      "Protect cloud workloads with identity, policy, and continuous governance designed for enterprise operations.",
    image: SERVICE_FALLBACK_IMAGE,
    banner: SERVICE_BANNER,
  },
  {
    slug: "hybrid-multi-cloud",
    family: "cloud",
    name: "Hybrid & Multi-Cloud Solutions",
    shortName: "Hybrid & Multi-Cloud",
    heading: "Hybrid & Multi-Cloud Solutions",
    description:
      "Connect on-premises, private, and public cloud environments without losing control or visibility.",
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
    slug: "chatbots",
    family: "ai-automation",
    name: "Chatbots & Virtual Assistants",
    shortName: "Chatbots",
    heading: "Chatbots & Virtual Assistants",
    description:
      "Conversational AI that improves customer experience and reduces the load on support teams.",
    image: SERVICE_FALLBACK_IMAGE,
    banner: SERVICE_BANNER,
  },
  {
    slug: "workflow-optimization",
    family: "ai-automation",
    name: "Smart Workflow Optimization",
    shortName: "Workflow Optimization",
    heading: "Smart Workflow Optimization",
    description:
      "Identify bottlenecks and redesign processes so work moves faster with fewer handoffs.",
    image: SERVICE_FALLBACK_IMAGE,
    banner: SERVICE_BANNER,
  },
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
};

function familyForCategory(categorySlug) {
  return categories.find((item) => item.slug === categorySlug)?.family || "cybersecurity";
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
    videoPoster: VIDEO_POSTER,
    videoUrl: "https://www.youtube.com/embed/NQ1cvwEvh44?si=H6fHKYzL4ZBSa332",
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

export const services = [
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
    images: [NETLAG_IMAGE, NETWORK_IMAGE],
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
      image: REVIEW_IMAGE,
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
      image: INSIGHTS_IMAGE,
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
      images: PLATFORM_IMAGES,
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
      image: REVIEW_IMAGE,
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
      image: INSIGHTS_IMAGE,
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
      images: PLATFORM_IMAGES,
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
      image: REVIEW_IMAGE,
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
      image: INSIGHTS_IMAGE,
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
      images: PLATFORM_IMAGES,
    },
  }),
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
  item({
    slug: "cloud-strategy",
    category: "migration-services",
    name: "Cloud Strategy",
    icon: "fa-solid fa-cloud",
    summary:
      "A clear migration path based on workload, risk, and business priorities.",
    description:
      "SPS helps organizations choose what to move, when to move it, and how to keep operations stable during cloud adoption. Strategy work includes workload assessment, sequencing, and a controlled migration plan.",
    features: [
      "Workload assessment",
      "Migration sequencing",
      "Risk and dependency review",
      "Target architecture guidance",
      "Business-aligned roadmap",
    ],
  }),
  item({
    slug: "application-data-migration",
    category: "migration-services",
    name: "Application & Data Migration",
    icon: "fa-solid fa-server",
    summary:
      "Move applications and data with a low-disruption plan and clear cutover steps.",
    description:
      "SPS migrates applications and data to cloud platforms with planning, testing, and cutover support so teams can keep serving the business during the move.",
    features: [
      "Application migration",
      "Data migration",
      "Cutover planning",
      "Testing and validation",
      "Post-migration support",
    ],
  }),
  item({
    slug: "cloud-security-governance",
    category: "cloud-security",
    name: "Cloud Security & Governance",
    icon: "fa-solid fa-shield-halved",
    summary:
      "Protect cloud environments with identity, policy, and continuous governance.",
    description:
      "SPS helps organizations secure cloud platforms with guardrails, identity controls, and operational governance. The service is designed to scale with the environment instead of slowing delivery.",
    features: [
      "Cloud identity and access",
      "Policy and guardrails",
      "Security monitoring",
      "Governance reporting",
      "Compliance alignment",
    ],
  }),
  item({
    slug: "hybrid-multi-cloud-architecture",
    category: "hybrid-multi-cloud",
    name: "Hybrid & Multi-Cloud Architecture",
    icon: "fa-solid fa-network-wired",
    summary:
      "Connect on-premises and cloud platforms without losing visibility or control.",
    description:
      "SPS designs hybrid and multi-cloud architectures that keep systems connected, secure, and operable. The work covers networking, identity, and operating models across more than one environment.",
    features: [
      "Hybrid connectivity",
      "Multi-cloud operating model",
      "Shared identity and policy",
      "Workload placement",
      "Operational visibility",
    ],
  }),
  item({
    slug: "business-process-automation",
    category: "automation",
    name: "Business Process Automation",
    icon: "fa-solid fa-gears",
    summary:
      "Remove repetitive work from daily operations with workflow automation.",
    description:
      "SPS automates business processes so teams spend less time on manual handoffs and more time on work that needs judgment. Solutions are designed around existing workflows, not a one-size-fits-all platform.",
    features: [
      "Process discovery",
      "Workflow automation",
      "Integration with current systems",
      "Exception handling",
      "Operational reporting",
    ],
  }),
  item({
    slug: "low-code-application-development",
    category: "automation",
    name: "Low-Code Application Development",
    icon: "fa-solid fa-code",
    summary:
      "Build internal applications faster with low-code platforms such as Appian.",
    description:
      "SPS helps organizations deliver internal applications with low-code tools, including Appian, so business teams can get working software without a long custom-build cycle.",
    features: [
      "Low-code application delivery",
      "Appian implementation support",
      "Process-centric design",
      "Integration with core systems",
      "User adoption support",
    ],
  }),
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
    summary:
      "Turn operational data into insight that teams can act on.",
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
  item({
    slug: "chatbots-virtual-assistants",
    category: "chatbots",
    name: "Chatbots & Virtual Assistants",
    icon: "fa-solid fa-headset",
    summary:
      "Conversational assistants that improve customer experience and reduce support load.",
    description:
      "SPS designs and implements chatbots and virtual assistants that answer common requests, route complex issues, and stay connected to the systems your teams already use.",
    features: [
      "Customer and employee assistants",
      "Knowledge-base integration",
      "Escalation to human agents",
      "Workflow automation",
      "Experience and quality review",
    ],
  }),
  item({
    slug: "smart-workflow-optimization",
    category: "workflow-optimization",
    name: "Smart Workflow Optimization",
    icon: "fa-solid fa-sitemap",
    summary:
      "Find bottlenecks and redesign processes so work moves with fewer delays.",
    description:
      "SPS reviews how work actually moves through the organization, then redesigns and automates the steps that slow teams down. The result is a clearer process with fewer handoffs.",
    features: [
      "Process mapping",
      "Bottleneck analysis",
      "Workflow redesign",
      "Automation opportunities",
      "Change support for teams",
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

const categoryMap = Object.fromEntries(categories.map((item) => [item.slug, item]));

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
  return services.filter((item) => item.category === slug);
}

export function getService(categorySlug, serviceSlug) {
  return (
    services.find(
      (item) => item.category === categorySlug && item.slug === serviceSlug,
    ) || null
  );
}

export function getCategoryStaticParams() {
  return categories.map((item) => ({ category: item.slug }));
}

export function getServiceStaticParams() {
  return services.map((item) => ({
    category: item.category,
    service: item.slug,
  }));
}

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
    ...categories.map((item) => ({
      url: absoluteUrl(categoryPath(item.slug)),
      lastModified: now,
      changeFrequency: monthly,
      priority: 0.8,
    })),
    ...services.map((item) => ({
      url: absoluteUrl(servicePath(item.category, item.slug)),
      lastModified: now,
      changeFrequency: monthly,
      priority: 0.7,
    })),
  ];
}