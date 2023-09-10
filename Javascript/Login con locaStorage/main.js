let datos = [];

let btnRegistro = document.getElementById("registro");
let btnIngreso = document.getElementById("ingreso");

//registro
btnRegistro.addEventListener("click", () => {
  // capturo los valores de los inputs
  const usuarioRegistrado = document.getElementById("userRegis").value;
  const contraseñaRegistrada = document.getElementById("passRegis").value;
  const reContraseña = document.getElementById("rePassRegis").value;
  const email = document.getElementById("email").value;

  validar(usuarioRegistrado, contraseñaRegistrada, reContraseña, email); //funcion para validar el registro
});

class Usuario {
  constructor(usuario, pass, email) {
    this.usuario = usuario;
    this.pass = pass;
    this.email = email;
  }
}

function validar(usuarioRegistrado, contraseñaRegistrada, reContraseña, email) {
  if (
    usuarioRegistrado == "" ||
    contraseñaRegistrada == "" ||
    reContraseña == "" ||
    email == ""
  ) {
    alert("los campos no deben estar vacio");
  } else if (contraseñaRegistrada.length < 6) {
    alert("la contraseña debe ser mayor a 6 digitos");
  } else if (contraseñaRegistrada != reContraseña) {
    alert("las contraseña no coinciden");
  } else {
    datos.push(new Usuario(usuarioRegistrado, contraseñaRegistrada, email)); //push al array vacio y se sube al localstorage

    localStorage.setItem("dato", JSON.stringify(datos));

    document.getElementById("userRegis").value = ""; //un vez q se hace el push y el seteo a local, se limpian los inputs
    document.getElementById("passRegis").value = "";
    document.getElementById("rePassRegis").value = "";
    document.getElementById("email").value = "";

    document.getElementById("tab-2").checked = false;
    document.getElementById("tab-1").checked = true;
  }
}

btnIngreso.addEventListener("click", ingresar);

function ingresar() {
  const usuario = document.getElementById("user").value;
  const contrasena = document.getElementById("pass").value;
  let validacion = validarIngreso(usuario, contrasena); //funcion q toma usuario y password y los valida
  let recuperarLocalS = JSON.parse(localStorage.getItem("dato")); //recupera usuarios del localstorage

  if (validacion) {
    if (
      recuperarLocalS[0].usuario === usuario &&
      recuperarLocalS[0].pass === contrasena
    ) {
      document.getElementById("user").value = "";
      document.getElementById("pass").value = "";
      alert("inicio de sesion correcto");
    }
  } else {
    alert("datos incorrectos");
  }
}

function validarIngreso(usuario, contrasena) {
  if (usuario === "" || contrasena === "") {
    return false;
  } else {
    true;
  }
}
