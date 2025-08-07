'use client';
import Image from 'next/image';

export default function About() {
    const handleDownload = () => {
        // Creamos un enlace temporal en memoria
        const link = document.createElement('a');
        // Le asignamos la ruta del archivo (debe estar en la carpeta /public)
        link.href = '/docs/Curriculum Jazmín Bascuñan (2).pdf';
        // Le asignamos el nombre que tendrá el archivo al descargarse
        link.download = 'CV_Jazmin_Bascunan.pdf';
        // Añadimos el enlace al cuerpo del documento
        document.body.appendChild(link);
        // Simulamos un clic para iniciar la descarga
        link.click();
        // Eliminamos el enlace del cuerpo del documento
        document.body.removeChild(link);
    };
    return (
        <article id="sobre-mi">
            <div data-aos="flip-left" className="sobre-mi">
                <Image
                    className="avatar"
                    src="/images/myAvatar.png"
                    alt="Avatar de Jazmín"
                    width={250}
                    height={250}
                    priority // Le decimos a Next.js que cargue esta imagen con prioridad
                />
                <section className="seccion_sobre_mi">
                    <h2>Soy Jazmín Bascuñan</h2>
                    <h5 className="texto_sobre_mi">
                        Soy estudiante de la Tecnicatura Universitaria en Desarrollo de Aplicaciones
                        Informáticas, con un sólido título en Técnico en Informática Personal y Profesional. Mi fascinación
                        por la tecnología me impulsa a explorar constantemente nuevos horizontes y aprender de manera continua.
                        Desde el inicio de mi trayectoria académica, he estado inmersa en el mundo de la informática,
                        buscando siempre desafíos que me permitan crecer y aplicar mis conocimientos. Mi compromiso con el desarrollo
                        de aplicaciones y el entusiasmo por la innovación tecnológica me motivan a superar obstáculos y
                        afrontar nuevos proyectos con determinación. ¡Bienvenido a mi espacio digital, donde la pasión por la
                        tecnología se fusiona con el deseo constante de aprender y crecer!
                    </h5>
                </section>
            </div>
            <div className="download-cv-container">
                <button onClick={handleDownload} className="btn_descargar">
                    <i className="fa-solid fa-download"></i>
                    Descargar CV
                </button>
            </div>
        </article>
    );
}