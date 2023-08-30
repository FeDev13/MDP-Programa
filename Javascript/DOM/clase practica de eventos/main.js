/* const button = document.getElementById("btn"); 

 const contenedor = document.getElementById("container");
const parr = document.getElementById("parrafo");

button.addEventListener("click", () => {
  contenedor.classList.add("divColor");
}); 

button.onclick = () => {
  console.log("click1");
};

button.onclick = () => {
  console.log("click2");
}; 

 button.addEventListener("click", () => {
  console.log("click1");
});

button.addEventListener("click", () => {
  console.log("click2");
});  */

//localStorage

//guardar datos en par clave-valor
localStorage.setItem("user", "fede13");
//traer datos
const user = localStorage.getItem("user");
console.log(user);
//eliminar datos
localStorage.setItem("user2", "tute");
localStorage.setItem("user3", "negro");
localStorage.setItem("user4", "nina");
localStorage.removeItem("user2");

console.log(localStorage);

//sessionStorage
sessionStorage.setItem("email", "fsdfds@asdas.com");
const session = sessionStorage.getItem("email");
console.log(session);
//recorrer
for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key(i);
  console.log("User: " + clave);
}

//json stringfy
const producto1 = { nombre: "locion", precio: 25 };
const newJson = JSON.stringify(producto1);
console.log(newJson);
console.log(typeof newJson); //paso a ser un string
console.log(typeof producto1); //es un objeto

localStorage.setItem("producto1", newJson);

//json parse
const parsed = JSON.parse(newJson);
console.log(parsed);
console.log(typeof parsed);

const producto2 = JSON.parse(localStorage.getItem("producto1")); //otra forma
console.log(producto2);

//ej
const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
];

const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};
//Almacenar producto por producto
/* for (const producto of productos) {
  guardarLocal(producto.id, JSON.stringify(producto));
} */
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));

//--------------------//
class Producto {
  constructor(obj) {
    this.nombre = obj.producto.toUpperCase();
    this.precio = parseFloat(obj.precio);
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
}
//Obtenemos el listado de productos almacenado
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const products = [];
//Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
for (const objeto of almacenados) products.push(new Producto(objeto));
//Ahora tenemos objetos productos y podemos usar sus métodos
for (const producto of products) producto.sumaIva();

//--------------//
let usuario;
let usuarioEnLS = JSON.stringify(localStorage.getItem("usuario"));

// Si había algo almacenado, lo recupero. Si no le pido un ingreso
if (usuarioEnLS) {
  usuario = usuarioEnLS;
} else {
  usuario = prompt("Ingrese su nombre de usuario");
}

let carrito = [];
let carritoEnLS = JSON.stringify(localStorage.getItem("carrito"));

// Inicializo mi app con carrito como array vacío o con el registro que haya quedado en LS
if (carritoEnLS) {
  carrito = carritoEnLS;
}

// Función que renderizaría el carrito
//renderCarrito(carrito);

//-------------------------------------------//

//Callstack
const cortar = (ingrediente) => {
  /* if (ingrediente === "lechuga") {
    throw new Error ("no hay lechuga")
  } */
  console.log("Cortar " + ingrediente);
};

function mezclarIngredientes(n) {
  if (n <= 0) return;

  console.log("Mezclar #" + n);
  mezclarIngredientes(n - 1);
}

function comer() {
  console.log("Comer");
}

function hacerEnsaladaMixta() {
  cortar("tomate");
  cortar("lechuga");
  cortar("cebolla");
  mezclarIngredientes(5);
  comer();
}

hacerEnsaladaMixta();
