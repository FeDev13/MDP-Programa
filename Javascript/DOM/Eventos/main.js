const button = document.getElementById("button");
const input = document.getElementById("input");

//event handler
/* button.onclick = () => {
  alert("hola");
}; */

//event listener
button.addEventListener("click", (event) => {
  console.log(event.target);
});

function saludar() {
  alert("hola");
}

const saludar = () => {
  //declaracion no funciona al llamarse en el listener
  alert("hola");
};

//evento del mouse
button.addEventListener("dblclick", () => {
  console.log("mouse click");
});

//evento de teclado
input.addEventListener("keypress", () => {
  console.log("datos ingresados");
});

//evento change

input.addEventListener("change", () => {
  console.log("informacion agregada");
});

//evento submit

const form = document.getElementById("formulario");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.getElementById("input").value;
  console.log(input);
});
