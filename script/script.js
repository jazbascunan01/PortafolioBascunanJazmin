/* document.addEventListener("DOMContentLoaded", function () { */
var frases = [
    "Desarrollo Web",
    "Desarrollo Fullstack",
];

var animacionTexto = document.getElementById('animacion-texto');
var indiceFrase = 0;
var velocidadEscritura = 100; // Ajusta la velocidad de escritura
var tiempoEsperaEscritura = 1000; // Ajusta el tiempo de espera después de escribir una palabra
var tiempoEsperaBorrado = 2000; // Ajusta el tiempo de espera antes de borrar la palabra

function realizarAnimacion() {
    var fraseActual = frases[indiceFrase];
    animacionTexto.textContent = '';

    // Función para manejar la escritura y el borrado
    function escribirBorrar(i, longitud, callback) {
        setTimeout(function () {
            var texto = fraseActual.slice(0, i);
            animacionTexto.textContent = texto;

            if (i < longitud) {
                escribirBorrar(i + 1, longitud, callback);
            } else {
                setTimeout(function () {
                    borrarCaracter(longitud - 1, callback);
                }, tiempoEsperaEscritura);
            }
        }, velocidadEscritura);
    }

    // Función para manejar el borrado de carácter por carácter
    function borrarCaracter(i, callback) {
        setTimeout(function () {
            var texto = fraseActual.slice(0, i);
            animacionTexto.textContent = texto;

            if (i > 0) {
                borrarCaracter(i - 1, callback);
            } else {
                setTimeout(function () {
                    callback();
                }, tiempoEsperaBorrado);
            }
        }, velocidadEscritura);
    }

    // Iniciar la escritura y el borrado
    escribirBorrar(0, fraseActual.length, function () {
        indiceFrase = (indiceFrase + 1) % frases.length;
        realizarAnimacion(); // Llamar recursivamente para la siguiente frase
    });
}

// Iniciar la animación al cargar la página
realizarAnimacion();
function pagina_mapa() {
    let map = L.map('map').setView([-38.55565, -58.75411], 13)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([-38.55565, -58.75411]).addTo(map);
}
pagina_mapa();











document.addEventListener("DOMContentLoaded", function () {
    // Obtiene todas las imágenes con la clase foto_menu
    const hoverImages = document.querySelectorAll('.foto_menu');

    // Agrega un evento de mouseover para cada imagen
    hoverImages.forEach(img => {
        img.addEventListener('mouseover', function () {
            // Agranda la imagen al hacer hover
            this.style.transform = 'scale(1.5)';
            /*             // Resalta la imagen al hacer hover
                        this.style.filter = 'brightness(1.5)';
                        // Agrega un resplandor blanco alrededor del borde al hacer hover
                        this.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.7)'; */
        });

        // Agrega un evento de mouseout para cada imagen
        img.addEventListener('mouseout', function () {
            // Restaura los estilos originales al salir del hover
            this.style.transform = '';
            this.style.filter = '';
            this.style.boxShadow = '';
        });
    });
});












document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById('scrollToTop');

    scrollToTopButton.addEventListener('click', function (event) {
        event.preventDefault();

        const currentPosition = window.scrollY || window.pageYOffset;
        const targetPosition = 0;
        const distance = targetPosition - currentPosition;
        const duration = 1000;

        smoothScrollTo(distance, duration);
    });

    function smoothScrollTo(targetY, duration) {
        const initialY = window.scrollY || window.pageYOffset;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        function animateScroll() {
            const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
            const elapsed = currentTime - startTime;

            const easeInOutCubic = function (t) {
                t /= duration / 2;
                if (t < 1) return 1 / 2 * t * t * t;
                t -= 2;
                return 1 / 2 * (t * t * t + 2);
            };

            window.scrollTo(0, initialY + targetY * easeInOutCubic(elapsed));

            if (elapsed < duration) {
                requestAnimationFrame(animateScroll);
            }
        }

        animateScroll();
    }
});

















document.addEventListener("DOMContentLoaded", function () {
    /*     var wow = new WOW({
            reset: true, // Reinicia las animaciones en el desplazamiento hacia arriba
        });
        wow.init();
    
        // Configura la detección de scroll para reiniciar las animaciones en el desplazamiento hacia arriba
        window.addEventListener('scroll', function () {
            if (window.scrollY === 0) {
                wow = new WOW(); // Crea una nueva instancia de WOW
                wow.init(); // Inicializa las animaciones
            }
        }); */
    AOS.init();

});
$(document).ready(function () {
    // Función para resaltar automáticamente el artículo activo
    function highlightActiveArticle() {
        // Obtén la posición actual del scroll vertical
        var currentPosition = $(window).scrollTop();

        // Itera sobre cada artículo de la página
        $("article").each(function () {
            var articleTop = $(this).offset().top;
            var articleId = $(this).attr("id");

            // Si el artículo está en la parte superior de la página y su parte inferior está por debajo del scroll actual,
            // entonces marca el enlace de la barra de navegación correspondiente como activo
            if (articleTop <= currentPosition && articleTop + $(this).height() > currentPosition) {
                $(".navbar-nav .nav-item").removeClass("active"); // Elimina la clase 'active' de todos los elementos de la barra de navegación
                $(".navbar-nav .nav-item a[href='#" + articleId + "']").parent().addClass("active"); // Agrega la clase 'active' al elemento de la barra de navegación correspondiente
            }
        });
    }

    // Llama a la función para resaltar el artículo activo cuando se desplaza la página
    $(window).scroll(highlightActiveArticle);

    // Llama a la función al cargar la página para resaltar el artículo activo inicialmente
    highlightActiveArticle();
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.btn_descargar').addEventListener('click', function () {
        // Ruta relativa al archivo PDF
        var archivoPDF = 'docs/Curriculum Jazmín Bascuñan.pdf';

        // Crea un elemento de enlace temporal
        var enlaceTemporal = document.createElement('a');
        enlaceTemporal.href = archivoPDF;
        enlaceTemporal.target = '_blank';
        enlaceTemporal.download = 'Curriculum.pdf';

        // Simula el clic en el enlace temporal
        document.body.appendChild(enlaceTemporal);
        enlaceTemporal.click();
        document.body.removeChild(enlaceTemporal);
    });
}); 