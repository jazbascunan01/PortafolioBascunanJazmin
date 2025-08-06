'use client';

import { useState, useEffect } from 'react';

const frases = [
    "Desarrollo Backend",
    "Desarrollo Fullstack",
    "Desarrollo Frontend",
    "Desarrollo Web",
];

export default function Hero() {
    const [texto, setTexto] = useState('');
    const [fraseIndex, setFraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const fraseActual = frases[fraseIndex];

            if (isDeleting) {
                // Borrando
                setTexto(fraseActual.substring(0, texto.length - 1));
            } else {
                // Escribiendo
                setTexto(fraseActual.substring(0, texto.length + 1));
            }

            if (!isDeleting && texto === fraseActual) {
                // Pausa al final de la palabra antes de borrar
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && texto === '') {
                // Termina de borrar, pasa a la siguiente frase
                setIsDeleting(false);
                setFraseIndex((prevIndex) => (prevIndex + 1) % frases.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? 75 : 150);

        return () => clearTimeout(timer);
    }, [texto, isDeleting, fraseIndex]);

    return (
        <article id="inicio">
            <div className="nombre" data-aos="zoom-in-down">
                <h1><span className="color">&lt;</span>Jazmín Bascuñan<span className="color">/&gt;</span></h1>            </div>
            <div id="animacion-texto" data-aos="fade-up" data-aos-delay="500">
                {texto}
                <span className="cursor">|</span>
            </div>
        </article>
    );
}