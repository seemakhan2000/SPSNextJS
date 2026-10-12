import Link from "next/link";
import { getAllCategories } from "../data/products";
import ProductAccordion from "@/components/products/ProductAccordion";
import ProductSidebar from "@/components/products/ProductSidebar";

export default function ProductPortfolio({ faqs, activeSlug }) {
  const categories = getAllCategories();

  return (
    <section
      id="product-portfolio"
      className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 product-single"
    >
      <div className="container">
        <div className="row">
          <div className="lg:w-2/3 w-full lg:order-1">
            <div className="relative overflow-hidden xl:h-125 sm:h-100 h-62.5 rounded-2xl md:mb-11.25 sm:mb-6.25 mb-3.75">
              <img
                loading="lazy"
                decoding="async"
                src="/assets/images/spsimg/services/867.webp"
                alt="SPS product portfolio"
                width="700"
                height="500"
                className="size-full object-cover"
              />
            </div>
            <div className="sm:mb-8.75 mb-5">
              <h2 className="md:text-2xxl text-xl sm:mb-5 mb-3 capitalize">
                Product Portfolio
              </h2>
              <p className="md:text-lg text-base font-light">
                We offer a wide range of products tailored to digital
                transformation, automation, and security.
              </p>
              <p className="md:text-lg text-base font-light">
                Our products empower organizations to streamline operations,
                leverage data & AI, enhance security, and achieve sustainability
                goals.
              </p>
            </div>
            <div className="sm:mb-8.75 mb-5">
              <h3 className="md:text-2xxl text-xl sm:mb-5 mb-3 capitalize">
                Product Categories
              </h3>
              <ul className="flex flex-wrap text-secondary mb-7.5">
                {categories.map((item) => (
                  <li
                    key={item.slug}
                    className="sm:w-1/2 w-full relative p-1.25 ps-7.5 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\\f109'] before:font-['flaticon'] before:text-primary before:top-2"
                  >
                    <Link href={`/products/${item.slug}`} className="hover:text-primary">
                      {item.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {categories.map((item) => (
              <div key={item.slug} className="sm:mb-8.75 mb-5">
                <h2 className="md:text-2xxl text-xl sm:mb-5 mb-3 capitalize">
                  <Link href={`/products/${item.slug}`} className="hover:text-primary">
                    {item.name}
                  </Link>
                </h2>
                <p className="md:text-lg text-base font-light">{item.description}</p>
              </div>
            ))}
            <ProductAccordion items={faqs} />
          </div>
          <div className="lg:w-1/3 w-full mb-7.5">
            <ProductSidebar categories={categories} activeSlug={activeSlug} />
          </div>
        </div>
      </div>
    </section>
  );
}
