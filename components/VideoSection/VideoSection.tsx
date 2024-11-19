import Image from "next/image";

export default function VideoSection() {
  return (
    <section className="relative flex flex-col items-center justify-start h-[100vh] w-full bg-[#fff8e8] overflow-hidden">
 
      <div
        className="absolute inset-0 bg-center z-10"
        style={{
          backgroundImage: 'url("/Vector.png")',
          backgroundSize: "1050px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      ></div>

      {/* Imagem VectorCima */}
      <Image
        src="/VectorCima.png"
        alt=""
        width={80}
        height={80}
        className="absolute"
        style={{
          top: "300px", // Distância fixa do topo
          left: "150px", // Distância fixa da esquerda
        }}
      />

      <Image
        src="/VectorBaixo.png"
        alt=""
        width={80}
        height={80}
        className="absolute"
        style={{
          top: "300px",
          right: "150px",
        }}
      />

      <h1 className="text-center text-[#f85600] text-4xl font-bold mb-8 my-2 z-10">
        MOTIVOS NÃO FALTAM PARA PASSAR AS FÉRIAS DE JULHO POR AQUI!
      </h1>

  
      <div
        className="relative z-10"
        style={{ width: "400px", height: "711px" }}
      >
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
          className="absolute"
          style={{
            width: "90%",
            height: "90%",
            left: "5%",
            top: "5%",
          }}
          allow="autoplay; fullscreen"
        ></iframe>
      </div>

      {/* Fundo azul com a imagem 'ondulado' no topo */}
      <div className="absolute top-[550px] left-0 w-full h-[550px] bg-[#6CCCFF] z-0">
        <Image
          src="/ondulado.png"
          alt="Diarias a partir de"
          width={10000}
          height={10000}
          className="absolute top-[-18px] object-contain"
          style={{
            width: "10000px", // Define a largura fixa
            height: "auto", // Mantém a proporção
          }}
        />
      </div>

      <Image
        src="/nuvem.png"
        alt=""
        width={200}
        height={200}
        className="absolute"
        style={{
          top: "700px",
          left: "150px",
        }}
      />

      <Image
        src="/nuvemDois.png"
        alt=""
        width={200}
        height={200}
        className="absolute"
        style={{
          top: "700px",
          right: "150px",
        }}
      />
    </section>
  );
}
