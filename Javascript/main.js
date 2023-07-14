//true + true = true
//true  + false = false
//false + true = false
//false + false = false

//true + true = true
//true + false = true
//false + true = true
//false + false = false

/* let user = prompt("Ingrese su usuario");
let password = prompt("Ingrese su password");

let usuarioGuardado = "Pedro";

let pass = "5555";

if (user === usuarioGuardado && pass === password) {
  console.log("Bienvenido a la plataforma " + usuarioGuardado);
} else {
  console.log("Usuario o password incorrecto");
} */

/* let user = prompt("Ingrese usuario");
let pass = prompt("ingrese password");
let usuarioGuardado = "Juan";

if (user !== "" && pass !== "") {
  //primero se chequea que los strings no sean vacios
  if (user == "juan" || user == "Juan") {
    //si lo anterior es falso evalua si alguno de los users coinciden
    console.log("Hola Juan!"); //como esto es or si alguna de las 2 condiciones es true la condicion es verdadera y se ejecuta el bloque de codigo
  } else {
    console.log("Hola usuario " + user); //de lo contrario saluda a otro usuario
  }
} else {
  console.log("Faltan datos"); // aca viene solo si la primer condicion es true
}
 */

//ciclos for, while, do while y switch

/* let cantDeProductos = parseInt(prompt("cantidad de productos a sumar"));
let precio = 0;

for (let i = 1; i <= cantDeProductos; i++) {
  let precioIngresado = parseInt(prompt("ingresar el precio" + i));
  precio = precio + precioIngresado; //precio += precioIngresado
}
console.log(precio); */

//ciclo while

/* let ingreso = prompt("Ingrese su producto. Para salir ingrese SALIR");

while (ingreso !== "SALIR") {
  //ejecuta el codigo
  console.log("El producto ingresado es " + ingreso);
  //condicion de salida
  ingreso = prompt("Ingrese su producto. Para salir ingrese SALIR");
} */

//ciclo do while
/* let i = 0;
do {
  console.log(i);
  i++;
} while (i < 1); */

// switch

/* let mensaje = prompt("ingrese un valor");

switch (mensaje) {
  case "0":
  case "1":
    console.log("cero o uno");
    break;

  case "2":
    console.log("dos");
    break;

  case 3:
    console.log("tres");
    break;

  default:
    console.log("valores deconocidos");
} */
