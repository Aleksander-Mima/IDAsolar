import Image from "next/image";

export default function WhyIdaSolar() {
  return (
    <section className="py-20 lg:py-28 bg-ida-off-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product images */}
          <div className="flex gap-4">
            <div className="relative w-1/2 aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/images/photos/ida-core.png"
                alt="IDA Core sistema"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-1/2 aspect-[3/4] rounded-xl overflow-hidden mt-8">
              <Image
                src="/images/photos/ida-power.png"
                alt="IDA Power sistema"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text content */}
          <div>
            <p className="text-sm text-ida-green font-bold uppercase tracking-wider mb-3">
              Perché progetto IDA Solar
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ida-dark leading-tight">
              Produzione italiana<br />
              Sistema energetico completo
            </h2>
            <p className="mt-6 text-ida-body leading-relaxed">
              Produciamo, progettiamo e installiamo come integrato
              per garantire qualità, efficienza e affidabilità nel tempo.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-ida-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-ida-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-ida-dark">
                    Produzione Made in Italy
                  </h3>
                  <p className="text-sm text-ida-body mt-1">
                    Tutti i nostri prodotti sono progettati e realizzati in Italia con materiali di prima qualità.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-ida-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-ida-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-ida-dark">
                    Sistemi energetici integrati
                  </h3>
                  <p className="text-sm text-ida-body mt-1">
                    Soluzioni complete che combinano moduli, inverter e sistemi di accumulo per la massima efficienza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
