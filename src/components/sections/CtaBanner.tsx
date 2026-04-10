import Image from "next/image";

export default function CtaBanner() {
  return (
    <section>
      {/* Green CTA banner */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="bg-ida-green rounded-xl px-10 lg:px-14 py-10 lg:py-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-lg">
                <h2 className="font-heading text-[24px] md:text-[28px] font-[450] text-white leading-[1.15]">
                  Trasforma il tuo edificio in una<br />
                  fonte di energia
                </h2>
                <p className="mt-4 text-[14px] text-white leading-[1.3]">
                  I sistemi IDA Solar trasformano la luce del sole in energia
                  affidabile per edifici, aziende e infrastrutture.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#sistemi"
                  className="bg-white text-ida-dark-bg px-5 py-3 rounded-[4px] text-[13px] font-[500] hover:bg-white/90 transition-colors"
                >
                  Scopri i Sistemi
                </a>
                <a
                  href="#contattaci"
                  className="bg-white text-ida-dark-bg px-5 py-3 rounded-[4px] text-[13px] font-[500] hover:bg-white/90 transition-colors"
                >
                  Richiedi Consulenza
                </a>
              </div>
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
