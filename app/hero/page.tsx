import React from "react";
import styles from "./hero.module.css"; // Asegúrate de que el archivo CSS esté importado

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-around min-h-screen p-8 text-left">
      <div>
        <h1 className="text-8xl mb-4">Leonardo Sebastian</h1>
        <h2 className="text-3xl mb-4">
          Desarrollador Full Stack.
        </h2> 
        <p className="text-lg text-gray-400 mb-8">
      Soy un joven programador apasionado por crear soluciones tecnológicas eficientes y elegantes.
      Con una sólida formación en programación y desarrollo, mi enfoque está en optimizar la experiencia del usuario y ofrecer resultados de calidad.
      </p> 
      </div>
      <div className="flex space-x-4">
        <button className={styles.button}>
          <div className={styles.IconContainer}>
            <img
              src="github.svg"
              alt="GitHub"
              className={`${styles.icon} w-6 h-6`}
            />
          </div>
          <p className={styles.text}>GitHub</p>
        </button>
 
        <button className={styles.button}>
          <div className={styles.IconContainer}>
            <img
              src="upload.svg"
              alt="CV"
              className={`${styles.icon} w-6 h-6`}
            />
          </div>
          <p className={styles.text}>CV</p>
        </button>

        <button className={styles.button}>
          <div className={styles.IconContainer}>
            <img
              src="linkedin.svg"
              alt="LinkedIn"
              className={`${styles.icon} w-6 h-6`}
            />
          </div>
          <p className={styles.text}>LinkedIn</p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
