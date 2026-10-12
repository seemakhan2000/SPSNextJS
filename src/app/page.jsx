import Hero from "@/features/home/components/Hero";
import About from "@/features/home/components/About";
import Services from "@/features/home/components/Services";
import StartupsIntro from "@/features/home/components/StartupsIntro";
import Startups from "@/features/home/components/Startups";
import TrustedProducts from "@/features/home/components/TrustedProducts";
import CTA from "@/features/home/components/Appointment";
import Testimonials from "@/features/home/components/Testimonials";
import HowItWorks from "@/features/home/components/HowItWorks";
import Partners from "@/features/home/components/Partners";
import TeamBanner from "@/features/home/components/TeamBanner";
import Customers from "@/features/home/components/Customers";
import News from "@/features/home/components/News";
import Verticals from "@/features/home/components/Verticals";

export default function Home() {
  return (
    <>
      <link
        rel="preload"
        href="/assets/images/spsimg/banner/bg-v4.avif"
        as="image"
        type="image/avif"
        fetchPriority="high"
      />
      <main className="page-content">
        <Hero />
        <About />
       <Services />
        <StartupsIntro />
        <Startups />
        <TrustedProducts />
        <CTA />
        <Testimonials />
        <HowItWorks />
        <Partners />
        <TeamBanner />
        <Customers />
        <News />
        <Verticals />
      </main>
    </>
  );
}
