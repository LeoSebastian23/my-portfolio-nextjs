// app/components/Sidebar.tsx
import React from 'react';

interface SidebarProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveSection }) => {
  return (
    <div className="h-screen w-60 bg-gray-800 text-white fixed top-0 left-0 flex flex-col justify-center items-center shadow-lg">
      <h2 className="text-2xl font-bold mb-8">Mi Portfolio</h2>
      <nav className="flex flex-col space-y-4 text-lg">
        <button
          onClick={() => setActiveSection('inicio')}
          className="hover:text-blue-400"
        >
          Inicio
        </button>
        <button
          onClick={() => setActiveSection('proyectos')}
          className="hover:text-blue-400"
        >
          Proyectos
        </button>
        <button
          onClick={() => setActiveSection('about')}
          className="hover:text-blue-400"
        >
          Sobre Mí
        </button>
        <button
          onClick={() => setActiveSection('contacto')}
          className="hover:text-blue-400"
        >
          Contacto
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;

