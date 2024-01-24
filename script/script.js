var frases = [
    "Desarrollo Web",
    "Desarrollo Fullstack",
  ];

  var animacionTexto = document.getElementById('animacion-texto');
  var indiceFrase = 0;
  var velocidadEscritura = 100; // Ajusta la velocidad de escritura
  var tiempoEspera = 2000; // Ajusta el tiempo de espera entre frases

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
            callback();
          }, tiempoEspera);
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