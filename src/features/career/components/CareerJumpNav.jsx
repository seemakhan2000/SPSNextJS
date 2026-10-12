
import { careerPage } from "../data/careerData";

export default function CareerJumpNav() {
  return (
    <section className="border-b border-black/10 bg-white">
      <nav className="container" aria-label="Career page sections">
        <ul className="flex flex-wrap items-center gap-3 py-4 mb-0">
          {careerPage.jumpNav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/15 text-bodycolor font-medium hover:bg-primary hover:text-white hover:border-primary duration-300"
              >
                <i className={item.icon} aria-hidden="true"></i>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}