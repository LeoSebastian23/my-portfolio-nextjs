import React from "react";

const Projects: React.FC = () => {
  const projectData = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Breve descripción del proyecto 1.",
      image: "/proyectos/portfolio.gif", // Cambia según la ubicación real
      link: "/projects/project-1", // Ruta a los detalles del proyecto
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "Breve descripción del proyecto 2.",
      image: "/path/to/image2.jpg",
      link: "/projects/project-2",
    },
    {
      id: 3,
      title: "Proyecto 3",
      description: "Breve descripción del proyecto 3.",
      image: "/path/to/image3.jpg",
      link: "/projects/project-3",
    },
  ];

  return (
    <section className="min-h-screen bg-light p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Mis Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-dark rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-50 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block text-sm text-dark bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full transition-all"
              >
                Ver más
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


