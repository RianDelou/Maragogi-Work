import ButtonTopPage from "./ButtonTopPage";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("topo.png")',
        }}
      ></div>

      
      <ButtonTopPage
        href="https://www.salinas.com.br/pt/maragogi/"
        className="absolute top-4 right-4 font-bold"
      >
        IR PARA O SITE
      </ButtonTopPage>

      <h1 className="absolute left-1/2 transform -translate-x-1/2 top-[80%] text-center text-[#f85600] text-4xl font-bold">
        FÉRIAS DE JULHO NO SALINAS MARAGOGI É <br /> DIVERSÃO GARANTIDA
      </h1>
    </div>
  );
}
