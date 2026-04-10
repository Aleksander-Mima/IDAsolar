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
      <div className="bg-white py-20 lg:pt-24 lg:pb-32 3xl:pt-32 3xl:pb-40 4xl:pt-40 4xl:pb-48">
        <div className="max-w-6xl 3xl:max-w-[1380px] 4xl:max-w-[1600px] mx-auto px-6 lg:px-12 3xl:px-16 4xl:px-20">
          <div className="text-center mb-16 3xl:mb-20 4xl:mb-24">
            <h2 className="font-display text-[22px] md:text-[24px] 3xl:text-[30px] 4xl:text-[36px] font-[450] text-ida-green-deepest tracking-tighter">
              Come funziona il sistema IDA Solar
            </h2>
            <p className="mt-2 3xl:mt-4 4xl:mt-5 text-[14px] 3xl:text-[17px] 4xl:text-[19px] text-ida-dark-bg max-w-2xl 3xl:max-w-3xl 4xl:max-w-4xl mx-auto leading-[1.2] font-[450] tracking-tight">
              L&apos;approccio Ida Solar integra progettazione, tecnologia e gestione energetica per <br />
              trasformare edifici e infrastrutture in sistemi di produzione energetica affidabili.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 3xl:gap-14 4xl:gap-16">
            {steps.map((step) => (
              <div key={step.title} className="text-center px-4">
                <div className="h-24 3xl:h-28 4xl:h-32 mx-auto flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={90}
                    height={90}
                    className="object-contain 3xl:scale-125 4xl:scale-[1.4]"
                  />
                </div>
                <h3 className="font-display font-[450] text-[16px] 3xl:text-[20px] 4xl:text-[22px] text-ida-green-deepest mb-3 3xl:mb-4 4xl:mb-5 tracking-tighter">
                  {step.title}
                </h3>
                <p className="text-[12px] 3xl:text-[15px] 4xl:text-[17px] text-[#888888] leading-[1.1] font-[450] max-w-[330px] 3xl:max-w-[400px] 4xl:max-w-[450px] mx-auto tracking-tight">
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
