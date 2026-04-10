import Image from "next/image";

const plans = [
  {
    icon: "/images/products/ida core.svg",
    badge: "CORE",
    name: "SISTEMA FOTOVOLTAICO STANDARD",
    price: "6000",
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
    price: "8000",
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
    <section className="pt-20 pb-22 lg:pt-19 lg:pb-29 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-[21px] md:text-[25px] font-[450] text-ida-green-deepest tracking-tighter">
            Soluzioni fotovoltaiche
          </h2>
          <p className="mt-2 text-[14px] text-ida-dark-bg max-w-xl mx-auto leading-[1.2] font-[450] tracking-tight">
            Energia solare progettata per edifici e infrastrutture. <br />
            Moduli, inverter e accumulo in un unico sistema integrato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.badge}
              className="bg-white rounded-lg px-8 pt-4 pb-9 flex flex-col"
            >
              {/* Badge pill */}
              <div className="flex items-center justify-center rounded-full mb-8">
                <Image
                  src={plan.icon}
                  alt={plan.badge}
                  width={200}
                  height={200}
                  className="object-contain shrink-0"
                />
              </div>

              {/* Product name */}
              <p className="text-center text-[14px] text-[#000000] uppercase tracking-[0.08em] font-[500] mb-4">
                {plan.name}
              </p>

              {/* Price */}
              <div className="flex items-baseline justify-center gap-1 mb-8">
                <span className="font-heading text-[30px] leading-none font-[600] text-[#1aaf6b] tracking-tight">
                  {plan.price}
                </span>
                <span className="font-body text-[30px] leading-none font-[500] text-[#1aaf6b]">
                  &euro;
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-9 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-[13px] text-ida-dark-bg font-[450]"
                  >
                    <span className="w-4 h-4 rounded-full bg-ida-green flex items-center justify-center shrink-0">
                      <svg
                        className="w-2.5 h-2.5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a
                href="#contattaci"
                className="block w-1/2 mx-auto text-center bg-ida-green hover:bg-ida-green-dark text-white py-2 rounded-xs text-[14px] font-[500] transition-colors"
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
