import Image from 'next/image';

// Definimos los datos de las habilidades en una estructura fácil de mantener
const skillRows = [
    [
        { src: '/images/css-logo.png', alt: 'CSS' },
        { src: '/images/HTML5_logo_and_wordmark.svg.png', alt: 'HTML5' },
        { src: '/images/javascript-logo-javascript-icon-transparent-free-png.png', alt: 'JavaScript' },
    ],
    [
        { src: '/images/bootstrap-logo-vector.svg', alt: 'Bootstrap' },
        { src: '/images/smartytransparente.png', alt: 'Smarty' },
        { src: '/images/postman.png', alt: 'Postman', id: 'github_logo' }, // ID especial para el borde
    ],
    [
        { src: '/images/58480979cef1014c0b5e4901.png', alt: 'Java' },
        { src: '/images/spring-boot-logo-png-4-transparent.png', alt: 'Spring Boot' },
        { src: '/images/PHP-logo.svg.png', alt: 'PHP' },
    ],
    [
        { src: '/images/mysql.png', alt: 'MySQL' },
        { src: '/images/PostgreSQL-Logo.wine.png', alt: 'PostgreSQL' },
        { src: '/images/docker.png', alt: 'Docker' },
    ],
    [
        { src: '/images/Git-Icon-1788C.png', alt: 'Git' },
        { src: '/images/25231.png', alt: 'GitHub', id: 'github_logo' }, // ID especial para el borde
        { src: '/images/gitlab-logo-757620E430-seeklogo.com.png', alt: 'GitLab' },
    ],
    [
        { src: '/images/trello-logo-CE7B690E34-seeklogo.com.png', alt: 'Trello' },
        { src: '/images/Drawio.png', alt: 'Draw.io' },
        { src: '/images/Jira_Logo.svg.png', alt: 'Jira' },
    ],
];

export default function Skills() {
    return (
        <article id="habilidades">
            <h2>Habilidades:</h2>
            <section className="logos_habilidades">
                {skillRows.map((row, rowIndex) => (
                    <div className="menu" key={`row-${rowIndex}`}>
                        {row.map((skill, skillIndex) => (
                            <Image key={`skill-${skillIndex}`} data-aos="zoom-in-up" className="foto_menu" id={skill.id} src={skill.src} alt={skill.alt} width={100} height={100} />
                        ))}
                    </div>
                ))}
            </section>
        </article>
    );
}