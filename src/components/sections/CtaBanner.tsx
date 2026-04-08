import Image from "next/image";

export default function CtaBanner() {
  return (
    <section>
      {/* Green CTA banner */}
      <div className="bg-ida-green">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">
                Trasforma il tuo edificio in una fonte di energia
              </h2>
              <p className="mt-2 text-sm text-white/80">
                I sistemi IDA Solar trasformano la luce del sole in energia
                affidabile per edifici, aziende e infrastrutture.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#sistemi"
                className="bg-white text-ida-dark-bg border border-white px-4 py-2 rounded-[3px] text-[12px] font-medium hover:bg-white/90 transition-colors"
              >
                Scopri i Sistemi
              </a>
              <a
                href="#contattaci"
                className="bg-white text-ida-dark-bg border border-white px-4 py-2 rounded-[3px] text-[12px] font-medium hover:bg-white/90 transition-colors"
              >
                Richiedi Consulenza
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width installation photo */}
      <div className="relative h-[50vh]">
        <Image
          src="/images/photos/impiant.jpg"
          alt="Installazione impianto solare"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
