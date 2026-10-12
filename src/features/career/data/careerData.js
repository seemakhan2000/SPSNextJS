import { CONTACT_PATH } from "@/features/contact/constants/contact.constants";

export const careerPage = {
  title: "Careers",
  description:
    "Join an amazing team that is passionate about changing the way people connect.",
  kicker: "JOIN SPS",
  opportunities: {
    title: "Career Opportunities",
    text: "SPS is looking for world class talent to help us continue pushing the envelope of digital transformations.",
  },
  diversity: {
    title: "Diversity & Inclusion",
    text: "Diversity, equality, and inclusiveness are not just words that we use to describe the SPS culture — it is how we live it. We foster that ability to grow through individual planning that allows employees to create their own unique career path.",
  },
  benefitsIntro: {
    title: "Benefits",
    text: "At SPS we provide a highly competitive Total Rewards Package for all of our employees around the world. Our country specific Total Rewards package aligns to our core values and provides a solid foundation for work life integration in a challenging and inclusive environment.",
  },
  jumpNav: [
    {
      href: "#career-opportunities",
      label: "Career Opportunities",
      icon: "feather icon-briefcase",
    },
    { href: "#our-value", label: "Our Values", icon: "feather icon-heart" },
    { href: "#benefits", label: "Benefits", icon: "feather icon-gift" },
  ],
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
  benefits: [
    {
      title: "Health Care - Disability - Life/ADD Insurance",
      text: "SPS offers a range of carefully selected insurance plans for your Health & Wellness needs. Choose the available medical, dental and/or vision care option that fits your needs. Employer paid Disability & Life/ADD coverage is also available for all eligible employees.",
      image: "/assets/images/career/healthcare.webp",
      imageAlt: "Health Care, Disability, and Life/ADD Insurance",
    },
    {
      title: "Financial Future",
      text: "Secure your financial future by saving for retirement! You may choose between either a pre-tax, or post-tax contribution plan. SPS offers a comprehensive 401(k) retirement plan with financial advisors available to help you select and manage the right funds for you.",
      image: "/assets/images/career/financial-future.webp",
      imageAlt: "Financial future and retirement planning",
    },
    {
      title: "Paid Time Off & Holidays",
      text: "Our combined pool of sick and vacation time (paid time off - PTO) is to give you time off not only when you are sick but also to unwind and spend quality time with family and friends. In addition to the above, SPS provides annual holidays for your rest and relaxation.",
      image: "/assets/images/career/paid-time-off.webp",
      imageAlt: "Paid time off and holidays",
    },
    {
      title: "Parental Leave and Family Bonding",
      text: "SPS offers a global Parental Pay policy as we believe there is nothing more important for parents than bonding with a new child.",
      image: "/assets/images/career/parental-leave.webp",
      imageAlt: "Parental leave and family bonding",
    },
    {
      title: "Flexibility in Work",
      text: "We understand that not all people work best in a traditional office environment. We offer our employees the flexibility to work virtually if that helps them be more productive. Talk to your Manager on what best suits your particular situation!",
      image: "/assets/images/career/flexibility.webp",
      imageAlt: "Flexibility in work",
    },
  ],
  applyHref: CONTACT_PATH,
  cta: {
    title: "Ready to join the SPS team?",
    text: "Apply for an open role or send us a note. We would like to hear from people who want to help clients transform with AI, cloud, and cybersecurity.",
    label: "Apply Now",
    href: CONTACT_PATH,
  },
};