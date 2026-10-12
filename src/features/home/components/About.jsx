import { homeAbout, homeAboutPractices } from "../data/homeData";

import {
  HOME_ABOUT_IMAGE,
  HOME_ABOUT_IMAGE_MOBILE,
  HOME_ABOUT_OVERLAP_IMAGE,
  HOME_ABOUT_OVERLAP_IMAGE_MOBILE,
  HOME_ABOUT_PATH,
} from "../constants/about.constants";

export default function About() {
  return (
    <section className="sps-about 2xl:pt-25 2xl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 sm:pb-5 pt-10 pb-5 bg-light">
      <div className="container">
        <div className="row items-center">

          <div className="lg:w-1/2 w-full mb-7.5">
            <div className="sps-about__media">

              <img
                src={HOME_ABOUT_IMAGE_MOBILE}
                srcSet={`${HOME_ABOUT_IMAGE_MOBILE} 360w, ${HOME_ABOUT_IMAGE} 530w`}
                sizes="(max-width: 1023px) 90vw, 530px"
                alt="Digital transformation and technology illustration"
                loading="lazy"
                decoding="async"
                width="530"
                height="650"
                className="sps-about__media-main"
              />

              <img
                src={HOME_ABOUT_OVERLAP_IMAGE_MOBILE}
                srcSet={`${HOME_ABOUT_OVERLAP_IMAGE_MOBILE} 360w, ${HOME_ABOUT_OVERLAP_IMAGE} 720w`}
                sizes="(max-width: 1023px) 220px, 220px"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                width="220"
                height="260"
                className="sps-about__media-overlap"
              />

              <div className="sps-about__badge">
                <strong>{homeAbout.years}</strong>

                <span>
                  Years of
                  <br />
                  Excellence
                </span>
              </div>

            </div>
          </div>

          <div className="lg:w-1/2 w-full mb-7.5">
            <div className="sps-about__content">

              <div className="sps-about__eyebrow">
                <i
                  className="fa-solid fa-minus"
                  aria-hidden="true"
                />
                {homeAbout.eyebrow}
              </div>

              <h2 className="2xxl:text-4xxl lg:text-[38px] sm:text-[32px] text-2xxl capitalize">
                {homeAbout.title}
              </h2>

              <p className="xl:text-lg text-base font-light">
                {homeAbout.description}
              </p>

              <div className="sps-about__practices">
                {homeAboutPractices.map((item) => (
                  <div
                    className="sps-about__practice"
                    key={item.title}
                  >
                    <span
                      className="sps-about__practice-icon"
                      aria-hidden="true"
                    >
                      <i className={item.icon} />
                    </span>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={HOME_ABOUT_PATH}
                className="btn btn-primary btn-rounded"
              >
                Read More
                <i className="feather icon-arrow-right ms-2" />
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}