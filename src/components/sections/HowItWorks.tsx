import Image from "next/image";

const steps = [
  {
    icon: "/images/icons/energia sostenibile.svg",
    title: "Analisi energetica",
    description: "Analizziamo i tuoi consumi e valutiamo il potenziale energetico del tuo edificio.",
  },
  {
    icon: "/images/icons/progettazione del sistema.svg",
    title: "Progettazione del sistema",
    description: "Progettiamo un sistema su misura per massimizzare la produzione energetica.",
  },
  {
    icon: "/images/icons/lunga durata.svg",
    title: "Installazione",
    description: "Installiamo il sistema con tecnici certificati e materiali di prima qualità.",
  },
  {
    icon: "/images/icons/produzione energetica.svg",
    title: "Produzione energetica continua",
    description: "Il tuo impianto inizia a produrre energia pulita dal primo giorno.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ida-dark">
            Come funziona IDA Solar
          </h2>
          <p className="mt-4 text-ida-body max-w-2xl mx-auto">
            L&apos;approccio IDA Solar integra progettazione, tecnologia e gestione energetica
            per garantire il massimo rendimento del tuo investimento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={step.title} className="text-center">
              <div className="relative mx-auto w-20 h-20 mb-5">
                <div className="w-20 h-20 bg-ida-off-white rounded-2xl flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={48}
                    height={48}
                  />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-ida-green rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {idx + 1}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-ida-dark mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-ida-body leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
