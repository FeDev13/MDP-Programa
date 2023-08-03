/* console.log(this);
//this refiere al objeto que esta llamando a la funcion
var age = 28;

function mostrarEdad() {
  console.log(this.age);
  console.log(this);
}

window.mostrarEdad(); //this refiere al objeto que esta llamando

var persona = {
  edad: 30,
  mostrarEdad: mostrarEdad,
  personaAnidada: { edad: 40, mostrarEdad: mostrarEdad },
};
persona.mostrarEdad(); //this refiere a persona
persona.personaAnidada.mostrarEdad(); //this refiere a personaanidada
 */
//this es determinado por como una funcion es llamada y no del scope

var persona = {
  edad: 30,
  saludar1: function () {
    console.log("Hola 1", this.edad);
    console.log("Hola 1", this);
    /* function saludar2() {
      console.log("Hola 2", this.edad);
      console.log("Hola 2", this); //este this referencia al obejto windows
    } */
    const saludar2 = () => {
      console.log("Hola2", this.edad);
      console.log("Hola2", this); //este this referencia al objeto persona
    };
    saludar2();
  },
};
persona.saludar1();
