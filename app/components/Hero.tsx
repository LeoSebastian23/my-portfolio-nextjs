// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">¡Bienvenido a Mi Portfolio!</h1>
      <p className="text-lg mb-6">Soy Leonardo Gauto, desarrollador Full Stack.</p>
      <div className="flex justify-center space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Ver Proyectos</button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded">Contáctame</button>
      </div>
    </section>
  );
};

export default Hero;
