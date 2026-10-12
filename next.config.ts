import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  experimental: {
    proxyClientMaxBodySize: "12mb",
  },
  allowedDevOrigins: [
    "*.trycloudflare.com",
    "*.loca.lt",
    "*.lhr.life",
    "192.168.1.3",
  ],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/products.php",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/product_category.php",
        destination: "/products/automation",
        permanent: true,
      },
      {
        source: "/product_learnmore.php",
        destination: "/products/automation/watsonx-orchestrate",
        permanent: true,
      },
      {
        source: "/product_detail.php",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/comingsoon.php",
        destination: "/coming-soon",
        permanent: false,
      },
      {
        source: "/comingsoon",
        destination: "/coming-soon",
        permanent: false,
      },
      {
        source: "/products/bms/:product",
        destination: "/products/bms",
        permanent: true,
      },
      {
        source: "/products/csm/:product",
        destination: "/products/csm",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contactus",
        permanent: true,
      },
      {
        source: "/contactus.php",
        destination: "/contactus",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/aboutus",
        permanent: true,
      },
      {
        source: "/aboutus/",
        destination: "/aboutus",
        permanent: true,
      },
      {
        source: "/careers",
        destination: "/career",
        permanent: true,
      },
      {
        source: "/career/",
        destination: "/career",
        permanent: true,
      },
      {
        source: "/aboutus/index.php",
        destination: "/aboutus",
        permanent: true,
      },
      {
        source: "/career/index.php",
        destination: "/career",
        permanent: true,
      },
      {
        source: "/spinnlabs",
        destination: "/spinnlabs/overview",
        permanent: true,
      },
      {
        source: "/spinnlabs_practice/overview",
        destination: "/spinnlabs/overview",
        permanent: true,
      },
      {
        source: "/spinnlabs_practice/overview/",
        destination: "/spinnlabs/overview",
        permanent: true,
      },
      {
        source: "/spinnlabs_practice/industry",
        destination: "/spinnlabs/industry",
        permanent: true,
      },
      {
        source: "/spinnlabs_practice/industry/",
        destination: "/spinnlabs/industry",
        permanent: true,
      },
      {
        source: "/centers-of-expertise",
        destination: "/spinnlabs/centers-of-expertise",
        permanent: true,
      },
      {
        source: "/centers-of-expertise/",
        destination: "/spinnlabs/centers-of-expertise",
        permanent: true,
      },
      {
        source: "/centers-of-expertise/index.php",
        destination: "/spinnlabs/centers-of-expertise",
        permanent: true,
      },
      {
        source: "/spinnlabs_practice/r-amp-d",
        destination: "/spinnlabs/startups",
        permanent: true,
      },
      {
        source: "/spinnlabs_practice/r-amp-d/",
        destination: "/spinnlabs/startups",
        permanent: true,
      },
      {
        source: "/startups/propose",
        destination: "/spinnlabs/startups/propose",
        permanent: true,
      },
      {
        source: "/startups/propose/",
        destination: "/spinnlabs/startups/propose",
        permanent: true,
      },
      {
        source: "/startups/propose/index.php",
        destination: "/spinnlabs/startups/propose",
        permanent: true,
      },
      {
        source: "/startups/plan",
        destination: "/spinnlabs/startups/plan",
        permanent: true,
      },
      {
        source: "/startups/plan/",
        destination: "/spinnlabs/startups/plan",
        permanent: true,
      },
      {
        source: "/startups/plan/index.php",
        destination: "/spinnlabs/startups/plan",
        permanent: true,
      },
      {
        source: "/startups/sign_agreement",
        destination: "/spinnlabs/startups/sign-agreement",
        permanent: true,
      },
      {
        source: "/startups/sign_agreement/",
        destination: "/spinnlabs/startups/sign-agreement",
        permanent: true,
      },
      {
        source: "/startups/sign_agreement/index.php",
        destination: "/spinnlabs/startups/sign-agreement",
        permanent: true,
      },
      {
        source: "/startups/sign-agreement",
        destination: "/spinnlabs/startups/sign-agreement",
        permanent: true,
      },
      {
        source: "/startups/execute-plan",
        destination: "/spinnlabs/startups/execute-plan",
        permanent: true,
      },
      {
        source: "/startups/execute-plan/",
        destination: "/spinnlabs/startups/execute-plan",
        permanent: true,
      },
      {
        source: "/startups/execute-plan/index.php",
        destination: "/spinnlabs/startups/execute-plan",
        permanent: true,
      },
      {
        source: "/startups/launch-startup",
        destination: "/spinnlabs/startups/launch-startup",
        permanent: true,
      },
      {
        source: "/startups/launch-startup/",
        destination: "/spinnlabs/startups/launch-startup",
        permanent: true,
      },
      {
        source: "/startups/launch-startup/index.php",
        destination: "/spinnlabs/startups/launch-startup",
        permanent: true,
      },
      {
        source: "/startups/equity-modal",
        destination: "/spinnlabs/startups/equity-model",
        permanent: true,
      },
      {
        source: "/startups/equity-modal/",
        destination: "/spinnlabs/startups/equity-model",
        permanent: true,
      },
      {
        source: "/startups/equity-modal/index.php",
        destination: "/spinnlabs/startups/equity-model",
        permanent: true,
      },
      {
        source: "/startups/equity-model",
        destination: "/spinnlabs/startups/equity-model",
        permanent: true,
      },
      {
        source: "/startups/equity-model/",
        destination: "/spinnlabs/startups/equity-model",
        permanent: true,
      },
      {
        source: "/contracts/vita/",
        destination: "/contracts/vita",
        permanent: true,
      },
      {
        source: "/activities/Internship2025/how-it-works.php",
        destination: "/activities/internship-2026",
        permanent: false,
      },
      {
        source: "/activities/Internship2025/career-fields.php",
        destination: "/activities/internship-2026/career-fields",
        permanent: false,
      },
      {
        source: "/activities/Internship2025/who-we-are.php",
        destination: "/activities/internship-2026/who-we-are",
        permanent: false,
      },
      {
        source: "/activities/Internship2025",
        destination: "/activities/internship-2026",
        permanent: false,
      },
      {
        source: "/activities/internship-2025",
        destination: "/activities/internship-2026",
        permanent: false,
      },
      {
        source: "/spinnlabs_practice/sps-internship",
        destination: "/activities/internship-2026/apply",
        permanent: false,
      },
      {
        source: "/spinnlabs_practice/sps-internship/",
        destination: "/activities/internship-2026/apply",
        permanent: false,
      },
      {
        source: "/spinnlabs_practice/sps-internship/index.php",
        destination: "/activities/internship-2026/apply",
        permanent: false,
      },
      {
        source: "/sps-events/roundtable",
        destination: "/activities/roundtables",
        permanent: true,
      },
      {
        source: "/sps-events/roundtable/",
        destination: "/activities/roundtables",
        permanent: true,
      },
      {
        source: "/sps-events/roundtable/index.php",
        destination: "/activities/roundtables",
        permanent: true,
      },
      {
        source: "/sps-events/past-events",
        destination: "/activities/past-events",
        permanent: true,
      },
      {
        source: "/sps-events/past-events/",
        destination: "/activities/past-events",
        permanent: true,
      },
      {
        source: "/sps-events/past-events/index.php",
        destination: "/activities/past-events",
        permanent: true,
      },
      {
        source: "/sps-events/past-events/past-webinar.php",
        destination: "/activities/past-events/nepra-kaspersky-compliance",
        permanent: true,
      },
      {
        source: "/sps-events/past-events/past-webinar-v2.php",
        destination: "/activities/past-events/nepra-kaspersky-compliance",
        permanent: true,
      },
      {
        source: "/verticals/public_sector/county_government.php",
        destination: "/verticals/public-sector/county-government",
        permanent: true,
      },
      {
        source: "/verticals/public_sector/county_government",
        destination: "/verticals/public-sector/county-government",
        permanent: true,
      },
      {
        source: "/verticals/public_sector/government.php",
        destination: "/verticals/public-sector/government",
        permanent: true,
      },
      {
        source: "/verticals/public_sector/government",
        destination: "/verticals/public-sector/government",
        permanent: true,
      },
      {
        source: "/verticals/public_sector/education.php",
        destination: "/verticals/public-sector/education",
        permanent: true,
      },
      {
        source: "/verticals/public_sector/education",
        destination: "/verticals/public-sector/education",
        permanent: true,
      },
      {
        source: "/verticals/public_sector/public-safety.php",
        destination: "/verticals/public-sector/public-safety",
        permanent: true,
      },
      {
        source: "/verticals/public_sector/public-safety",
        destination: "/verticals/public-sector/public-safety",
        permanent: true,
      },
      {
        source: "/verticals/public_sector/healthcare.php",
        destination: "/verticals/public-sector/healthcare",
        permanent: true,
      },
      {
        source: "/verticals/public_sector/healthcare",
        destination: "/verticals/public-sector/healthcare",
        permanent: true,
      },
      {
        source: "/verticals/industrials/manufacturing.php",
        destination: "/verticals/industrials/manufacturing",
        permanent: true,
      },
      {
        source: "/industries/:family/:vertical",
        destination: "/verticals/:family/:vertical",
        permanent: true,
      },
      {
        source: "/:path(.*)\\.php",
        destination: "/coming-soon",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
