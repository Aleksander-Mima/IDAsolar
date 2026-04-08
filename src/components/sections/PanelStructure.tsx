import Image from "next/image";

export default function PanelStructure() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-[40px] font-bold text-ida-green leading-tight">
            Struttura del modulo fotovoltaico
          </h2>
          <p className="mt-4 text-sm text-ida-body max-w-lg mx-auto leading-relaxed">
            Ogni modulo è composto da diversi strati progettati per proteggere le
            celle fotovoltaiche e garantire efficienza, stabilità e durata nel tempo
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Image
            src="/images/photos/modulo-fotovoltaico.png"
            alt="Struttura del modulo fotovoltaico esplosa"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
