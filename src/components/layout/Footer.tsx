import Image from "next/image";

const footerColumns = [
  {
    title: "Azienda",
    links: ["Chi Siamo", "Tecnologia", "Produzione", "Progetti", "Blog", "Contatti"],
  },
  {
    title: "Prodotti",
    links: ["Moduli Fotovoltaici", "Sistemi di accumulo", "Inverter", "Sistemi Energetici", "Datasheet prodotti"],
  },
  {
    title: "Informazioni",
    links: ["Consulenza energetica", "Mercati di riferimento", "Residenziale", "Industriale", "Utility Scale"],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#010a14] overflow-hidden">
      {/* Background image (low opacity, offset downward) */}
      <div className="absolute inset-x-0 top-1 bottom-0 pointer-events-none">
        <Image
          src="/images/photos/modulo.png"
          alt=""
          fill
          className="object-cover object-[95%_5%] opacity-[0.08] scale-125"
        />
      </div>

      <div className="relative">
        {/* Contact bar */}
        <div>
          <div className="max-w-6xl 3xl:max-w-[1380px] 4xl:max-w-[1600px] mx-auto ps-6 pe-6 lg:ps-12 lg:pe-14 3xl:ps-16 3xl:pe-20 4xl:ps-20 4xl:pe-24 pt-10 pb-7">
            <div className="flex flex-col md:flex-row md:justify-between gap-6 3xl:gap-8 4xl:gap-10">
              <div>
                <p className="text-white text-[13px] 3xl:text-[15px] 4xl:text-[17px] font-[400] mb-1 3xl:mb-1.5 4xl:mb-2">Supporto</p>
                <p className="text-white text-[15px] 3xl:text-[18px] 4xl:text-[20px] font-[500]">info@idasolar.it</p>
              </div>
              <div>
                <p className="text-white text-[13px] 3xl:text-[15px] 4xl:text-[17px] font-[400] mb-1 3xl:mb-1.5 4xl:mb-2">Assistenza Clienti</p>
                <p className="text-white text-[15px] 3xl:text-[18px] 4xl:text-[20px] font-[500]">02 8079 4991</p>
              </div>
              <div>
                <p className="text-white text-[13px] 3xl:text-[15px] 4xl:text-[17px] font-[400] mb-1 3xl:mb-1.5 4xl:mb-2">La nostra posizione</p>
                <p className="text-white text-[15px] 3xl:text-[18px] 4xl:text-[20px] font-[500]">Italia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width divider */}
        <div className="border-t border-white" />

        {/* Main footer */}
        <div>
          <div className="max-w-6xl 3xl:max-w-[1380px] 4xl:max-w-[1600px] mx-auto px-6 lg:px-12 3xl:px-16 4xl:px-20 pt-22 pb-6 3xl:pt-28 3xl:pb-10 4xl:pt-32 4xl:pb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 3xl:gap-14 4xl:gap-16">
              {/* Logo & info */}
              <div>
                <Image
                  src="/images/logo/ida solar logo white.svg"
                  alt="IDA Solar"
                  width={200}
                  height={24}
                  className="3xl:w-[240px] 3xl:h-auto 4xl:w-[280px] 4xl:h-auto"
                />
                <p className="mt-6 pe-18 3xl:mt-8 4xl:mt-10 text-[10px] text-white leading-[1.1] max-w-xs 3xl:max-w-sm 4xl:max-w-md font-[500] text-justify">
                  IDA Solar è un produttore italiano di sistemi fotovoltaici che sviluppa moduli, inverter e sistemi di accumulo per edifici, aziende e infrastrutture energetiche.
                </p>
                <div className="flex gap-4 3xl:gap-5 4xl:gap-6 mt-6 3xl:mt-8 4xl:mt-10">
                  <a href="#" aria-label="Facebook" className="text-white hover:text-white/70 transition-colors">
                    <svg className="w-[18px] h-[18px] 3xl:w-[22px] 3xl:h-[22px] 4xl:w-[26px] 4xl:h-[26px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram" className="text-white hover:text-white/70 transition-colors">
                    <svg className="w-[18px] h-[18px] 3xl:w-[22px] 3xl:h-[22px] 4xl:w-[26px] 4xl:h-[26px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Link columns */}
              {footerColumns.map((col) => (
                <div key={col.title}>
                  <h4 className="font-heading font-[600] text-[18px] 3xl:text-[18px] 4xl:text-[20px] text-white mb-6 3xl:mb-8 4xl:mb-10">
                    {col.title}
                  </h4>
                  <ul className="">
                    {col.links.map((label) => (
                      <li key={label}>
                        <a
                          href="#"
                          className="text-[13px] 3xl:text-[15px] 4xl:text-[17px] text-white hover:text-white/70 transition-colors font-[400]"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom */}
            <div className="mt-12 lg:mt-20 3xl:mt-20 4xl:mt-24 text-center text-[12px] 3xl:text-[14px] 4xl:text-[16px] text-white font-[400]">
              Copyright &copy; 2026 IDA Solar &middot; Tutti i diritti riservati
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
