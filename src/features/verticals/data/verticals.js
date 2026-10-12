import { absoluteUrl } from "@/lib/site";

import {
  VERTICALS_PATH,
  VERTICAL_IMAGES,
  VERTICAL_SERVICE_TABS,
} from "../constants/verticals.constants";


/* Helper*/
export function verticalPath(family, slug) {
  return `/verticals/${family}/${slug}`;
}


/* Common Copy*/
const COPY = {
  government:
    "Governments continue to build on their momentum to deliver exceptional citizen services — and strengthen their readiness in advance of the next big disruptions. In support, SPS remains committed to the service of governments and citizens around the globe — across segments including social services, government health, tax management, critical infrastructure, education, and national security. We work with stewards in federal as well as state and local agencies, building on decades of experience and trust. On a foundation of security and automation, our industry solutions help governments improve the citizen experience, optimize operations, and modernize infrastructure.",

  healthcare:
    "We support the healthcare industry and those who deliver health and human services, via telehealth or in person, to drive improvements in cost and quality, innovation and outcomes. We offer a unique combination of advanced technology solutions to help you drive impactful change, services to digitally transform organizations, and the ability to implement at scale, with the support of a trusted partner.",

  retail:
    "The challenges facing retailers can be overwhelming. The future of retail requires overcoming complexity in your business and rethinking the role of the store. Retail technology trends are towards powerful, contactless digital customer engagements and e-commerce, safer workplaces, and more agile operations and supply chains. Technologies such as hybrid cloud, automation, IoT and artificial intelligence can help accelerate your transformation.",

  energy:
    "In today’s changing energy landscape, business leaders recognize that sustainability is fundamental to remain competitive. As the energy industry shifts to a more ecosystem-centric model to combat climate change, investing in sustainable energy sources helps engage business and people to participate in the change. Utilize the latest technologies to ensure your utility is ready for the new energy ecosystem.",

  financial:
    "Financial services firms require real-time modernization to change how they work. From banking to capital markets, payments to insurance, scalable technology drives innovation, service and security.",

  industrials:
    "Many industrial enterprises are prime for analytics and IoT because they struggle with antiquated infrastructure that negatively affects business processes, security posture, and growth. Manufacturers are accelerating digital transformation using an integrated approach, applying AI, hybrid cloud and automation to achieve new levels of agility, efficiency, quality and sustainability.",
};


