export default function VerticalSolutions({ solutions }) {
  if (!solutions?.length) return null;

  return (
    <aside className="vertical-hero__solutions">
      <div className="overflow-hidden rounded-2xl border border-white/20 bg-[#071a33]/95 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
        <div className="border-b border-white/10 px-4 py-3">
          <p className="mb-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
            Our solutions
          </p>
          <h2 className="mb-0 text-[15px] font-bold text-white">Click to learn more</h2>
        </div>
        <ul className="m-0 flex list-none flex-col gap-2 p-3">
          {solutions.map((name) => (
            <li key={name}>
              <button
                type="button"
                data-open-appointment=""
                className="group flex w-full items-center gap-3 rounded-xl bg-white px-3 py-2.5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <i className="fa-solid fa-lightbulb text-xs" aria-hidden="true"></i>
                </span>
                <span className="min-w-0 flex-1 text-[13px] font-semibold leading-snug text-slate-900">
                  {name}
                </span>
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-hover:bg-primary group-hover:text-white">
                  <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true"></i>
                </span>
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              data-open-appointment=""
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-3 py-2.5 text-[13px] font-semibold text-white transition hover:brightness-110 cursor-pointer"
            >
              View more
              <i className="fa-solid fa-arrow-right text-[10px] transition group-hover:translate-x-0.5" aria-hidden="true"></i>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
