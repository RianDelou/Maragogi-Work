import Image from "next/image";  

export default function VideoSection() {
  return (
    <section className="flex flex-col items-center justify-start h-screen w-full bg-[#fff8e8]">

      <h1 className="text-center text-[#f85600] text-4xl font-bold mb-8 my-2">
       MOTIVOS NÃO FALTAM PARA PASSAR AS FÉRIAS DE JULHO POR AQUI!
      </h1>
      
      <Image
        src="/Vector.png"  
        alt=""
        width={300} 
        height={300} 
        className="object-contain"
      />
      

    </section>
  );
}