/* Vertical Pages */
export const verticalPages = [
  {
    family: "public-sector",
    slug: "county-government",
    title: "County Government",
    kicker: "Public Sector",

    banner: VERTICAL_IMAGES.publicSector.countyGovernment,

    description:
      "Accelerate your county’s digital transformation with an executive-led strategy focused on cybersecurity, cloud, and AI. We start with a county-wide Cyber Range event to raise executive awareness, followed by department-specific Tabletop Exercises that reveal risks and modernization opportunities. From refactoring legacy systems to unlocking data for AI, we help you build a multi-year roadmap aligned with your mission to serve, protect, and innovate. Ready to lead the change? Let’s shape your county’s digital future together.",

    stories: [
      {
        image:
          "/assets/images/public-sector/county_tab1.webp",
        alt:
          "County leaders collaborating on digital transformation",
        title:
          "Transform How Your County Serves Its People",
        text:
          "Unlock the full potential of your county government with a guided, executive-led approach to digital transformation. From cybersecurity awareness to cloud migration and AI readiness, we help you modernize the systems that power your public services.",
      },

      {
        image:
          "/assets/images/public-sector/county_tab2.webp",
        alt:
          "County government IT modernization and cybersecurity planning",
        title:
          "Helping County Governments accelerate digital transformation and IT modernization with AI, Cloud, and Cybersecurity",
        text:
          "We begin with a county-wide Cyber Range event, led by the County Executive and joined by department heads from Finance, HR, Public Safety, Fire, Utilities, and more. This immersive simulation builds executive awareness around the impact of cyber incidents and sets the stage for a broader transformation effort. Next, we conduct Tabletop Exercises with each department to evaluate risks across information systems, infrastructure, and service delivery. These sessions go beyond cybersecurity they uncover opportunities to modernize hardware and software, refactor legacy applications, migrate to the cloud, and unlock the potential of data for AI and advanced analytics. The outcome is a comprehensive, top-down digital transformation blueprint a multi-year roadmap that aligns technology modernization with your county’s mission to serve, protect, and innovate. Ready to lead the change? Let’s build your county’s digital future together.",
      },
    ],
  },

  {
    family: "public-sector",
    slug: "government",
    title: "Government",
    kicker: "Public Sector",
    banner: VERTICAL_IMAGES.publicSector.government,
    description: COPY.government,

    solutions: [
      "Access Control",
      "Body Worn Camera Solution",
    ],
  },

  {
    family: "public-sector",
    slug: "public-safety",
    title: "Public Safety",
    kicker: "Public Sector",
    banner: VERTICAL_IMAGES.publicSector.publicSafety,

    description:
      "The inability to integrate data in the public sector prevents state, local, and educational organizations from capturing the analytics necessary to have an impact on situational awareness, response time, and security. Surveillance systems are increasingly difficult to manage, having to support high definition cameras, a variety of devices, and longer retention times. Video storage often exceeds 30% of the cost of the entire system.",

    solutions: [
      "License Plate Recognition (LPR) Deployment Kit",
      "Copper Theft Security Monitoring",
    ],
  },

  {
    family: "public-sector",
    slug: "education",
    title: "Education",
    kicker: "Public Sector",
    banner: VERTICAL_IMAGES.publicSector.education,

    description:
      "Educational institutions require new strategic thinking, better data insights, personalized services and agile infrastructure. SPS Education solutions help create cognitive campuses, which help educators and students improve the learning process for better outcomes from kindergarten through higher education. Implementing the newest educational technologies helps support customized learning styles, increase research capacity and optimize operations for better cost effectiveness. Education technologies such as speech-to-text options, artificial intelligence (AI), hybrid cloud computing, data management and augmented reality enhance learning environments by unlocking learning potential and resulting in improved outcomes and better student engagement.",

    solutions: [
      "Viewboard for Education",
      "Safer Schools",
    ],

    product: {
      heading: "Our Product for Education",
      subtitle:
        "Explore Education products we provide across our core practices",
      image:
        VERTICAL_IMAGES.products.educationFischerIdentity,
      alt: "Fischer Identity",
      text:
        "SPS has teamed up with Fischer Identity, a top-tier provider of Identity Governance and Administration (IGA) software and solutions to revolutionize how higher education institutions, universities and colleges, seamlessly automate identity lifecycle management, enforce robust password governance, simplify single sign-on/authentication, and ensure continuous compliance. Fischer Identity empowers institutions of all sizes to securely manage diverse identities.",
    },
  },

  {
    family: "public-sector",
    slug: "healthcare",
    title: "Healthcare",
    kicker: "Public Sector — Mid Atlantic",
    banner: VERTICAL_IMAGES.publicSector.healthcare,
    description: COPY.healthcare,
  },

  {
    family: "industrials",
    slug: "manufacturing",
    title: "Manufacturing",
    kicker: "Industrials",
    banner: VERTICAL_IMAGES.industrials.manufacturing,

    description:
      "Unforeseen manufacturing equipment failure, high maintenance costs, and a lack of data integration due to disparate systems are all detrimental to operational efficiency. Analytics and IoT solutions that offer centralized monitoring, predictive maintenance, and connected logistics help combat these challenges. Leveraging the power of data along with process automation, Analytics and IoT solutions help advance the manufacturing industry into the next generation.",

    solutions: [
      "Manufacturing Equipment Health Monitoring",
      "Predictive Maintenance and Optimization",
    ],

    product: {
      heading: "Our Product for Manufacturing",
      subtitle:
        "Explore Manufacturing products we provide across our core practices",
      image: VERTICAL_IMAGES.products.manufacturingIbm,
      alt: "IBM Security Verify",
      text: "IBM Security Verify",
    },
  },

  {
    family: "industrials",
    slug: "textile",
    title: "Textile",
    kicker: "Industrials",
    banner: VERTICAL_IMAGES.industrials.textile,

    description:
      "Transform your textile business for the digital age with our cutting-edge solutions. Embrace the future of the textile industry by integrating cybersecurity, Cloud computing, Artificial Intelligence (AI), and the Internet of Things (IoT) into your operations. Our comprehensive suite of services empowers you to enhance efficiency, optimize production, and protect your valuable data. Stay ahead of the competition and unlock new possibilities with digital transformation tailored to the unique needs of the textile sector.",

    cta: {
      title: "Schedule a meeting with our Textile Executive",
      text:
        "Hashim is leading SPS's business growth in the Textile sector by leveraging AI, Cloud and Cybersecurity capabilities of SPS teams. He has also laid the foundation of Fabrico, an AI Based Visual Inspection startup focused in surface defect detection in weaving and knitting segments.",
    },
  },

  {
    family: "industrials",
    slug: "transportation",
    title: "Transportation",
    kicker: "Industrials",
    banner: VERTICAL_IMAGES.industrials.transportation,
    description: COPY.industrials,
  },

  {
    family: "industrials",
    slug: "utilities",
    title: "Utilities",
    kicker: "Industrials",
    banner: VERTICAL_IMAGES.industrials.utilities,
    description: COPY.energy,

    solutions: [
      "Manufacturing Equipment Health Monitoring",
      "Utility Vegetation Management",
    ],
  },

  {
    family: "healthcare",
    slug: "telehealth",
    title: "Telehealth & Remote Patient Monitoring",
    kicker: "Healthcare",
    banner: VERTICAL_IMAGES.healthcare.telehealth,
    description: COPY.healthcare,
  },

  {
    family: "healthcare",
    slug: "multi-clinic-consolidation",
    title: "Multi-Clinic Consolidation",
    kicker: "Healthcare",
    banner:
      VERTICAL_IMAGES.healthcare.multiClinicConsolidation,
    description: COPY.healthcare,
  },

  {
    family: "healthcare",
    slug: "compliance-requirements",
    title: "Compliance Requirements",
    kicker: "Healthcare",
    banner:
      VERTICAL_IMAGES.healthcare.complianceRequirements,
    description: COPY.healthcare,
  },

  {
    family: "healthcare",
    slug: "patient-experience",
    title: "Patient Experience",
    kicker: "Healthcare",
    banner:
      VERTICAL_IMAGES.healthcare.patientExperience,
    description: COPY.healthcare,
  },

  {
    family: "healthcare",
    slug: "health-systems-interoperability",
    title: "Health Systems Interoperability",
    kicker: "Healthcare",
    banner:
      VERTICAL_IMAGES.healthcare.healthSystemsInteroperability,
    description: COPY.healthcare,
  },

  {
    family: "healthcare",
    slug: "retail",
    title: "Healthcare Retail",
    kicker: "Healthcare",
    banner: VERTICAL_IMAGES.healthcare.retail,
    description: COPY.healthcare,
  },

  {
    family: "retail",
    slug: "retail",
    title: "Retail",
    kicker: "Retail",
    banner: VERTICAL_IMAGES.retail.retail,
    description: COPY.retail,
  },

  {
    family: "retail",
    slug: "supply-chain",
    title: "Supply Chain",
    kicker: "Retail",
    banner: VERTICAL_IMAGES.retail.supplyChain,
    description: COPY.retail,
  },

  {
    family: "retail",
    slug: "marketing-merchandising",
    title: "Marketing/Merchandising",
    kicker: "Retail",
    banner:
      VERTICAL_IMAGES.retail.marketingMerchandising,
    description: COPY.retail,
  },

  {
    family: "retail",
    slug: "personalization-localization",
    title: "Personalization & Localization",
    kicker: "Retail",
    banner:
      VERTICAL_IMAGES.retail.personalizationLocalization,
    description: COPY.retail,
  },

  {
    family: "retail",
    slug: "omni-channel-operations",
    title: "Omni-channel Operations",
    kicker: "Retail",
    banner:
      VERTICAL_IMAGES.retail.omniChannelOperations,
    description: COPY.retail,
  },

  {
    family: "retail",
    slug: "convenience-stores",
    title: "Convenience Stores",
    kicker: "Retail",
    banner:
      VERTICAL_IMAGES.retail.convenienceStores,
    description: COPY.retail,
  },

  {
    family: "energy",
    slug: "electric",
    title: "Electric",
    kicker: "Energy",
    banner: VERTICAL_IMAGES.energy.electric,

    description:
      "SPS helps electric power generation, transmission and distribution companies digitize and secure their businesses faster with a range of industry-leading energy-specific solutions, partners, and services.",

    solutions: [
      "Electric Substation Monitoring",
      "Predictive Maintenance and Optimization",
    ],
  },

  {
    family: "energy",
    slug: "oil-gas",
    title: "Oil & Gas",
    kicker: "Energy",
    banner: VERTICAL_IMAGES.energy.oilGas,
    description: COPY.energy,
  },

  {
    family: "financial",
    slug: "banking",
    title: "Banking",
    kicker: "Financial",
    banner: VERTICAL_IMAGES.financial.banking,

    description:
      "Financial institutions need to modernize to keep pace with challenging and changing times. Maintaining and exceeding ever-changing customer needs, real-time payments, regulatory requirements and cybersecurity risks at reduced cost requires a monumental shift. Business transformation built on extreme digitalization with new technologies like payments-as-a-service, AI, data and the cloud are pivotal. SPS has been a trusted partner in the financial services industry for decades. Let us help you enhance your customer journey and build new revenue streams by utilizing the data you already have on an efficient, secure and agile cloud.",

    solutions: ["Access Control"],
  },

  {
    family: "financial",
    slug: "insurance",
    title: "Insurance",
    kicker: "Financial",
    banner: VERTICAL_IMAGES.financial.insurance,

    description:
      "For years, insurers competed on price instead of maximizing value for their customers. Today, industry disruptions have raised customer expectations and amplified the need for accelerated digital transformation. Meeting these challenges will require new capabilities that improve offerings and experiences at speed and scale. To do this, insurers will need an open-cloud architecture with AI-based process automation that is secure, compliant, and freely integrates third party data without the worries of lock-in.",
  },

  {
    family: "telecommunications",
    slug: "telcos",
    title: "Telcos",
    kicker: "Telecommunications",
    banner: VERTICAL_IMAGES.telecommunications.telcos,

    description:
      "Telecommunications is experiencing a seismic shift and communications service providers are evolving to adapt. As connectivity services become more commoditized—limiting room for differentiation—the opportunity for reinvention is massive thanks to technological innovation. Operators today aim to capitalize with bold, value-adding enterprise services. SPS helps telcos unlock new revenue potential through business and delivery transformation by optimizing network operations, enabling differentiated enterprise experiences at the edge and beyond, and fortifying cybersecurity.",

    solutions: [
      "Copper Theft Security Monitoring",
      "Fleet Tracking and Asset Monitoring",
    ],

    highlights: [
      {
        title: "Operations",
        text:
          "End-to-end network operations: establish telecom network assurance and zero-touch operations with intelligent automation and orchestration.",
      },
      {
        title: "Performance",
        text:
          "System-wide visibility for managing service performance: translate raw performance data into actionable insights across multivendor networks.",
      },
      {
        title: "Distributed cloud",
        text:
          "Deploy and run apps with low latency, security and data privacy across on-premises, edge, and public cloud environments.",
      },
      {
        title: "Secure delivery",
        text:
          "Protect networks to gain trust for enterprises’ critical workloads with connected security for hybrid, multicloud environments.",
      },
      {
        title: "AI governance",
        text:
          "With MLOps and trustworthy AI, automate data collection and model building, deployment, and governance across the AI lifecycle.",
      },
      {
        title: "Customer service AI",
        text:
          "Transform standard support into exceptional care with faster, more personalized experiences across call, web, and mobile channels.",
      },
    ],
  },
];


