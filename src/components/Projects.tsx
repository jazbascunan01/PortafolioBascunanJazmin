'use client';

import Image from 'next/image';

const projectsData = [
  {
    title: "API REST de aplicación de monopatines",
    description: 'Proyecto de Backend desarrollado de manera académica en equipo. Permite gestionar monopatines, paradas, cuentas, usuarios, viajes, facturas, obtener reportes, etc',
    image: '/images/monopatines.jpg',
    tags: ["Java", "Spring", "Hibernate", "Maven","JWT", "Groq", "JPQL", "MySQL"],
    repoUrl: 'https://github.com/BautistaSerqueiraFucile/TP_Integrador-Grupo-B-.git',
  },
  {
    title: "Paint en JS",
    description: 'Aplicación web de dibujo tipo Paint, con filtros, figuras e inserción de imágenes, desarrollada con HTML Canvas y JavaScript.',
    image: '/images/proyecto_paint.png',
    tags: ["JavaScript", "HTML Canvas", "CSS"],
    liveUrl: 'https://jazbascunan01.github.io/PAINT/',
    repoUrl: 'https://github.com/jazbascunan01/PAINT.git',
  },
  {
    title: "Juego de los Simpsons",
    description: 'Juego de carrera infinita con parallax scrolling y spritesheets, inspirado en los Simpsons. Creado con JavaScript puro.',
    image: '/images/proyecto_simpsons.png',
    tags: ["JavaScript", "HTML", "CSS", "Parallax"],
    liveUrl: 'https://jazbascunan01.github.io/Juego_Homero_Corre/',
    repoUrl: 'https://github.com/jazbascunan01/Juego_Homero_Corre.git',
  },
  {
    title: "Web de CAAN",
    description: 'Proyecto de FrontEnd enfocado en la práctica de UX/UI, respetando métricas y fundamentos de diseño para una protectora de animales.',
    image: '/images/proyecto_caan.png',
    tags: ["HTML", "CSS", "UX/UI"],
    liveUrl: 'https://jazbascunan01.github.io/CAAN_NECOCHEA/',
    repoUrl: 'https://github.com/jazbascunan01/CAAN_NECOCHEA.git',
  },
  {
    title: "TODO List",
    description: 'Proyecto de FullStack desarrollado como parte del Challenge de ingreso a la Academia ForIT 2025. Permite crear, ver, editar y eliminar tareas utilizando una arquitectura basada en frontend (React) y backend (Node.js con Express).',
    image: '/images/taskList.png',
    tags: ["React", "Express", "Node.js", "TypeScript","HTML", "CSS"],
    repoUrl: 'https://github.com/jazbascunan01/TO_DO_List.git',
  },
  {
    title: "Web de Cruceros",
    description: 'Sistema web informativo de tours en cruceros, utilizando modelo MVC, PHP, CSS, JS y Smarty para la gestión de plantillas.',
    image: '/images/f.elconfidencial.com_original_3cf_5ed_1b1_3cf5ed1b1140b545d252ab90a510122e.jpg',
    tags: ["PHP", "Smarty", "JavaScript", "MVC"],
    liveUrl: 'https://oceandream.000webhostapp.com//home',
    repoUrl: 'https://github.com/jazbascunan01/cruceros',
  },
  {
    title: "API de Cruceros",
    description: 'API RESTful para el sistema de cruceros. Implementa el modelo MVC para una arquitectura limpia y escalable en PHP.',
    image: '/images/f.elconfidencial.com_original_3cf_5ed_1b1_3cf5ed1b1140b545d252ab90a510122e.jpg',
    tags: ["PHP", "API REST", "MVC"],
    liveUrl: null,
    repoUrl: 'https://github.com/jazbascunan01/Cruceros_api',
  },
];

export default function Projects() {
  return (
    <article id="proyectos">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="proyecto" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="project-image-container">
              <Image
                src={project.image}
                alt={`Imagen del proyecto ${project.title}`}
                layout="fill"
                objectFit="cover"
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-button">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Ver Sitio
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-button">
                    <i className="fa-brands fa-github"></i>
                    Repositorio
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}