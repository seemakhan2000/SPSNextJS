import Link from "next/link";
import { faClass, productPath } from "../data/products";

export default function CategoryProductCard({
  product,
  categorySlug,
  href,
  exploreLabel = "Explore Product",
  columnClassName = "xl:w-1/4 md:w-1/2 w-full mb-7.5",
}) {
  return (
    <div className={columnClassName}>
      <div className="group relative rounded-2xl shadow min-h-50 h-full overflow-hidden flex flex-col bg-light text-dark transition duration-500 hover:bg-secondary">
        <div className="size-17.5 absolute right-0 top-0 rounded-2xl bg-gray-100 flex items-center justify-center transition duration-500 group-hover:bg-primary">
          <span className="icon-cell text-primary text-2xl transition duration-500 group-hover:text-white">
            <i className={faClass(product.icon)}></i>
          </span>
        </div>
        <div className="relative z-1 sm:p-7.5 p-6.25">
          <h3 className="lg:text-xl text-lg font-semibold mb-4 transition duration-500 group-hover:text-white">
            {product.name}
          </h3>
          <p className="text-2sm mb-0 transition duration-500 group-hover:text-white">
            {product.summary}
          </p>
        </div>
        <div className="py-4 text-center mt-auto">
          <Link
            href={href || productPath(categorySlug, product.slug)}
            className="text-secondary transition duration-500 group-hover:text-white"
          >
            {exploreLabel} <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
