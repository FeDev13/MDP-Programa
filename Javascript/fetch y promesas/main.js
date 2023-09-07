let promise1 = new Promise(function (resolve, reject) {
  //codigo ejecutor
});

let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("hecho"), 1000);
});

promise1.then(
  (result) => alert(result),
  (error) => alert(error)
);

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

console.log(1);

//-----------ejemplo con fetch------------

fetch(url)
  .then((res) => res.json()) //la promesa esta pendiente por eso resuelvo con otro then para obtener un objeto
  .then((pokemon) => {
    //objeto
    const pokeContainer = document.getElementById("container");
    pokeContainer.innerHTML = `<h3>${pokemon.names}</h3>
                                <img src="${pokemon.sprites.front_default}"/>
    `;
  })
  .catch((err) => console.log("oops"));

console.log(3);

const url2 = "https://jsonplaceholder.typicode.com/users";
const container = document.getElementById("userContainer");
const list = document.createElement("ul");

fetch(url2)
  .then((res) => res.json())
  .then((users) => {
    users.forEach((user) => {
      let elem = document.createElement("li");
      elem.appendChild(document.createTextNode(`${user.name} ${user.email}`));
      list.appendChild(elem);
    });
    container.appendChild(list);
  });

//---------async await--------

async function pedirUsers(params) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users"); //await deber ir en una funcion asyn y espera a que se resuela la promesa antes de ejecutar el console.log
  console.log(res);
}
pedirUsers();

const pedirUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
};

const cargarUsers = async () => {
  try {
    //resulevo que hacer con la promesa en caso de resolverse bien
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    } else {
      console.log(res.status);
    }
  } catch (error) {
    //en caso de error
    console.log(error);
  }
};
cargarUsers();
