export default function CtaBanner() {
  return (
    <section>
      {/* Green CTA banner */}
      <div className="bg-white py-16 lg:py-26 3xl:py-32 4xl:py-40">
        <div className="max-w-5xl 3xl:max-w-[1200px] 4xl:max-w-[1400px] mx-auto px-6 lg:px-12 3xl:px-16 4xl:px-20">
          <div className="bg-ida-green rounded-xl px-8 lg:px-10 py-5 lg:py-5 3xl:px-14 3xl:py-8 4xl:px-16 4xl:py-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
              <div className="max-w-lg 3xl:max-w-xl 4xl:max-w-2xl">
                <h2 className="font-heading text-[22px] md:text-[25px] 3xl:text-[30px] 4xl:text-[36px] font-[450] text-white leading-[1.15]">
                  Trasforma il tuo edificio in una<br />
                  fonte di energia
                </h2>
                <p className="mt-3 3xl:mt-4 4xl:mt-5 text-[15px] 3xl:text-[18px] 4xl:text-[20px] text-white font-[450] leading-[1.3]">
                  I sistemi IDA Solar trasformano la luce del sole in energia <br />
                  affidabile per edifici, aziende e infrastrutture.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 3xl:gap-5 4xl:gap-6">
                <a
                  href="#sistemi"
                  className="bg-white text-ida-dark-bg px-4 py-2 3xl:px-5 3xl:py-2.5 4xl:px-6 4xl:py-3 text-[12px] 3xl:text-[14px] 4xl:text-[16px] font-[500] hover:bg-white/90 transition-colors"
                >
                  Scopri i Sistemi
                </a>
                <a
                  href="#contattaci"
                  className="bg-white text-ida-dark-bg px-4 py-2 3xl:px-5 3xl:py-2.5 4xl:px-6 4xl:py-3 text-[12px] 3xl:text-[14px] 4xl:text-[16px] font-[500] hover:bg-white/90 transition-colors"
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
