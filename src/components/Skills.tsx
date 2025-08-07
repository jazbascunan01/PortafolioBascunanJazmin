import Image from 'next/image';

// Nueva estructura de habilidades por categorías
const skillGroups = [
    {
        title: "Frontend y Diseño",
        skills: [
            { src: '/images/HTML5_logo_and_wordmark.svg.png', alt: 'HTML5' },
            { src: '/images/css-logo.png', alt: 'CSS' },
            { src: '/images/javascript-logo-javascript-icon-transparent-free-png.png', alt: 'JavaScript' },
        ]
    },
    {
        title: "Frameworks y Librerías",
        skills: [
            { src: '/images/next.png', alt: 'Next.js', id: 'github_logo' },
            { src: '/images/spring-boot-logo-png-4-transparent.png', alt: 'Spring Boot' },
            { src: '/images/bootstrap-logo-vector.svg', alt: 'Bootstrap' },
            { src: '/images/smartytransparente.png', alt: 'Smarty' },
        ]
    },
    {
        title: "Backend",
        skills: [
            { src: '/images/58480979cef1014c0b5e4901.png', alt: 'Java' },
            { src: '/images/PHP-logo.svg.png', alt: 'PHP' },
        ]
    },
    {
        title: "Bases de Datos y DevOps",
        skills: [
            { src: '/images/mysql.png', alt: 'MySQL' },
            { src: '/images/PostgreSQL-Logo.wine.png', alt: 'PostgreSQL' },
            { src: '/images/docker.png', alt: 'Docker' },
        ]
    },
    {
        title: "IDEs y Editores de Código",
        skills: [
            { src: '/images/vscode.png', alt: 'VS Code' },
            { src: '/images/intellij.png', alt: 'IntelliJ IDEA' },
            { src: '/images/webstorm.png', alt: 'WebStorm' },
        ]
    },
    {
        title: "Control de Versiones",
        skills: [
            { src: '/images/Git-Icon-1788C.png', alt: 'Git' },
            { src: '/images/25231.png', alt: 'GitHub', id: 'github_logo' },
            { src: '/images/gitlab-logo-757620E430-seeklogo.com.png', alt: 'GitLab' },
        ]
    },
    {
        title: "Herramientas de Desarrollo y Gestión",
        skills: [
            { src: '/images/terminal.png', alt: 'Terminal', id: 'github_logo' },
            { src: '/images/postman.png', alt: 'Postman', id: 'github_logo' },
            { src: '/images/trello-logo-CE7B690E34-seeklogo.com.png', alt: 'Trello' },
            { src: '/images/Drawio.png', alt: 'Draw.io' },
            { src: '/images/Jira_Logo.svg.png', alt: 'Jira' },
        ]
    }
];

export default function Skills() {
    return (
        <article id="habilidades">
            <h2>Habilidades:</h2>
            <div className="skills-container">
                {skillGroups.map((group, groupIndex) => (
                    <section key={`group-${groupIndex}`} className="skill-group" data-aos="fade-up">
                        <h3 className="skill-subtitle">{group.title}</h3>
                        <div className="logos_habilidades">
                            {group.skills.map((skill, skillIndex) => (
                                <Image key={`skill-${skillIndex}`} data-aos="zoom-in-up" className="foto_menu" id={skill.id} src={skill.src} alt={skill.alt} width={80} height={80} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </article>
    );
}