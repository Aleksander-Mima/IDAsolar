import Image from "next/image";

const systems = [
  {
    image: "/images/photos/ida-core.png",
    alt: "IDA Core",
  },
  {
    image: "/images/photos/ida-power.png",
    alt: "IDA Power",
  },
  {
    image: "/images/photos/ida-alpine.png",
    alt: "IDA Alpine",
  },
  {
    image: "/images/photos/energia-solare.png",
    alt: "Energia Solare",
  },
];

export default function EnergySystems() {
  return (
    <section id="sistemi" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ida-dark">
              I sistemi energetici
            </h2>
            <p className="mt-4 text-ida-body leading-relaxed">
              IDA Solar sviluppa e installa sistemi energetici completi,
              progettati per massimizzare l&apos;efficienza e la produzione di
              energia rinnovabile. Dalla progettazione alla manutenzione,
              offriamo un servizio completo.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {systems.map((system) => (
            <div
              key={system.alt}
              className="relative aspect-[3/4] rounded-xl overflow-hidden bg-ida-dark group"
            >
              <Image
                src={system.image}
                alt={system.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
