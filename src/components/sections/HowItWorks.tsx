import Image from "next/image";

const steps = [
  {
    icon: "/images/icons/analisi energetica.svg",
    title: "Analisi energetica",
    description:
      "Ogni progetto inizia con uno studio tecnico dei consumi, della superficie disponibile e delle condizioni di esposizione. Questa analisi permette di definire la configurazione energetica più efficiente.",
  },
  {
    icon: "/images/icons/progettazione del sistema.svg",
    title: "Progettazione del sistema",
    description:
      "Il sistema viene configurato combinando moduli fotovoltaici, inverter e sistemi di accumulo per creare una piattaforma energetica stabile e scalabile.",
  },
  {
    icon: "/images/icons/produzione energetica.svg",
    title: "Produzione energetica continua",
    description:
      "Una volta attivo, il sistema produce energia rinnovabile per alimentare edifici e infrastrutture, riducendo la dipendenza dalla rete elettrica.",
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
      <div className="bg-white py-20 lg:pt-24 lg:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-[22px] md:text-[24px] font-[450] text-ida-green-deepest tracking-tighter">
              Come funziona il sistema IDA Solar
            </h2>
            <p className="mt-2 text-[14px] text-ida-dark-bg max-w-2xl mx-auto leading-[1.2] font-[450] tracking-tight">
              L&apos;approccio Ida Solar integra progettazione, tecnologia e gestione energetica per <br />
              trasformare edifici e infrastrutture in sistemi di produzione energetica affidabili.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.title} className="text-center px-4">
                <div className="h-24 mx-auto flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-display font-[450] text-[16px] text-ida-green-deepest mb-3 tracking-tighter">
                  {step.title}
                </h3>
                <p className="text-[12px] text-[#888888] leading-[1.1] font-[450] max-w-[330px] mx-auto tracking-tight">
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
