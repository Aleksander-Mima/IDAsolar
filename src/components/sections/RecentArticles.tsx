import Image from "next/image";

const articles = [
  {
    image: "/images/photos/incentivi-fotovoltaico.png",
    title: "Incentivi fotovoltaico\nItalia 2026",
  },
  {
    image: "/images/photos/impiant.jpg",
    title: "Come funziona un impianto\nfotovoltaico",
  },
  {
    image: "/images/photos/batteria-solare.jpg",
    title: "Sistemi di accumulo:\ncome funziona la batteria solare",
  },
];

export default function RecentArticles() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-ida-dark-bg mb-2">
            ARTICOLI RECENTI
          </p>
          <h2 className="font-heading text-xl md:text-2xl font-medium text-ida-green italic">
            Energia, tecnologia e transizione energetica
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <a
              key={article.title}
              href="#"
              className="group relative aspect-[4/3] rounded-xl overflow-hidden block"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block bg-ida-green text-white text-[11px] font-medium px-3 py-1.5 rounded-sm leading-tight whitespace-pre-line">
                  {article.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
