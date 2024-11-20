import ButtonTopPage from "./ButtonTopPage";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-[100vh] flex flex-col items-center justify-center">

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
