import Image from "next/image";

const plans = [
  {
    icon: "/images/products/ida core.svg",
    badge: "CORE",
    name: "SISTEMA FOTOVOLTAICO STANDARD",
    price: "6 000",
    features: [
      "Moduli fotovoltaici ad alta efficienza",
      "Inverter integrato",
      "Configurazione per abitazioni",
      "Installazione certificata",
    ],
  },
  {
    icon: "/images/products/ida power.svg",
    badge: "POWER",
    name: "SISTEMA FOTOVOLTAICO PREMIUM",
    price: "8 000",
    features: [
      "Moduli premium black",
      "Maggiore produzione energetica",
      "Inverter ad alte prestazioni",
      "Compatibile con sistemi di accumulo",
    ],
  },
  {
    icon: "/images/products/alpine.svg",
    badge: "ALPINE",
    name: "SISTEMA FOTOVOLTAICO PREMIUM",
    price: "10.000",
    features: [
      "Moduli rinforzati",
      "Alta resistenza a neve e vento",
      "Configurazione industriale",
      "Monitoraggio energetico",
    ],
  },
];

export default function PricingCards() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-ida-dark-bg">
            Soluzioni fotovoltaiche
          </h2>
          <p className="mt-3 text-sm text-ida-body max-w-xl mx-auto leading-relaxed">
            Energia solare progettata per edifici e infrastrutture.
            Moduli, inverter e accumulo in un unico sistema integrato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.badge}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Image
                    src={plan.icon}
                    alt={plan.badge}
                    width={24}
                    height={24}
                  />
                </div>
                <span className="font-heading font-bold text-sm text-ida-dark-bg">
                  {plan.badge}
                </span>
                <span className="w-5 h-5 rounded-full bg-ida-green text-white text-xs flex items-center justify-center font-bold">
                  +
                </span>
              </div>

              <p className="text-[10px] text-ida-body uppercase tracking-wider font-medium mb-3">
                {plan.name}
              </p>

              <div className="flex items-baseline gap-1 mb-5">
                <span className="font-heading text-3xl font-black text-ida-green">
                  {plan.price}
                </span>
                <span className="text-lg text-ida-green">&euro;</span>
              </div>

              <ul className="space-y-2.5 mb-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-xs text-ida-body"
                  >
                    <svg
                      className="w-4 h-4 text-ida-green flex-shrink-0 mt-0.5"
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
                className="block w-full text-center bg-ida-green hover:bg-ida-green-dark text-white py-2.5 rounded-lg text-xs font-bold transition-colors"
              >
                Scopri di più
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
