"use client";
import Image from "next/image";

import { useState, useRef } from "react";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: "/slider1.png",
      text: "Delícias e brincadeiras para o seu filho se esbaldar nas férias escolares",
    },
    {
      src: "/slider2.png",
      text: "Praia, sol e piscina: o combo perfeito para curtir em família",
    },
    {
      src: "/slider3.png",
      text: "Traga o seu pequeno para aproveitar as férias de julho no Salinas Maragogi",
    },
  ];
  const [dragStart, setDragStart] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStart !== null) {
      const dragDistance = e.clientX - dragStart;
      const threshold = 50; // Distância mínima para considerar como movimento de slide
      if (dragDistance > threshold && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
        setDragStart(null);
      } else if (
        dragDistance < -threshold &&
        currentSlide < slides.length - 1
      ) {
        setCurrentSlide(currentSlide + 1);
        setDragStart(null);
      }
    }
  };

  const handleMouseUp = () => {
    setDragStart(null);
  };

  return (
    <section className="relative w-full bg-[#F4E3B3] pt-[140px] pb-[140px] overflow-hidden">
      <div
        ref={sliderRef}
        className="relative flex transition-transform duration-700 ease-in-out z-10"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // Para garantir que o evento finalize ao sair do slider
        onTouchStart={(e) => setDragStart(e.touches[0].clientX)} // Suporte para toque
        onTouchMove={(e) => {
          if (dragStart !== null) {
            const dragDistance = e.touches[0].clientX - dragStart;
            const threshold = 50;
            if (dragDistance > threshold && currentSlide > 0) {
              setCurrentSlide(currentSlide - 1);
              setDragStart(null);
            } else if (
              dragDistance < -threshold &&
              currentSlide < slides.length - 1
            ) {
              setCurrentSlide(currentSlide + 1);
              setDragStart(null);
            }
          }
        }}
        onTouchEnd={() => setDragStart(null)}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={slide.src}
              alt={`Slider ${index + 1}`}
              width={1200} 
              height={700} 
              className="w-full max-h-[700px] object-contain"
            />
            <p className="text-center mt-2 text-lg text-gray-700">
              {slide.text}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20 mb-14">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${
              currentSlide === index ? "bg-[#f85600]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
