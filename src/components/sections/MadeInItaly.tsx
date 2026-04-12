export default function MadeInItaly() {
  return (
    <section className="py-16 lg:py-20 3xl:py-28 4xl:py-32 mt-8 bg-white">
      <div className="max-w-5xl 3xl:max-w-[1200px] 4xl:max-w-[1400px] mx-auto ps-6 lg:ps-8 3xl:ps-12 4xl:ps-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 3xl:gap-6 4xl:gap-8 items-start">
          <div>
            <p className="font-heading text-[26px] sm:text-[30px] 3xl:text-[38px] 4xl:text-[44px] tracking-tighter text-ida-dark-bg font-medium">
              Produzione
            </p>
            <h2 className="font-heading text-[26px] sm:text-[30px] 3xl:text-[38px] 4xl:text-[44px] font-semibold tracking-normal text-ida-dark-bg leading-none">
              MADE IN ITALY
            </h2>
          </div>
          <div className="pt-0 lg:pt-3 max-w-lg">
            <p className="text-[16px] 3xl:text-[19px] 4xl:text-[21px] text-ida-body tracking-tight leading-[1.1]">
              I sistemi IDA Solar sono progettati e prodotti in Italia per garantire qualità, <br />
              affidabilità e controllo diretto sulla filiera produttiva.
            </p>
            <p className="text-[16px] 3xl:text-[19px] 4xl:text-[21px] text-ida-body tracking-tight leading-[1.1]">
              L&apos;azienda progetta, produce e integra sistemi energetici completi, operando <br />
              su ogni scala: residenziale, hospitality, industriale e parchi fotovoltaici.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
