//crear una funcion que tome como parametro un array
//lo recorra y agregue los elementos a otro array
//que pueda ya estar conteniendo elementos. La funcion
//va a devolver un string concatenado

/* const str = ["hola", "mundo"];

function addToArray(stri) {
  let newArray = ["digo"];
  for (let i = 0; i < stri.length; i++) {
    newArray.push(stri[i]);
  }
  return newArray.join(" ");
}

console.log(addToArray(str)); */

/* const user = {
  nombre: "Juan",
  edad: 30,
  logeado: false
};

for (const prop in user) {
  //console.log(prop);
  console.log(user[prop]);
} */

//crear las siguientes clases:
//Motor: con metodos de arrancar y apagar el motor
//Ruedas: metodos de inflar y desinflar

class Motor {
  arrancar;
  apagar;
  constructor(arrancar, apagar) {
    this.arrancar = arrancar;
    this.apagar = apagar;
  }
}

class Rueda {
  inflar;
  desinflar;
  constructor(inflar, desinflar) {
    this.inflar = inflar;
    this.desinflar = desinflar;
  }
}

class Coche {
  motor;
  rueda1;
  rueda2;
  constructor() {
    this.motor = new Motor();
    this.rueda1 = new Rueda();
    this.rueda2 = new Rueda();
  }
}

const coche = new Coche();

//crear una clase Persona. Sus atributos van a ser nomnre
//edad y DNI. Construir los siguientes metodos:
//mostrar(): Muestre los datos de la persona
//esMayordeEdad(): devuelve un valor booleano si es
//mayor de edad
