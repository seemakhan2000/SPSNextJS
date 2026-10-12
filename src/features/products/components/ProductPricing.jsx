const FEATURES = [
  "Core Platform Access",
  "Identity & Access Management",
  "Security & Compliance Tools",
  "Cloud & Application Integration",
  "Advanced Analytics & Reporting",
  "Role-Based Access Control",
  "Email & Ticket Support",
  "Dedicated Technical Assistance",
];

const PLANS = [
  { name: "Free", note: "/ Starter", action: "Get Started", included: 3, featured: false },
  { name: "$25", note: "/ Month", action: "Most Popular", included: 5, featured: true },
  { name: "$40", note: "/ Month", action: "Contact Sales", included: 8, featured: false },
];

function CheckRow({ enabled }) {
  return (
    <li className={`sm:py-6.25 py-5 flex justify-center ${enabled ? "" : "disable opacity-10"}`}>
      <img src="/assets/images/check.svg" width="20" alt="" aria-hidden="true" />
    </li>
  );
}

export default function ProductPricing() {
  return (
    <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold capitalize">
            Choose the Right Product Plan
          </h2>
          <p className="text-lg font-light max-w-162.5 mx-auto">
            Flexible plans designed to meet the needs of businesses of all sizes — from startups to
            large enterprises.
          </p>
        </div>
        <div className="row">
          <div className="xl:w-1/4 md:w-1/2 w-full mb-7.5">
            <div className="bg-secondary sm:rounded-3xl rounded-xxl border border-white/5">
              <div className="sm:min-h-46.5 sm:py-8.75 sm:px-7.5 p-6.25 border-b border-white/5 text-start">
                <div className="pricingtable-price">
                  <h2 className="text-2xl text-white font-semibold flex items-center gap-2.5 mb-5">
                    Product Features
                    <span className="py-1.75 px-3 rounded-5xl text-xs uppercase text-center text-white bg-white/10">
                      Best Value
                    </span>
                  </h2>
                  <p className="text-sm text-white/50 font-light mb-0">
                    Compare features across plans and choose what fits your business needs.
                  </p>
                </div>
              </div>
              <div className="pricingtable-list">
                <ul className="text-start">
                  {FEATURES.map((feature, index) => (
                    <li
                      key={feature}
                      className={`sm:py-6.25 sm:px-7.5 py-5 px-6.25 text-white ${
                        index < FEATURES.length - 1 ? "border-b border-white/5" : ""
                      }`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {PLANS.map((plan) => (
            <div key={plan.name} className="xl:w-1/4 md:w-1/2 w-full mb-7.5">
              <div
                className={`border border-black/5 sm:rounded-3xl rounded-xxl pricingtable-wrapper ${
                  plan.featured ? "active" : ""
                }`}
              >
                <div className="sm:min-h-46.5 sm:py-8.75 sm:px-7.5 p-6.25 border-b border-black/5 text-start">
                  <div className="pricingtable-price">
                    <h2 className="text-4xl leading-none font-semibold mb-6.25">
                      {plan.name}
                      <small className="text-sm font-medium text-bodycolor ml-1.25">
                        {plan.note}
                      </small>
                    </h2>
                  </div>
                  <div className="pricingtable-button">
                    <button
                      type="button"
                      data-open-appointment=""
                      className="btn btn-primary btn-hover1 w-full justify-center !text-sm"
                    >
                      {plan.action}
                    </button>
                  </div>
                </div>
                <div className="pricingtable-list">
                  <ul className="text-start">
                    {FEATURES.map((feature, index) => (
                      <CheckRow key={`${plan.name}-${feature}`} enabled={index < plan.included} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
