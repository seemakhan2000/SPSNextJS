import { aboutPage } from "../data/aboutData";


export default function AboutIntro() {
  const { mission, story } = aboutPage;

  return (
    <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-8 bg-white">
      <div className="container">
        <div className="row items-start">
          <div className="xl:w-1/2 w-full mb-7.5 xl:pr-7.5">
            <div className="section-head style-1 mb-6">
              <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold capitalize">
                {mission.title}
              </h2>
            </div>
            {mission.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="sm:text-lg text-base font-light text-bodycolor mb-4 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="xl:w-1/2 w-full mb-7.5">
            <div className="section-head style-1 mb-6">
              <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold capitalize">
                {story.title}
              </h2>
            </div>
            {story.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="sm:text-lg text-base font-light text-bodycolor mb-4 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}