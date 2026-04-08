const plans = [
  {
    badge: "CORE",
    name: "SISTEMA FOTOVOLTAICO STANDARD",
    price: "6.000",
    color: "bg-ida-dark",
    features: [
      "Moduli fotovoltaici",
      "Inverter di stringa",
      "Struttura di montaggio",
      "Installazione certificata",
    ],
  },
  {
    badge: "POWER",
    name: "SISTEMA FOTOVOLTAICO PREMIUM",
    price: "8.000",
    color: "bg-ida-green",
    featured: true,
    features: [
      "Moduli fotovoltaici premium",
      "Inverter ibrido",
      "Struttura di montaggio",
      "Contatore su strada per monitoraggio",
      "Installazione certificata",
    ],
  },
  {
    badge: "ALPINE",
    name: "SISTEMA FOTOVOLTAICO PREMIUM+",
    price: "10.000",
    color: "bg-ida-dark",
    features: [
      "Moduli fotovoltaici premium",
      "Inverter ibrido",
      "Batteria di accumulo",
      "Struttura di montaggio",
      "Installazione certificata",
    ],
  },
];

export default function PricingCards() {
  return (
    <section className="py-20 lg:py-28 bg-ida-off-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ida-dark">
            Soluzioni fotovoltaiche
          </h2>
          <p className="mt-4 text-ida-body max-w-2xl mx-auto">
            Soluzioni energetiche progettate per edifici residenziali e
            commerciali, con prezzi accessibili.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.badge}
              className={`bg-white rounded-2xl overflow-hidden border ${
                plan.featured
                  ? "border-ida-green shadow-lg shadow-ida-green/10"
                  : "border-ida-border"
              }`}
            >
              {/* Badge */}
              <div className={`${plan.color} text-white text-center py-3`}>
                <span className="text-sm font-bold tracking-wider">
                  {plan.badge}
                </span>
              </div>

              <div className="p-8">
                <p className="text-xs text-ida-body uppercase tracking-wider font-medium">
                  {plan.name}
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-black text-ida-dark">
                    {plan.price}
                  </span>
                  <span className="text-lg text-ida-body">&euro;</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-ida-body"
                    >
                      <svg
                        className="w-5 h-5 text-ida-green flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contattaci"
                  className={`mt-8 block text-center py-3 rounded-lg text-sm font-bold transition-colors ${
                    plan.featured
                      ? "bg-ida-green hover:bg-ida-green-light text-white"
                      : "border-2 border-ida-dark text-ida-dark hover:bg-ida-dark hover:text-white"
                  }`}
                >
                  Configura Ora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
