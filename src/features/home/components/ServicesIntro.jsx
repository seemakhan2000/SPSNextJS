import { STARTUPS_BACKGROUND } from "../data/startupsIntro.constants";
import { startupsIntro } from "../data/startupsIntroData";

export default function StartupsIntro() {
  return (
    <section className="relative lg:pt-20 lg:pb-10 pt-12.5 pb-5 bg-secondary min-h-[500px]">
      <div className="absolute inset-0">
        <img
          src={STARTUPS_BACKGROUND}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="relative container mx-auto text-center z-10">
        <h3 className="text-white text-3xl font-semibold mb-2">
          {startupsIntro.title}
        </h3>

        <p className="text-white text-lg lg:text-xl font-normal">
          {startupsIntro.subtitle}
        </p>

        <p className="text-white text-base lg:text-lg mb-10">
          {startupsIntro.description}
        </p>
      </div>
    </section>
  );
}