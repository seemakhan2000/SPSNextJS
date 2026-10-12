import { verticalFamilies } from "@/features/verticals/data/verticals";
import { INTERNSHIP_PATH } from "@/features/internship/constants/internship.constants";
import { PAST_EVENTS_PATH } from "@/features/past-events/constants/past-events.constants";
import { ROUNDTABLE_PATH } from "@/features/roundtables/constants/roundtable.constants";

export default function Footer() {
  return (
    <>
      {/* Footer */}

      <footer className="relative z-1 overflow-hidden bg-white
          before:absolute before:left-0 before:top-0 before:size-full
          before:bg-light before:opacity-90" style={{backgroundImage: "url('/assets/images/spsimg/setf.webp')"}}>
          <div className="footer-head">
              <div className="container relative z-1">
                  <div className="xl:pt-20 pt-12.5 pb-6.25 border-b border-black/10">
                      <div className="row g-3 items-center">
                          <div className="xl:w-1/4 md:w-full sm:w-1/2 w-full">
                              <h2 className="text-2xl">Get in Touch with us</h2>
                              <p className="text">Software Productivity Strategist</p>
                          </div>
                          <div className="xl:w-1/4 md:w-1/3 sm:w-1/2 w-full">
                              <div className="relative flex gap-3.75 text-left">
                                  <div
                                      className="lg:size-15 lg:min-w-15 size-12.5 min-w-12.5 flex items-center lg:text-2xl text-lg justify-center rounded-full text-white bg-secondary">
                                      <span className="icon-cell">
                                          <i className="feather icon-phone"></i>
                                      </span>
                                  </div>
                                  <div className="overflow-hidden">
                                      <h3 className="sm:text-lg text-base font-medium mb-1.25">
                                          Call Us
                                      </h3>
                                      <p className="text-2sm font-light">
                                          <a href="tel:+11234567890" className="text-body">+301-337-2290</a>
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="xl:w-1/4 md:w-1/3 sm:w-1/2 w-full">
                              <div className="relative flex gap-3.75 text-left">
                                  <div
                                      className="lg:size-15 lg:min-w-15 size-12.5 min-w-12.5 flex items-center lg:text-2xl text-lg justify-center rounded-full text-white bg-secondary">
                                      <span className="icon-cell">
                                          <i className="feather icon-mail"></i>
                                      </span>
                                  </div>
                                  <div className="overflow-hidden">
                                      <h3 className="sm:text-lg text-base font-medium mb-1.25">
                                          Send us a Mail
                                      </h3>
                                      <p className="text-2sm font-light">
                                          <a href="mailto:info@example.com" className="text-body">support@spsnet.com</a>
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="xl:w-1/4 md:w-1/3 sm:w-1/2 w-full">
                              <div className="relative flex gap-3.75 text-left">
                                  <div
                                      className="lg:size-15 lg:min-w-15 size-12.5 min-w-12.5 flex items-center lg:text-2xl text-lg justify-center rounded-full text-white bg-secondary">
                                      <span className="icon-cell">
                                          <i className="feather icon-clock"></i>
                                      </span>
                                  </div>
                                  <div className="overflow-hidden">
                                      <h3 className="sm:text-lg text-base font-medium mb-1.25">
                                          Opening Time
                                      </h3>
                                      <p className="text-2sm font-light">
                                          Mon -Sat: 7:00 - 17:00
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Footer Top */}
          <div className="pt-12.5">
              <div className="container relative z-1">
                  <div className="row">
                      <div className="xl:w-1/4 sm:w-full">
                          <div className="mb-7.5 me-2">
                              <div className="mb-6 sps-footer-logo">
                                  <a href="/coming-soon"><img
                                          src="/assets/images/logo-400.webp"
                                          srcSet="/assets/images/logo-250.webp 250w, /assets/images/logo-400.webp 400w"
                                          sizes="320px"
                                          alt="Software Productivity Strategists, Inc." width="320" height="58"
                                          className="sps-footer-logo__img" loading="lazy" /></a>
                              </div>
                              <p className="text-2sm/[1.7] mb-5">
                                  <span className="text-primary"></span> Whether you are an entrepreneur looking for
                                  an engineering team or an enterprise pursuing
                                  digital transformation we can help you bring your vision to reality.
                              </p>
                          </div>
                      </div>
                      <div className="xl:w-1/6 md:w-1/4 w-1/2">
                          <div className="sm:mb-7.5 mb-5">
                              <h2 className="text-xl/[1.2] relative mb-5 font-medium">
                                  Our Services
                              </h2>
                              <ul className="list-hover1">
                                  <li className="relative py-2 text-2sm leading-5 font-medium">
                                      <a className="link-hover hover:text-primary" href="/services">
                                          <span>Cybersecurity</span>
                                      </a>
                                  </li>
                                  <li className="relative py-2 text-2sm leading-5 font-medium">
                                      <a className="link-hover hover:text-primary" href="/services/devops">
                                          <span>Cloud</span>
                                      </a>
                                  </li>
                                  <li className="relative py-2 text-2sm leading-5 font-medium">
                                      <a className="link-hover hover:text-primary" href="/services/automation">
                                          <span>AI & Automation</span>
                                      </a>
                                  </li>
                                  <li className="relative py-2 text-2sm leading-5 font-medium">
                                      <a className="link-hover hover:text-primary" href="/coming-soon">
                                          <span>Collaboration</span>
                                      </a>
                                  </li>
                                  <li className="relative py-2 text-2sm leading-5 font-medium">
                                      <a className="link-hover hover:text-primary" href="/coming-soon">
                                          <span>Training</span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>


                      <div className="xl:w-1/6 md:w-1/4 w-1/2">
                          <div className="sm:mb-7.5 mb-5">
                              <h2 className="text-xl/[1.2] relative mb-5 font-medium">
                                  Verticals
                              </h2>
                              <ul className="list-hover1">
                                  {verticalFamilies.map((family) => (
                                      <li key={family.id} className="relative py-2 text-2sm leading-5 font-medium">
                                          <a className="link-hover hover:text-primary" href={family.items[0]?.href || "/coming-soon"}>
                                              <span>{family.label}</span>
                                          </a>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>


                      <div className="xl:w-1/6 md:w-1/4 w-1/2">
                          <div className="sm:mb-7.5 mb-5">
                              <h2 className="text-xl/[1.2] relative mb-5 font-medium">
                                  Activities
                              </h2>
                              <ul className="list-hover1">
                                  <li className="relative py-2 text-2sm leading-5 font-medium">
                                      <a className="link-hover hover:text-primary" href={ROUNDTABLE_PATH}>
                                          <span>Roundtables</span>
                                      </a>
                                  </li>
                                  <li className="relative py-2 text-2sm leading-5 font-medium">
                                      <a className="link-hover hover:text-primary" href={INTERNSHIP_PATH}>
                                          <span>Internship Program 2026</span>
                                      </a>
                                  </li>
                                  <li className="relative py-2 text-2sm leading-5 font-medium">
                                      <a className="link-hover hover:text-primary" href="/coming-soon">
                                          <span>Webinars</span>
                                      </a>
                                  </li>
                                  <li className="relative py-2 text-2sm leading-5 font-medium">
                                      <a className="link-hover hover:text-primary" href={PAST_EVENTS_PATH}>
                                          <span>Past Events</span>
                                      </a>
                                  </li>
                                  <li className="relative py-2 text-2sm leading-5 font-medium">
                                      <a className="link-hover hover:text-primary" href="/coming-soon">
                                          <span>Workshops</span>
                                      </a>
                                  </li>
                                  <li className="relative py-2 text-2sm leading-5 font-medium">
                                      <a className="link-hover hover:text-primary" href="/coming-soon">
                                          <span>Special Interest Groups</span>
                                      </a>
                                  </li>
                                  <li className="relative py-2 text-2sm leading-5 font-medium">
                                      <a className="link-hover hover:text-primary" href="/coming-soon">
                                          <span>Training</span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>


                      <div className="xl:w-1/6 md:w-1/4 w-1/2">
                          <div className="sm:mb-7.5 mb-5">
                              <h2 className="text-xl/[1.2] relative mb-5 font-medium">
                                  SpinnLabs
                              </h2>
                              <ul className="list-hover1">
                                  <li className="relative py-2 text-2sm leading-5 font-medium">
                                      <a className="link-hover hover:text-primary" href="/spinnlabs/overview">
                                          <span>Overview</span>
                                      </a>
                                  </li>
                                  <li className="relative py-2 text-2sm leading-5 font-medium">
                                      <a className="link-hover hover:text-primary" href="/spinnlabs/academia">
                                          <span>Academia</span>
                                      </a>
                                  </li>
                                  <li className="relative py-2 text-2sm leading-5 font-medium">
                                      <a className="link-hover hover:text-primary" href="/spinnlabs/industry">
                                          <span>Industry</span>
                                      </a>
                                  </li>
                                  <li className="relative py-2 text-2sm leading-5 font-medium">
                                      <a className="link-hover hover:text-primary" href="/spinnlabs/centers-of-expertise">
                                          <span>Centers of Expertise</span>
                                      </a>
                                  </li>
                                  <li className="relative py-2 text-2sm leading-5 font-medium">
                                      <a className="link-hover hover:text-primary" href="/spinnlabs/startups">
                                          <span>Startups</span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
              <div className="container relative z-1">
                  <div className="py-3.75 border-t border-black/10 text-base">
                      <div className="row justify-center text-center">
                          <div className="w-full">
                              <p className="copyright-text text-center">
                                  © <span className="current-year">2025</span>
                                  <a href="/coming-soon" target=" _blank" className="text-primary">Software
                                      Productivity Strategist</a>
                                  . All Rights Reserved.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* Footer Bottom End */}

          <div className="z-99 absolute right-12.5 bottom-50 2xxl:block">
              <div className="ps-15 pt-15 bg-cover info-widget animate-move4">
                  <div className="size-15 p-2.5 bg-white rounded-xxl rounded-ee-none absolute left-0 top-0 shadow-5 widget-media">
                      <img loading="lazy" decoding="async" src="/assets/images/spsimg/men-80.webp" alt="avatar6" width="50"
                          height="50" className="sm:rounded-2lg rounded-md" />
                  </div>
                  <div className="bg-white rounded-xxl rounded-ss-none pt-3.75 pb-3 px-4.5 shadow-6">
                      <span className="text-sm text-bodycolor font-normal block">Have a Question?</span>
                      <a className="sm:text-lg text-base text-primary font-medium block"
                          href="mailto:info@example.com">spsnet.com</a>
                      <span
                          className="bg-secondary text-white table py-1.25 px-3 rounded-t-2lg text-sm font-medium mt-1.25 -mb-3">
                          Farhan Akmal</span>
                  </div>
              </div>
          </div>
      </footer>
      {/* Footer End */}


      <div id="videoDialog"
          className="dialog hidden fixed z-9999 left-0 top-0 size-full overflow-auto bg-black/80 items-center justify-center h-screen">
          <div className="dialog-content m-auto md:p-12.5 rounded-lg md:w-[80%] max-w-300 relative max-md:h-100 overflow-hidden">
              <span id="closeBtn"
                  className="close absolute top-0 right-0 text-white/80 text-2xxl font-bold cursor-pointer size-10 flex items-center justify-center">
                  <i className="fa-solid fa-xmark"></i>
              </span>
              <div id="videoContainer"></div>
          </div>
      </div>

      <div id="offcanvas-backdrop" hidden></div>
      <div id="offcanvas-right"
          className="fixed top-0 right-0 z-9999999 h-screen overflow-y-auto transition-transform translate-x-full bg-white sm:w-100 w-88 custom-scroll"
          aria-hidden="true">
          <div className="flex items-center justify-between p-4 pb-0">
              <button type="button" className="text-xl size-7.5 cursor-pointer" data-drawer-hide="offcanvas-right"
                  aria-label="Close">
                  <i className="fa-solid fa-xmark" aria-hidden="true"></i>
              </button>
          </div>
          <div className="sm:p-7.5 p-5 grow overflow-y-auto">
              <div className="mb-8.75">
                  <div className="w-75 mb-5">
                      <a href="/coming-soon"><img
                              src="/assets/images/logo-400.webp"
                              alt="SPS Logo" width="400" height="72" loading="lazy" /></a>
                  </div>
                  <p className="mb-0">
                      Whether you are an entrepreneur looking for an engineering team or an enterprise pursuing
                      digital transformation we can help you bring your vision to reality.
                  </p>
              </div>

              <div className="mb-8.75">
                  <div className="mb-3.75">
                      <h2 className="text-xl mb-0">Contact Us</h2>
                  </div>
                  <ul className="list-check">
                      <li
                          className="relative p-1.25 ps-7.5 text-base before:absolute before:left-0 before:font-black before:content-['\\f109'] before:font-['flaticon'] before:text-primary before:top-2">
                          2400 Research Blvd, Suite 115, Rockville, MD 20850 USA.
                      </li>
                      <li
                          className="relative p-1.25 ps-7.5 text-base before:absolute before:left-0 before:font-black before:content-['\\f109'] before:font-['flaticon'] before:text-primary before:top-2">
                          <a href="mailto:email@domain.com" className="text-body">support@spsnet.com</a>
                      </li>
                      <li
                          className="relative p-1.25 ps-7.5 text-base before:absolute before:left-0 before:font-black before:content-['\\f109'] before:font-['flaticon'] before:text-primary before:top-2">
                          <a href="tel:+11234567890" className="text-body">+301-337-2290</a>
                      </li>
                  </ul>
              </div>

              <div className="mb-8.75">
                  <div className="mb-3.75">
                      <h2 className="text-xl mb-0">Newsletter</h2>
                  </div>
                  <form className="dzSubscribe style-2" action="assets/script/mailchimp.php" method="post">
                      <div className="dzSubscribeMsg"></div>
                      <div className="form-group">
                          <div className="relative flex flex-wrap items-stretch w-full">
                              <input name="dzEmail" required type="email"
                                  className="relative flex-1 w-[1%] h-15 text-bodycolor border-b-2 border-[#DAE2F2] text-base pr-15 py-3.75 z-0 placeholder:text-bodycolor"
                                  placeholder="Your Email Address" />
                              <div className="absolute right-1.25 top-1/2 -translate-y-1/2 z-1">
                                  <button name="submit" value="Submit" type="submit" aria-label="Submit"
                                      className="text-primary p-2 cursor-pointer">
                                      <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </form>
              </div>

              <div className="mb-8.75">
                  <div className="mb-3.75">
                      <h2 className="text-xl mb-0">Follow Us</h2>
                  </div>
                  <div className="flex">
                      <ul className="flex">
                          <li className="inline-block mr-1.25">
                              <a href="/coming-soon" target="_blank" aria-label="Follow us on linkedin"
                                  className="size-11 leading-[44px] text-center text-sm block rounded-full bg-light text-primary hover:text-white hover:bg-primary">
                                  <i className="fa-brands fa-linkedin"></i>
                              </a>
                          </li>
                          <li className="inline-block mr-1.25">
                              <a href="/coming-soon" target="_blank" aria-label="Follow us on instagram"
                                  className="size-11 leading-[44px] text-center text-sm block rounded-full bg-light text-primary hover:text-white hover:bg-primary">
                                  <i className="fa-brands fa-instagram"></i>
                              </a>
                          </li>
                          <li className="inline-block mr-1.25">
                              <a href="/coming-soon" target="_blank" aria-label="Follow us on facebook"
                                  className="size-11 leading-[44px] text-center text-sm block rounded-full bg-light text-primary hover:text-white hover:bg-primary">
                                  <i className="fa-brands fa-facebook-f"></i>
                              </a>
                          </li>
                          <li className="inline-block mr-1.25">
                              <a href="/coming-soon" target="_blank" aria-label="Follow us on twitter"
                                  className="size-11 leading-[44px] text-center text-sm block rounded-full bg-light text-primary hover:text-white hover:bg-primary">
                                  <i className="fa-brands fa-x-twitter"></i>
                              </a>
                          </li>
                          <li className="inline-block mr-1.25">
                              <a href="/coming-soon" target="_blank" aria-label="Follow us on youtube"
                                  className="size-11 leading-[44px] text-center text-sm block rounded-full bg-light text-primary hover:text-white hover:bg-primary">
                                  <i className="fa-brands fa-youtube"></i>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>

      <button id="scrollProgress" title="Scroll to top"
          className="scroll-top fixed z-9999 right-5 bottom-5 size-12.5 rounded-full bg-secondary text-white cursor-pointer opacity-0 pointer-events-none duration-500 flex items-center justify-center [.scroll-top.active]:opacity-100 [.scroll-top.active]:pointer-events-auto">
          <span className="icon text-xs relative z-1">
              <i className="fas fa-arrow-up"></i>
          </span>
          <svg className="absolute top-0 left-0 -rotate-90" width="50" height="50">
              <circle className="stroke-white" cx="25" cy="25" r="20" stroke="#000" strokeWidth="1.5" fill="none"
                  strokeLinecap="round" strokeDasharray="100.53" strokeDashoffset="100.53"></circle>
          </svg>
      </button>
    </>
  );
}
