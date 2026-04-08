import Image from "next/image";

export default function EnergyStorage() {
  return (
    <section id="accumulo" className="py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-ida-green mb-4">
              Accumulo energetico
            </h2>
            <p className="text-sm text-ida-body leading-relaxed">
              L&apos;energia prodotta dai moduli fotovoltaici viene gestita
              dall&apos;inverter e può essere immagazzinata nei sistemi di
              accumulo per essere utilizzata quando necessario,
              garantendo continuità energetica anche nelle ore
              serali o nei momenti di maggiore consumo.
            </p>
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/photos/inverter.png"
              alt="Inverter IDA Solar"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
