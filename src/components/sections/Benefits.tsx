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
    iconClass: "w-16 h-16",
  },
  {
    icon: "/images/icons/controllo energia.svg",
    title: "Controllo intelligente dell'energia",
    description:
      "La gestione IDA Solar permette di monitorare e gestire la produzione e il consumo energetico, ottimizzando l'utilizzo dell'energia prodotta.",
    iconClass: "w-9 h-14 mt-4",
  },
];

export default function Benefits() {
  return (
    <section className="pt-18 pb-18 lg:pt-24 lg:pb-24 3xl:pt-32 3xl:pb-32 4xl:pt-40 4xl:pb-40 bg-[#f5f5f5]">
      <div className="max-w-6xl 3xl:max-w-[1380px] 4xl:max-w-[1600px] mx-auto ps-6 pe-6 lg:ps-18 lg:pe-0 3xl:ps-24 4xl:ps-28 mb-12 lg:mb-26 3xl:mb-32 4xl:mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 3xl:gap-12 4xl:gap-14 items-start">
          <div>
            <p className="text-[20px] 3xl:text-[24px] 4xl:text-[28px] text-ida-green font-[450] uppercase tracking-tighter mb-3 3xl:mb-4 4xl:mb-5">
              ENERGIA SOLARE
            </p>
            <h2 className="font-display text-[24px] md:text-[26px] 3xl:text-[32px] 4xl:text-[38px] tracking-tighter font-[450] text-#06413e leading-[1.1]">
              Risparmiare energia<br />
              Produrre valore
            </h2>
          </div>
          <p className="text-[16px] 3xl:text-[19px] 4xl:text-[21px] text-[#888888] font-semibold leading-[1.3] tracking-tight pt-2">
            I sistemi fotovoltaici IDA Solar trasformano il tuo tetto in una fonte di
            energia pulita e controllata. Produzione solare, accumulo energetico e gestione intelligente lavorano insieme per ridurre i costi energetici e aumentare l&apos;indipendenza dalla rete.
          </p>
        </div>
      </div>

      <div className="max-w-7xl 3xl:max-w-[1500px] 4xl:max-w-[1800px] mx-auto px-6 lg:px-12 3xl:px-16 4xl:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 3xl:gap-8 4xl:gap-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-xl px-7 pt-8 pb-6 3xl:px-9 3xl:pt-10 3xl:pb-8 4xl:px-11 4xl:pt-12 4xl:pb-10 text-center aspect-auto sm:aspect-square flex flex-col items-center justify-start min-h-[270px] 3xl:min-h-[320px] 4xl:min-h-[370px]"
            >
              <div className="h-20 3xl:h-24 4xl:h-28 mb-9 3xl:mb-11 4xl:mb-13 mx-auto flex items-center justify-center">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={80}
                  height={80}
                  className={`${benefit.iconClass} 3xl:scale-125 4xl:scale-[1.4] object-contain`}
                />
              </div>
              <h3 className="font-heading font-[450] text-[15px] 3xl:text-[18px] 4xl:text-[20px] text-ida-dark-bg mb-3 3xl:mb-4 4xl:mb-5">
                {benefit.title}
              </h3>
              <p className="text-[12px] 3xl:text-[14px] 4xl:text-[16px] text-[#888888] font-[550] leading-[1.2]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
