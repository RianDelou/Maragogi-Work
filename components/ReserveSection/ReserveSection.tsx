"use client";
import PriceImage from "./PriceImage";
import ReservationCalendar from "./ReservationCalendar";

export default function ReserveSection() {
  return (
    <section className="relative flex flex-col items-center justify-start min-h-[100vh] w-full bg-[#fff8e8]">
    
      <h1 className="text-center text-[#f85600] text-4xl font-bold my-4">
        FÉRIAS DE JULHO NO SALINAS MARAGOGI É <br /> DIVERSÃO GARANTIDA
      </h1>

      
      <p className="text-center text-[#847758] text-lg max-w-4xl mx-auto my-4">
        Férias de Julho é sinônimo de diversão em família! No Salinas Maragogi,
        as crianças são superestrelas com estadia grátis*, Clubinho Infantil
        repleto de atividades, buffet especialmente pensado para os pequenos
        paladares e muito mais!
      </p>

      <PriceImage />
      <div
  className="absolute w-full h-[250px] mt-96 hidden md:block"
  style={{
    backgroundImage: 'url("/conchas.png")',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
></div>


     
      <div className="relative z-10 mt-8">
        <ReservationCalendar />
      </div>
    </section>
  );
}
