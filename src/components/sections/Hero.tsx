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
      <div className="relative z-10 h-full flex items-center pt-[110px] 3xl:pt-[140px] 4xl:pt-[170px]">
        <div className="max-w-5xl 3xl:max-w-[1200px] 4xl:max-w-[1400px] mx-auto px-6 lg:px-12 3xl:px-16 4xl:px-20 w-full">
          <div className="max-w-md 3xl:max-w-lg 4xl:max-w-xl">
            <h1 className="font-heading text-[34px] md:text-[40px] 3xl:text-[52px] 4xl:text-[60px] font-medium text-white leading-tight tracking-tighter">
              Energia solare
            </h1>
            <p className="mt-1 3xl:mt-2 text-[16px] 3xl:text-[20px] 4xl:text-[22px] font-medium text-white italic">
              progettata per il futuro
            </p>
            <div className="mt-6 3xl:mt-8 4xl:mt-10 flex flex-wrap gap-3 3xl:gap-4">
              <a
                href="#sistemi"
                className="bg-white text-ida-dark-bg border border-white hover:bg-transparent hover:border-white/60 hover:text-white px-4 py-2 3xl:px-5 3xl:py-2.5 4xl:px-6 4xl:py-3 rounded-[3px] text-[12px] 3xl:text-[14px] 4xl:text-[16px] font-medium transition-colors"
              >
                Scopri i Sistemi
              </a>
              <a
                href="#contattaci"
                className="bg-ida-green hover:bg-ida-green-dark text-white px-4 py-2 3xl:px-5 3xl:py-2.5 4xl:px-6 4xl:py-3 rounded-[3px] text-[12px] 3xl:text-[14px] 4xl:text-[16px] font-medium transition-colors"
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
