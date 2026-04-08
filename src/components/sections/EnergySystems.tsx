import Image from "next/image";

const systems = [
  {
    image: "/images/photos/ida-core.png",
    name: "IDA CORE",
    subtitle: "Modulo fotovoltaico standard ad alta efficienza",
  },
  {
    image: "/images/photos/ida-power.png",
    name: "IDA POWER",
    subtitle: "Modulo premium ad alte prestazioni",
  },
  {
    image: "/images/photos/ida-alpine.png",
    name: "IDA ALPINE",
    subtitle: "Modulo per condizioni climatiche estreme",
  },
];

export default function EnergySystems() {
  return (
    <section id="sistemi" className="py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
          <h2 className="font-heading text-3xl md:text-[34px] font-medium text-ida-dark-bg italic leading-tight">
            I sistemi energetici
          </h2>
          <p className="text-sm text-ida-body leading-relaxed">
            IDA Solar sviluppa moduli fotovoltaici, inverter e sistemi di accumulo
            progettati per funzionare come un unico ecosistema energetico.
            Ogni prodotto è progettato per garantire efficienza, affidabilità e
            integrazione completa all&apos;interno della piattaforma energetica IDA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {systems.map((system) => (
            <div key={system.name} className="text-left">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-50 mb-4">
                <Image
                  src={system.image}
                  alt={system.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-ida-green text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">
                  {system.name}
                </span>
              </div>
              <p className="text-xs text-ida-body">
                {system.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
