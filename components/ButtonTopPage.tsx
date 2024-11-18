import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function ButtonTopPage({ children, className }: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 text-sm font-medium rounded bg-[#FFC107] text-black hover:bg-[#FFB300] shadow-md transition ${className}`}
    >
      {children}
    </button>
  );
}
