'use client';

import Image from 'next/image';

const projectsData = [
  // Primera fila de proyectos
  [
    {
      title: "API de Cruceros",
      imageSrc: '/images/f.elconfidencial.com_original_3cf_5ed_1b1_3cf5ed1b1140b545d252ab90a510122e.jpg',
      description: 'API RESTFUL para un sistema web informativo de tours en cruceros, implementado utilizando el modelo MVC. Desarrollado con PHP.',
      codeUrl: 'https://github.com/jazbascunan01/Cruceros_api',
      demoUrl: null,
    },
    {
      title: "Paint en JS",
      imageSrc: '/images/proyecto_paint.png',
      description: 'Proyecto educativo de Paint con diferentes filtros, figuras y la inserción de imágenes usando HTML, CSS, JS, con canvas.',
      demoUrl: 'https://jazbascunan01.github.io/PAINT/',
      codeUrl: 'https://github.com/jazbascunan01/PAINT.git',
    },
    {
      title: "Juego de los Simpsons",
      imageSrc: '/images/proyecto_simpsons.png',
      description: 'Proyecto educativo de juego de los simpsons con parallax scrolling y spritesheets.',
      demoUrl: 'https://jazbascunan01.github.io/Juego_Homero_Corre/',
      codeUrl: 'https://github.com/jazbascunan01/Juego_Homero_Corre.git',
    },
  ],
  // Segunda fila de proyectos
  [
    {
      title: "Web de Cruceros",
      imageSrc: '/images/f.elconfidencial.com_original_3cf_5ed_1b1_3cf5ed1b1140b545d252ab90a510122e.jpg',
      description: 'Proyecto de sistema web informativo de tours en cruceros, se utilizó modelo MVC. Fue realizada mediante PHP, CSS, JS y Smarty.',
      demoUrl: 'https://oceandream.000webhostapp.com//home',
      codeUrl: 'https://github.com/jazbascunan01/cruceros',
    },
    {
      title: "Web de CAAN",
      imageSrc: '/images/proyecto_caan.png',
      description: 'Proyecto 100% de FrontEnd para práctica de UX/UI. Respetando las métricas y fundamentos del diseño.',
      demoUrl: 'https://jazbascunan01.github.io/CAAN_NECOCHEA/',
      codeUrl: 'https://github.com/jazbascunan01/CAAN_NECOCHEA.git',
    },
    // Puedes añadir un tercer proyecto aquí si quieres para completar la fila
  ]
];

export default function Projects() {
  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <article id="proyectos">
      <h2>Mis proyectos:</h2>
      <section className="mis_proyectos">
        {projectsData.map((row, rowIndex) => (
          <div className="menu_proyectos" key={`row-${rowIndex}`}>
            {row.map((project, projectIndex) => (
              <div data-aos="zoom-out" className="proyecto" key={`project-${projectIndex}`}>
                <Image
                  className="img_proyect"
                  src={project.imageSrc}
                  alt={`Imagen del proyecto ${project.title}`}
                  width={500} // Ajusta según necesites
                  height={300} // Ajusta según necesites
                  style={{ objectFit: 'cover' }}
                />
                <p className="descripcion_proyecto">{project.description}</p>
                <div className="botones_proyectos">
                  {project.demoUrl && (
                    <button className="btn_proy" onClick={() => openLink(project.demoUrl!)}>Demo</button>
                  )}
                  {project.codeUrl && (
                    <button className="btn_proy" onClick={() => openLink(project.codeUrl!)}>Código</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </article>
  );
}