import { SITE_CONTACT } from "@/lib/site";

import { contactPage } from "../data/contactData";

import ContactForm from "./ContactForm";

function ContactCard({ card, active }) {
  const body = card.href ? (
    <a
      href={card.href}
      className="text-2sm mb-0 text-inherit hover:text-primary"
      target={card.href.startsWith("http") ? "_blank" : undefined}
      rel={
        card.href.startsWith("http")
          ? "noopener noreferrer"
          : undefined
      }
    >
      {card.text}
    </a>
  ) : (
    <p className="text-2sm mb-0">{card.text}</p>
  );

  return (
    <div className="md:w-1/2 w-full mb-5">
      <div
        className={`bg-light py-5 px-6.25 sm:rounded-xxl rounded-lg flex items-center gap-3.75 h-full min-h-30 box-hover ${
          active ? "active" : ""
        }`}
      >
        {card.icon ? (
          <div className="size-15 min-w-15 bg-white text-2xl rounded-full flex items-center justify-center text-primary duration-500 [.box-hover.active_&]:bg-primary [.box-hover.active_&]:text-white">
            <span>
              <i className={card.icon}></i>
            </span>
          </div>
        ) : null}

        <div className="overflow-hidden">
          <h3 className="text-lg text-secondary mb-1.25">
            {card.title}
          </h3>

          {body}
        </div>
      </div>
    </div>
  );
}

export default function ContactDetail() {
  const {
    intro,
    formTitle,
    formSubtitle,
    cards,
  } = contactPage;

  return (
    <section className="xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5">
      <div className="container">
        <div className="row g-xl-4 items-center">

          <div className="xl:w-7/12 pe-xl-4 mb-2.5">
            <div className="sm:mb-7.5 mb-5">
              <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold capitalize">
                Connect with <br />
                Software Productivity Strategists, Inc.
              </h2>

              <p>
                {intro}{" "}

                <a
                  href={`mailto:${SITE_CONTACT.internshipEmail}`}
                  className="text-primary hover:text-secondary active:text-yellow-500 underline transition-colors duration-200"
                >
                  {SITE_CONTACT.internshipEmail}
                </a>{" "}

                or{" "}

                <a
                  href={`mailto:${SITE_CONTACT.internQueriesEmail}`}
                  className="text-primary hover:text-secondary active:text-yellow-500 underline transition-colors duration-200"
                >
                  {SITE_CONTACT.internQueriesEmail}
                </a>
              </p>
            </div>

            <div className="row box-hover-wrapper">
              {cards.map((card, index) => (
                <ContactCard
                  key={`${card.title}-${index}`}
                  card={card}
                  active={index === 0}
                />
              ))}
            </div>
          </div>

          <div className="xl:w-5/12 mb-7.5">
            <ContactForm
              title={formTitle}
              subtitle={formSubtitle}
            />
          </div>

        </div>
      </div>
    </section>
  );
}