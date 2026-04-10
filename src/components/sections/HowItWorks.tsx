import Image from "next/image";

const steps = [
  {
    icon: "/images/icons/analisi energetica.svg",
    title: "Analisi energetica",
    description:
      "Ogni progetto inizia da un'analisi dei consumi, delle superfici disponibili e delle condizioni di esposizione. Questo studio permette di definire la configurazione energetica più efficiente.",
  },
  {
    icon: "/images/icons/progettazione del sistema.svg",
    title: "Progettazione del sistema",
    description:
      "Il sistema IDA Solar viene progettato selezionando moduli fotovoltaici, inverter e sistemi di accumulo per creare una piattaforma energetica stabile e scalabile.",
  },
  {
    icon: "/images/icons/produzione energetica.svg",
    title: "Produzione energetica continua",
    description:
      "Una volta attivo, il sistema produce energia rinnovabile per alimentare edifici e infrastrutture, riducendo la dipendenza dalla rete esterna.",
  },
];

export default function HowItWorks() {
  return (
    <section>
      {/* Background image */}
      <div className="relative h-[69vh]">
        <Image
          src="/images/photos/solar.jpg"
          alt="Pannelli solari"
          fill
          className="object-cover object-[center_70%]"
        />
      </div>

      {/* Content */}
      <div className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-[26px] md:text-[30px] font-[450] text-ida-green-deepest tracking-tight">
              Come funziona il sistema IDA Solar
            </h2>
            <p className="mt-4 text-[15px] text-ida-dark-bg max-w-2xl mx-auto leading-[1.4] font-[450]">
              L&apos;approccio Ida Solar integra progettazione, tecnologia e gestione energetica per
              trasformare edifici e infrastrutture in sistemi di produzione energetica affidabili.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.title} className="text-center px-4">
                <div className="h-24 mx-auto mb-6 flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-display font-[450] text-[18px] text-ida-green-deepest mb-3">
                  {step.title}
                </h3>
                <p className="text-[13px] text-ida-dark-bg leading-[1.5] font-[450] max-w-[280px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
