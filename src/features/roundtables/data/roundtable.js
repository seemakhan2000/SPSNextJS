import { ROUNDTABLE_PATH, ROUNDTABLE_IMAGES } from "../constants/roundtable.constants";

export const roundtablePage = {
  title: "VISO Roundtable Series",
  headline: "VISO Roundtable Series",
  description:
    "An invite-only monthly forum for Virginia Information Security Officers to collaborate, share, and strengthen collective security posture.",
  kicker: "ROUNDTABLES",
  applyLabel: "Register Now",
  audience: "For Virginia Information Security Officers",
  about: {
    title: "About the Roundtable",
    text: "SPS is hosting a monthly Information Security Officer Roundtable for the Commonwealth of Virginia, bringing together cybersecurity leaders across state and local government to collaborate, share, and strengthen collective security posture. This invite-only forum will be led by Dave Shure, Information Security Officer for the Virginia Department of Small Business and Supplier Diversity (SBSD), who has led SBSD’s journey toward compliance with SEC530 and NIST 800-53 Control Framework.",
    facts: [
      {
        icon: "feather icon-calendar",
        title: "Frequency",
        text: "2nd Tuesday of every month",
      },
      {
        icon: "feather icon-play-circle",
        title: "Start Date",
        text: "June 11, 2026",
      },
      {
        icon: "feather icon-video",
        title: "Format",
        text: "Virtual (Microsoft Teams)",
      },
    ],
  },
  whyAttend: {
    title: "Why Attend",
    text: "It is a peer collaboration forum. Participants will:",
    footer: "Contribute to improving cybersecurity across Virginia",
    items: [
      {
        icon: "feather icon-bar-chart-2",
        title: "Benchmark maturity",
        text: "Compare your security maturity against peers across Virginia agencies.",
      },
      {
        icon: "feather icon-file-text",
        title: "Actionable artifacts",
        text: "Gain templates and artifacts you can put to work immediately.",
      },
      {
        icon: "feather icon-users",
        title: "Practitioner-led",
        text: "Learn directly from practitioners—not consultants.",
      },
      {
        icon: "feather icon-shield",
        title: "Shared defense",
        text: "Help improve cybersecurity posture across the Commonwealth.",
      },
    ],
  },
  session: {
    badge: "Upcoming Session",
    topicLabel: "Topic",
    topic: "Change Management",
    dateLabel: "Date",
    date: "Thursday, June 11th, 2026",
    timeLabel: "Time",
    time: "11:00 AM - 12:00 PM",
    timezone: "Eastern",
  },
  futureDates: {
    title: "Future Dates & Tentative Topics",
    items: [
      { date: "July 14", topic: "Configuration Management" },
      { date: "Aug 11", topic: "Audit Readiness and Compliance Artifacts" },
      { date: "Sept 8", topic: "Security Controls Implementation & Monitoring" },
      { date: "Oct 13", topic: "Incident Response" },
      { date: "Nov 10", topic: "Disaster Recovery" },
      { date: "Dec 8", topic: "Business Continuity" },
    ],
  },
  hostsTitle: "Meet the Hosts",
  hosts: [
    {
      id: "dave-shure",
      role: "Host",
      name: "Dave Shure",
      title: "Information Security Officer",
      org: "Virginia Department of Small Business and Supplier Diversity",
      image: ROUNDTABLE_IMAGES.daveShure,
      bio: "Dave Shure is a passionate cybersecurity professional within the Commonwealth of Virginia with over 25 years of experience in Information Technology. He is committed to ensuring that compliance efforts go beyond simply checking boxes by implementing practical, effective security. Dave has extensive experience implementing sustainable solutions tailored to small and mid-sized government organizations with limited resources.",
    },
    {
      id: "nouman-abbasi",
      role: "Co-Host",
      name: "Nouman Abbasi",
      title: "Sr VP, Professional Services",
      org: "Software Productivity Strategists, Inc.",
      image: ROUNDTABLE_IMAGES.noumanAbbasi,
      bio: "Nouman Abbasi is an executive technologist and security expert with over 16 years of experience in Identity and Access Management, cybersecurity architecture, and enterprise system design. He has led the successful delivery of complex security programs for organizations ranging from government agencies to large enterprises. He is currently focused on the intersection of AI and cybersecurity, where he designs and deploys multi-agent AI systems that automate identity workflows, enhance threat response, and reduce operational friction. His work emphasizes intelligent automation and real-time decision-making powered by advanced analytics and modern data platforms. Nouman is also recognized for building powerful analytics ecosystems that provide deep visibility into user behavior, security events, and system performance. His approach aligns with leading security practices, including SEC530 methodologies and frameworks such as NIST 800-53, ensuring solutions are both innovative and compliant.",
    },
  ],
  agenda: {
    title: "Agenda",
    items: [
      {
        icon: "feather icon-alert-triangle",
        text: "Real-world implementation challenges",
      },
      {
        icon: "feather icon-check-circle",
        text: "Lessons learned from achieving compliance",
      },
      {
        icon: "feather icon-clipboard",
        text: "Practical strategies for audit readiness",
      },
      {
        icon: "feather icon-grid",
        text: "Framework alignment approaches (SEC530, NIST)",
      },
      {
        icon: "feather icon-message-circle",
        text: "Peer-driven discussion on emerging threats and solutions",
      },
    ],
  },
  participants: {
    title: "Ideal Participants",
    text: "This roundtable is designed for decision-makers and practitioners who are directly responsible for improving cybersecurity posture, managing compliance, and leading security initiatives within the Virginia state and local government.",
  },
  whoShouldJoin: {
    title: "Who should join",
    items: [
      {
        icon: "feather icon-shield",
        title: "CISOs and ISOs",
        text: "Chief Information Security Officers and Information Security Officers across Virginia state agencies.",
      },
      {
        icon: "feather icon-map-pin",
        title: "County and municipal leaders",
        text: "IT and security leaders responsible for cybersecurity and compliance.",
      },
      {
        icon: "feather icon-book-open",
        title: "Risk, compliance, and governance",
        text: "Professionals aligned with SEC530 and the NIST Cybersecurity Framework (CSF).",
      },
      {
        icon: "feather icon-monitor",
        title: "IT directors",
        text: "Technology leaders overseeing security operations and infrastructure.",
      },
      {
        icon: "feather icon-layers",
        title: "Security architects",
        text: "Program managers involved in implementing cybersecurity frameworks.",
      },
    ],
  },
  form: {
    title: "Roundtable Registration",
    text: "Reserve your place in this invite-only forum. We will confirm details by email.",
  },
  cta: {
    title: "Join Virginia’s ISO community",
    text: "Register for the VISO Roundtable Series and collaborate with cybersecurity leaders across the Commonwealth.",
    label: "Register Now",
    href: `${ROUNDTABLE_PATH}#register`,
  },
};