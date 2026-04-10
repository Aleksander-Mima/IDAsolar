import Image from "next/image";

export default function EnergyStorage() {
  return (
    <section id="accumulo" className="py-18 lg:pt-31 lg:pb-20 bg-white">
      <div className="max-w-6xl mx-auto ps-6 lg:ps-18 pe-15 lg:pe-34">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-[350px] pt-14 leading-[1.1]">
            <h2 className="font-display text-[24px] md:text-[26px] font-[450] text-ida-green-deepest mb-4 tracking-tighter">
              Accumulo energetico
            </h2>
            <p className="text-[14px] text-[#888888] leading-[1.2] font-[450] tracking-tight">
              L&apos;energia prodotta dai moduli fotovoltaici viene gestita
              dall&apos;inverter e può essere immagazzinata nei sistemi di
              accumulo per essere utilizzata quando necessario,
              garantendo continuità energetica anche nelle ore
              serali o nei momenti di maggiore consumo.
            </p>
          </div>
          <div className="relative aspect-[4/3] lg:-mr-16">
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
