export default function MadeInItaly() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm text-ida-green font-bold uppercase tracking-wider mb-2">
              Produzione
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ida-dark-bg leading-tight">
              MADE IN ITALY
            </h2>
          </div>
          <div>
            <p className="text-sm text-ida-body leading-relaxed">
              I sistemi IDA Solar sono progettati e prodotti in Italia per garantire qualità,
              affidabilità e controllo diretto sulla filiera produttiva.
            </p>
            <p className="mt-3 text-sm text-ida-body leading-relaxed">
              L&apos;azienda progetta, produce e integra sistemi energetici completi, operando
              su ogni scala: residenziale, hospitality, industriale e parchi fotovoltaici.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
