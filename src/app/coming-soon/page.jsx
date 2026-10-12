import ComingSoonContent from "@/features/coming-soon/components/ComingSoonContent";

export const metadata = {
  title: "Coming Soon",
  description:
    "This section of the SPS site is still in development. Please check back soon.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/coming-soon" },
};

export default function ComingSoonPage() {
  return (
    <main className="page-content">
      <ComingSoonContent />
    </main>
  );
}