/* funcionAlert("Hola mundo");

function funcionAlert(frase) {
  alert("Estoy diciendo " + frase);
} */

/* sayHi("Juan");

let sayHi = function (nombre) {
  alert("Hola " + nombre);
}; */

/* let edad = prompt("Cual es tu edad", 18);

let welcome;

if (edad < 18) {
  welcome = function () {
    alert("Hola");
  };
} else {
  welcome = function () {
    alert("saludos");
  };
}

welcome(); */

/* function saludar(nombre) {
  function decirHola() {
    alert("Hola " + nombre);
  }
  return decirHola();
}
saludar("Juan");
 */

//callbacks

/* function saludar(name) {
  console.log("hola " + name);
}
saludar("Juan"); */

/* function saludar(name, callback) {
  console.log("hola " + name);
  callback();
}
//funcion callback
function callMe() {
  console.log("soy una funcion callback");
}

//paso la funcion callMe como argumento

saludar("Juan", callMe);
 */

/* function saludar() {
  console.log("hola mundo");
}
function decirNombre(nombre) {
  console.log("hola" + nombre);
}
setTimeout(saludar, 2000);
decirNombre("Juan"); */

//crear una funcion que tome un numero como parametro, lo incremente en uno
//y devuelva el resultado

/* function incrementador(numero) {
  let incremento = numero + 1
  return incremento; //esto detiene la ejecucion de la funcion
}
incrementador();
console.log(incrementador(5));
 */

/* function calculadora(num1, num2, operacion) {
  switch (operacion) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return 0;
  }
}
console.log(calculadora(10, 0, "/"));
 */

/* function saludar(nombre) {
  function decirHola() {
    alert("Hola " + nombre);
  }
  return decirHola();
}
saludar("Juan"); */

//expresion de funcion

/* const saludar = function () {
  alert("hola")
} */

/* function saludar() {
  //creo la funcion
  alert("Hola");
}

const func = saludar; //copio la funcion

//func();

saludar();

//Declaracion de funcion
function sum(a, b) {
  return a + b
}

//Expresion de funcion

const sum  = function (a, b) {
  return a + b
}

//arrow function

const sum = (a, b) => a + b */

/* let edad = prompt("Ingresa tu edad");
let welcome;

if (edad < 18) {
  welcome = function () {
    alert("Hola");
  };
} else {
  welcome = function () {
    alert("Saludos");
  };
}

welcome();  */
//puede invocar la variable afuera del bloque

//funciones callback

/* function saludar(nombre) {
  console.log("Hola " + nombre);
}

saludar("Juan"); */

function saludar(nombre, callback) {
  console.log("Hola " + nombre); //primero se ejecuta esta instruccion
  callback(); //despues saludar va a llamar a una funcion callback que todavia no se declaro
}
function callMe() {
  //se declara la funcion callback
  console.log("soy una funcion callback");
}

saludar("Juan", callMe); //se pasa callMe como argumento de saludar
