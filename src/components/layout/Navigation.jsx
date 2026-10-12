import Link from "next/link";
import { INTERNSHIP_PATH } from "@/features/internship/constants/internship.constants";
import { PAST_EVENTS_PATH } from "@/features/past-events/constants/past-events.constants";
import { ROUNDTABLE_PATH } from "@/features/roundtables/constants/roundtable.constants";
import { COMING_SOON_PATH } from "@/lib/site";
import { verticalMegaMenu } from "@/features/verticals/data/verticals";




export default function Navigation() {
  return (
    <>
      <nav className="navbar-v2__nav" id="navbarV2Nav" aria-label="Primary">
                      <Link className="navbar-v2__mobile-brand" href="/">
                          <img src="/assets/images/logo-250.webp"
                              srcSet="/assets/images/logo-250.webp 250w, /assets/images/logo-400.webp 400w"
                              sizes="180px"
                              alt="SPS Logo" width="180" height="32"
                              style={{ width: "auto", height: "auto" }}
                              loading="lazy"
                              decoding="async" />
                              </Link>

                      <ul className="navbar-v2__menu navbar-v2__menu--primary">
                          <li className="navbar-v2__item">
                              <Link className="navbar-v2__link" href="/">Home</Link>
                          </li>

                          <li className="navbar-v2__item" data-nv2-dropdown>
                              <Link className="navbar-v2__link" href="/products" aria-expanded="false" aria-haspopup="true">
                                  Product <svg className="navbar-v2__caret" viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M2.4 4.2L6 7.8l3.6-3.6" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </Link>
                              <div className="navbar-v2__dropdown navbar-v2__dropdown--mega">
                                  <div className="navbar-v2__mega-inner">
                                      <div className="navbar-v2__mega-grid">
                                          <div className="navbar-v2__mega-aside">
                                              <img src="/assets/images/spsimg/p-360.webp" srcSet="/assets/images/spsimg/p-360.webp 360w, /assets/images/spsimg/p.webp 612w" sizes="360px" alt="Preview" width="360" height="180" loading="lazy" decoding="async" />
                                              <p>SPS empowers enterprises with Cybersecurity, Cloud, AI & Automation solutions designed to scale and secure digital transformation.</p>
                                              <Link className="navbar-v2__mega-more" href="/products">View All Products</Link>
                                          </div>
                                          <div className="navbar-v2__mega-cols">
                                              <div>
                                                  <h3 className="navbar-v2__mega-title">SPS</h3>
                                                  <div className="navbar-v2__mega-list">
                                                      <a className="navbar-v2__mega-link" href="https://www.myidselfverify.com/" target="_blank" rel="noopener noreferrer"><span>MYID Self Verify</span></a>
                                                      <a className="navbar-v2__mega-link" href="https://www.azal.io/" target="_blank" rel="noopener noreferrer"><span>Azalio</span></a>
                                                      <a className="navbar-v2__mega-link" href="https://fabrico.spsnet.com/" target="_blank" rel="noopener noreferrer"><span>Fabrico</span></a>
                                                      <Link className="navbar-v2__mega-link" href="/products/bms"><span>BMS</span></Link>
                                                      <Link className="navbar-v2__mega-link" href="/products/csm"><span>CSM</span></Link>
                                                  </div>
                                              </div>
                                              <div>
                                                  <h3 className="navbar-v2__mega-title">IBM</h3>
                                                  <div className="navbar-v2__mega-list">
                                                      <Link className="navbar-v2__mega-link" href="/products/automation"><span>Automation</span></Link>
                                                      <Link className="navbar-v2__mega-link" href="/products/data-ai"><span>Data & AI</span></Link>
                                                      <Link className="navbar-v2__mega-link" href="/products/security"><span>Security</span></Link>
                                                      <Link className="navbar-v2__mega-link" href="/products/sustainability"><span>Sustainability</span></Link>
                                                  </div>
                                              </div>
                                              <div>
                                                  <h3 className="navbar-v2__mega-title">Others</h3>
                                                  <div className="navbar-v2__mega-list">
                                                      <Link className="navbar-v2__mega-link" href="/products/cloud-management"><span>Cloud Management</span></Link>
                                                      <Link className="navbar-v2__mega-link" href="/products/analytics-tools"><span>Analytics Tools</span></Link>
                                                      <Link className="navbar-v2__mega-link" href="/products/iot-solutions"><span>IoT Solutions</span></Link>
                                                      <Link className="navbar-v2__mega-link" href="/products/blockchain"><span>Blockchain</span></Link>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>

                          <li className="navbar-v2__item" data-nv2-dropdown>
                              <Link className="navbar-v2__link" href="/services" aria-expanded="false" aria-haspopup="true">
                                  Services <svg className="navbar-v2__caret" viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M2.4 4.2L6 7.8l3.6-3.6" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </Link>
                              <div className="navbar-v2__dropdown navbar-v2__dropdown--mega">
                                  <div className="navbar-v2__mega-inner">
                                      <div className="navbar-v2__mega-grid">
                                          <div className="navbar-v2__mega-aside">
                                              <img src="/assets/images/spsimg/ab2-360.webp" srcSet="/assets/images/spsimg/ab2-360.webp 360w, /assets/images/spsimg/ab2.webp 720w" sizes="360px" alt="Automation Preview" width="360" height="180" loading="lazy" decoding="async" />
                                              <p>SPS empowers enterprises with Cybersecurity, Cloud, AI & Automation solutions designed to scale and secure digital transformation.</p>
                                              <Link className="navbar-v2__mega-more" href="/services">Discover More →</Link>
                                          </div>
                                          <div className="navbar-v2__mega-cols navbar-v2__mega-cols--4">
                                              <div>
                                                  <h3 className="navbar-v2__mega-title">Cybersecurity</h3>
                                                  <div className="navbar-v2__mega-list">
                                                      <Link className="navbar-v2__mega-link" href="/services/network-security"><span>Network Security</span></Link>
                                                      <Link className="navbar-v2__mega-link" href="/services/smaas"><span>SMaaS</span></Link>
                                                      <Link className="navbar-v2__mega-link" href="/services/grc"><span>GRC</span></Link>
                                                      <Link className="navbar-v2__mega-link" href="/services/identity-access"><span>Identity & Access</span></Link>
                                                      <Link className="navbar-v2__mega-link" href="/services/threat-management"><span>Threat Management</span></Link>
                                                  </div>
                                              </div>
                                              <div>
                                                  <h3 className="navbar-v2__mega-title">Cloud</h3>
                                                  <div className="navbar-v2__mega-list">
                                                      <Link className="navbar-v2__mega-link" href="/services/devops"><span>Devops</span></Link>
                                                      <Link className="navbar-v2__mega-link" href="/services/migration-services"><span>Migration Services</span></Link>
                                                  </div>
                                              </div>
                                              <div>
                                                  <h3 className="navbar-v2__mega-title">Ai & Automation</h3>
                                                  <div className="navbar-v2__mega-list">
                                                      <Link className="navbar-v2__mega-link" href="/services/automation"><span>Automation</span></Link>
                                                      <Link className="navbar-v2__mega-link" href="/services/data-science"><span>Data Science</span></Link>
                                                  </div>
                                              </div>
                                              <div>
                                                  <h3 className="navbar-v2__mega-title">Collaboration</h3>
                                                  <div className="navbar-v2__mega-list">
                                                      <a className="navbar-v2__mega-link" href="/coming-soon"><span>Training</span></a>
                                                      <a className="navbar-v2__mega-link" href="/coming-soon"><span>Events</span></a>
                                                  </div>
                                              </div>
                                              <div className="navbar-v2__mega-rule"></div>
                                              <div>
                                                  <h3 className="navbar-v2__mega-title">Training</h3>
                                                  <div className="navbar-v2__mega-list">
                                                      <a className="navbar-v2__mega-link" href="/coming-soon"><span>SPS Oil & Gas</span></a>
                                                      <a className="navbar-v2__mega-link" href="/coming-soon"><span>IBM</span></a>
                                                      <a className="navbar-v2__mega-link" href="/coming-soon"><span>Google</span></a>
                                                      <a className="navbar-v2__mega-link" href="/coming-soon"><span>AWS</span></a>
                                                      <a className="navbar-v2__mega-link" href="/coming-soon"><span>See More</span></a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>

                          <li className="navbar-v2__item" data-nv2-dropdown>
                              <button className="navbar-v2__link" type="button" aria-expanded="false" aria-haspopup="true">
                                  Verticals <svg className="navbar-v2__caret" viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M2.4 4.2L6 7.8l3.6-3.6" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </button>
                              <div className="navbar-v2__dropdown navbar-v2__dropdown--mega">
                                  <div className="navbar-v2__mega-inner">
                                      <div className="navbar-v2__mega-grid">
                                          <div className="navbar-v2__mega-aside">
                                              <img src="/assets/images/spsimg/ab2-360.webp" srcSet="/assets/images/spsimg/ab2-360.webp 360w, /assets/images/spsimg/ab2.webp 720w" sizes="360px" alt="Preview" width="360" height="180" loading="lazy" decoding="async" />
                                              <p>SPS delivers industry-specific programs across public sector, healthcare, retail, energy, financial services, and telecommunications — built on cybersecurity, cloud, and AI.</p>
                                              <Link className="navbar-v2__mega-more" href="/verticals">View All Verticals</Link>
                                          </div>
                                          <div className="navbar-v2__mega-cols navbar-v2__mega-cols--4">
                                              {verticalMegaMenu.map((column) => (
                                                  <div key={column.title}>
                                                      <h3 className="navbar-v2__mega-title">{column.title}</h3>
                                                      <div className="navbar-v2__mega-list">
                                                          {column.items.map((item) => (
                                                              <Link key={item.href + item.label} className="navbar-v2__mega-link" href={item.href}>
                                                                  <span>{item.label}</span>
                                                              </Link>
                                                          ))}
                                                      </div>
                                                  </div>
                                              ))}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>

                          <li className="navbar-v2__item" data-nv2-dropdown>
                              <Link className="navbar-v2__link" href="/spinnlabs/overview" aria-expanded="false" aria-haspopup="true">
                                  Spinnlabs <svg className="navbar-v2__caret" viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M2.4 4.2L6 7.8l3.6-3.6" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </Link>
                              <ul className="navbar-v2__dropdown navbar-v2__dropdown--simple">
                                  <li><Link className="navbar-v2__simple-link" href="/spinnlabs/overview"><span>Overview</span></Link></li>
                                  <li><Link className="navbar-v2__simple-link" href="/spinnlabs/academia"><span>Academia</span></Link></li>
                                  <li><Link className="navbar-v2__simple-link" href="/spinnlabs/industry"><span>Industry</span></Link></li>
                                  <li><Link className="navbar-v2__simple-link" href="/spinnlabs/centers-of-expertise"><span>Centers of Expertise</span></Link></li>
                                  <li><Link className="navbar-v2__simple-link" href="/spinnlabs/startups"><span>Startups</span></Link></li>
                              </ul>
                          </li>

                          <li className="navbar-v2__item" data-nv2-dropdown>
                              <Link className="navbar-v2__link" href={INTERNSHIP_PATH} aria-expanded="false" aria-haspopup="true">
                                  Activities <svg className="navbar-v2__caret" viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M2.4 4.2L6 7.8l3.6-3.6" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </Link>
                              <ul className="navbar-v2__dropdown navbar-v2__dropdown--simple">
                                  <li><Link className="navbar-v2__simple-link" href={ROUNDTABLE_PATH}><span>Roundtables</span></Link></li>
                                  <li><Link className="navbar-v2__simple-link" href={INTERNSHIP_PATH}><span>Internship Program 2026</span></Link></li>
                                  <li className="navbar-v2__submenu">
                                      <a className="navbar-v2__sub-link" href={COMING_SOON_PATH}>
                                          <span>Webinars</span> <svg className="navbar-v2__caret" viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M2.4 4.2L6 7.8l3.6-3.6" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                      </a>
                                      <ul className="navbar-v2__flyout">
                                          <li><a className="navbar-v2__simple-link navbar-v2__muted" href={COMING_SOON_PATH}>No Webinars Listed</a></li>
                                          <li><Link className="navbar-v2__simple-link" href={PAST_EVENTS_PATH}><span>Past Webinars</span></Link></li>
                                      </ul>
                                  </li>
                                  <li className="navbar-v2__submenu">
                                      <a className="navbar-v2__sub-link" href={COMING_SOON_PATH}>
                                          <span>Workshops</span> <svg className="navbar-v2__caret" viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M2.4 4.2L6 7.8l3.6-3.6" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                      </a>
                                      <ul className="navbar-v2__flyout">
                                          <li><a className="navbar-v2__simple-link navbar-v2__muted" href={COMING_SOON_PATH}>No Workshops Listed</a></li>
                                      </ul>
                                  </li>
                                  <li className="navbar-v2__submenu">
                                      <a className="navbar-v2__sub-link" href={COMING_SOON_PATH}>
                                          <span>Special Interest Groups</span> <svg className="navbar-v2__caret" viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M2.4 4.2L6 7.8l3.6-3.6" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                      </a>
                                      <ul className="navbar-v2__flyout">
                                          <li><a className="navbar-v2__simple-link navbar-v2__muted" href={COMING_SOON_PATH}>No SIGs Listed</a></li>
                                      </ul>
                                  </li>
                                  <li><a className="navbar-v2__simple-link" href="/training/"><span>Training</span></a></li>
                              </ul>
                          </li>
                      </ul>

                      <ul className="navbar-v2__menu navbar-v2__menu--secondary">
                          <li className="navbar-v2__item navbar-v2__item--end" data-nv2-dropdown>
                              <Link className="navbar-v2__link" href="/aboutus" aria-expanded="false" aria-haspopup="true">
                                  About Us <svg className="navbar-v2__caret" viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M2.4 4.2L6 7.8l3.6-3.6" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </Link>
                              <ul className="navbar-v2__dropdown navbar-v2__dropdown--simple">
                                  <li><Link className="navbar-v2__simple-link" href="/aboutus"><span>Our Story</span></Link></li>
                                  <li><Link className="navbar-v2__simple-link" href="/career"><span>Career</span></Link></li>
                              </ul>
                          </li>
                          <li className="navbar-v2__item navbar-v2__item--end" data-nv2-dropdown>
                              <Link className="navbar-v2__link" href="/contracts/vita" aria-expanded="false" aria-haspopup="true">
                                  Contracts <svg className="navbar-v2__caret" viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M2.4 4.2L6 7.8l3.6-3.6" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </Link>
                              <ul className="navbar-v2__dropdown navbar-v2__dropdown--simple">
                                  <li className="navbar-v2__submenu">
                                      <Link className="navbar-v2__sub-link" href="/contracts/vita">
                                          <span>VITA</span> <svg className="navbar-v2__caret" viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M2.4 4.2L6 7.8l3.6-3.6" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                      </Link>
                                      <ul className="navbar-v2__flyout navbar-v2__flyout--left">
                                          <li><Link className="navbar-v2__simple-link" href="/contracts/vita"><span>Pricing</span></Link></li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
                          <li className="navbar-v2__item">
                              <Link className="navbar-v2__link" href="/contactus">Contact Us</Link>
                          </li>
                          <li className="navbar-v2__item navbar-v2__mobile-only">
                              <Link className="navbar-v2__link" href={INTERNSHIP_PATH}>Internship</Link>
                          </li>
                      </ul>

                      <div className="navbar-v2__social">
                          <a href="/coming-soon" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.5 9H4v11h2.5V9zM5.25 4A1.75 1.75 0 1 0 5.25 7.5 1.75 1.75 0 0 0 5.25 4zM20 20h-2.5v-5.6c0-1.33 0-3.04-1.85-3.04s-2.13 1.45-2.13 2.95V20H11V9h2.4v1.51h.03c.34-.64 1.16-1.31 2.38-1.31 2.55 0 3.19 1.68 3.19 3.86V20z"/></svg></a>
                          <a href="/coming-soon" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.6" y="3.6" width="16.8" height="16.8" rx="5" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.6"/><circle cx="17.1" cy="6.9" r=".9" fill="currentColor"/></svg></a>
                          <a href="/coming-soon" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14.2 20v-7.2h2.4l.36-2.8h-2.76V8.2c0-.8.22-1.35 1.38-1.35H17.2V4.35C16.9 4.3 15.95 4.2 14.85 4.2c-2.3 0-3.87 1.4-3.87 4v1.8H8.4v2.8h2.58V20h3.22z"/></svg></a>
                          <a href="/coming-soon" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14.7 10.35 21.2 3h-1.54l-5.66 6.4L9.5 3H3.2l6.82 9.7L3.2 21h1.54l5.96-6.74L14.5 21h6.3l-6.1-10.65zm-2.1 2.4-.7-.97L5.3 4.17h2.37l4.45 6.2.7.97 5.78 8.05h-2.37l-4.63-6.44z"/></svg></a>
                      </div>
                  </nav>
    </>
  );
}
