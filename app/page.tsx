'use client'; // Asegúrate de que el archivo sea tratado como un Client Component

import React, { useState } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About'; // Cambiado de Skills a About
import Contact from './components/Contact';

const Home: React.FC = () => {
  // Estado para almacenar la sección activa
  const [activeSection, setActiveSection] = useState<string>('inicio');

  // Función para renderizar la sección activa
  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return <Hero />;
      case 'proyectos':
        return <Projects />;
      case 'about':
        return <About />;
      case 'contacto':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="flex">
      {/* Navbar */}
      <nav className="w-1/4 bg-gray-800 text-white h-screen p-4">
        <ul className="space-y-4">
          <li>
            <button onClick={() => setActiveSection('inicio')} className="w-full text-left hover:text-gray-400">Inicio</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('proyectos')} className="w-full text-left hover:text-gray-400">Proyectos</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('about')} className="w-full text-left hover:text-gray-400">Sobre mí</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('contacto')} className="w-full text-left hover:text-gray-400">Contacto</button>
          </li>
        </ul>
      </nav>

      {/* Contenido de la sección activa */}
      <div className="flex-1 p-6">
        {renderSection()}
      </div>
    </div>
  );
};

export default Home;




