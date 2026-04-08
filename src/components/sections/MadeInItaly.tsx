import Image from "next/image";

export default function MadeInItaly() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-ida-green font-bold uppercase tracking-wider mb-3">
              Produzione
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ida-dark leading-tight">
              MADE IN ITALY
            </h2>
            <p className="mt-6 text-ida-body leading-relaxed">
              I prodotti IDA Solar sono progettati e prodotti in Italia per
              garantire i più alti standard di qualità, affidabilità e
              prestazioni. Investiamo in ricerca, innovazione e tecnologia per
              offrire soluzioni fotovoltaiche all&apos;avanguardia.
            </p>
          </div>
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
            <Image
              src="/images/photos/modulo-fotovoltaico.png"
              alt="Modulo fotovoltaico IDA Solar"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
