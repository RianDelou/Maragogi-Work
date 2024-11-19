import PriceImage from "./PriceImage";
import ReservationCalendar from "./ReservationCalendar";

export default function ReserveSection() {
  return (
    <section className="flex flex-col items-center justify-start h-screen w-full bg-[#fff8e8]">
      {/* Título */}
      <h1 className="text-center text-[#f85600] text-4xl font-bold mb-8 my-2">
        FÉRIAS DE JULHO NO SALINAS MARAGOGI É <br /> DIVERSÃO GARANTIDA
      </h1>

      <p className="text-center text-[#847758]  text-2xl">Férias de Julho é sinônimo de diversão em família! No Salinas Maragogi, as crianças são<br/>
        superestrelas com estadia grátis*, Clubinho Infantil repleto de atividades, buffet especialmente<br/>
        pensado para os pequenos paladares e muito mais!</p>

      {/* Imagem com preço */}
      <PriceImage />

      {/* Calendário */}
      <ReservationCalendar />
    </section>
  );
}
