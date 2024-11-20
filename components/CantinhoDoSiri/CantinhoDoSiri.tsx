export default function CantinhoDoSiri() {
  return (
    <section
      className="flex flex-col items-center justify-start bg-[#6CCCFF] relative section-superior"
      style={{
        backgroundImage: 'url("/sol e nuvens.png")', // Caminho da imagem
        backgroundSize: "1600px", // Tamanho fixo da imagem
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center", // Imagem no topo e centralizada horizontalmente
      }}
    >
      <h1 className="text-center text-[#f85600] text-5xl font-bold mt-64 mb-2">
        CLUBINHO DO SIRI:
      </h1>
      <h2 className="text-center text-[#f85600] text-3xl font-bold mb-12">
        O CLUBE INFANTIL QUE A CRIANÇADA AMA!
      </h2>

      <section className="grid grid-cols-2 gap-x-96 mt-12 text-left">
        {/* Primeiro grupo de parágrafos */}
        <div className="flex flex-col gap-12">
          <p className="text-[#fff] text-1xl gap-2 flex items-start font-semibold">
            <span
              className="block"
              style={{
                backgroundImage: 'url("/minicaranguejo.png")', // Ícone do caranguejo
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "30px",
                height: "30px",
                alignSelf: "center",
              }}
            ></span>
            Aqui você encontra uma equipe preparada <br />
            para cuidar e garantir a diversão da criança.
          </p>
          <p className="text-[#fff] text-1xl gap-2 flex items-start font-semibold">
            <span
              className="block"
              style={{
                backgroundImage: 'url("/minicaranguejo.png")', // Ícone do caranguejo
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "30px",
                height: "30px",
                alignSelf: "center",
              }}
            ></span>
            Desfrute de uma estrutura pensada com carinho <br />
            para o lazer e segurança dos pequenos.
          </p>
        </div>

        {/* Segundo grupo de parágrafos */}
        <div className="flex flex-col gap-6">
          <p className="text-[#fff] text-1xl gap-2 flex items-start font-semibold">
            <span
              className="block"
              style={{
                backgroundImage: 'url("/minicaranguejo.png")', // Ícone do caranguejo
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "30px",
                height: "30px",
                alignSelf: "center",
              }}
            ></span>
            Os tios e tias do clubinho também acompanham as <br />
            crianças no lanchinho da manhã, almoço e <br />
            lanchinho da tarde.
          </p>
          <p className="text-[#fff] text-1xl gap-2 flex items-start font-semibold">
            <span
              className="block"
              style={{
                backgroundImage: 'url("/minicaranguejo.png")', // Ícone do caranguejo
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "30px",
                height: "30px",
                alignSelf: "center",
              }}
            ></span>
            Aqui no Salinas Maragogi, os pequenos de até <br />
            12 anos não pagam se acompanhados de adultos <br />
            pagantes, conforme capacidade da categoria*.
          </p>
        </div>
      </section>
    </section>
  );
}
