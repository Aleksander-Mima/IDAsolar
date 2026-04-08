import Image from "next/image";

export default function WhyIdaSolar() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <p className="text-sm text-ida-green font-medium mb-2">
              Perché scegliere IDA Solar?
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-ida-dark-bg leading-tight mb-8">
              Produzione italiana<br />
              Sistema energetico completo
            </h2>

            <div className="relative bg-ida-dark-bg rounded-lg overflow-hidden aspect-[4/3]">
              <Image
                src="/images/photos/modulo-fotovoltaico.png"
                alt="Modulo fotovoltaico IDA Solar"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-ida-green text-white text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase">
                  Produci Energia
                </span>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-ida-green text-white text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase">
                  Trasforma il Sistema
                </span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            <p className="text-sm text-ida-body leading-relaxed mb-8">
              Produzione, progettazione e installazione sono integrate
              per garantire qualità, efficienza e affidabilità nel tempo.
            </p>

            <div className="mb-8">
              <h3 className="font-heading text-xl font-semibold text-ida-dark-bg mb-3">
                Produzione Made in Italy
              </h3>
              <ul className="space-y-1.5 text-sm text-ida-body">
                <li>I sistemi IDA Solar sono progettati e prodotti in Italia</li>
                <li>secondo standard industriali europei.</li>
                <li className="mt-3">controllo diretto sulla qualità</li>
                <li>filiera produttiva tracciabile</li>
                <li>supporto tecnico e specializzazione</li>
                <li>affidabilità nel lungo periodo</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-ida-dark-bg mb-3">
                Sistemi energetici integrati
              </h3>
              <ul className="space-y-1.5 text-sm text-ida-body">
                <li>moduli innovativi ad alta efficienza</li>
                <li>inverter intelligenti</li>
                <li>sistemi di accumulo energetico</li>
                <li>gestione e monitoraggio del sistema</li>
              </ul>
              <p className="mt-4 text-sm text-ida-body italic">
                Ogni componente è progettato per lavorare insieme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
