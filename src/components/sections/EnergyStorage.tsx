import Image from "next/image";

export default function EnergyStorage() {
  return (
    <section id="accumulo" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ida-dark">
            Accumulo energetico
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto">
            <Image
              src="/images/photos/inverter.png"
              alt="Inverter IDA Solar"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <p className="text-ida-body leading-relaxed">
              I sistemi di accumulo IDA Solar ti permettono di immagazzinare
              l&apos;energia prodotta durante il giorno e utilizzarla quando ne hai
              più bisogno, anche di notte o durante i picchi di consumo.
              Massimizza l&apos;autoconsumo e riduci la dipendenza dalla rete
              elettrica.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-ida-off-white rounded-xl p-4">
                <p className="font-heading font-bold text-2xl text-ida-dark">95%</p>
                <p className="text-sm text-ida-body mt-1">Efficienza di conversione</p>
              </div>
              <div className="bg-ida-off-white rounded-xl p-4">
                <p className="font-heading font-bold text-2xl text-ida-dark">10+</p>
                <p className="text-sm text-ida-body mt-1">Anni di garanzia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
