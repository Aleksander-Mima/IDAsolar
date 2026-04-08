import Image from "next/image";

const layers = [
  { label: "Vetro solare temperato", position: "top-[8%] left-[5%]" },
  { label: "Struttura in alluminio", position: "top-[8%] right-[5%]" },
  { label: "Incapsulante EVA", position: "top-[35%] right-[5%]" },
  { label: "Celle fotovoltaiche", position: "top-[50%] right-[5%]" },
  { label: "Backsheet protettivo", position: "bottom-[10%] left-1/2 -translate-x-1/2" },
];

export default function PanelStructure() {
  return (
    <section className="py-20 lg:py-28 bg-ida-dark-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Struttura del modulo fotovoltaico
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Ogni modulo è composto da diversi strati progettati per massimizzare
            le efficienza e garantire durabilità, adattabilità e lunga vita utile.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <Image
            src="/images/photos/modulo.png"
            alt="Struttura del modulo fotovoltaico esplosa"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          {/* Labels overlay */}
          <div className="absolute inset-0">
            {layers.map((layer) => (
              <div
                key={layer.label}
                className={`absolute ${layer.position} hidden lg:block`}
              >
                <span className="bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/20">
                  {layer.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
