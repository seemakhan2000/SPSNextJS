import PageBanner from "@/features/products/components/PageBanner";
import { startupsPage } from "../data/spinnlabs";

function StartupsBannerSteps({ activeHref }) {
  return (
    <div className="relative flex flex-wrap justify-center gap-x-6 gap-y-8 w-full mx-auto mt-7.5">
      <span
        className="hidden xl:block absolute left-20 right-20 top-15 h-px bg-white/30"
        aria-hidden="true"
      />
      {startupsPage.bannerSteps.map((step) => {
        const isActive = Boolean(activeHref) && step.href === activeHref;
        return (
          <a
            key={step.label}
            href={step.href}
            className="group relative z-1 flex flex-col items-center"
            aria-current={isActive ? "page" : undefined}
          >
            <span
              className={`text-sm font-semibold mb-3 duration-500 group-hover:text-primary ${
                isActive ? "text-primary" : "text-white"
              }`}
            >
              {step.label}
            </span>
            <div
              className={`size-15 flex items-center text-2xl justify-center rounded-full duration-500 relative before:absolute before:top-0 before:left-0 before:size-full before:bg-white before:scale-0 before:opacity-10 before:rounded-full group-hover:before:scale-[1.3] after:absolute after:top-0 after:left-0 after:size-full after:bg-white after:scale-0 after:opacity-5 after:rounded-full group-hover:after:scale-[1.6] ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-white text-primary group-hover:bg-primary group-hover:text-white"
              }`}
            >
              <i className={`${step.icon} relative z-1`}></i>
              <span className="absolute -top-1 -right-1 size-6 rounded-full bg-secondary text-white text-tiny font-bold flex items-center justify-center z-1">
                {step.step}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default function StartupsBanner({ activeHref, ...bannerProps }) {
  return (
    <PageBanner overlay {...bannerProps}>
      <StartupsBannerSteps activeHref={activeHref} />
    </PageBanner>
  );
}
