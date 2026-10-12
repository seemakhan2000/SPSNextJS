const FALLBACK_SITE_URL = "https://www.spsnet.com";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL
).replace(/\/$/, "");

export const SITE_NAME = "Software Productivity Strategists Inc";
export const SITE_SHORT_NAME = "SPSNet";
export const COMING_SOON_PATH = "/coming-soon";
export const SITE_DESCRIPTION =
  "We are an IT solutions provider focused on solving business problems by leveraging AI, cloud, automation, and cybersecurity.";

export const SITE_CONTACT = {
  email: "support@spsnet.com",
  phone: "+301-337-2290",
  internshipEmail: "internship@spsnet.com",
  internQueriesEmail: "internqueries@spsnet.com",
  hours: "Mon-Fri: 8:00am-7:00pm",
  address: {
    street: "2400 Research Blvd, Suite 115",
    locality: "Rockville",
    region: "MD",
    postalCode: "20850",
    country: "US",
  },
};

export const SITE_PHONE_HREF = `tel:${SITE_CONTACT.phone.replace(/[^\d+]/g, "")}`;
export const SITE_EMAIL_HREF = `mailto:${SITE_CONTACT.email}`;

export function formatStreetAddress() {
  const { street, locality, region, postalCode } = SITE_CONTACT.address;
  return `${street}, ${locality}, ${region} ${postalCode}`;
}

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: SITE_SHORT_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/assets/images/sps-logo.webp"),
    email: SITE_CONTACT.email,
    telephone: SITE_CONTACT.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONTACT.address.street,
      addressLocality: SITE_CONTACT.address.locality,
      addressRegion: SITE_CONTACT.address.region,
      postalCode: SITE_CONTACT.address.postalCode,
      addressCountry: SITE_CONTACT.address.country,
    },
  };
}
