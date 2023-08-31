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

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

console.log(1);
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const pokeContainer = document.getElementById("container");
    pokeContainer.innerHTML = `<img src="${data.sprites.front_default}"/>`;
  })
  .catch((err) => console.log("oops"));
console.log(3);
