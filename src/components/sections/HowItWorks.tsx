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
      <div className="relative h-[45vh]">
        <Image
          src="/images/photos/solar.jpg"
          alt="Pannelli solari"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-ida-dark-bg">
              Come funziona il sistema IDA Solar
            </h2>
            <p className="mt-3 text-sm text-ida-body max-w-2xl mx-auto leading-relaxed">
              L&apos;approccio Ida Solar integra progettazione, tecnologia e gestione energetica per
              trasformare edifici e infrastrutture in sistemi di produzione energetica affidabili.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-xl flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={36}
                    height={36}
                  />
                </div>
                <h3 className="font-heading font-semibold text-sm text-ida-dark-bg mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-ida-body leading-relaxed">
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
