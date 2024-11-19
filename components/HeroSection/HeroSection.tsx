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
      >
        IR PARA O SITE
      </ButtonTopPage>
    </div>
  );
}
