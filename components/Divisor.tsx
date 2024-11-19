import Image from "next/image";

export default function Divisor() {
  return (
    <section className="h-[40vh] flex justify-center items-start bg-[#6CCCFF]">
      <Image
        src="/Vector.svg"
        alt=""
        width={200}
        height={300}
        className="mr-20 mt-4" // Ajuste aqui para mover o elemento mais para o topo
      />

      <div className="mt-4"> {/* Adicione um espaçamento superior se necessário */}
        <Image
          src="/Frame 40.png"
          alt="Tipos"
          width={900}
          height={500}
        />
      </div>

      <Image
        src="/VectorDois.svg"
        alt=""
        width={200}
        height={300}
        className="ml-10 mt-4" // Ajuste aqui para mover o elemento mais para o topo
      />
    </section>
  );
}
