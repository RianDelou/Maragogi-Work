export default function Cardss() {
    return (
      <section className="bg-[#F4E3B3] py-16">
        <div className="container mx-auto">
          {/* Título */}
          <h1 className="text-center text-[#f85600] text-4xl font-bold my-10">
            DIVERSÃO GARANTIDA PARA APROVEITAR AS FÉRIAS ESCOLARES COM A CRIANÇADA!
          </h1>
  
          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Card 1 */}
            <div className="max-w-sm">
              <img
                src="/card1.jpg"
                alt="Card 1"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
  
            {/* Card 2 */}
            <div className="max-w-sm">
              <img
                src="/card2.jpg"
                alt="Card 2"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
  
            {/* Card 3 */}
            <div className="max-w-sm">
              <img
                src="/card3.jpg"
                alt="Card 3"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  