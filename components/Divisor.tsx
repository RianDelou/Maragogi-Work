import Image from "next/image";

export default function Divisor() {
  return (
    <section className="flex flex-col justify-center items-center bg-[#6CCCFF] py-20">
      <div className="flex items-start">
        {/* Imagem à esquerda */}
        <Image src="/Vector.svg" alt="" width={200} height={300} />

        {/* Conteúdo central */}
        <div className="mx-4">
          <Image src="/Frame 40.png" alt="Tipos" width={800} height={400} />
        </div>

        {/* Imagem à direita */}
        <Image src="/VectorDois.svg" alt="" width={200} height={300} />
      </div>
    </section>
  );
}

