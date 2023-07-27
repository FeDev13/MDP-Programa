/* const lista = ["tomate", "lechuga", "arroz"] */

/* console.log(lista[2]); */

//propiedad length

/* console.log(lista.length); */

//metodo push, agregaa un elemento nuevo como ultima
//posicion en el array
/* lista.push("huevos")
console.log(lista); */

//metodo pop,, quita el elemento de la ultima posicion

/* lista.pop() */

//metodo shift, quitar el primer elemento

/* lista.shift() */

//metodo splice, elimina uno o varios elementos de
//un array en la posicion que se le indique

const nombres = ["juan", "pedro", "miguel", "ana", "vanesa"];

/* nombres.splice(0)

console.log(nombres); */

//metodo slice, devuelve una parte del array dentro
//de otro nuevo, tomando un inicio y un final

/* const nombreSliced = nombres.slice(1, 3)

console.log(nombreSliced);
console.log(nombres); */
//metodo reverse invierte el orden de los elementos
nombres.reverse();

console.log(nombres);

//metodo includes, chequear si un elemento existe en el
//array

console.log(nombres.includes("pablo"));

console.log(nombres.indexOf("pablo"));

const apellidos = ["perez", "gomez"];

const arraysConcatenados = nombres.concat(apellidos);
console.log(arraysConcatenados);

//metodo join

console.log(apellidos.join(" mas "));

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

function sumarNumeros(num) {
  let arr = []; //array vacio
  for (let i = 0; i <= num; i++) {
    //for itera sobre num
    arr.push(i); //se hace un push al array vacio del elemento en la posicion iterada i
  }
  return arr;
}
console.log(sumarNumeros(5));
