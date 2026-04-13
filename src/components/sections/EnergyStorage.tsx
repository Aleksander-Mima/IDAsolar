import Image from "next/image";

export default function EnergyStorage() {
  return (
    <section id="accumulo" className="py-18 lg:pt-31 lg:pb-20 3xl:pt-40 3xl:pb-28 4xl:pt-48 4xl:pb-36 bg-white">
      <div className="max-w-6xl 3xl:max-w-[1380px] 4xl:max-w-[1600px] mx-auto px-6 lg:ps-18 lg:pe-34 3xl:ps-24 3xl:pe-44 4xl:ps-28 4xl:pe-52">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 3xl:gap-12 4xl:gap-14 items-center">
          <div className="max-w-full lg:max-w-[350px] 3xl:max-w-[440px] 4xl:max-w-[500px] pt-14 3xl:pt-18 4xl:pt-20 leading-[1.1]">
            <h2 className="font-display text-[24px] md:text-[26px] 3xl:text-[32px] 4xl:text-[38px] font-[450] text-ida-green-deepest mb-4 3xl:mb-6 4xl:mb-8 tracking-tighter">
              Accumulo energetico
            </h2>
            <p className="text-[14px] 3xl:text-[17px] 4xl:text-[19px] text-[#888888] leading-[1.2] font-[450] tracking-tight">
              L&apos;energia prodotta dai moduli fotovoltaici viene gestita
              dall&apos;inverter e può essere immagazzinata nei sistemi di
              accumulo per essere utilizzata quando necessario,
              garantendo continuità energetica anche nelle ore
              serali o nei momenti di maggiore consumo.
            </p>
          </div>
          <div className="relative aspect-[4/3] lg:-mr-16 3xl:-mr-20 4xl:-mr-24 overflow-hidden">
            <Image
              src="/images/photos/inverter.png"
              alt="Inverter IDA Solar"
              fill
              className="object-contain scale-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
