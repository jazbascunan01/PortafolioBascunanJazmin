'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [activeLink, setActiveLink] = useState('inicio');

    // Función para mostrar/ocultar el menú en móviles
    const handleMenuToggle = () => {
        setMenuVisible(!menuVisible);
    };

    // Función para cerrar el menú al hacer clic en un enlace
    const handleLinkClick = () => {
        setMenuVisible(false);
    };

    // Efecto para detectar la sección activa al hacer scroll
    useEffect(() => {
        const sections = document.querySelectorAll('article[id]');
        
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // Añadimos un offset para mayor precisión

            sections.forEach(section => {
                const htmlSection = section as HTMLElement;
                if (
                    htmlSection.offsetTop <= scrollPosition &&
                    htmlSection.offsetTop + htmlSection.offsetHeight > scrollPosition
                ) {
                    setActiveLink(htmlSection.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        // Limpiamos el evento al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { href: '#inicio', label: 'INICIO' },
        { href: '#sobre-mi', label: 'SOBRE MÍ' },
        { href: '#educacion', label: 'EDUCACIÓN' },
        { href: '#habilidades', label: 'HABILIDADES' },
        { href: '#proyectos', label: 'PROYECTOS' },
        { href: '#contacto', label: 'CONTACTO' },
    ];

    return (
        <div className="contenedor-header">
            <header>
                <div className="logoj">
                    <Image className="logojb" src="/images/image (44).png" alt="Logo JB" width={70} height={70} />
                    <a className="navbar-brand ocultar" href="#inicio">Jazmín Bascuñan</a>
                </div>
                <nav id="nav" className={menuVisible ? 'responsive' : ''}>
                    <ul>
                        {navLinks.map(link => (
                            <li key={link.href}><a href={link.href} className={activeLink === link.href.substring(1) ? 'active' : ''} onClick={handleLinkClick}>{link.label}</a></li>
                        ))}
                    </ul>
                </nav>
                <div className="nav-responsive" onClick={handleMenuToggle}><i className="fa-solid fa-bars"></i></div>
            </header>
        </div>
    );
}