/* Vertical Families*/
export const verticalFamilies = [
  {
    id: "public-sector",
    label: "Public Sector",
    icon: "fa fa-university",
    image: VERTICAL_IMAGES.publicSector.family,

    description:
      "Help governments, education, public safety, and county agencies modernize citizen services on a foundation of security, cloud, and AI.",

    items: [
      {
        label: "Government",
        href: verticalPath(
          "public-sector",
          "government",
        ),
      },
      {
        label: "Public Safety",
        href: verticalPath(
          "public-sector",
          "public-safety",
        ),
      },
      {
        label: "Education",
        href: verticalPath(
          "public-sector",
          "education",
        ),
      },
      {
        label: "Healthcare-Mid Atl",
        href: verticalPath(
          "public-sector",
          "healthcare",
        ),
      },
      {
        label: "County Government",
        href: verticalPath(
          "public-sector",
          "county-government",
        ),
      },
    ],
  },

  {
    id: "industrials",
    label: "Industrials",
    icon: "fa fa-industry",
    image: VERTICAL_IMAGES.industrials.family,

    description:
      "Advance manufacturing, textiles, transportation, and utilities with connected operations, predictive insight, and resilient infrastructure.",

    items: [
      {
        label: "Manufacturing",
        href: verticalPath(
          "industrials",
          "manufacturing",
        ),
      },
      {
        label: "Textile",
        href: verticalPath(
          "industrials",
          "textile",
        ),
      },
      {
        label: "Transportation",
        href: verticalPath(
          "industrials",
          "transportation",
        ),
      },
      {
        label: "Utilities",
        href: verticalPath(
          "industrials",
          "utilities",
        ),
      },
    ],
  },

  {
    id: "healthcare",
    label: "Healthcare",
    icon: "fa fa-first-aid",
    image: VERTICAL_IMAGES.healthcare.family,

    description:
      "Support care delivery, compliance, and patient experience with interoperable systems and trusted digital health programs.",

    items: [
      {
        label: "Telehealth & Remote Patient Monitoring",
        href: verticalPath(
          "healthcare",
          "telehealth",
        ),
      },
      {
        label: "Multi-Clinic Consolidation",
        href: verticalPath(
          "healthcare",
          "multi-clinic-consolidation",
        ),
      },
      {
        label: "Compliance Requirements",
        href: verticalPath(
          "healthcare",
          "compliance-requirements",
        ),
      },
      {
        label: "Patient Experience",
        href: verticalPath(
          "healthcare",
          "patient-experience",
        ),
      },
      {
        label: "Health Systems Interoperability",
        href: verticalPath(
          "healthcare",
          "health-systems-interoperability",
        ),
      },
      {
        label: "Retail",
        href: verticalPath(
          "healthcare",
          "retail",
        ),
      },
    ],
  },

  {
    id: "retail",
    label: "Retail",
    icon: "fa fa-shopping-cart",
    image: VERTICAL_IMAGES.retail.family,

    description:
      "Rethink the store, supply chain, and customer journey with contactless engagement, agile operations, and intelligent merchandising.",

    items: [
      {
        label: "Retail",
        href: verticalPath(
          "retail",
          "retail",
        ),
      },
      {
        label: "Supply Chain",
        href: verticalPath(
          "retail",
          "supply-chain",
        ),
      },
      {
        label: "Marketing/Merchandising",
        href: verticalPath(
          "retail",
          "marketing-merchandising",
        ),
      },
      {
        label: "Personalization & Localization",
        href: verticalPath(
          "retail",
          "personalization-localization",
        ),
      },
      {
        label: "Omni-channel Operations",
        href: verticalPath(
          "retail",
          "omni-channel-operations",
        ),
      },
      {
        label: "Convenience Stores",
        href: verticalPath(
          "retail",
          "convenience-stores",
        ),
      },
    ],
  },

  {
    id: "energy",
    label: "Energy",
    icon: "fa fa-gas-pump",
    image: VERTICAL_IMAGES.energy.family,

    description:
      "Prepare electric, oil, and gas operators for a more sustainable, secure, and data-driven energy ecosystem.",

    items: [
      {
        label: "Electric",
        href: verticalPath("energy", "electric"),
      },
      {
        label: "Oil & Gas",
        href: verticalPath("energy", "oil-gas"),
      },
    ],
  },

  {
    id: "financial",
    label: "Financial",
    icon: "fa fa-wallet",
    image: VERTICAL_IMAGES.financial.family,

    description:
      "Modernize banking and insurance with secure, real-time platforms for payments, service, and regulatory confidence.",

    items: [
      {
        label: "Banking",
        href: verticalPath("financial", "banking"),
      },
      {
        label: "Insurance",
        href: verticalPath(
          "financial",
          "insurance",
        ),
      },
    ],
  },

  {
    id: "telecommunications",
    label: "Telecommunications",
    icon: "fa fa-broadcast-tower",
    image: VERTICAL_IMAGES.telecommunications.family,

    description:
      "Help operators optimize networks, secure delivery, and create differentiated enterprise services at the edge and beyond.",

    items: [
      {
        label: "Telcos",
        href: verticalPath(
          "telecommunications",
          "telcos",
        ),
      },
    ],
  },
];


