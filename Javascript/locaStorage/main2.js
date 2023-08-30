const productos = [
  { id: 1, producto: "arroz", precio: 125 },
  { id: 2, producto: "fideo", precio: 150 },
  { id: 3, producto: "pan", precio: 100 },
  { id: 4, producto: "harina", precio: 25 },
];

const guardaralLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

//almacenar producto por producto
/* for (const producto of productos) {
  guardaralLocal(producto.id, JSON.stringify(producto));
} */

//guardaralLocal("listaProductos", JSON.stringify(productos));

const contenedor = document.getElementById("container");

contenedor.addEventListener("mouseenter", () => {
  contenedor.innerText = "hola mundo";
});

contenedor.addEventListener("mouseleave", () => {
  contenedor.innerText = "adios mundo";
});
