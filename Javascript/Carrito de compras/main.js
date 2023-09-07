const productos = [
  {
    Id: 1,
    Nombre: "God of War",
    Descripcion: "Fisico",
    Precio: 150,
    Foto: "https://gorilagames.com/img/Public/1019-producto-god-of-war-9234.jpg",
    Categoria: "Playstation 4",
    Stock: 10,
  },
  {
    Id: 2,
    Nombre: "Resident Evil 2",
    Descripcion: "Fisico",
    Precio: 300,
    Foto: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0204/uDFoGvnMTTCLVmTwjj0njGWC.png",
    Categoria: "Playstation 4",
    Stock: 10,
  },
  {
    Id: 3,
    Nombre: "Pokemon Sword",
    Descripcion: "Digital",
    Precio: 500,
    Foto: "https://m.media-amazon.com/images/M/MV5BNmQyN2MzMWUtMGI4NS00NmRlLWE5MzYtYjRiMmU4ODI1ZDNlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
    Categoria: "Nintendo Switch",
    Stock: 0,
  },
];

const productosLista = document.getElementById("productos");
const btn = document.getElementById("button");
const productoscarrito = document.getElementById("carrito");

const renderCard = () => {
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
renderCard();

productosLista.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.classList.contains("btn-success")) {
    agregarProductoCarrito(e.target.parentElement, Number(e.target.dataset.id)); //agrega el div insertado dinamicamente y le apunta al id del objeto
  }
});

let carrito = [];

const agregarProductoCarrito = (producto, id) => {
  console.log(producto);

  let productoCarrito = carrito.find((producto) => producto.Id === id);
  if (productoCarrito === undefined) {
    //si esta vacio hago push del objeto al array carrito
    carrito.push({
      Id: id,
      Nombre: producto.querySelector("#tituloProducto").textContent,
      Descripcion: producto.querySelector("#descripcionProducto").textContent,
      Precio: Number(
        producto.querySelector("#precioProducto").textContent.slice(1)
      ),
      Foto: producto.querySelector("#fotoProducto").getAttribute("src"),
    });
  }
  console.log(carrito);
};

btn.addEventListener("click", () => {
  renderCarrito();
});

const renderCarrito = () => {
  let productosCarrito = "";
  carrito.forEach((producto) => {
    {
      productosCarrito += `<div class=" relative bg-black w-1/2 mx-auto rounded-lg">
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
    productoscarrito.innerHTML = productosCarrito;
  });
};

//borra producto
productoscarrito.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    borrarProductoCarrito(Number(e.target.dataset.id));
  }
});

const borrarProductoCarrito = (id) => {
  const prodIndex = carrito.findIndex((prod) => prod.Id === Number(id));
  carrito.splice(prodIndex, 1);
  renderCarrito();
};
