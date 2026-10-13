import PageBanner from "@/features/products/components/PageBanner";
import JsonLd from "@/features/products/seo/JsonLd";

import ContactDetail from "@/features/contact/components/ContactDetail";

import {
  CONTACT_BANNER,
  CONTACT_PATH,
} from "@/features/contact/constants/contact.constants";

import { contactPage } from "@/features/contact/data/contactData";

import { contactMetadata } from "@/features/contact/seo/contactMetadata";
import { contactJsonLd } from "@/features/contact/seo/contactJsonLd";

import { breadcrumbJsonLd } from "@/features/products/seo/JsonLd";

export const metadata = contactMetadata();

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          contactJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact Us", path: CONTACT_PATH },
          ]),
        ]}
      />

      <main className="page-content">
        <PageBanner
  title={contactPage.title}
  description={contactPage.description}
  kicker={contactPage.kicker}
  image={CONTACT_BANNER}
  overlay
  crumbs={[
    { label: "Home", href: "/" },
    { label: "Contact Us" },
  ]}
/>

        <ContactDetail />
      </main>
    </>
  );
}