const educationData = {
    left: [
        {
            title: "Tecnicatura en Informática Personal y Profesional",
            institution: 'Escuela Educación Secundaria Técnica N°3 "Nikola Tesla"',
            date: "2020",
            description: "Conocimientos generales de Informática, programacion en C++, programación en VB 6.0, HTML. Conocimientos en reparacion y mantenimiento de hardware y software. Redes.",
        },
        {
            title: "Se programar",
            institution: "Argentina Programa",
            date: "2022",
            description: "Conocimientos generales de lógica de programacion, JavaScript, Ruby, POO, poliformismo, herencia, absstracción.",
        },
        {
            title: "Habilidades para emprender",
            institution: "Centro de Formación Profesional Nº 403",
            date: "2022",
            description: "Analisis de emprendimientos, entrega y presentaciòn de proyectos, administración de recursos, analisis foda, planeación de proyectos",
        },
        {
            title: "PHP",
            institution: "Academia BA",
            date: "2023",
            description: "Curso de desarrollo básico en PHP, acceso a bases de datos MySQL, introducción a Frameworks",
        },
        {
            title: "Autodidacta",
            institution: "Cursos en linea e investigaciones",
            date: "∞",
            description: "Frameworws, diferentes librerías,nuevas tecnologías, técnicas de programación, técnicas y metodologías de trabajo, productividad aumentada por IA.",
        },
    ],
    right: [
        {
            title: "Tecnicatura Universitaria en Desarrollo de Aplicaciones Informaticas",
            institution: "UNICEN Quequén",
            date: "Actualidad",
            description: "Conocimientos adquiridos en la universidad incluyen desarrollo web con HTML, CSS, JavaScript (JSON, Api Rest, Ajax, SPA), PHP (con énfasis en Smarty) y MySQL con PDO. Además, experiencia en Java, uso de Git (GitHub, GitLab), Trello y Draw.io. También se exploraron conceptos básicos en redes.",
        },
        {
            title: "Instalador y Soporte de Sistemas Informáticos",
            institution: "Centro de Formación Profesional 403",
            date: "2022",
            description: "Conocimientos en todos los componentes de las computadoras, tanto PC de escritorio, como Netbook,Notebook y All In One, armado de cables RJ45 y conexión y configuracion de redes, instalación de sistemas operativos y cualquier clase de software, recuperación de discos dañados, diagnostico de problemas fisicos y logicos de la pc, mantenimiento, reparacion y cambio de componentes y/o perifericos internos y externos",
        },
        {
            title: "JavaScript",
            institution: "Academia BA",
            date: "2023",
            description: "Curso básico de desarrollo en JavaScript, variables, tipos de datos, arrays, JSON, funciones, estructuras de control",
        },
        {
            title: "FULLSTACK - PHP",
            institution: "Codo a Codo",
            date: "Actualidad",
            description: null,
        },
    ]
};

export default function Education() {
    return (
        <article id="educacion" className="educacion">
            <h2>Educación</h2>
            <div className="contenido-seccion">
                <div className="fila">
                    <div className="col izquierda">
                        {educationData.left.map((item, index) => (
                            <div data-aos="fade-up-right" key={`left-${index}`}>
                                <div className="item izq">
                                    <h4>{item.title}</h4>
                                    <span className="casa">{item.institution}</span>
                                    <span className="fecha">{item.date}</span>
                                    {item.description && <p className="ocultar">{item.description}</p>}
                                    <div className="conectori">
                                        <div className="circuloi"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col derecha">
                        {educationData.right.map((item, index) => (
                            <div data-aos="fade-up-left" key={`right-${index}`}>
                                <div className="item der">
                                    <h4>{item.title}</h4>
                                    <span className="casa">{item.institution}</span>
                                    <span className="fecha">{item.date}</span>
                                    {item.description && <p className="ocultar">{item.description}</p>}
                                    <div className="conectord">
                                        <div className="circulod"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}