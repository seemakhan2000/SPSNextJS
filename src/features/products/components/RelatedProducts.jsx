import Link from "next/link";
import { productPath } from "../data/products";

export default function RelatedProducts({ products, categorySlug }) {
  if (!products.length) return null;

  return (
    <section className="2xxl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10 2xxl:pb-17.5 md:pb-10 pb-5">
      <div className="container">
        <div className="section-head style-3 row items-end">
          <div className="mb-7.5">
            <h2 className="2xxl:text-5xxl xl:text-xxl lg:text-4xl sm:text-3xxl text-2xxl font-bold">
              Related Products
            </h2>
            <p className="xl:text-lg sm:text-base text-sm font-light mb-0">
              Explore more solutions in this category.
            </p>
          </div>
        </div>
        <div className="row box-hover-wrapper">
          {products.map((item) => (
            <div key={item.slug} className="xl:w-1/3 md:w-1/2 mb-7.5">
              <article className="group relative rounded-2xl shadow min-h-50 h-full overflow-hidden flex flex-col bg-light text-dark transition duration-500 hover:bg-secondary">
                <div className="relative z-1 sm:p-7.5 p-6.25">
                  <h3 className="lg:text-xl text-lg font-semibold mb-4 transition duration-500 group-hover:text-white">
                    {item.name}
                  </h3>
                  <p className="text-2sm mb-0 transition duration-500 group-hover:text-white">
                    {item.summary}
                  </p>
                </div>
                <div className="py-4 text-center mt-auto">
                  <Link
                    href={productPath(categorySlug, item.slug)}
                    className="text-secondary transition duration-500 group-hover:text-white"
                  >
                    Explore Product <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
