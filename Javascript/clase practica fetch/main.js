/* const dataContainer = document.getElementById("container");
const boton = document.getElementById("btn");

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

const cardUsers = async () => {
  const usersArray = await getUsers();

  boton.addEventListener("click", () => {
    let card = "";
    usersArray.forEach((user) => {
      //let { name, username, email } = user;
      card += `<div class = "mx-5 bg-cyan-100 text-black rounded-md">
                <h2>${user.name}</h2>
                <p>${username}</p>
                <p>${email}</p>
            </div>`;
    });
    dataContainer.innerHTML = card;
  });
};

cardUsers(); */
const BD = [
  { id: 1, nombre: "Producto 1", precio: 1500 },
  { id: 2, nombre: "Producto 2", precio: 2500 },
  { id: 3, nombre: "Producto 3", precio: 3500 },
  { id: 4, nombre: "Producto 4", precio: 3500 },
];

const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(BD);
    }, 3000);
  });
};
// inicializamos con un array vacío
let productos = [];

const renderProductos = (arr) => {
  // función que genere la vista de los productos
  console.log(BD);
};

// asincrónicamente pedimos los datos y generamos la vista
pedirProductos().then((res) => {
  productos = res;
  renderProductos(productos);
});

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Coderhouse",
    body: "Post de prueba",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
