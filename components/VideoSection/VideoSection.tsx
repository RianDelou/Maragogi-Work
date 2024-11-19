import Image from "next/image";

export default function VideoSection() {
  return (
    <section className="relative flex flex-col items-center justify-start h-screen w-full bg-[#fff8e8] overflow-hidden">
    
      <div
        className="absolute inset-0 bg-center z-0"
        style={{
          backgroundImage: 'url("/Vector.png")',
          backgroundSize: "57%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center", 
        }}
      ></div>

     
      <h1 className="text-center text-[#f85600] text-4xl font-bold mb-8 my-2 z-10">
        MOTIVOS NÃO FALTAM PARA PASSAR AS FÉRIAS DE JULHO POR AQUI!
      </h1>

    
      <div className="relative z-10 w-[280px] md:w-[320px] lg:w-[400px] aspect-[9/16]">
        <Image
          src="/base.png"
          alt="Base do celular"
          layout="fill"
          objectFit="contain"
          className="absolute top-0 left-0"
        />

        <iframe
          src="https://www.youtube.com/embed/QJ9VU4p1-58"
          title="Vídeo de exemplo"
          className="absolute w-[90%] h-[90%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          allow="autoplay; fullscreen"
        ></iframe>
      </div>
    </section>
  );
}
