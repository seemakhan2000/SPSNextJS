import Partners from "@/features/home/components/Partners";
import ProductCta from "@/features/products/components/ProductCta";

import InternshipNav from "./InternshipNav";

import {
  careerFieldsPage,
  internshipPage,
} from "../data/internship";

import { INTERNSHIP_IMAGES } from "../constants/internship.constants";

function MediaCard({
  id,
  title,
  text,
  image,
  imageAlt,
  closingTitle,
  closing,
}) {
  return (
    <div id={id} className="w-full mb-7.5 scroll-mt-20">
      <div className="md:flex h-full relative z-1 duration-200 hover:-translate-y-2 group">
        <div className="rounded-3xl 2xxl:min-w-105 lg:min-w-87.5 md:min-w-70 min-w-full 2xxl:w-105 lg:w-87.5 md:w-70 w-full 2xxl:min-h-90 lg:min-h-70 md:min-h-62.5 sm:min-h-80 min-h-62.5 overflow-hidden relative before:absolute before:top-0 before:-left-[75%] before:z-0 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
          <img
            src={image}
            alt={imageAlt}
            width="420"
            height="360"
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        </div>

        <div className="relative p-4 sm:p-5 self-center shadow-lg border border-gray-100 rounded-xl md:-ml-15 md:mr-0 sm:mx-5 bg-white lg:my-6 md:my-5 sm:-mt-5 -mt-4 w-full">
          <h3 className="text-lg font-semibold mb-1">
            {title}
          </h3>

          <p className="text-secondary font-normal mb-0">
            {text}
          </p>

          {closingTitle ? (
            <p className="text-md font-semibold mb-1 mt-3">
              {closingTitle}
            </p>
          ) : null}

          {closing ? (
            <p className="mb-0">
              {closing}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function FunctionBanner({ item }) {
  return (
    <section
      id={item.id}
      className="relative lg:pt-20 lg:pb-10 pt-12.5 pb-5 bg-secondary min-h-[500px] scroll-mt-20"
    >
      <div className="absolute inset-0">
        <img
          src={INTERNSHIP_IMAGES.background.function}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative container mx-auto text-center z-10">
        <h2 className="text-white text-3xl lg:text-3xl font-semibold mb-2">
          {item.title}
        </h2>

        <p className="text-white text-lg lg:text-xl font-normal mb-6">
          {item.subtitle}
        </p>

        {item.buttons.map((button) => (
          <a
            key={button.label}
            href={button.href}
            className={button.className}
          >
            {button.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function CareerFieldsResume() {
  const { resume } = careerFieldsPage;

  return (
    <section
      id="resume"
      className="scroll-mt-20 xl:py-17.5 md:py-10 py-7.5 bg-light"
    >
      <div className="container">
        <div className="text-start max-w-250 mx-auto">
          <MediaCard
            title={resume.title}
            text={resume.text}
            image={resume.image}
            imageAlt={resume.imageAlt}
          />
        </div>
      </div>
    </section>
  );
}

function CareerFieldsAreas() {
  const { areas } = internshipPage;

  return (
    <section
      id="areas-of-internship"
      className="scroll-mt-20 xl:py-17.5 md:py-5 py-7.5 bg-light"
    >
      <div className="container">
        <div className="sm:mb-7.5 mb-5 text-center">
          <h2 className="text-2xl inline-block mb-0 relative after:absolute after:top-1/2 after:-left-40 after:w-37.5 after:h-px after:bg-black after:opacity-15 before:absolute before:top-1/2 before:-right-40 before:w-37.5 before:h-px before:bg-black before:opacity-15">
            {areas.title}
          </h2>

          <p className="mt-2">
            {areas.text}
          </p>
        </div>

        <div className="row">
          {areas.items.map((area) => (
            <div
              key={area.title}
              id={area.id}
              className="xl:w-1/3 md:w-1/2 w-full scroll-mt-20"
            >
              <div className="relative z-1 lg:p-7.5 p-5 h-auto duration-200 bg-white rounded-3xl group transition-all">
                <div className="rounded-xxl mb-4 sm:h-62.5 h-50 relative overflow-hidden before:absolute before:top-0 before:-left-[75%] before:z-0 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
                  <img
                    src={area.image}
                    alt={area.title}
                    width="480"
                    height="250"
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                </div>

                <div className="relative">
                  <div className="mb-1.5">
                    <ul className="flex flex-wrap items-center">
                      <li className="bg-[rgba(var(--primary-rgb),0.1)] text-primary rounded-xxl font-medium text-sm py-2 pr-5 pl-8 leading-[1.4] relative inline-flex items-center after:absolute after:size-2.5 after:rounded-full after:bg-primary after:left-3.5 after:top-1/2 after:-translate-y-1/2">
                        {area.title}
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg leading-snug m-0">
                    {area.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-2 text-center">
          {areas.footer}
        </p>
      </div>
    </section>
  );
}

function CareerFieldsRoles() {
  return (
    <section className="xl:py-17.5 md:py-10 py-7.5 bg-light">
      <div className="container">
        <div className="mb-5 text-start max-w-250 mx-auto">
          {careerFieldsPage.roles.map((role) => (
            <MediaCard
              key={role.id}
              {...role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CareerFieldsDetail() {
  const [operations, sales] =
    careerFieldsPage.functions;

  const { cta } = careerFieldsPage;

  return (
    <>
      <InternshipNav activeId="career-fields" />

      <CareerFieldsResume />

      <Partners />

      <CareerFieldsAreas />

      <FunctionBanner item={operations} />

      <CareerFieldsRoles />

      <FunctionBanner item={sales} />

      <ProductCta
        title={cta.title}
        text={cta.text}
        href={cta.href}
        label={cta.label}
      />
    </>
  );
}