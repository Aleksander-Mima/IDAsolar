import Image from "next/image";

export default function PanelStructure() {
  return (
    <section className="pt-12 lg:pt-16 3xl:pt-24 4xl:pt-28 pb-20 lg:pb-25 3xl:pb-32 4xl:pb-40 bg-white">
      <div className="max-w-7xl 3xl:max-w-[1500px] 4xl:max-w-[1800px] mx-auto px-6 lg:px-12 3xl:px-16 4xl:px-20">
        <div className="text-center mb-14 3xl:mb-20 4xl:mb-24">
          <h2 className="font-heading text-2xl md:text-[26px] 3xl:text-[32px] 4xl:text-[38px] font-medium tracking-tighter text-ida-green-deepest leading-tight">
            Struttura del modulo fotovoltaico
          </h2>
          <p className="mt-4 3xl:mt-6 4xl:mt-8 text-[16px] 3xl:text-[19px] 4xl:text-[21px] text-ida-dark-bg max-w-[540px] 3xl:max-w-[650px] 4xl:max-w-[730px] mx-auto text-center leading-[1.1]">
            Ogni modulo è composto da diversi strati progettati per proteggere <br /> le celle fotovoltaiche e garantire efficienza, stabilità e durata nel tempo
          </p>
        </div>

        <div className="max-w-5xl 3xl:max-w-[1200px] 4xl:max-w-[1400px] mx-auto mr-1">
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
