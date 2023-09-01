/* let promise1 = new Promise(function (resolve, reject) {
  //codigo ejecutor
});

let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("hecho"), 1000);
});

promise1.then(
    result => alert(result),
    error => alert(error)
) */

/* const url = "https://pokeapi.co/api/v2/pokemon/ditto"; */

console.log(1);

/* fetch(url)
  .then((res) => res.json())
  .then((pokemon) => {
    const pokeContainer = document.getElementById("container");
    pokeContainer.innerHTML = `<h3>${pokemon.names}</h3>
                                <img src="${pokemon.sprites.front_default}"/>
    `;
  })
  .catch((err) => console.log("oops")); 

console.log(3);
 */

/* const url = "https://jsonplaceholder.typicode.com/users";
const container = document.getElementById("userContainer");
const list = document.createElement("ul");

fetch(url)
  .then((res) => res.json())
  .then((users) => {
    users.forEach((user) => {
      let elem = document.createElement("li");
      elem.appendChild(document.createTextNode(`${user.name} ${user.email}`));
      list.appendChild(elem);
    });
    container.appendChild(list);
  });
 */

/* async function pedirUsers(params) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(res);
}
pedirUsers();
 */
/* const pedirUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
};
 */

const cargarUsers = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    } else {
      console.log(res.status);
    }
  } catch (error) {
    console.log(error);
  }
};
cargarUsers();
