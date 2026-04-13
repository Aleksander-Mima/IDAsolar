import Image from "next/image";

export default function WhyIdaSolar() {
  return (
    <section className="pt-20 pb-24 lg:pt-26 lg:pb-30 3xl:pt-40 3xl:pb-40 4xl:pt-44 4xl:pb-48 bg-white overflow-hidden">
      <div className="max-w-[1050px] 3xl:max-w-[1250px] 4xl:max-w-[1450px] mx-auto ps-6 lg:ps-3 3xl:ps-6 4xl:ps-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-11 3xl:gap-16 4xl:gap-20 items-start">
          {/* Left column */}
          <div>
            <p className="text-[22px] 3xl:text-[28px] 4xl:text-[32px] text-ida-green tracking-tight mb-3 3xl:mb-4 4xl:mb-5">
              Perché scegliere IDA Solar?
            </p>
            <h2 className="font-heading text-[22px] md:text-[26px] 3xl:text-[32px] 4xl:text-[38px] font-[450] tracking-tight text-[#06413e] leading-[1.1] mb-12 3xl:mb-16 4xl:mb-20">
              Produzione italiana<br />
              Sistema energetico completo
            </h2>

            <div className="relative bg-ida-dark-bg overflow-visible aspect-[4/5] w-full max-w-xs sm:max-w-none sm:w-2/3 mx-auto lg:mx-0">
              <Image
                src="/images/photos/produci-energia.jpg"
                alt="Modulo fotovoltaico IDA Solar"
                fill
                className="object-cover"
              />
              <div className="absolute -top-3 -right-3 sm:-right-6">
                <span className="bg-[#0b7052] text-white text-[11px] 3xl:text-[13px] 4xl:text-[15px] font-bold px-4 py-2.5 3xl:px-5 3xl:py-3 4xl:px-6 4xl:py-3.5 rounded-md uppercase tracking-wider">
                  Produci Energia
                </span>
              </div>
              <div className="absolute -bottom-0 -left-3 sm:-left-7">
                <span className="bg-ida-green text-white text-[11px] 3xl:text-[13px] 4xl:text-[15px] font-bold px-2 py-2.5 3xl:px-3 3xl:py-3 4xl:px-4 4xl:py-3.5 rounded-md uppercase tracking-wider">
                  Trasforma e Gestisci
                </span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            <p className="text-[18px] 3xl:text-[22px] 4xl:text-[24px] text-[#888888] leading-[1.3] mb-10 lg:mb-24 3xl:mb-32 4xl:mb-40">
              Produzione, progettazione e installazione sono integrate
              per garantire qualità, efficienza e affidabilità nel tempo.
            </p>

            <div className="mb-14 3xl:mb-20 4xl:mb-24">
              <h3 className="font-heading text-[23px] 3xl:text-[28px] 4xl:text-[32px] font-[450] tracking-tight text-[#06413e] mb-5 3xl:mb-7 4xl:mb-8">
                Produzione Made in Italy
              </h3>
              <p className="text-[12px] 3xl:text-[15px] 4xl:text-[17px] text-[#888888] font-[450] leading-[1.1]">
                I sistemi IDA Solar sono progettati e prodotti in Italia <br /> secondo standard industriali europei.
              </p>
              <div className="mt-4 3xl:mt-5 4xl:mt-6 space-y-0.5 text-[12px] 3xl:text-[15px] 4xl:text-[17px] text-[#888888] font-[450] leading-[1.1]">
                <p>controllo diretto sulla qualità</p>
                <p>filiera produttiva tracciabile</p>
                <p>supporto tecnico specializzato</p>
                <p>affidabilità nel lungo periodo</p>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-[23px] 3xl:text-[28px] 4xl:text-[32px] font-[450] tracking-tight text-[#06413e] mb-5 3xl:mb-7 4xl:mb-8">
                Sistemi energetici integrati
              </h3>
              <div className="mt-4 3xl:mt-5 4xl:mt-6 space-y-0.5 text-[12px] 3xl:text-[15px] 4xl:text-[17px] text-[#888888] font-[450] leading-[1.1]">
                <p>moduli innovativi ad alta efficienza</p>
                <p>inverter intelligenti</p>
                <p>sistemi di accumulo energetico</p>
                <p>gestione e monitoraggio del sistema</p>
              </div>
              <p className="mt-4 3xl:mt-5 4xl:mt-6 text-[12px] 3xl:text-[15px] 4xl:text-[17px] text-[#888888] font-[450] leading-[1.1]">
                Ogni componente è progettato per lavorare insieme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
