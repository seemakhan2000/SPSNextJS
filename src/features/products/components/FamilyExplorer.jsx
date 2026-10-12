import Link from "next/link";
import { categoryPath, getCategory } from "../data/products";

function ArrowIcon({ clipId }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <g clipPath={`url(#${clipId})`}>
        <path
          className="[.tab-title.active_&]:fill-white"
          d="M21.748 10.3917C21.7477 10.3914 21.7475 10.3911 21.7472 10.3909L17.2568 5.92212C16.9204 5.58735 16.3763 5.5886 16.0414 5.92504C15.7066 6.26145 15.7079 6.80556 16.0443 7.14037L19.0591 10.1406H0.859375C0.384742 10.1406 0 10.5254 0 11C0 11.4746 0.384742 11.8594 0.859375 11.8594H19.0591L16.0443 14.8596C15.7079 15.1944 15.7066 15.7385 16.0414 16.0749C16.3763 16.4114 16.9205 16.4126 17.2568 16.0779L21.7472 11.6091C21.7475 11.6089 21.7477 11.6086 21.748 11.6083C22.0846 11.2724 22.0835 10.7265 21.748 10.3917Z"
          fill="#676767"
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="22" height="22" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

function FamilyPanel({ family, getCategoryFn, categoryPathFn }) {
  return (
    <div className="rounded-2xl opacity-100 duration-500 h-full overflow-hidden z-1 flex bg-white w-[inherit] flex-1">
      <div className="flex 2xl:gap-7.5 md:gap-5 gap-2.5 2xl:p-7.5 p-5 2xl:min-w-187.5 lg:min-w-150 min-w-full max-md:flex-col">
        <div className="flex xl:w-75 xl:h-110 xl:min-w-75 md:w-62.5 md:min-w-62.5 md:h-100 sm:h-87.5 h-70 w-full min-w-full relative overflow-hidden">
          <img
            src={family.image}
            alt={family.name}
            width="300"
            height="440"
            loading="lazy"
            decoding="async"
            className="size-full object-cover rounded-xxl"
          />
          <button
            type="button"
            data-open-appointment=""
            className="btn btn-white !absolute 2xl:bottom-5 bottom-2.5 2xl:left-5 left-2.5 2xl:right-5 right-2.5 rounded-lg font-medium justify-center text-primary hover:!bg-primary hover:!border-primary hover:!text-white"
          >
            <i className="feather icon-calendar mr-1.25"></i>
            Book An Appointment
          </button>
        </div>
        <div className="relative flex flex-col py-3.75 max-md:!pb-0">
          <div>
            <h3 className="xl:text-2xl text-xl">{family.name}</h3>
            <p className="lg:mb-7.5 mb-3.75 lg:text-lg text-base">{family.description}</p>
            <ul className="font-medium mb-7.5">
              {family.categories.map((slug) => {
                const category = getCategoryFn(slug);
                if (!category) return null;
                return (
                  <li
                    key={slug}
                    className="group w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:top-2 before:size-5 before:bg-circle-check before:bg-contain transition-all duration-300 hover:text-primary hover:translate-x-1 before:transition-all before:duration-300 group-hover:before:scale-110"
                  >
                    <Link href={categoryPathFn(slug)} className="block w-full">
                      {category.shortName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="size-15 min-w-15">
                <img
                  src={family.image}
                  alt=""
                  width="60"
                  height="60"
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="text-lg mb-0">{family.team.name}</p>
                <p className="text-sm font-medium text-primary mb-0">{family.team.role}</p>
              </div>
            </div>
            <Link
              href={categoryPathFn(family.categories[0])}
              aria-label={`View ${family.name}`}
              className="btn btn-square btn-primary !rounded-full 2xl:!size-15 2xl:!min-w-15 !size-11.25 !min-w-11.25 text-2xl"
            >
              <i className="feather icon-arrow-up-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FamilyExplorer({
  families,
  getCategoryFn = getCategory,
  categoryPathFn = categoryPath,
  label = "Our Products",
  heading = "Powering Businesses with AI, Cloud & Security Solutions",
  viewAllHref = "/products#product-families",
  viewAllLabel = "View All Products",
  sectionId = "product-families",
  navLabel = "Product families",
}) {
  if (!families?.length) return null;

  return (
    <section id={sectionId} className="2xxl:py-25 xl:py-17.5 md:py-12.5 sm:py-10 py-7.5 bg-light">
      <div className="container">
        <div className="row custom-tab">
          <div className="xl:w-5/12 lg:w-1/3 w-full lg:mb-0 mb-6">
            <div className="sm:mb-7.5 mb-5">
              <div className="text-primary font-semibold leading-5 uppercase text-lg inline-flex gap-1.25">
                {label}
              </div>
              <h2 className="2xxl:text-xxl lg:text-[38px] sm:text-[32px] text-2xxl capitalize">
                {heading}
              </h2>
            </div>
            <nav aria-label={navLabel}>
              <div className="lg:pe-12 pe-0 lg:mb-6 mb-4" role="tablist">
                {families.map((family, index) => (
                  <button
                    key={family.slug}
                    type="button"
                    className={`tab-title text-heading xl:text-xl text-base bg-white w-full text-left mb-2 font-normal rounded-10xl xl:py-5 xl:px-7.5 py-3 px-5 leading-none flex justify-between items-center duration-500 [.tab-title.active]:bg-primary [.tab-title.active]:text-white ${
                      index === 0 ? "active" : ""
                    }`}
                  >
                    {family.name}
                    <ArrowIcon clipId={`family-arrow-${family.slug}`} />
                  </button>
                ))}
              </div>
            </nav>
            <Link href={viewAllHref} className="btn-icon text-primary">
              {viewAllLabel}
              <i className="feather icon-arrow-right ms-2"></i>
            </Link>
          </div>
          <div className="xl:w-7/12 lg:w-4/6 w-full">
            <div className="tab-content-area">
              {families.map((family, index) => (
                <div
                  key={family.slug}
                  className={`tab-content ${index === 0 ? "active" : ""}`}
                >
                  <FamilyPanel
                    family={family}
                    getCategoryFn={getCategoryFn}
                    categoryPathFn={categoryPathFn}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
