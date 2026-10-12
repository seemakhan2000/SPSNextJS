import Link from "next/link";
import { FILTERS, featuredSection } from "../data/productData";

export default function FeaturedFilter({ items }) {
  return (
    <section className="2xl:pt-20 2xl:pb-20 md:pt-17.5 md:pb-17.5 sm:pt-12.5 sm:pb-12.5 pt-10 pb-10 bg-white">
      <div className="container">
        <div className="sm:mb-7.5 mb-5 text-center">
         <h2 className="2xxl:text-5xxl xl:text-xxl lg:text-4xl sm:text-3xxl text-2xxl font-bold capitalize">
  {featuredSection.title}
</h2>

<p className="xl:text-lg sm:text-base text-sm font-light max-w-212.5 mx-auto">
  {featuredSection.description}
</p>
        </div>
        <div className="site-filters mb-10">
          <ul className="filters justify-center flex lg:gap-3.75 gap-2.5 flex-wrap">
            {FILTERS.map((item, index) => (
              <li
                key={item.id}
                data-filter={item.filter}
                className={`inline-block ${index === 0 ? "active" : ""}`}
              >
                <input type="radio" className="hidden" defaultChecked={index === 0} />
                <a
                  href="#product-featured-grid"
                  className="btn lg:!py-2.5 !py-2 lg:!px-6.25 !px-5 !rounded-6xl bg-transparent border !border-black/10 lg:!text-lg !text-sm leading-[1.4] font-normal [li.active_&]:bg-secondary [li.active_&]:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul id="product-featured-grid" className="row" data-product-filter-grid="">
          {items.map((item) => (
            <li
              key={item.slug}
              className={`card-container xl:w-1/4 lg:w-1/3 sm:w-1/2 w-full mb-7.5 ${item.filterClasses || ""}`}
            >
              <div className="shadow-7 rounded-xxl group h-full bg-white">
                <div className="relative overflow-hidden rounded-t-xxl">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    width="480"
                    height="320"
                    loading="lazy"
                    decoding="async"
                    className="w-full"
                  />
                  <div className="absolute -bottom-20 left-0 right-0 text-center duration-200 group-hover:bottom-5">
                    <Link
                      href={item.href}
                      className="btn p-2.5 pl-5 pr-5 bg-secondary border-secondary text-white"
                    >
                      <i className="fa-solid fa-eye md:!hidden block"></i>
                      <span className="md:block hidden">Learn More</span>
                    </Link>
                  </div>
                </div>
                <div className="bg-white py-5 px-6.25 border-t border-black/10 rounded-b-xxl">
                  <h3 className="text-xl mb-1.25">
                    <Link href={item.href}>{item.name}</Link>
                  </h3>
                  <p className="text-sm font-light mb-2">{item.summary}</p>
                  <ul className="text-sm space-y-1">
                    {item.items.map((line) => (
                      <li key={line}>• {line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
