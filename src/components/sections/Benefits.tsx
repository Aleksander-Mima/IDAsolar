import Image from "next/image";

const benefits = [
  {
    icon: "/images/icons/energia sostenibile.svg",
    title: "Energia sostenibile",
    description:
      "Produci energia pulita direttamente dal sole e alimenta la tua casa o azienda con una fonte rinnovabile a basse emissioni.",
    iconClass: "w-20 h-20",
  },
  {
    icon: "/images/icons/riduzione delle bollette.svg",
    title: "Riduzione delle bollette",
    description:
      "Produci la propria energia per ridurre i costi energetici e proteggerti dalle variazioni del prezzo dell'elettricità.",
    iconClass: "w-20 h-20",
  },
  {
    icon: "/images/icons/lunga durata.svg",
    title: "Lunga durata",
    description:
      "I sistemi fotovoltaici IDA Solar sono progettati per prestazioni affidabili nel lungo periodo, con componenti collaudati e garanzia operativa per oltre 25 anni.",
    iconClass: "w-20 h-20",
  },
  {
    icon: "/images/icons/controllo energia.svg",
    title: "Controllo intelligente dell'energia",
    description:
      "La gestione IDA Solar permette di monitorare e gestire la produzione e il consumo energetico, ottimizzando l'utilizzo dell'energia prodotta.",
    iconClass: "w-8 h-[52px]",
  },
];

export default function Benefits() {
  return (
    <section className="py-16 lg:py-20 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto ps-6 lg:ps-18 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-sm text-ida-green font-[450] uppercase tracking-wider mb-2">
              ENERGIA SOLARE
            </p>
            <h2 className="font-heading text-[24px] md:text-[26px] font-[450] text-ida-dark-bg leading-[1.05]">
              Risparmiare energia<br />
              Produrre valore
            </h2>
          </div>
          <p className="text-[15px] text-[#888888] leading-[1.3] pt-2">
            I sistemi fotovoltaici IDA Solar trasformano il tuo tetto in una fonte di
            energia pulita e controllata.Produzione solare, accumulo energetico
            e gestione intelligente lavorano insieme per ridurre i costi energetici
            e aumentare l&apos;indipendenza dalla rete.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-xl px-8 pt-12 pb-10 text-center aspect-square flex flex-col items-center justify-center min-h-[280px]"
            >
              <div className="h-20 mb-5 mx-auto flex items-center justify-center">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={80}
                  height={80}
                  className={`${benefit.iconClass} object-contain`}
                />
              </div>
              <h3 className="font-heading font-[450] text-[15px] text-ida-dark-bg mb-3">
                {benefit.title}
              </h3>
              <p className="text-[13px] text-ida-body leading-[1.4]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
