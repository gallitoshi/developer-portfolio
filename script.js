let clics = 0;

const contadorClics = document.getElementById("contador");
const botonSumar = document.getElementById("botonSumar");
const botonRestar = document.getElementById("botonRestar");
const botonReiniciarContador = document.getElementById("botonReiniciar");

function actualizarPantalla() {
  contadorClics.textContent = clics;
  botonRestar.disabled = clics === 0;
}

function sumarClic() {
  clics++;
  actualizarPantalla();
}

function restarClic() {
  if (clics >= 1) {
    clics--;
    actualizarPantalla(); 
  }
}

function reiniciarContador() {
  clics = 0;
  actualizarPantalla();
}

botonSumar.addEventListener("click", sumarClic);
botonRestar.addEventListener("click", restarClic);
botonReiniciarContador.addEventListener("click", reiniciarContador);

actualizarPantalla();
