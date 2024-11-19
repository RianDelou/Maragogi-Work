import TheSiri from "./TheSiri";

export default function CantinhoDoSiriFofinho() {
  return (
    <section className="bg-[#6CCCFF]">
      <div
        style={{
          backgroundImage: 'url("/praia.png")', // Caminho correto da imagem
          backgroundSize: "contain", // Ajusta para mostrar a imagem inteira
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom left", // Alinha a imagem no canto inferior esquerdo
          minHeight: "500px", // Defina um valor mínimo para garantir que tenha altura suficiente
          position: "relative", // Necessário para posicionamento absoluto dos filhos
        }}
      >
       
        <TheSiri />
      </div>
    </section>
  );
}
