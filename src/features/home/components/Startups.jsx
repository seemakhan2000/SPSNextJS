
import { startups } from "../data/startupsData";

export default function Startups() {
  return (
    <section>
      <div className="xl:py-17.5 md:py-10 py-7.5 bg-light">
        <div className="container">
          <div className="row box-hover-wrapper">
            {startups.map((startup) => (
              <div
                key={startup.name}
                className="xl:w-1/4 md:w-1/2 w-full mb-7.5"
              >
                <div
                 className="
  relative rounded-2xxl p-7.5 z-1 h-full flex flex-col
  bg-white hover:bg-primary
  duration-500
  icon-bx-wraper box-hover group
">
                  {/* Content */}
                  <div className="mb-auto">
                    {/* Icon */}
                    <div className="relative size-15 block mb-7.5">
                      <span
                        className="
                          group-hover:[--color-primary:#fff]
                          duration-500
                        "
                      >
                        <img
                          src={startup.image}
                          alt={`${startup.name} Icon`}
                          className="size-full object-contain"
                          width={60}
                          height={60}
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                    </div>

                    {/* Background Icon */}
                    <span
                      className="
                        absolute right-1.25 top-1.25 w-35
                        opacity-[0.025]
                        pointer-events-none
                      "
                    >
                      <img
                        src={startup.image}
                        alt={`${startup.name} Background`}
                        className="w-full h-full object-cover"
                        width={140}
                        height={140}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>

                    {/* Title + Description */}
                    <div className="overflow-hidden">
                      <h4
                        className="
                          text-xl font-bold mb-3
                          duration-500
                          group-hover:text-white
                        "
                      >
                        {startup.name}
                      </h4>

                      <p
                        className="
                          text-2sm font-light mb-0
                          duration-500
                          group-hover:text-white
                        "
                      >
                        {startup.description}
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div
                    className="
                      relative pt-5 mt-5 mr-12.5 duration-500

                      before:absolute
                      before:top-0
                      before:left-0
                      before:right-0
                      before:h-px

                      before:bg-linear-(--icon-bx-footer-gradient)
                      before:duration-500
                      before:bg-[length:10px_1px]
                      before:bg-repeat-x

                      group-hover:before:bg-linear-(--icon-bx-footer-white-gradient)
                    "
                  >
                    <span
                      className="
                        text-sm text-secondary
                        flex items-center gap-2
                        leading-[1.2]
                        duration-500
                        group-hover:text-white
                      "
                    >
                      <i
                        className="
                          fa fa-circle
                          text-tiny text-primary
                          duration-500
                          group-hover:text-secondary
                        "
                      ></i>

                      Read More
                    </span>

                    {/* Arrow Button */}
                    <a
                      href={startup.href}
                      aria-label={`Read more about ${startup.name}`}
                      className="
                        btn btn-primary btn-square
                        shadow-btn-squre
                        !absolute -right-20 -bottom-7.5
                        !text-xl !rounded-full
                      "
                    >
                      <i
                        className="
                          feather icon-arrow-up-right
                          group-hover:animate-toTopRight
                        "
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

