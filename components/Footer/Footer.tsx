import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F85600] w-full py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-center md:justify-start">
            <Image
              src="/logoSalinas.png"
              alt="Logo"
              width={150}
              height={50}
              className="h-auto"
            />
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
            <a
              href="https://www.salinas.com.br/pt/maragogi/promocoes"
              className="bg-[#FFA901] text-white text-3xl font-bold px-20 py-5 rounded-md hover:scale-105 transition-transform duration-300 inline-block whitespace-nowrap"
              target="_blank"
            >
              VEJA OUTROS PERÍODOS
            </a>
          </div>

          <div className="w-full md:w-1/3 flex justify-center md:justify-end gap-4">
            <Image
              src="/facebook.png"
              alt="Facebook"
              width={30}
              height={30}
              className="cursor-pointer hover:opacity-80"
            />
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={30}
              height={30}
              className="cursor-pointer hover:opacity-80"
            />
            <Image
              src="/youtube.png"
              alt="YouTube"
              width={30}
              height={30}
              className="cursor-pointer hover:opacity-80"
            />
            <Image
              src="/spotify.png"
              alt="Spotify"
              width={30}
              height={30}
              className="cursor-pointer hover:opacity-80"
            />
            <Image
              src="/tik tok.png"
              alt="TikTok"
              width={30}
              height={30}
              className="cursor-pointer hover:opacity-80"
            />
          </div>
        </div>
      </div>

      <hr className="my-6 border-t border-white opacity-50" />

      <div className="container mx-auto px-4 text-center text-white text-lg font-semibold">
        <p className="mb-4">
          *Criança de 0 a 12 anos de idade, hospedada com dois adultos pagantes
          na mesma acomodação, conforme capacidade da categoria. A criança
          deverá ter até 12 anos de idade no momento da hospedagem.
        </p>
        <p className="mb-4">
          **Cancelamento grátis até 30 dias antes do check-in. Em caso de
          cancelamento após este prazo, será cobrada uma multa no valor
          correspondente à primeira diária. Em caso de no show, será cobrado o
          valor total da reserva.
        </p>
        <p className="mb-4">
          Valor exibido é referente ao apartamento Standard Duplo já calculado o
          desconto de 5% do programa Tô de Volta, disponível após login no
          processo de compra. No ato da reserva será cobrado do seu cartão de
          crédito o valor total da hospedagem podendo ser dividido em até 10x.
          Você pode encontrar mínimo de noites e preços diferentes em alguns
          períodos.
        </p>
      </div>

      <hr className="my-6 border-t border-white opacity-50" />

      <div className="container mx-auto px-4 text-center text-white font-semibold">
        <p className="text-sm mb-2">
          <a
            href="https://www.amarantehoteis.com.br/politica-de-privacidade"
            className="hover:underline"
          >
            Política de privacidade
          </a>
        </p>
        <p className="text-sm mb-4 font-semibold">
          Copyright 2024 © Grupo Amarante. Todos os direitos reservados.
        </p>
        <div className="flex justify-center">
          <Image
            src="/amarante.png"
            alt="Logo Amarante"
            width={220}
            height={150}
            className="h-auto"
          />
        </div>
      </div>
    </footer>
  );
}