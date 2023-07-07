//true o false

if (false) {
  console.log("esto se ejecuta");
}

const num = 12; //comparo con el doble igual ==

if (num == 14) {
  console.log("es verdadero");
}

let esEstricto = "102" == 103; //cuando usamos igualdad simple o estricta el resultado de la comparacion sera un booleano true o false

console.log(esEstricto);

const precioProducto = 99;

if (precioProducto < 50) {
  console.log("el precio es menor a 50");
} else if (precioProducto < 100) {
  console.log("el precio es menor a 100");
} else {
  console.log("el precio es " + precioProducto);
}

/* let nombre = prompt("ingrese su nombre");

if (nombre == "") {
  alert("debe ingresar su nombre");
} else {
  alert("Hola " + nombre);
} */
