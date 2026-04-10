import Image from "next/image";

export default function PanelStructure() {
  return (
    <section className="pt-12 lg:pt-16 pb-20 lg:pb-25 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <h2 className="font-heading text-2xl md:text-[26px] font-medium tracking-tighter text-ida-green-deepest leading-tight">
            Struttura del modulo fotovoltaico
          </h2>
          <p className="mt-4 text-[16px] text-ida-dark-bg max-w-[490px] mx-auto text-left leading-[1.1]">
            Ogni modulo è composto da diversi strati progettati per proteggere le celle fotovoltaiche e garantire efficienza, stabilità e durata nel tempo
          </p>
        </div>

        <div className="max-w-5xl mx-auto mr-1">
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
