import Image from "next/image";

const benefits = [
  {
    icon: "/images/icons/energia sostenibile.svg",
    title: "Energia sostenibile",
    description:
      "Produci energia pulita direttamente dal sole e alimenta la tua casa o azienda con una fonte rinnovabile a basse emissioni.",
  },
  {
    icon: "/images/icons/riduzione delle bollette.svg",
    title: "Riduzione delle bollette",
    description:
      "Produci la propria energia per ridurre i costi energetici e proteggerti dalle variazioni del prezzo dell'elettricità.",
  },
  {
    icon: "/images/icons/lunga durata.svg",
    title: "Lunga durata",
    description:
      "I sistemi fotovoltaici IDA Solar sono progettati per prestazioni affidabili nel lungo periodo, con componenti collaudati e garanzia operativa per oltre 25 anni.",
  },
  {
    icon: "/images/icons/controllo energia.svg",
    title: "Controllo intelligente dell'energia",
    description:
      "La gestione IDA Solar permette di monitorare e gestire la produzione e il consumo energetico, ottimizzando l'utilizzo dell'energia prodotta.",
  },
];

export default function Benefits() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <p className="text-sm text-ida-green font-bold uppercase tracking-wider mb-2">
              ENERGIA SOLARE
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-ida-dark-bg leading-tight">
              Risparmiare energia<br />
              Produrre valore
            </h2>
          </div>
          <p className="text-sm text-ida-body leading-relaxed">
            I sistemi fotovoltaici IDA Solar trasformano il tuo tetto in una fonte di
            energia pulita e controllata. Produzione solare, accumulo energetico
            e gestione intelligente lavorano insieme per ridurre i costi energetici
            e aumentare l&apos;indipendenza dalla rete.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-xl p-6 shadow-sm text-center"
            >
              <div className="w-12 h-12 mb-4 mx-auto">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="font-heading font-semibold text-sm text-ida-dark-bg mb-2 underline decoration-ida-green underline-offset-4">
                {benefit.title}
              </h3>
              <p className="text-xs text-ida-body leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
