//para asociar eventos podemos usar event handlers
const button = document.getElementById("button");
const input = document.getElementById("input");
const cont = document.getElementById("contenedor");
/* button.onclick = () => {
  //event handler q no se usa mas
  alert("hola");
}; */

//button.addEventListener("click", saludar);
/* function saludar() {
  alert("hola");
  //button.removeEventListener("click", saludar);
} */

/* const saludar = () => {
  //no se puede esta forma de declaracion de funcion
  alert("hola");
}; */

/* button.addEventListener("click", (e) => {
  console.log(e.target); //target es la propiedad del objeto q desencadena el evento q en este caso es el boton
}); */

/* button.addEventListener("click", (e) => {
  alert("hola");
  e.stopPropagation();
}); */

//flow de eventos (bubbling o capturing)

//este es bubbling, del mas especifico al mas general
/* const div = document.querySelector(".contenedor");

div.addEventListener("click", () => {
  alert("soy un contenedor");
}); */

//se pasa como 3 parametro true para hacerlo capturing

//dblick y otros

/* div.addEventListener("dblclick", () => {
  alert("soy un contenedor");
}); */

/* div.addEventListener("mouseover", (e) => {
  alert("soy un contenedor");
}); */

//key events en orden
/* input.addEventListener("keydown", (e) => {
  //la tecla se presiona
  console.log("tecla presionada");
});

input.addEventListener("keypress", (e) => {
  //la tecla se presiona ysuelta
  console.log("tecla presionada y soltada");
});

input.addEventListener("keyup", (e) => {
  //la tecla se suelta
  console.log("tecla soltada");
}); */
