// app/components/Sidebar.tsx
import Link from "next/link";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-60 bg-dark text-white fixed top-0 left-0 flex flex-col justify-center items-center border-r border-gray-700">
      <h2 className="text-2xl font-bold mb-8">Mi Portfolio</h2>
      <nav className="flex flex-col space-y-4 text-lg">
        <Link href="/" className="hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 p-2">
          Inicio
        </Link>
        <Link href="/projects" className="hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 p-2">
          Proyectos
        </Link>
        <Link href="/about" className="hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 p-2">
          Sobre Mí
        </Link>
        <Link href="/contact" className="hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 p-2">
          Contacto
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;





