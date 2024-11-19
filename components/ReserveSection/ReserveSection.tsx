'use client';
import PriceImage from "./PriceImage";
import ReservationCalendar from "./ReservationCalendar";

export default function ReserveSection() {
  return (
    <section className="relative flex flex-col items-center justify-start h-screen w-full bg-[#fff8e8]">

      <h1 className="text-center text-[#f85600] text-4xl font-bold mb-8 my-2">
        FÉRIAS DE JULHO NO SALINAS MARAGOGI É <br /> DIVERSÃO GARANTIDA
      </h1>

      <p className="text-center text-[#847758] text-2xl">
        Férias de Julho é sinônimo de diversão em família! No Salinas Maragogi,
        as crianças são <br />
        superestrelas com estadia grátis*, Clubinho Infantil repleto de
        atividades, buffet especialmente <br />
        pensado para os pequenos paladares e muito mais!
      </p>

    
      <PriceImage />

   
      <div
        className="absolute w-full"
        style={{
          backgroundImage: 'url("/conchas.png")',
          backgroundSize: "1080px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          top: "500px",
          zIndex: 0,  
          padding: "110px",
        }}
      ></div>

      {/* Calendário */}
      <div className="relative z-10">
        <ReservationCalendar />
      </div>
    </section>
  );
}
