import Image from "next/image";

export default function WhyIdaSolar() {
  return (
    <section className="pt-24 pb-24 lg:pt-30 lg:pb-30 bg-white">
      <div className="max-w-5xl mx-auto pe-6 ps-3 lg:pe-12 lg:ps-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-11 items-start">
          {/* Left column */}
          <div>
            <p className="text-[22px] text-ida-green tracking-tight mb-3">
              Perché scegliere IDA Solar?
            </p>
            <h2 className="font-heading text-[22px] md:text-[26px] font-[450] tracking-tight text-[#06413e] leading-[1.1] mb-12">
              Produzione italiana<br />
              Sistema energetico completo
            </h2>

            <div className="relative bg-ida-dark-bg overflow-visible aspect-[4/5] w-2/3">
              <Image
                src="/images/photos/produci-energia.jpg"
                alt="Modulo fotovoltaico IDA Solar"
                fill
                className="object-cover"
              />
              <div className="absolute -top-3 -right-6">
                <span className="bg-[#0b7052] text-white text-[11px] font-bold px-4 py-2.5 rounded-md uppercase tracking-wider">
                  Produci Energia
                </span>
              </div>
              <div className="absolute -bottom-0 -left-7">
                <span className="bg-ida-green text-white text-[11px] font-bold px-2 py-2.5 rounded-md uppercase tracking-wider">
                  Trasforma e Gestisci
                </span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            <p className="text-[18px] text-[#888888] leading-[1.3] mb-24">
              Produzione, progettazione e installazione sono integrate
              per garantire qualità, efficienza e affidabilità nel tempo.
            </p>

            <div className="mb-14">
              <h3 className="font-heading text-[23px] font-[450] tracking-tight text-[#06413e] mb-5">
                Produzione Made in Italy
              </h3>
              <p className="text-[12px] text-[#888888] font-[450] leading-[1.1]">
                I sistemi IDA Solar sono progettati e prodotti in Italia <br />
                secondo standard industriali europei.
              </p>
              <div className="mt-4 space-y-0.5 text-[12px] text-[#888888] font-[450] leading-[1.1]">
                <p>controllo diretto sulla qualità</p>
                <p>filiera produttiva tracciabile</p>
                <p>supporto tecnico e specializzazione</p>
                <p>affidabilità nel lungo periodo</p>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-[23px] font-[450] tracking-tight text-[#06413e] mb-5">
                Sistemi energetici integrati
              </h3>
              <div className="mt-4 space-y-0.5 text-[12px] text-[#888888] font-[450] leading-[1.1]">
                <p>moduli innovativi ad alta efficienza</p>
                <p>inverter intelligenti</p>
                <p>sistemi di accumulo energetico</p>
                <p>gestione e monitoraggio del sistema</p>
              </div>
              <p className="mt-4 text-[12px] text-[#888888] font-[450] leading-[1.1]">
                Ogni componente è progettato per lavorare insieme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
