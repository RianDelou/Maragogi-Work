export default function TheSiri() {
    return (
      <div>
        {/* Guarda-sol atrás do Siri */}
        <div
          style={{
            position: "absolute",
            top: "-140px", // Valor fixo para posição vertical
            left: "755px", // Valor fixo para posição horizontal
            width: "400px",
            height: "400px",
            backgroundImage: 'url("/guarda-sol.png")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            zIndex: 1, // Menor profundidade
          }}
        ></div>
  
        {/* Siri na frente do guarda-sol */}
        <div
          style={{
            position: "absolute",
            top: "50px", // Valor fixo para posição vertical
            left: "750px", // Valor fixo para posição horizontal
            width: "350px",
            height: "350px",
            backgroundImage: 'url("/siri.png")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            zIndex: 2, // Maior profundidade
          }}
        ></div>
  
        {/* Cadeira no lado esquerdo do Siri */}
        <div
          style={{
            position: "absolute",
            top: "130px",
            left: "550px",
            width: "250px",
            height: "250px",
            backgroundImage: 'url("/cadeira.png")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            zIndex: 3,
          }}
        ></div>
  
        {/* Balde na frente do Siri */}
        <div
          style={{
            position: "absolute",
            top: "305px",
            left: "730px",
            width: "150px",
            height: "150px",
            backgroundImage: 'url("/balde.png")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            zIndex: 3,
          }}
        ></div>
  
        {/* Bola no lado direito do Siri */}
        <div
          style={{
            position: "absolute",
            top: "300px",
            left: "1050px",
            width: "100px",
            height: "100px",
            backgroundImage: 'url("/bola.png")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            zIndex: 3,
          }}
        ></div>
  
        {/* Placa no lado direito do Siri */}
        <div
          style={{
            position: "absolute",
            top: "170px",
            left: "1100px",
            width: "200px",
            height: "200px",
            backgroundImage: 'url("/placa.png")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            zIndex: 3,
          }}
        ></div>
      </div>
    );
  }
  