import Link from "next/link";
import { categoryPath } from "@/features/products/data/products";

export default function ProductSidebar({ categories, activeSlug }) {
  return (
    <aside className="xl:pr-11.25 pb-px my-sticky z-1 top-30">
      <div className="py-7.5 px-5 rounded-2xl bg-secondary mb-6">
        <div className="px-5 mb-5">
          <h2 className="text-xl text-white mb-0">All Products</h2>
        </div>
        <ul>
          {categories.map((item) => {
            const active = item.slug === activeSlug;
            return (
              <li key={item.slug} className={active ? "active" : ""}>
                <Link
                  href={categoryPath(item.slug)}
                  className={`text-white block py-3 px-5 font-medium hover:bg-primary ${
                    active ? "bg-primary" : ""
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.shortName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
