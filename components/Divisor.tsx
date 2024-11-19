import Image from "next/image";

export default function Divisor() {
  return (
    <section className="h-[20vh] flex justify-center items-center bg-[#6CCCFF]">
      <Image
        src="/Vector.svg"
        alt=""
        width={200} 
        height={300} 
        className="mr-20 mt-40"
      />

      <div>
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
        className="ml-10"
      />
    </section>
  );
}
