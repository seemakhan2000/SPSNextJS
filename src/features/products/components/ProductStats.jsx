export default function ProductStats({ items }) {
  return (
    <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 sm:pt-12.5 pt-10 pb-10 bg-light">
      <div className="container">
        <div className="row items-sm-center">
          {items.map((item) => (
            <div key={item.label} className="md:w-1/4 w-1/2 mb-7.5">
              <div className="relative text-center">
                <span className="2xxl:text-[150px] lg:text-[120px] text-8xl font-bold font-poppins text-primary leading-none">
                  <span className="value" data-value={item.value}>
                    {item.value}
                  </span>
                  {item.suffix}
                </span>
                <h3 className="2xxl:text-base lg:text-2sm text-xs font-medium uppercase absolute top-1/2 -translate-y-1/2 w-full bg-light p-1 leading-4">
                  {item.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
