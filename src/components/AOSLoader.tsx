'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

export default function AOSLoader() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      once: false,     // La animación ocurre solo una vez
    });
  }, []);

  return null; // Este componente no renderiza nada en la página
}