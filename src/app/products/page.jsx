import PageBanner from "@/features/products/components/PageBanner";
import FamilyExplorer from "@/features/products/components/FamilyExplorer";
import JsonLd from "@/features/products/seo/JsonLd";
import {
  breadcrumbJsonLd,
  listingMetadata,
  productFamilies,
  productsJsonLd,
} from "@/features/products/data/products";

export const metadata = listingMetadata();

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={[
          productsJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ]),
        ]}
      />
      <main className="page-content">
        <PageBanner
          title="Our Products"
          description="Discover our complete range of innovative, secure, and scalable technology solutions designed to support your business growth."
          kicker="OUR SOLUTIONS"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Products" },
          ]}
        />
        <FamilyExplorer families={productFamilies} />
      </main>
    </>
  );
}
