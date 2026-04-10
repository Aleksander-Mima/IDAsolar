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
    <section className="pt-16 lg:pt-18 pb-16 lg:pb-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[25px] font-[500] uppercase tracking-[0.009em] text-ida-dark-bg">
            ARTICOLI RECENTI
          </p>
          <h2 className="font-display text-[18px] md:text-[26px] font-[500] text-ida-green tracking-tighter">
            Energia, tecnologia e transizione energetica
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <a
              key={article.title}
              href="#"
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden block"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-block bg-white text-ida-green text-[14px] font-[500] px-5 py-3 rounded-md leading-[1.25] whitespace-pre-line">
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
