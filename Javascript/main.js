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

let user = prompt("Ingrese usuario");
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
