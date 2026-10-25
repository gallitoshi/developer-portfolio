
const nombre = "Paulo";
const ciudad = "Lázaro Cárdenas";
const lenguaje = "JavaScript";

function presentarDesarrollador(nombre, ciudad, lenguaje) {
  return `Hola, soy ${nombre}, vivo en ${ciudad} y estoy aprendiendo ${lenguaje}.`;
}

const presentacion = presentarDesarrollador(nombre, ciudad, lenguaje);

console.log(presentacion);
