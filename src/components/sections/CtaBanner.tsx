export default function CtaBanner() {
  return (
    <section>
      {/* Green CTA banner */}
      <div className="bg-white py-16 lg:py-26">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="bg-ida-green rounded-xl px-8 lg:px-10 py-5 lg:py-5">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
              <div className="max-w-lg">
                <h2 className="font-heading text-[22px] md:text-[25px] font-[450] text-white leading-[1.15]">
                  Trasforma il tuo edificio in una<br />
                  fonte di energia
                </h2>
                <p className="mt-3 text-[15px] text-white font-[450] leading-[1.3]">
                  I sistemi IDA Solar trasformano la luce del sole in energia <br />
                  affidabile per edifici, aziende e infrastrutture.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#sistemi"
                  className="bg-white text-ida-dark-bg px-4 py-2 text-[12px] font-[500] hover:bg-white/90 transition-colors"
                >
                  Scopri i Sistemi
                </a>
                <a
                  href="#contattaci"
                  className="bg-white text-ida-dark-bg px-4 py-2 text-[12px] font-[500] hover:bg-white/90 transition-colors"
                >
                  Richiedi Consulenza
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
