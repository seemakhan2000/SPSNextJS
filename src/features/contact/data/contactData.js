import {
  SITE_CONTACT,
  SITE_EMAIL_HREF,
  SITE_PHONE_HREF,
  formatStreetAddress,
} from "@/lib/site";

export const contactPage = {
  title: "Contact SPS",
  description:
    "SPS is a trusted technology provider delivering secure, scalable IT solutions for digital transformation.",
  kicker: "CONTACT SPS",
  intro:
    "Reach out to our Corporate Headquarters for general inquiries. For any inquiries regarding the Internship program, please contact us at:",
  formTitle: "Send a Message",
  formSubtitle: "You can reach us anytime",
  cards: [
    {
      icon: "feather icon-map-pin",
      title: "Address",
      text: `${SITE_CONTACT.address.street} ${SITE_CONTACT.address.locality}, ${SITE_CONTACT.address.region} ${SITE_CONTACT.address.postalCode}`,
      href: `https://maps.google.com/?q=${encodeURIComponent(formatStreetAddress())}`,
    },
    {
      icon: "feather icon-phone",
      title: "Phone",
      text: SITE_CONTACT.phone,
      href: SITE_PHONE_HREF,
    },
    {
      icon: "feather icon-mail",
      title: "Email",
      text: SITE_CONTACT.email,
      href: SITE_EMAIL_HREF,
    },
    {
      icon: "feather icon-clock",
      title: "Business Hours",
      text: SITE_CONTACT.hours,
    },
    {
      title: "Going North on 270:",
      text: "Take 270 North to Exit 8 (Shady Grove Exit). Follow exit around to stop light and proceed left. Going over bridge stay to the Left and go to the 4th light (Key West Ave.) Take a Left and make your first left. Building 2400 will be straight ahead of you as you enter the parking lot. Park in any of the unassigned parking spaces. SPS is on the first floor. Use the hallway furthest to the right of the café. Suite 115 is all the way at the end of the hallway past the fitness center.",
    },
    {
      title: "Going South on 270",
      text: "Take 270 South to the Shady Grove Exit 8. Follow exit to the light and take a right onto Shady Grove. Go to the 3rd light (Key West Ave). Take a left and make your first left. Building 2400 will be straight ahead of you as you enter the parking lot. Park in any of the unassigned parking spaces. SPS is on the first floor. Use the hallway furthest to the right of the café. Suite 115 is all the way at the end of the hallway past the fitness center.",
    },
  ],
};