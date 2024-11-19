import Image from "next/image";  

export default function PriceImage() {
  return (
    <div className="my-8 flex flex-col gap-4">
      <Image
        src="/Diárias a partir de.png"  
        alt="Diarias a partir de"
        width={250} 
        height={300} 
        className="object-contain"
      />

      <Image
        src="/R$1.819_.png"  
        alt="Preço de reserva"
        width={250}  
        height={300} 
        className="object-contain"
      />
    </div>
  );
}