/* Mega Menu                                                                  */


export const verticalMegaMenu = [
  {
    title: "Public Sector",
    items: [
      {
        label: "County Government",
        href: verticalPath(
          "public-sector",
          "county-government",
        ),
      },
      {
        label: "Healthcare",
        href: verticalPath(
          "public-sector",
          "healthcare",
        ),
      },
      {
        label: "Government",
        href: verticalPath(
          "public-sector",
          "government",
        ),
      },
      {
        label: "Public Safety",
        href: verticalPath(
          "public-sector",
          "public-safety",
        ),
      },
      {
        label: "Education",
        href: verticalPath(
          "public-sector",
          "education",
        ),
      },
    ],
  },

  {
    title: "Industrial",
    items: [
      {
        label: "Manufacturing",
        href: verticalPath(
          "industrials",
          "manufacturing",
        ),
      },
      {
        label: "Textiles",
        href: verticalPath(
          "industrials",
          "textile",
        ),
      },
      {
        label: "Utilities",
        href: verticalPath(
          "industrials",
          "utilities",
        ),
      },
    ],
  },

  {
    title: "Healthcare",
    items: [
      {
        label: "compliance-requirements",
        href: verticalPath(
          "healthcare",
          "compliance-requirements",
        ),
      },
      {
        label: "Health Systems Interoperability",
        href: verticalPath(
          "healthcare",
          "health-systems-interoperability",
        ),
      },
      {
        label: "Multi-Clinic Consolidation",
        href: verticalPath(
          "healthcare",
          "multi-clinic-consolidation",
        ),
      },
      {
        label: "Patient Experience",
        href: verticalPath(
          "healthcare",
          "patient-experience",
        ),
      },
      {
        label: "Retail",
        href: verticalPath(
          "healthcare",
          "retail",
        ),
      },
      {
        label: "Telehealth & Remote Patient Monitoring",
        href: verticalPath(
          "healthcare",
          "telehealth",
        ),
      },
    ],
  },

  {
    title: "Retail",
    items: [
      {
        label: "Convenience Store",
        href: verticalPath(
          "retail",
          "convenience-stores",
        ),
      },
      {
        label: "Marketing/Merchandising",
        href: verticalPath(
          "retail",
          "marketing-merchandising",
        ),
      },
      {
        label: "Omni-channel Operations",
        href: verticalPath(
          "retail",
          "omni-channel-operations",
        ),
      },
      {
        label: "Personalization & Localization",
        href: verticalPath(
          "retail",
          "personalization-localization",
        ),
      },
      {
        label: "Supply Chain",
        href: verticalPath(
          "retail",
          "supply-chain",
        ),
      },
    ],
  },

  {
    title: "Energy",
    items: [
      {
        label: "Electric",
        href: verticalPath("energy", "electric"),
      },
      {
        label: "Oil & Gas",
        href: verticalPath("energy", "oil-gas"),
      },
    ],
  },

  {
    title: "Financial",
    items: [
      {
        label: "Banking",
        href: verticalPath(
          "financial",
          "banking",
        ),
      },
      {
        label: "Insurance",
        href: verticalPath(
          "financial",
          "insurance",
        ),
      },
    ],
  },

  {
    title: "Telecommunications",
    items: [
      {
        label: "Telcos",
        href: verticalPath(
          "telecommunications",
          "telcos",
        ),
      },
    ],
  },
];


