
import { careerPage } from "../data/careerData";

export default function CareerDiversity() {
  const { diversity } = careerPage;

  return (
    <section className="lg:pt-15 lg:pb-10 pt-10.5 pb-5 bg-white">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-primary text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {diversity.title}
          </h2>
          <p className="text-secondary text-lg md:text-xl font-normal leading-relaxed max-w-5xl mb-0">
            {diversity.text}
          </p>
        </div>
      </div>
    </section>
  );
}
