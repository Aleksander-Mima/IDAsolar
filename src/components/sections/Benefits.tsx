import Image from "next/image";

const benefits = [
  {
    icon: "/images/icons/energia sostenibile.svg",
    title: "Energia sostenibile",
    description:
      "Produci energia pulita e rinnovabile, contribuendo alla riduzione delle emissioni di CO2.",
  },
  {
    icon: "/images/icons/riduzione delle bollette.svg",
    title: "Riduzione delle bollette",
    description:
      "Risparmia sui costi energetici producendo la tua energia direttamente dal sole.",
  },
  {
    icon: "/images/icons/lunga durata.svg",
    title: "Lunga durata",
    description:
      "I nostri sistemi sono progettati per durare oltre 25 anni con garanzia completa.",
  },
  {
    icon: "/images/icons/controllo energia.svg",
    title: "Controllo intelligente",
    description:
      "Monitora e gestisci il tuo impianto in tempo reale con la nostra app dedicata.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm text-ida-green font-bold uppercase tracking-wider mb-3">
            PERCH&Eacute; SOLARE
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ida-dark">
            Risparmiare energia
          </h2>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ida-dark">
            Produrre valore
          </h2>
          <p className="mt-4 text-ida-body max-w-2xl mx-auto">
            L&apos;adozione di un impianto fotovoltaico IDA Solar ti permetterà di risparmiare
            e di contribuire attivamente alla transizione energetica e alla sostenibilità ambientale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-5 bg-white rounded-2xl shadow-sm border border-ida-border flex items-center justify-center group-hover:shadow-md transition-shadow">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="font-heading font-semibold text-ida-dark mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-ida-body leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
