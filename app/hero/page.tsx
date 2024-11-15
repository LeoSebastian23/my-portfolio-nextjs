import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a mi Portfolio</h1>
      <h2 className="text-2xl font-semibold mb-2">Soy Leonardo Gauto</h2>
      <p className="text-lg text-gray-700 mb-6">
      Soy un joven programador apasionado por crear soluciones tecnológicas eficientes y elegantes. Con una sólida formación en programación, mi enfoque está en optimizar la experiencia del usuario y ofrecer resultados de calidad.
      </p>
      <div className="flex space-x-4">
        <a
          href="https://github.com/tu-usuario" // Reemplaza con tu enlace de GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/tu-usuario" // Reemplaza con tu enlace de LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          LinkedIn
        </a>
        <a
          href="/tu-cv.pdf" // Reemplaza con el enlace de tu CV
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
        >
          Descargar CV
        </a>
      </div>
    </div>
  );
};

export default Hero;

