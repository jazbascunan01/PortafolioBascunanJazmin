'use client';

import { useEffect } from 'react';
import AOS from 'aos';

// No es necesario importar 'aos/dist/aos.css' aquí porque ya lo pegamos en globals.css

export default function ClientSideSetup() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, // La animación ocurre solo una vez
        });
    }, []);

    return null; // Este componente no renderiza nada en la pantalla
}