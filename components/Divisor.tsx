import Image from "next/image";

export default function Divisor() {
  return (
    <section className="flex flex-col justify-center items-center bg-[#6CCCFF] py-20">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Imagem à esquerda (escondida no mobile) */}
        <Image
          src="/Vector.svg"
          alt=""
          width={200}
          height={300}
          className="hidden md:block"
        />

        {/* Conteúdo central */}
        <div className="mx-4">
          <Image
            src="/Frame 40.png"
            alt="Tipos"
            width={800}
            height={400}
            className="w-full max-w-md md:max-w-none"
          />
        </div>

        {/* Imagem à direita (escondida no mobile) */}
        <Image
          src="/VectorDois.svg"
          alt=""
          width={200}
          height={300}
          className="hidden md:block"
        />
      </div>
    </section>
  );
}
