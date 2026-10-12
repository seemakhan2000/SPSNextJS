export default function PageBanner({
  title,
  description,
  crumbs = [],
  kicker = "OUR SOLUTIONS",
  image = "/assets/images/spsimg/banner/p1.webp",
  titleClassName = "2xxl:text-4xl xl:text-6xxl md:text-xxl text-[32px] font-bold mb-2.5 text-white capitalize",
  overlay = false,
  ctaLabel = "Request a Quote",
  ctaHref,
  children,
}) {
  const cellHeight = children
    ? "2xxl:min-h-112.5 lg:min-h-95 md:min-h-80 min-h-62.5"
    : "2xxl:h-112.5 lg:h-95 md:h-80 h-62.5";

  return (
    <div
      className={`2xxl:pt-1 2xxl:pb-46 lg:pt-21.5 lg:pb-21.5 sm:pt-20 sm:pb-20 pt-19.5 pb-19.5 bg-cover bg-center relative z-1 w-full before:absolute before:left-0 before:top-0 before:size-full ${
        overlay ? "before:bg-secondary before:opacity-70 bg-white" : ""
      }`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container table relative z-1">
        <div className={`${cellHeight} align-middle sm:py-22.5 py-10 text-center table-cell`}>
          <h1 className={titleClassName}>{title}</h1>
          {description ? (
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-6">
              {description}
            </p>
          ) : null}
          <nav aria-label="Breadcrumb">
            <ul className="inline-block">
              {crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1;
                return (
                  <li
                    key={`${crumb.label}-${index}`}
                    className={`inline-block text-base capitalize ${
                      isLast ? "page-banner-crumb-current" : "text-white font-medium"
                    } ${
                      index > 0
                        ? "pl-2 before:content-['\\f101'] before:float-left before:text-white before:font-bold before:font-['Font_Awesome_5_Free'] before:text-sm before:pr-3 before:top-0.5 before:relative"
                        : ""
                    }`}
                  >
                    {isLast || !crumb.href ? (
                      crumb.label
                    ) : (
                      <a href={crumb.href} className="text-white hover:text-white/80">
                        {crumb.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
          {children}
          <div className="absolute bottom-0 right-7.5 bg-white xl:p-3 p-2 !pb-0 rounded-t-5xl z-1 text-secondary before:size-10 before:absolute before:bg-no-repeat before:bg-center before:bg-size-full before:rotate-[270deg] before:-left-10 before:bottom-0 before:bg-rounded-corner after:size-10 after:absolute after:bg-no-repeat after:bg-center after:bg-size-full after:rotate-0 after:-right-10 after:left-auto after:bottom-0 after:bg-rounded-corner max-lg:hidden">
            {ctaHref ? (
              <a
                href={ctaHref}
                className="btn btn-lg btn-icon btn-primary !rounded-6xl !text-2xl mb-4 sm:mb-0 group"
              >
                <span className="size-13.75 inline-flex items-center justify-center text-secondary bg-white rounded-full -my-2.75 mr-3 -ml-4.5">
                  <i className="feather icon-phone-call group-hover:animate-dzRing"></i>
                </span>
                {ctaLabel}
              </a>
            ) : (
              <button
                type="button"
                data-open-appointment=""
                className="btn btn-lg btn-icon btn-primary !rounded-6xl !text-2xl mb-4 sm:mb-0 group"
              >
                <span className="size-13.75 inline-flex items-center justify-center text-secondary bg-white rounded-full -my-2.75 mr-3 -ml-4.5">
                  <i className="feather icon-phone-call group-hover:animate-dzRing"></i>
                </span>
                {ctaLabel}
              </button>
            )}
          </div>
        </div>
      </div>
      <span className="h-full text-center font-bold text-base [writing-mode:tb] -rotate-180 -translate-y-1/2 absolute 2xxl:left-12.5 left-7.5 top-1/2 text-white lg:block hidden">
        {kicker}
      </span>
      <ul className="-translate-y-1/2 absolute right-7.5 top-1/2 text-white lg:flex flex-col gap-5 hidden">
        <li>
          <a href="/coming-soon" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="/coming-soon" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="/coming-soon" aria-label="Twitter">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </li>
        <li>
          <a href="/coming-soon" aria-label="YouTube">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
