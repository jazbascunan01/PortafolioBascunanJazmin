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