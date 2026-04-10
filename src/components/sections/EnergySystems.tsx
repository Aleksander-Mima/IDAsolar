import Image from "next/image";

const systems = [
  {
    image: "/images/photos/ida-core.png",
    name: "IDA CORE",
    subtitle: "Modulo fotovoltaico standard ad alta efficienza",
  },
  {
    image: "/images/photos/ida-power.png",
    name: "IDA POWER",
    subtitle: "Modulo premium ad alte prestazioni",
  },
  {
    image: "/images/photos/ida-alpine.png",
    name: "IDA ALPINE",
    subtitle: "Modulo per condizioni climatiche estreme",
  },
];

export default function EnergySystems() {
  return (
    <section id="sistemi" className="pt-14 pb-16 lg:pt-18 lg:pb-26 3xl:pt-24 3xl:pb-32 4xl:pt-28 4xl:pb-40 bg-ida-light-bg">
      <div className="max-w-5xl 3xl:max-w-[1200px] 4xl:max-w-[1400px] mx-auto ps-4 lg:ps-8 3xl:ps-12 4xl:ps-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 3xl:gap-12 items-start mb-8 3xl:mb-14">
          <h2 className="font-heading text-[24px] md:text-[26px] 3xl:text-[32px] 4xl:text-[38px] font-bold tracking-widest leading-tight">
            I sistemi energetici
          </h2>
          <p className="text-[16px] 3xl:text-[19px] 4xl:text-[21px] text-[#8f8f8f] leading-[1.1] pt-3">
            IDA Solar sviluppa moduli fotovoltaici, inverter e sistemi di accumulo
            progettati per funzionare come un unico ecosistema energetico.
            Ogni prodotto è progettato per garantire efficienza, affidabilità e
            integrazione completa all&apos;interno della piattaforma energetica IDA.
          </p>
        </div>
      </div>

      <div className="max-w-7xl 3xl:max-w-[1500px] 4xl:max-w-[1800px] mx-auto px-4 lg:px-8 3xl:px-12 4xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 3xl:gap-14">
          {systems.map((system) => (
            <div key={system.name} className="relative text-left">
              <Image
                src={system.image}
                alt={system.name}
                width={1224}
                height={2396}
                className="w-full h-auto"
              />
              <div className="absolute bottom-[8%] left-0 right-0 flex justify-center">
                <div className="bg-[#5bc162] rounded-lg px-4 3xl:px-5 4xl:px-6 ms-10 py-0 w-6/11">
                  <p className="text-white text-sm 3xl:text-[16px] 4xl:text-[18px] tracking-widest leading-7 3xl:leading-8 4xl:leading-9">
                    {system.name}
                  </p>
                  <p className="text-white text-xs 3xl:text-[14px] 4xl:text-[15px] -mt-0.5 leading-[1.1]">
                    {system.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
