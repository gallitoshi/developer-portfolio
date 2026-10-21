/* 

console.log("¡Hola! Estoy aprendiendo JavaScript.");

const nombre = "Paulo";
let proyectos = 1;
const profesion = "Desarrollador en formación";

console.log(nombre);
console.log(proyectos);
console.log(profesion);

const ciudad = "Lázaro Cárdenas";
const experiencia = 0;
const estaAprendiendo = true;
let siguienteLenguaje;

console.log(typeof ciudad);
console.log(typeof experiencia);
console.log(typeof estaAprendiendo);
console.log(typeof siguienteLenguaje);

const presupuesto = 10000;
const costoDiseno = 2500;
const costoDesarrollo = 7000;

const costoTotal = costoDiseno + costoDesarrollo;
const dineroRestante = presupuesto - costoTotal;

console.log("Costo total:");
console.log(costoTotal);

console.log("Presupuesto restante:");
console.log(dineroRestante);

const presupuestoDisponible = 5000;
const precioProyecto = 6000;

const puedePagar = presupuestoDisponible >= precioProyecto;

console.log("¿Tiene presupuesto suficiente?");
console.log(puedePagar);

const edadUsuario = 25;
const mayoriaDeEdad = 18;

if (edadUsuario >= mayoriaDeEdad) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

///////// Mi primer desafío sin ayuda

console.log("Mi primer desafío sin ayuda...");

let calificacion = 85;

if (calificacion >= 70) {
    console.log("¡Examen Aprobado!");
    
} else {
    console.log("Examen no Aprobado...");
    
}

const edadPersona = 59;

if (edadPersona < 13) {
  console.log();
  
} else if (edadPersona <= 17) {
  console.log("Adolescente");
} else if (edadPersona <= 59) {
  console.log("Adulto");
} else {
  console.log("Adulto Mayor");
}

const edadJugador = 20;
const inscripcionPagada = true;
const licenciaValida = false;
const permisoEspecial = true;

if (edadJugador >= 16 && inscripcionPagada && (licenciaValida || permisoEspecial)) {
  console.log("Inscripción Aprobada");
} else {
  console.log("Inscripción Rechazada"); 
}

function presentarDesarrollador(nombre, lenguaje) {
  console.log("Mi nombre es " + nombre);
  console.log("Estoy aprendiendo " + lenguaje);
}

presentarDesarrollador("Paulo", "JavaScript");

function calcularArea(base, altura) {
  console.log(base * altura);
  
}

calcularArea(5, 3);
calcularArea(10, 4);

function calcularArea(base, altura) {
  return base * altura;
}

const areaCancha = calcularArea(5, 3);

console.log(areaCancha);

function calcularPrecioFinal(precio, descuento) {
  return precio - descuento;
}

const totalPagar = calcularPrecioFinal(1000, 200);
console.log(totalPagar);

titulo.textContent = "Mi portafolio interactivo...";

const titulo = document.getElementById("titulo");


const boton = document.getElementById("botonTitulo");

function cambiarTitulo() {
  titulo.textContent = "¡JavaScript está funcionando!";
}

boton.addEventListener("click", cambiarTitulo);

*/

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
