import Image from "next/image";

const layers = [
  { number: 1, label: "Vetro solare temperato", position: "top-[12%] left-[15%]" },
  { number: 2, label: "Cornice in alluminio", position: "top-[12%] right-[5%]" },
  { number: 3, label: "Incapsulante EVA", position: "top-[45%] right-[5%]" },
  { number: 4, label: "Celle fotovoltaiche", position: "top-[60%] right-[5%]" },
  { number: 5, label: "Backsheet protettivo", position: "bottom-[5%] left-1/2 -translate-x-1/2" },
];

export default function PanelStructure() {
  return (
    <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-ida-dark-bg">
            Struttura del modulo fotovoltaico
          </h2>
          <p className="mt-3 text-sm text-ida-body max-w-xl mx-auto leading-relaxed">
            Ogni modulo è composto da diversi strati progettati per proteggere le
            celle fotovoltaiche e garantire efficienza, stabilità e durata nel tempo
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
          <div className="absolute inset-0">
            {layers.map((layer) => (
              <div
                key={layer.label}
                className={`absolute ${layer.position} hidden lg:flex items-center gap-2`}
              >
                <span className="w-6 h-6 rounded-full bg-ida-green text-white text-xs font-bold flex items-center justify-center">
                  {layer.number}
                </span>
                <span className="text-xs text-ida-dark-bg font-medium">
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
