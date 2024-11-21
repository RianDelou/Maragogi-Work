"use client";
import React, { useState, useEffect } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Base styles
import "./custom-calendar.css"; // Custom styles

export default function ReservationCalendar() {
  const [isMounted, setIsMounted] = useState(false); // Confirma se o componente está montado
  const [selectedDate, setSelectedDate] = useState<[Date, Date] | null>(null); // Datas selecionadas
  const [showInputs, setShowInputs] = useState(false); // Controla a exibição da seção de inputs
  const [adults, setAdults] = useState(2); // Número de adultos
  const [children, setChildren] = useState(0); // Número de crianças
  const [childrenAges, setChildrenAges] = useState<number[]>([0, 0, 0]); // Idades das crianças

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lida com a seleção de datas no calendário
  const handleDateChange = (value: CalendarProps["value"]) => {
    if (Array.isArray(value)) {
      const startDate =
        value[0] instanceof Date ? value[0] : new Date(value[0] || "");
      const endDate =
        value[1] instanceof Date ? value[1] : new Date(value[1] || "");
      setSelectedDate([startDate, endDate]);
    }
  };

  // Alterna para a seção de inputs
  const handleAdvanceClick = () => {
    if (selectedDate) {
      setShowInputs(true);
    } else {
      alert("Por favor, selecione um período de datas antes de avançar.");
    }
  };

  // Atualiza o número de crianças e suas idades
  const handleChildrenChange = (value: number) => {
    setChildren(value);
    setChildrenAges(Array(3).fill(0)); // Reseta as idades para zero
  };

  // Atualiza a idade de uma criança específica
  const handleChildAgeChange = (index: number, age: number) => {
    const updatedAges = [...childrenAges];
    updatedAges[index] = age;
    setChildrenAges(updatedAges);
  };

  // Submete o formulário e exibe as informações no alert
  const handleSubmit = () => {
    if (selectedDate) {
      const checkIn = selectedDate[0]?.toLocaleDateString("pt-BR") || "";
      const checkOut = selectedDate[1]?.toLocaleDateString("pt-BR") || "";
      const info = `
        Período da Reserva:
        - Check-in: ${checkIn}
        - Check-out: ${checkOut}
        
        Quantidade de Pessoas:
        - Adultos: ${adults}
        - Crianças: ${children}
        - Idades das Crianças: ${childrenAges
          .slice(0, children)
          .join(", ") || "Nenhuma"}
      `;

      alert(info); // Exibe todas as informações no alert
      
      // Redireciona para a página especificada
      window.location.href =
        "https://book.omnibees.com/hotelresults?CheckIn=03072024&CheckOut=07072024&NRooms=1&ad=1&ag=&c=5173&ch=&child_age_input=&currencyId=16&hotel_folder=&lang=pt-BR&q=9098";
    } else {
      alert("Por favor, selecione um período de datas antes de continuar.");
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className="flex flex-col items-center bg-[#fff8e8] p-6 rounded-lg shadow-md max-w-2xl mx-auto"
    >
      {!showInputs ? (
        <>
          <h1 className="text-xl font-bold mb-6" style={{ color: "#FFA901" }}>
            SELECIONE O PERÍODO DA SUA RESERVA
          </h1>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            selectRange={true}
            className="custom-calendar"
          />
          <button
            onClick={handleAdvanceClick}
            className="mt-6 text-white font-bold py-3 px-12 rounded-full shadow-md"
            style={{ backgroundColor: "#FF6700" }}
          >
            AVANÇAR
          </button>
        </>
      ) : (
        <>
          <h1 className="text-xl font-bold mb-6" style={{ color: "#FFA901" }}>
            SELECIONE A QUANTIDADE DE PESSOAS
          </h1>
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Seleção de adultos */}
            <div>
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="w-full py-4 px-24 border border-gray-300 rounded-lg text-center"
              >
                {[1, 2, 3].map((num) => (
                  <option key={num} value={num}>
                    {num} adulto{num > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
            {/* Seleção de crianças */}
            <div>
              <select
                value={children}
                onChange={(e) => handleChildrenChange(Number(e.target.value))}
                className="w-full py-4 border border-gray-300 rounded-lg text-center"
              >
                {[0, 1, 2, 3].map((num) => (
                  <option key={num} value={num}>
                    {num} criança{num > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
            {/* Idades das crianças */}
            {childrenAges.map((age, index) => (
              <div key={index}>
                <select
                  value={age}
                  onChange={(e) =>
                    handleChildAgeChange(index, Number(e.target.value))
                  }
                  disabled={index >= children} // Desativa se a regra não for atingida
                  className={`w-full py-4 border ${
                    index >= children
                      ? "bg-gray-200 text-gray-400"
                      : "border-gray-300"
                  } rounded-lg text-center`}
                >
                  <option value={0}>Idade da criança {index + 1}</option>
                  {Array.from({ length: 18 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num} anos
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="mt-6 text-white font-bold py-3 px-12 rounded-full shadow-md"
            style={{ backgroundColor: "#FF6700" }}
          >
            PESQUISAR
          </button>
        </>
      )}
    </div>
  );
}
