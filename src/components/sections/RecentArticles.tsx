import Image from "next/image";

const articles = [
  {
    image: "/images/photos/incentivi-fotovoltaico.png",
    title: "Incentivi fotovoltaico\nItalia 2026",
    bgClass: "bg-[#f5f5f5]",
    imageClass: "object-cover object-bottom",
  },
  {
    image: "/images/photos/impiant.jpg",
    title: "Come funziona un impianto\nfotovoltaico",
    bgClass: "",
    imageClass: "object-cover",
  },
  {
    image: "/images/photos/batteria-solare.jpg",
    title: "Sistemi di accumulo:\ncome funziona la batteria solare",
    bgClass: "bg-[#f5f5f5]",
    imageClass: "object-cover object-bottom",
  },
];

export default function RecentArticles() {
  return (
    <section className="pt-16 lg:pt-18 pb-20 lg:pb-28 3xl:pt-24 3xl:pb-36 4xl:pt-32 4xl:pb-44 bg-white">
      <div className="max-w-6xl 3xl:max-w-[1380px] 4xl:max-w-[1600px] mx-auto px-6 lg:px-12 3xl:px-16 4xl:px-20">
        <div className="text-center mb-18 3xl:mb-24 4xl:mb-28">
          <p className="text-[25px] 3xl:text-[30px] 4xl:text-[34px] font-[500] uppercase tracking-[0.009em] text-ida-dark-bg">
            ARTICOLI RECENTI
          </p>
          <h2 className="font-display text-[18px] md:text-[26px] 3xl:text-[32px] 4xl:text-[36px] font-[500] text-ida-green tracking-tighter">
            Energia, tecnologia e transizione energetica
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 3xl:gap-10">
          {articles.map((article) => (
            <a
              key={article.title}
              href="#"
              className={`group relative aspect-[4/5] rounded-xl overflow-hidden block ${article.bgClass}`}
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                className={`${article.imageClass} group-hover:scale-105 transition-transform duration-500`}
              />
              <div className="absolute bottom-5 left-5 right-5 3xl:bottom-7 3xl:left-7 3xl:right-7 4xl:bottom-9 4xl:left-9 4xl:right-9">
                <span className="block bg-white text-ida-green text-[14px] 3xl:text-[17px] 4xl:text-[19px] font-[500] px-5 py-3 3xl:px-6 3xl:py-4 4xl:px-7 4xl:py-5 rounded-md leading-[1.25] whitespace-pre-line">
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
