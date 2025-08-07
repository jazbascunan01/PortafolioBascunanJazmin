'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export default function Contact() {
    // Carga dinámica del mapa para que solo se renderice en el navegador del cliente.
    const Map = useMemo(() => dynamic(
        () => import('@/components/Map'),
        {
            loading: () => <p>Cargando mapa...</p>, // Mensaje mientras carga
            ssr: false // ¡Muy importante! Desactiva el renderizado en servidor para el mapa.
        }
    ), []);

    return (
        <article id="contacto" className="contacto">
            <h2 data-aos="fade-up">Contacto:</h2>
            <div data-aos="zoom-in" className="cont_contacto">
                <section className="contenedor" id="contacto">
                    {/* API de FormSubmit para enviar el formulario a un correo */}
                    <form id="form_cargar_datos" action="https://formsubmit.co/jazbascunan01@gmail.com" method="post">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="comments">Mensaje</label>
                        <textarea id="comments" name="comments" cols={15} rows={5} required></textarea>

                        <button type="submit">Enviar</button>

                        {/* Página a la que redirige después de enviar */}
                        <input type="hidden" name="_next" value="https://portafolio-jazmin.vercel.app/" />
                        <input type="hidden" name="_captcha" value="false" />
                    </form>
                </section>
                <section className="ubicacion">
                    <Map />
                </section>
            </div>
        </article>
    );
}