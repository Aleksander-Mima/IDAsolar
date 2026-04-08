import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden bg-ida-dark-bg">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/photos/energia-solare.png"
          alt="Pannelli solari su tetto"
          fill
          className="object-cover object-right-top"
          priority
        />
      </div>

      {/* Content — vertically centered between navbar (~62px) and bottom */}
      <div className="relative z-10 h-full flex items-center pt-[110px]">
        <div className="max-w-[1000px] mx-auto pl-6 pr-8 w-full">
          <div className="max-w-md">
            <h1 className="font-heading text-[34px] md:text-[40px] font-medium text-white leading-tight tracking-tighter">
              Energia solare
            </h1>
            <p className="mt-1 text-[16px] font-medium text-white">
              progettata per il futuro
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#sistemi"
                className="bg-white text-ida-dark-bg border border-white hover:bg-transparent hover:border-white/60 hover:text-white px-4 py-2 rounded-[3px] text-[12px] transition-colors"
              >
                Scopri i Sistemi
              </a>
              <a
                href="#contattaci"
                className="bg-ida-green hover:bg-ida-green-dark text-white px-4 py-2 rounded-[3px] text-[13px] font-medium transition-colors"
              >
                Richiedi Consulenza
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