/* Related Services                                                           */


export const verticalServiceTabs = [
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    icon: "fa-solid fa-shield-halved",

    items: [
      {
        title: "Network Visibility Operations Services",

        text:
          "The SPS Network Visibility Operations Service suite offers three levels of service to address specific client environments: 1) Basic Health Check; 2) Configuration Review & Testing; 3) Comprehensive Documentation and Training",

        href:
          VERTICAL_SERVICE_TABS.cybersecurity.networkVisibility,
      },

      {
        title: "Security Management Jump Start - SMJS",

        text:
          "This is a pre-requisite to Security Management as a Service. Using the NIST cybersecurity framework, we meet with the enterprise stakeholders to assess the state of security management in your organization, establish a baseline and formulate a framework to roll out Security Management as a Service. The deliverable of this service is a Security Management Gaps and Remediation Report. This report forms the basis of our Security Management as a Service offering.",

        href:
          VERTICAL_SERVICE_TABS.cybersecurity
            .securityManagementJumpStart,
      },

      {
        title: "Security Management as a Service - SMaaS",

        text:
          "Our Security Management as a Service is a customized program that optimally integrates decades of our cybersecurity expertise and strategic processes into your team. It is designed to help you MANAGE security of your organization based on the NIST cybersecurity framework (CSF). We regularly meet your enterprise and information systems stakeholders to identify risks to people, processes and technology so protective measures can be taken to mitigate the threat. We leverage our Security Management Automation Platform (SMAP) to help generate Gaps and Remediation Report and Plan of Actions and Milestones (PoA&M) on an ongoing basis.",

        href:
          VERTICAL_SERVICE_TABS.cybersecurity
            .securityManagementAsAService,
      },
    ],
  },

  {
    id: "cloud",
    label: "Cloud",
    icon: "fa-solid fa-cloud",

    items: [
      {
        title: "Migrate VMware Workload to Cloud",

        text:
          "SPS offers a seamless service for migrating VMware workloads to IBM Cloud, enhancing scalability, flexibility, and cost-efficiency. Our tailored approach includes comprehensive assessment, planning, and execution to ensure minimal disruption. We provide ongoing support for optimized cloud operations.",

        href:
          VERTICAL_SERVICE_TABS.cloud.migrateVmware,
      },

      {
        title: "Migrate IBM Power to Cloud",

        text:
          "SPS Team can help our customers to Migrate IBM Power on-prem workload including applications, data, users, and network to Cloud.",

        href:
          VERTICAL_SERVICE_TABS.cloud.migrateIbmPower,
      },

      {
        title: "Cloud Application Development",

        text:
          "Cloud development services help clients develop and deploy applications hosted on the cloud leveraging node.js and php technologies. We professionally design, redesign and continuously support customer-facing and enterprise apps to achieve high conversion and adoption rates.",

        href:
          VERTICAL_SERVICE_TABS.cloud.cloudApplicationDevelopment,
      },

      {
        title: "IT Ops and Support",

        text:
          "Effective management continues to be the key priority for most organizations, as cloud adoption continues to rise. To address this challenge, organizations choose different ways to manage their cloud infrastructure. Some manage it themselves, while some choose to have a managed cloud service provider who can handle a broader mission with a clear vision of managing hybrid environments and resources.",

        href:
          VERTICAL_SERVICE_TABS.cloud.itOpsSupport,
      },
    ],
  },

  {
    id: "ai-automation",
    label: "AI & Automation",
    icon: "fa-solid fa-robot",

    items: [
      {
        title: "Data Analytics",

        text:
          "Navigate the vast landscape of data with confidence through our advanced Data Analytics services. In the era where data is often referred to as the ‘new oil,’ our tailored solutions extract meaningful insights, transforming raw information into strategic assets. Empower your decision-making process and gain a competitive edge in a world driven by data-driven strategies.",

        href:
          VERTICAL_SERVICE_TABS.aiAutomation.dataAnalytics,
      },

      {
        title: "Conversational AI",

        text:
          "Revolutionize communication with our Conversational AI services. Our chatbots redefine the user interaction landscape, offering personalized and responsive conversations. Beyond enhancing customer support and streamlining processes, our solutions, fueled by NLP and machine learning, create efficient communication channels that adapt to your unique needs.",

        href:
          VERTICAL_SERVICE_TABS.aiAutomation.conversationalAi,
      },

      {
        title: "Data Management",

        text:
          "Efficiently manage, organize, and secure your data — often described as the ‘new oil’ in the digital landscape — with our comprehensive Data Management services. Whether dealing with structured or unstructured data, our strategies ensure accessibility, reliability, and compliance. Unlock the true potential of your data assets and make informed decisions confidently.",

        href:
          VERTICAL_SERVICE_TABS.aiAutomation.dataManagement,
      },
    ],
  },

  {
    id: "collaboration",
    label: "Collaboration",
    icon: "fa-solid fa-users-gear",

    items: [
      {
        title: "Events Services",

        text:
          "When you need to hold remote classes, virtual meetings, or meet with your peers in a collaborative environment with minimal planning at a minimal cost.",

        href: VERTICAL_SERVICE_TABS.collaboration.events,
      },
    ],
  },

  {
    id: "spinnlabs",
    label: "Spinnlabs",
    icon: "fa-solid fa-flask",

    items: [
      {
        title: "Startup Service",

        text:
          "Navigate the vast landscape of data with confidence through our advanced Data Analytics services. In the era where data is often referred to as the ‘new oil,’ our tailored solutions extract meaningful insights, transforming raw information into strategic assets. Empower your decision-making process and gain a competitive edge in a world driven by data-driven strategies.",

        href: VERTICAL_SERVICE_TABS.spinnlabs.startup,
      },
    ],
  },
];


/* Data Access                                                                */


export function getVertical(family, slug) {
  return verticalPages.find(
    (page) =>
      page.family === family &&
      page.slug === slug,
  );
}

export function getVerticalStaticParams() {
  return verticalPages.map((page) => ({
    family: page.family,
    vertical: page.slug,
  }));
}


/* Sitemap                                                                    */


export function verticalSitemapEntries() {
  return [
    {
      url: absoluteUrl(VERTICALS_PATH),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    ...verticalPages.map((page) => ({
      url: absoluteUrl(
        verticalPath(page.family, page.slug),
      ),

      lastModified: new Date(),
      changeFrequency: "monthly",

      priority:
        page.slug === "county-government"
          ? 0.7
          : 0.6,
    })),
  ];
}