// Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 36.000 veces esta operación.
const c1 = "/ejrecicios_javascript/exercise_18.12/dado/1.png";
const c2 = "/ejrecicios_javascript/exercise_18.12/dado/2.png";
const c3 = "/ejrecicios_javascript/exercise_18.12/dado/3.png";
const c4 = "/ejrecicios_javascript/exercise_18.12/dado/4.png";
const c5 = "/ejrecicios_javascript/exercise_18.12/dado/5.png";
const c6 = "/ejrecicios_javascript/exercise_18.12/dado/6.png";
var dato1, dato2;
var contenido = document.getElementById(
  "content"
); /*capturamos el div que tiene como id content */
var arreglo = [];
var arreglo1 = [];
var i = 0,
  i1 = 0;
var contador = 0;
var contador1 = 1;
var contador2 = 1;

/*con esta funcion pintamos en el dom y mostramos los dados */
const aleatorio = () => {
  var d1 =
    Math.floor(Math.random() * 6) +
    1; /**generamos el numero aleatorio entre 1 y 6 */
  var d2 = Math.floor(Math.random() * 6) + 1;

  if (d1 === 1) {
    dato1 = c1;
  }
  if (d1 === 2) {
    dato1 = c2;
  }
  if (d1 === 3) {
    dato1 = c3;
  }
  if (d1 === 4) {
    dato1 = c4;
  }
  if (d1 === 5) {
    dato1 = c5;
  }
  if (d1 === 6) {
    dato1 = c6;
  }

  if (d2 === 1) {
    dato2 = c1;
  }
  if (d2 === 2) {
    dato2 = c2;
  }
  if (d2 === 3) {
    dato2 = c3;
  }
  if (d2 === 4) {
    dato2 = c4;
  }
  if (d2 === 5) {
    dato2 = c5;
  }
  if (d2 === 6) {
    dato2 = c6;
  }
  /*creamos una constante que va a tener un texto el cual tiene una estructura html  */
  const hero = `
  <div class ="item">
  
    <img class ="image" src ="${dato1}">
    <img class ="image1" src ="${dato2}">
  
  </div>
        `;
  contenido.innerHTML = hero; /*con el metodo innerHTML pintamos en el contenido lo que hay en hero  */
};
/*con esta funcion cremos un bucle con 36000 interacciones, y despues comparamos cuantas veces se repiten las sumas  */
const data = () => {
  while (i <= 36000) {
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    let suma = d1 + d2;
    arreglo.push(suma);
    i = i + 1;
  }
  console.log(arreglo);
  for (let index = 0; index < arreglo.length; index++) {
    for (contador1; contador1 < arreglo.length; contador1++) {
      if (arreglo[index] === arreglo[contador1]) {
        i1 = i1 + 1;
        contador = contador + 1;
        console.log(`igualdad = ${arreglo[index]} ${arreglo[contador1]}`);
        arreglo.splice(contador1, 1, `dat${i1}`);
      }
      console.log(arreglo[index], arreglo[contador1]);
    }
    contador2 = contador2 + 1;
    contador1 = contador2;
  }
  console.log(`repeticions${contador}`);
  console.log('prueba git')
};
document
  .getElementById(`button`)
  .addEventListener(
    `click`,
    data
  ); /*aqui esstamos creando el evento del boton */
function pruebaGit(){
  console.log('hola mundo ')
}
function pruebaGit1(){
  console.log('hola mundo ')
}