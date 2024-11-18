// app/components/Sidebar.tsx
import Link from "next/link";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="min-h-screen w-60 bg-dark text-white fixed top-0 left-0 flex flex-col justify-around items-center border-r border-gray-700">
      {/* Encabezado */}
      <h2 className="text-2xl font-bold border-b border-gray-700 w-full p-4 text-center">
        Leo Sebastian
      </h2>

      {/* Navegación */}
      <nav className="flex flex-col justify-center space-y-12 text-lg w-full ">
        <Link
          href="/"
          className="border-b border-gray-700 hover:border-blue-400 hover:text-blue-400 p-2 transition-all"
        >
          Inicio
        </Link>
        <Link
          href="/projects"
          className="border-b border-gray-700 hover:border-blue-400 hover:text-blue-400 p-2 transition-all"
        >
          Proyectos
        </Link>
        <Link
          href="/about"
          className="border-b border-gray-700 hover:border-blue-400 hover:text-blue-400 p-2 transition-all"
        >
          Sobre Mí
        </Link>
        <Link
          href="/contact"
          className="border-b border-gray-700 hover:border-blue-400 hover:text-blue-400 p-2 transition-all"
        >
          Contacto
        </Link>
      </nav>

      {/* Pie de página */}
      <footer className="text-sm text-gray-400 p-4">
        © 2024 - Leonardo Sebastian
      </footer>
    </div>
  );
};



export default Sidebar;
