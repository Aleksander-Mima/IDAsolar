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
      <div className="relative z-10 h-full flex items-center pt-[62px]">
        <div className="max-w-[1100px] mx-auto px-8 w-full">
          <div className="max-w-md">
            <h1 className="font-heading text-[34px] md:text-[40px] font-medium text-white leading-tight tracking-tight">
              Energia solare
            </h1>
            <p className="mt-2 text-[14px] text-ida-body-light">
              progettata per il futuro
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#sistemi"
                className="border border-white/60 text-white hover:bg-white hover:text-ida-dark-bg px-5 py-2 rounded-[3px] text-[13px] transition-colors"
              >
                Scorpi i Sistemi
              </a>
              <a
                href="#contattaci"
                className="bg-ida-green hover:bg-ida-green-dark text-white px-5 py-2 rounded-[3px] text-[13px] font-medium transition-colors"
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
