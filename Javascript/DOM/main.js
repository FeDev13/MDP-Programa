function aMayusculas(str) {
  return str.toUpperCase();
}
console.log(aMayusculas("hola"));

function primerLetraAMayuscula() {
  let palabra = "javascript";
  console.log(palabra[0].toUpperCase() + palabra.slice(1));
}
primerLetraAMayuscula();

const buttons = document.getElementsByTagName("button");
console.log(buttons);

let texto = document.getElementById("text");
console.log(texto);

const botones = document.querySelector(".boton");
console.log(botones);

//Tipos de nodos

//1) document
//2) element
//3) attr
//4) text

const para = document.createElement("p"); //creo un nodo
const node = document.createTextNode("hola mundo"); //creo un nodo texto

para.appendChild(node); // inserta el nodo texto dentro del nodo p

const element = document.getElementById("div1");
element.appendChild(para);

const newRange = document.querySelector(".rango");
newRange.setAttribute("type", "text");
