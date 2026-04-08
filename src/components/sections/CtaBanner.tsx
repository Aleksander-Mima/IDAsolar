import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      <Image
        src="/images/photos/produci-energia.jpg"
        alt="Impianto solare su tetto"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ida-dark-bg/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block bg-ida-green/20 border border-ida-green/30 rounded-full px-4 py-1 mb-6">
            <span className="text-ida-green text-sm font-medium">
              Trasforma il tuo edificio in una fonte di energia
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
            Inizia a produrre la tua energia oggi
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contattaci"
              className="bg-ida-green hover:bg-ida-green-light text-white px-8 py-3.5 rounded-lg text-sm font-bold transition-colors"
            >
              Richiedi Consulenza
            </a>
            <a
              href="#sistemi"
              className="border-2 border-white text-white hover:bg-white hover:text-ida-dark px-8 py-3.5 rounded-lg text-sm font-bold transition-colors"
            >
              Scopri i Sistemi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
