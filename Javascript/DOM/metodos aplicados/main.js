const contenedor = document.getElementById("contenedor");
const fr = document.createDocumentFragment();

for (let i = 0; i < 20; i++) {
  const item = document.createElement("li");
  item.innerHTML = "hola";
  fr.appendChild(item);
}
contenedor.appendChild(fr);

//ej con for of
let personas = ["juan", "pedro", "lucas"];

for (const persona of personas) {
  let item = document.createElement("li");
  item.innerHTML = persona;
  contenedor.appendChild(item);
}

const lista = document.querySelectorAll("p");
console.log(lista.map);

const coleccion = document.getElementsByTagName("p");
console.log(coleccion.map);

const titulo = document.getElementById("titulo");

titulo.classList.add("title");
titulo.classList.remove("title");

//ej con forEach
const alumnos = [
  { nombre: "Juan", estado: "aprobado" },
  { nombre: "Pedro", estado: "desaprobado" },
  { nombre: "Lucas", estado: "aprobado" },
];

alumnos.forEach((alumno) => {
  const nuevoDiv = document.createElement("div"); //crea un div
  nuevoDiv.classList.add("alumno");

  const nombreAlumno = document.createElement("h2"); //crea un h2
  nombreAlumno.textContent = alumno.nombre; //accede a la propiedad nombre y la setea como text en el h2

  const estadoAlumno = document.createElement("p"); //crea el p
  estadoAlumno.textContent = alumno.estado; //accede al estado y lo setea

  nuevoDiv.appendChild(nombreAlumno);
  nuevoDiv.appendChild(estadoAlumno);

  contenedor.appendChild(nuevoDiv);
});

//destructuring

const persona = { nombre: "juan", apellido: "perez", edad: 25 };

/* const nombre = persona.nombre; //metodo tradicional
const apellido = persona.apellido;
const edad = persona.edad; */

const { nombre, apellido, edad } = persona; //destructuring

console.log(nombre, apellido, edad);

//ej con forEach, template string y destructuring
const productos = [
  { nombre: "remera", precio: 250, descripcion: "remera deportiva" },
  { nombre: "remera", precio: 250, descripcion: "remera deportiva" },
  { nombre: "remera", precio: 250, descripcion: "remera deportiva" },
  { nombre: "remera", precio: 250, descripcion: "remera deportiva" },
  { nombre: "remera", precio: 250, descripcion: "remera deportiva" },
];

const renderProductos = () => {
  let nuevoContenedor = "";
  productos.forEach((producto) => {
    let { nombre, precio, descripcion } = producto;
    nuevoContenedor += `<div>
                        <div class = " rounded-2xl bg-slate-200">
                        <h3>${nombre}</h3>
                        <p>$ ${precio}</p>
                        <p>${descripcion}</p>
                        </div>
                        </div>`;
  });
  contenedor.innerHTML = nuevoContenedor;
};
renderProductos();
