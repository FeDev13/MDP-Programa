//objetos
//construccion literal
const persona = {
  nombre: "Juan", //clave-valor o key value
  edad: 23,
  profesiones: ["progrmador", "estudiante"],
  casado: false,
};

console.log(persona.profesiones[1]);

persona.nombre = "Pedro";
persona.altura = 170;
console.log(persona);

//funcion constructora

function Persona(nombre, edad, profesiones, casado) {
  //molde
  this.nombre = nombre;
  this.edad = edad;
  this.profesiones = profesiones;
  this.casado = casado;
  this.hablar = function () {
    console.log("hola soy" + this.nombre);
  };
}

const persona1 = new Persona("Juan", 23, "estudiante", false);
const persona2 = new Persona("pepe", 54, "nada", false);

//clases

class Persona {
  constructor(nombre, edad, casado) {
    this.nombre = nombre;
    this.edad = edad;
    this.casado = false;
  }
  hablar() {
    console.log("hola soy" + this.nombre);
  }
}
const persona3 = new Persona("Juan", 23, "estudiante", false);
console.log(persona1);

persona1.hablar();
