export default function SpinnlabsHub({
  hub,
  titleClassName = "text-white xl:text-xxl sm:text-3xxl text-2xxl font-bold leading-[1.25] mb-3",
}) {
  return (
    <section
      className="relative overflow-hidden before:absolute before:inset-0 before:bg-secondary before:opacity-90 bg-cover bg-center"
      style={{ backgroundImage: `url(${hub.background})` }}
    >
      <div className="container relative z-1 2xxl:py-25 md:py-17.5 sm:py-12.5 py-10">
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-7.5 text-center sm:text-left">
          <img
            src={hub.logo}
            alt=""
            width="128"
            height="128"
            loading="lazy"
            decoding="async"
            className="w-20 lg:w-28 h-auto object-contain"
          />
          <div className="min-w-0 flex-1">
            <h2 className={titleClassName}>
              {hub.title}
            </h2>
            <p className="text-white/80 sm:text-lg text-base font-light leading-[1.7] mb-0 lg:whitespace-nowrap">
              {hub.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
