import Navigation from "@/components/layout/Navigation";
import { INTERNSHIP_PATH } from "@/features/internship/constants/internship.constants";
export default function Header() {
  return (
    <>
      <div className="navbar-v2-overlay" id="navbarV2Overlay"></div>

      <header className="navbar-v2" id="navbarV2">
          <div className="navbar-v2__bar">
              <div className="navbar-v2__inner">
                  <a className="navbar-v2__logo" href="/">
                      <img src="/assets/images/logowhitenew-480.webp"
                          srcSet="/assets/images/logowhitenew-240.webp 240w, /assets/images/logowhitenew-480.webp 480w"
                          sizes="(max-width: 480px) 68vw, (max-width: 1360px) 300px, 340px"
                          alt="Software Productivity Strategists, Inc."
                          width="340"
                          height="56"
                          style={{ width: "auto", height: "auto" }}
                          decoding="async" />
                  </a>

                  <Navigation />

                  <div className="navbar-v2__utils">
                      <a className="navbar-v2__internship" href={INTERNSHIP_PATH}>Internship</a>
                      <button className="navbar-v2__icon-btn" type="button" data-nv2-drawer aria-controls="navbarV2Drawer" aria-expanded="false" aria-label="Open information panel">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="8.5"></circle>
                              <path d="M12 16.25v-4.7"></path>
                              <circle cx="12" cy="7.7" r="1" fill="currentColor" stroke="none"></circle>
                          </svg>
                      </button>
                      <button className="navbar-v2__toggle" type="button" aria-controls="navbarV2Nav" aria-expanded="false" aria-label="Open navigation">
                          <span className="navbar-v2__toggle-line"></span>
                          <span className="navbar-v2__toggle-line"></span>
                          <span className="navbar-v2__toggle-line"></span>
                      </button>
                  </div>
              </div>
          </div>
      </header>
      <aside className="navbar-v2-drawer" id="navbarV2Drawer" aria-hidden="true">
          <div className="navbar-v2-drawer__head bg-primary">
              <div>
                  <p className="navbar-v2-drawer__kicker">Software Productivity Strategists</p>
                  <h2 className="navbar-v2-drawer__head-title">Get in Touch</h2>
              </div>
              <button className="navbar-v2-drawer__close" type="button" data-nv2-drawer-close aria-label="Close">
                  <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 2l8 8M10 2L2 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
              </button>
          </div>
          <div className="navbar-v2-drawer__body">
              <div className="navbar-v2-drawer__card">
                  <a className="navbar-v2-drawer__logo" href="/">
                      <img src="/assets/images/logo-400.webp" alt="Software Productivity Strategists, Inc." width="260" height="47" style={{ width: "auto", height: "auto" }} loading="lazy" decoding="async" />
                  </a>
                  <p className="navbar-v2-drawer__intro">Whether you are an entrepreneur looking for an engineering team or an enterprise pursuing digital transformation, we can help you bring your vision to reality.</p>
              </div>

              <div className="navbar-v2-drawer__card">
                  <p className="navbar-v2-drawer__label">Contact</p>
                  <ul className="navbar-v2-drawer__contact">
                      <li>
                          <span className="navbar-v2-drawer__icon" aria-hidden="true">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11z"/><circle cx="12" cy="10" r="2.2"/></svg>
                          </span>
                          <div className="navbar-v2-drawer__meta">
                              <small>Address</small>
                              <span>2400 Research Blvd, Suite 115, Rockville, MD 20850 USA.</span>
                          </div>
                      </li>
                      <li>
                          <span className="navbar-v2-drawer__icon" aria-hidden="true">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="m4 7 8 6 8-6"/></svg>
                          </span>
                          <div className="navbar-v2-drawer__meta">
                              <small>Email</small>
                              <a href="mailto:support@spsnet.com">support@spsnet.com</a>
                          </div>
                      </li>
                      <li>
                          <span className="navbar-v2-drawer__icon" aria-hidden="true">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7.2 4.8h3.1l.9 3-1.8 1.2a11.5 11.5 0 0 0 5.4 5.4l1.2-1.8 3 .9v3.1c0 .7-.6 1.3-1.3 1.2A15.2 15.2 0 0 1 6 6.1c-.1-.7.5-1.3 1.2-1.3z"/></svg>
                          </span>
                          <div className="navbar-v2-drawer__meta">
                              <small>Phone</small>
                              <a href="tel:+3013372290">+301-337-2290</a>
                          </div>
                      </li>
                  </ul>
                  <a className="btn btn-primary navbar-v2-drawer__cta" href="/contactus">
                      <span>Request Consultation</span>
                  </a>
              </div>

              <div className="navbar-v2-drawer__card">
                  <p className="navbar-v2-drawer__label">Hours</p>
                  <p className="navbar-v2-drawer__hours">Mon – Sat: 7:00 – 17:00</p>
              </div>

              <div className="navbar-v2-drawer__card">
                  <p className="navbar-v2-drawer__label">Follow Us</p>
                  <div className="navbar-v2-drawer__social">
                      <a href="/coming-soon" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
                          <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                      </a>
                      <a href="/coming-soon" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                          <i className="fab fa-instagram" aria-hidden="true"></i>
                      </a>
                      <a href="/coming-soon" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                          <i className="fab fa-facebook-f" aria-hidden="true"></i>
                      </a>
                      <a href="/coming-soon" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
                          <i className="fab fa-twitter" aria-hidden="true"></i>
                      </a>
                  </div>
              </div>
          </div>
      </aside>
    </>
  );
}
