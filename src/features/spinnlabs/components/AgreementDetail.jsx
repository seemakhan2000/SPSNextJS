import { agreementPage } from "../data/spinnlabs";

export default function AgreementDetail() {
  const { login, heading, text } = agreementPage;

  return (
    <section className="2xxl:pt-17.5 2xxl:pb-12.5 md:pt-10 md:pb-7.5 sm:pt-10 pt-7.5 pb-5 bg-light">
      <div className="container">
        <div className="rounded-2xl bg-white shadow-20 p-8.75">
          <div className="flex justify-end">
            <a href={login.href} className="btn btn-lg btn-icon btn-primary group inline-flex items-center leading-none mb-0">
              {login.label}
              <span className="size-11 min-w-11 bg-white text-primary rounded-2lg inline-flex items-center justify-center -my-2.75 -mr-4.5 ml-3 duration-500 group-hover:bg-secondary group-hover:text-white">
                <i className="feather icon-arrow-right"></i>
              </span>
            </a>
          </div>
          <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold leading-[1.3] mb-4">
            {heading}
          </h2>
          <p className="sm:text-lg text-base font-light leading-[1.7] text-bodycolor mb-0">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
