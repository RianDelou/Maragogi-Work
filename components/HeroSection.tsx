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

      <ButtonTopPage className="absolute top-4 right-4">
        IR PARA O SITE
      </ButtonTopPage>

      <h1 className="text-center text-[#FF6F00] text-4xl font-bold mt-[20vh] relative">
        FÉRIAS DE JULHO NO SALINAS MARAGOGI É <br></br>DIVERSÃO GARANTIDA
      </h1>
    </div>
  );
}
