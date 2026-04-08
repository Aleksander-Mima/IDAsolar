import Image from "next/image";

const footerColumns = [
  {
    title: "Azienda",
    links: [
      { label: "Chi Siamo", href: "#" },
      { label: "Produzione", href: "#" },
      { label: "Sostenibilita", href: "#" },
      { label: "Certificazioni", href: "#" },
      { label: "Contatti", href: "#" },
    ],
  },
  {
    title: "Prodotti",
    links: [
      { label: "Moduli Fotovoltaici", href: "#" },
      { label: "Inverter", href: "#" },
      { label: "Sistemi di Accumulo", href: "#" },
      { label: "Sistemi Solari", href: "#" },
      { label: "Accessori", href: "#" },
    ],
  },
  {
    title: "Informazioni",
    links: [
      { label: "Consulenza energetica", href: "#" },
      { label: "Installazione", href: "#" },
      { label: "Manutenzione", href: "#" },
      { label: "Garanzia", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ida-dark-bg text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & info */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo/ida solar logo white.svg"
              alt="IDA Solar"
              width={160}
              height={26}
            />
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-sm">
              IDA Solar progetta e produce sistemi fotovoltaici innovativi Made
              in Italy per un futuro energetico sostenibile.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-ida-green transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-ida-green transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-sm mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          Copyright &copy; 2024 IDA Solar. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
