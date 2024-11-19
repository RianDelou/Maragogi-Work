"use client";
import React, { useState, useEffect } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Base styles
import "./custom-calendar.css"; // Custom styles

export default function ReservationCalendar() {
  // State to track whether the component has been mounted
  const [isMounted, setIsMounted] = useState(false);

  // State for the selected date range [startDate, endDate]
  const [selectedDate, setSelectedDate] = useState<[Date, Date] | null>(null);

  // Set isMounted to true when the component has mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle date change
  const handleDateChange = (value: CalendarProps["value"]) => {
    if (Array.isArray(value)) {
      // Ensure both values are valid Date objects, with null check
      const startDate =
        value[0] && value[0] instanceof Date
          ? value[0]
          : new Date(value[0] || "");
      const endDate =
        value[1] && value[1] instanceof Date
          ? value[1]
          : new Date(value[1] || "");
      setSelectedDate([startDate, endDate]);
    } else {
      // If it's a single date, reset the range
      const singleDate =
        value && value instanceof Date ? value : new Date(value || "");
      setSelectedDate([singleDate, singleDate]);
    }
    console.log("Período selecionado:", value);
  };

  // Handle button click
  const handleButtonClick = () => {
    if (selectedDate) {
      const [startDate, endDate] = selectedDate;
      alert(
        `Reserva feita de ${startDate.toLocaleDateString()} a ${endDate.toLocaleDateString()}`
      );
    } else {
      alert("Por favor, selecione um período de datas.");
    }
  };

  // Only render the component after the client has mounted
  if (!isMounted) {
    return null; // Optionally, you can return a loading spinner or placeholder
  }

  return (
    <div className="flex flex-col items-center bg-[#fff8e8] p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4" style={{ color: "#FFA901" }}>
        SELECIONE O PERÍODO DA SUA RESERVA
      </h2>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        selectRange={true} // Enable range selection
        className="custom-calendar" // Custom styles
      />
      <button
        onClick={handleButtonClick}
        className="mt-4 hover:scale-105 transition  text-white font-bold py-5 px-28 rounded-full shadow-md"
        style={{ backgroundColor: "#F85600" }}
      >
        
        AVANÇAR
      </button>
    </div>
  );
}
