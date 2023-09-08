import { fetchingData } from "./fetchStock.js";

const productosLista = document.getElementById("productos");
const productosCarrito = document.getElementById("carrito");
const btn = document.getElementById("button");

window.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});

const renderProducts = async () => {
  let productos = await fetchingData();
  console.log(productos);
  let productosPanel = "";
  productos.forEach((producto) => {
    {
      productosPanel += `<div>
                            <div class = "text-center">
                              <div class = "w-[50%] text-center">
                              <img id = "fotoProducto"src = "${producto.Foto}" class ="w-auto rounded-lg mx-auto"/>
                              <h5 id = "tituloProducto">${producto.Nombre}</h5>
                              <p id = "descripcionProducto">${producto.Descripcion}</p>
                              <p id = "precioProducto">${producto.Precio}</p>
                              <button data-id = "${producto.Id}" id = "mybtn"name = "btnComprar" class ="btn-success bg-blue-600 rounded-lg p-4 text-white">Comprar</button>
                              </div>
                            </div>
                          </div>`;
    }
  });
  productosLista.innerHTML = productosPanel;
};

let carrito = [];

productosLista.addEventListener("click", (e) => {
  if (e.target.id === "mybtn") {
    saveToLocal(e.target.dataset.id); //ese id se lo manda al localStorage
  }
});

//funcion q guarde los datos en el localStorage

const saveToLocal = async (id) => {
  let productos = await fetchingData();
  let productoDelArray = productos.find(
    (producto) => producto.Id === parseInt(id) //buscar si el Id del producto del array coincide con el id del evento dentro del dataset
  );
  let productoEnStorage = JSON.parse(localStorage.getItem(id));
  console.log(productoEnStorage);
  if (productoEnStorage === null) {
    //si el localstorage no tiene datos
    localStorage.setItem(
      id,
      JSON.stringify({ ...productoDelArray, cantidad: 1 })
    );
    recorrerLocalStorage();
  } else {
    let productoExistente = JSON.parse(localStorage.getItem(id)); //traigo el objeto
    productoExistente.cantidad = productoExistente.cantidad + 1;
    productoExistente.Precio =
      productoExistente.Precio + productoDelArray.Precio;
    localStorage.setItem(id, JSON.stringify(productoExistente)); //se vuelve a guardar pero modificado
  }
  recorrerLocalStorage();
};

//funcion q suma productos al carrito

const recorrerLocalStorage = () => {
  carrito.length = 0;
  for (let index = 0; index < localStorage.length; index++) {
    const element = localStorage.key(index);
    carrito.push(JSON.parse(localStorage.getItem(element)));
  }
  console.log(carrito);
};

/* Object.keys(localStorage).forEach((key) =>
  console.log(JSON.parse(localStorage.getItem(key)))
); */

const renderCarrito = () => {
  let productosjuegos = "";
  if (carrito.length > 0) {
    carrito.forEach((producto) => {
      {
        productosjuegos += `<div class=" relative bg-black w-1/2 mx-auto rounded-lg">
                              <div class = "text-center">
                              <div class = "w-[50%] my-5 text-center p-5">
                              <img id = "fotoProducto"src = "${producto.Foto}" class ="w-auto rounded-lg mx-auto"/>
                              <h5 id = "tituloProducto">${producto.Nombre}</h5>
                              <p id = "descripcionProducto">${producto.Descripcion}</p>
                              <p id = "precioProducto">${producto.Precio}</p>
                              <button data-id = "${producto.Id}" id = "mybtnclear" name = "btnComprar" class ="btn-danger bg-red-600 rounded-lg p-4 text-white">Borrar</button>
                            </div>
                            </div>
        </div>`;
      }
    });
  }
  productosCarrito.innerHTML = productosjuegos;
};

btn.addEventListener("click", () => {
  renderCarrito();
});
