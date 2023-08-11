const parrafo = document.createElement("p");

const node = document.createTextNode("Final");

parrafo.appendChild(node);

const element = document.getElementById("div1");

element.appendChild(parrafo);

const titulo = document.getElementById("titulo");

console.log(titulo.innerText);

titulo.innerText = "Hola lala";

const container = document.getElementById("contenedor");

container.innerHTML = "<h2>Hola mundo</h2> <p>lorem ipsum</p>";

const producto = { id: 1, nombre: "arroz", precio: 250 };

const nuevoDiv = document.createElement("div");

nuevoDiv.innerHTML = `<h3>id:${producto.id}</h3>
                        <p>${producto.nombre}</p>
                        <p>${producto.precio}</p>  `;

container.appendChild(nuevoDiv);

document.getElementById("nombre").value = "juan";

function multiplicador(arr) {
  let nuevoArray = [];
  arr.forEach((numero) => nuevoArray.push(numero * 2));
  return nuevoArray;
}
