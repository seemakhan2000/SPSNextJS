import ProductCta from "@/features/products/components/ProductCta";
import PresenterModal from "./PresenterModal";
import RoundtableForm from "./RoundtableForm";
import { roundtablePage } from "../data/roundtable";

function InfoCard({ icon, title, text, active = false, onLight = false }) {
  return (
    <div
      className={`py-5 px-5 sm:rounded-xxl rounded-lg flex items-center gap-4 h-full box-hover ${
        onLight ? "bg-white shadow-20" : "bg-light border border-primary/10"
      } ${active ? "active" : ""}`}
    >
      <div className="size-15 min-w-15 bg-white text-2xl rounded-full flex items-center justify-center text-primary duration-500 [.box-hover.active_&]:bg-primary [.box-hover.active_&]:text-white">
        <i className={icon}></i>
      </div>
      <div className="overflow-hidden">
        {title ? (
          <h3 className="text-lg text-secondary mb-1">{title}</h3>
        ) : null}
        <p className="text-2sm mb-0">{text}</p>
      </div>
    </div>
  );
}

function AboutRoundtable() {
  const { about } = roundtablePage;

  return (
    <section
      id="about"
      className="scroll-mt-20 xl:py-17.5 md:py-10 py-7.5 bg-light"
    >
      <div className="container">
        <div className="section-head style-1 mb-7.5 max-w-4xl">
          <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold capitalize mb-2.5">
            {about.title}
          </h2>
          <p className="sm:text-lg text-base font-light leading-[1.7] text-bodycolor text-justify mb-0">
            {about.text}
          </p>
        </div>
        <div className="row box-hover-wrapper">
          {about.facts.map((fact, index) => (
            <div key={fact.title} className="md:w-1/3 w-full mb-5">
              <InfoCard
                icon={fact.icon}
                title={fact.title}
                text={fact.text}
                active={index === 0}
                onLight
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyAttend() {
  const { whyAttend } = roundtablePage;

  return (
    <section
      id="why-attend"
      className="scroll-mt-20 xl:py-17.5 md:py-10 py-7.5 bg-white"
    >
      <div className="container">
        <div className="section-head style-1 mb-7.5 max-w-4xl">
          <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold capitalize mb-2.5">
            {whyAttend.title}
          </h2>
          <p className="sm:text-lg text-base font-light leading-[1.7] text-bodycolor mb-0">
            {whyAttend.text}
          </p>
        </div>
        <div className="row box-hover-wrapper">
          {whyAttend.items.map((item, index) => (
            <div key={item.title} className="md:w-1/2 w-full mb-5">
              <InfoCard
                icon={item.icon}
                title={item.title}
                text={item.text}
                active={index === 0}
              />
            </div>
          ))}
        </div>
        <p className="text-center text-secondary font-medium mb-0">
          {whyAttend.footer}
        </p>
      </div>
    </section>
  );
}

function Agenda() {
  const { agenda } = roundtablePage;

  return (
    <section
      id="agenda"
      className="scroll-mt-20 xl:py-17.5 md:py-10 py-7.5 bg-light"
    >
      <div className="container">
        <div className="section-head style-1 mb-7.5 text-center">
          <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold capitalize mb-0">
            {agenda.title}
          </h2>
        </div>
        <div className="row">
          {agenda.items.map((item, index) => (
            <div key={item.text} className="md:w-1/2 w-full mb-5">
              <div className="bg-white rounded-xxl py-5 px-5 flex items-center gap-4 h-full shadow-20">
                <span className="size-12 min-w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="size-12 min-w-12 rounded-full bg-light flex items-center justify-center text-secondary">
                  <i className={`${item.icon} text-xl`}></i>
                </div>
                <p className="text-secondary font-medium mb-0">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoShouldJoin() {
  const { participants, whoShouldJoin } = roundtablePage;

  return (
    <section
      id="who-should-join"
      className="scroll-mt-20 xl:py-17.5 md:py-10 py-7.5 bg-white"
    >
      <div className="container">
        <div className="section-head style-1 mb-7.5 max-w-4xl">
          <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold capitalize mb-2.5">
            {whoShouldJoin.title}
          </h2>
          <p className="sm:text-lg text-base font-light leading-[1.7] text-bodycolor text-justify mb-0">
            {participants.text}
          </p>
        </div>
        <div className="row box-hover-wrapper">
          {whoShouldJoin.items.map((item, index) => (
            <div
              key={item.title}
              className={`w-full mb-5 ${index < 3 ? "md:w-1/3" : "md:w-1/2"}`}
            >
              <InfoCard
                icon={item.icon}
                title={item.title}
                text={item.text}
                active={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Register() {
  const { about, cta } = roundtablePage;

  return (
    <section
      id="register"
      className="scroll-mt-20 xl:py-17.5 md:py-10 py-7.5 bg-light"
    >
      <div className="container">
        <div className="row items-center max-lg:flex-col-reverse">
          <div className="lg:w-1/2 w-full mb-7.5">
            <div className="lg:pr-10">
              <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold capitalize mb-4">
                {cta.title}
              </h2>
              <p className="sm:text-lg text-base font-light leading-[1.7] text-bodycolor mb-7.5">
                {cta.text}
              </p>
              <ul className="flex flex-col gap-4 mb-0">
                {about.facts.map((fact) => (
                  <li
                    key={fact.title}
                    className="flex items-center gap-4 bg-white rounded-xxl p-5 shadow-20"
                  >
                    <div className="size-12 min-w-12 rounded-full bg-light flex items-center justify-center text-primary">
                      <i className={`${fact.icon} text-xl`}></i>
                    </div>
                    <div>
                      <p className="font-semibold text-secondary mb-0.5">
                        {fact.title}
                      </p>
                      <p className="text-bodycolor mb-0">{fact.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 w-full mb-7.5">
            <div className="relative lg:pl-12.5">
              <div className="[writing-mode:tb] -rotate-180 rounded-tr-2xxl rounded-br-2xxl text-white text-center px-7.5 py-2.5 text-lg uppercase font-semibold bg-secondary w-12.5 flex items-center justify-center absolute left-0 top-11.25 max-lg:hidden">
                Register Now
              </div>
              <RoundtableForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RoundtableDetail() {
  const { cta } = roundtablePage;

  return (
    <>
      <AboutRoundtable />
      <WhyAttend />
      <Agenda />
      <WhoShouldJoin />
      <Register />
      <ProductCta
        title={cta.title}
        text={cta.text}
        href={cta.href}
        label={cta.label}
      />
      <PresenterModal />
    </>
  );
}
