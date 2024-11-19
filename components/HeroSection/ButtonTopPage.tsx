interface ButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function ButtonTopPage({ children, href }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-7 py-5 text-lg font-bold rounded-lg  bg-[#FFC107] text-black shadow-md transition hover:scale-105 absolute top-4 right-4`}
    >
      {children}
    </a>
  );
}
