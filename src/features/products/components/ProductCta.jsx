import Link from "next/link";
import { SITE_CONTACT } from "@/lib/site";
import { PRODUCT_PHONE_HREF } from "../data/products";

export default function ProductCta({
  title = "Ready to see these products in action?",
  text = "Talk with SPS about the right mix of identity, automation, security, and cloud products for your organization.",
  href,
  label = "Request a Quote",
}) {
  const isInternal = href && href.startsWith("/");
  const ctaClassName =
    "btn btn-lg btn-primary btn-rounded btn-hover2 btn-shadow";

  return (
    <section className="py-10 sm:py-12.5 md:py-17.5 2xxl:py-25">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl text-white text-center bg-cover bg-center bg-no-repeat bg-[url(/assets/images/background/bg3.webp)] before:absolute before:inset-0 before:bg-secondary/90">
          <div className="relative z-1 flex flex-col items-center justify-center py-12.5 px-7.5 sm:py-16 sm:px-12.5">
            {title ? (
              <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold capitalize !mt-0 mb-4 text-white">
                {title}
              </h2>
            ) : null}
            {text ? (
              <p className="xl:text-lg text-base font-light max-w-3xl mx-auto mb-8 text-white/80">
                {text}
              </p>
            ) : null}
            <div className="flex flex-wrap justify-center gap-3">
              {href ? (
                isInternal ? (
                  <Link href={href} className={ctaClassName}>
                    {label}
                  </Link>
                ) : (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ctaClassName}
                  >
                    {label}
                  </a>
                )
              ) : (
                <button
                  type="button"
                  data-open-appointment=""
                  className={ctaClassName}
                >
                  {label}
                </button>
              )}
              <a
                href={PRODUCT_PHONE_HREF}
                className="btn btn-lg btn-white btn-rounded"
              >
                Call {SITE_CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
