import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export default function ButtonTopPage({ children, className, href }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block px-6 py-3 text-lg font-medium rounded-lg bg-[#FFC107] text-black hover:bg-[#FFB300] shadow-md transition ${className}`}
    >
      {children}
    </a>
  );
}
