import Image from "next/image";

const articles = [
  {
    image: "/images/photos/energia-solare.jpg",
    title: "Incentivi fotovoltaico: guida completa 2024",
    excerpt:
      "Scopri tutti gli incentivi disponibili per l'installazione di impianti fotovoltaici residenziali e commerciali.",
    category: "Guide",
  },
  {
    image: "/images/photos/impiant.jpg",
    title: "Come funziona un impianto fotovoltaico",
    excerpt:
      "Una guida dettagliata sul funzionamento dei pannelli solari e sulla produzione di energia rinnovabile.",
    category: "Tecnologia",
  },
  {
    image: "/images/photos/batteria-solare.jpg",
    title: "Accumulo energetico: conviene davvero?",
    excerpt:
      "Analisi dei vantaggi economici e ambientali dei sistemi di accumulo per impianti fotovoltaici.",
    category: "Energia",
  },
];

export default function RecentArticles() {
  return (
    <section className="py-20 lg:py-28 bg-ida-off-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm text-ida-green font-bold uppercase tracking-wider mb-3">
            ARTICOLI RECENTI
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ida-dark">
            Energia, tecnologia e transizione energetica
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <a
              key={article.title}
              href="#"
              className="group bg-white rounded-2xl overflow-hidden border border-ida-border hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-ida-green text-white text-xs font-bold px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-ida-dark group-hover:text-ida-green transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-ida-body leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
