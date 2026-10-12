import "./globals.css";
import "../../public/assets/css/navbar-v2.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DeferredStyles from "@/components/layout/DeferredStyles";
import { DEFERRED_STYLES } from "@/lib/deferred-styles";
import AppointmentModal from "@/features/home/components/AppointmentModal";
import SiteBehaviorsLoader from "@/components/layout/SiteBehaviorsLoader";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_URL,
  organizationJsonLd,
} from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_SHORT_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "IT solutions provider",
    "business solutions",
    "AI solutions",
    "cloud services",
    "automation services",
    "cybersecurity solutions",
    "digital transformation",
    "enterprise IT",
    "managed IT services",
  ],
  authors: [{ name: SITE_NAME }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/assets/images/sps-logo.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_SHORT_NAME,
    images: ["/assets/images/logowhitenew.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/assets/images/logowhitenew.webp"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = organizationJsonLd();

  return (
    <html lang="en" data-theme-color="skin-1" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/assets/css/style.css" />
        <noscript>
          {DEFERRED_STYLES.map((href) => (
            <link key={href} rel="stylesheet" href={href} />
          ))}
        </noscript>
        <link
          rel="preload"
          href="/assets/fonts/poppins/Poppins-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/poppins/Poppins-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body id="bg">
        <DeferredStyles />
        <Header />
        {children}
        <Footer />
        <AppointmentModal />
        <SiteBehaviorsLoader />
      </body>
    </html>
  );
}
