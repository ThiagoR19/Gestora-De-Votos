var pasaEmail = false
var motivo = ""

let localizacion;

if (location.hostname === "localhost") {
  localizacion = "/Gestora-De-Votos";
} else {
  localizacion = "https://riffo.ctpoba.com";
}

const usuario = ["usuario", "coordinador","admin"];

const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

const buttonRegister = document.getElementById("buttonRegister");
const nombre = document.getElementById("nombreRe");
const apellido = document.getElementById("apellido");
const email = document.getElementById("emailRe");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const emaillog = document.getElementById("emailLog");
const passwordlog = document.getElementById("passwordLog");
const buttonInicio = document.getElementById("buttonInicio");

email.addEventListener("input", verificarCorreo);
emailRe.addEventListener("input", verificarCorreo);


buttonInicio.addEventListener("click", async (event) => {
  event.preventDefault();
  try {
    const response = await fetch(`${localizacion}/api/index.php?recurso=Usuarios`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: "logueo",
            email: emaillog.value,
            password: passwordlog.value
        })
    });
    
    // console.log("Status:", response.status);

    const data = await response.json();

    if (data.success) {
      mostrarTexto("Ha iniciado sesion correctamente ✅😄");
      const miSonido = new Audio('Sonidos/Check.mp3');
      miSonido.play();
      Yalogueado(data.datos.id, data.datos.tipo);
    } 
    if (data.message === 'Credenciales inválidas') {
      mostrarTexto("Correo o contraseña incorrectos ❌");
      const miSonido = new Audio('Sonidos/error.mp3');
      miSonido.play();
    } else {
      mostrarTexto("Ocurrio un error inesperado ❌");
      const miSonido = new Audio('Sonidos/error.mp3');
      miSonido.play();
      // console.log(data.message)
    }
  }
  catch (error) {
    console.error("❌ Eror en fetch:", error);
  }
});

buttonRegister.addEventListener("click", async () => {

  pasaEmail = verificacionRegistro(email.value);

  if (pasaEmail==true) {
    // console.log ("el correo ha sido verificado")
    fetch(`${localizacion}/api/index.php?recurso=Usuarios`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
      })
    })
      .then(response => response.json())
      .then(data => { 
        if (data.status === "ok") {
          mostrarTexto("Cuenta creada correctamente ✅😄");
          const miSonido = new Audio('Sonidos/Check.mp3');
          miSonido.play();
          creacion(email.value);
          Yalogueado(data.datos?.id, data.datos?.tipo);
        } else {
          if (data.message == 'Faltan datos obligatorios') {
            mostrarTexto("Complete todos los campos para registrarse ❌");
            const miSonido = new Audio('Sonidos/error.mp3');
            miSonido.play();
          } 
          if(data.message == 'Email ya registrado') {
            mostrarTexto("Email ya registrado ❌");
            const miSonido = new Audio('Sonidos/error.mp3');
            miSonido.play();
          } 
          if(data.message == 'Las contraseñas no coinciden') {
            mostrarTexto("Las contraseñas no coinciden ❌");
            const miSonido = new Audio('Sonidos/error.mp3');
            miSonido.play();
          } else {
            // console.log("el error anda aca");
            // console.log(data.message);
          }
        }
      })
      
  } else {
    switch (motivo) {
      case "Ya estabas registrado con otra cuenta":
        mostrarTexto("Usted ya se ah registrado con otra cuenta ❌");
        const miSonido = new Audio('Sonidos/error.mp3');
        miSonido.play();
        break;
      case "El correo no es válido":
        mostrarTexto("El correo ingresado es invalido ❌");
        const miSonido2 = new Audio('Sonidos/error.mp3');
        miSonido2.play();
        break;
      default:
        // console.log("❌ Mal: Ha ocurrido un error inesperado");
        break;
    }
  }
});

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("active");
});


function verificacionRegistro(email){
  const clave = "RegistroAnterior";
  const registro = localStorage.getItem(clave);
  if (registro){
    if (registro !== email) {
      // El email ya está registrado
      // console.log("ya haz entrado con otra cuenta")
      if (pasaEmail){
        motivo = "Ya estabas registrado con otra cuenta"
      }
      return false;
      
    }else{
      //console.log ("Bienvenido de nuevo");
      
      return true;
    }
    
  }else{
    //console.log ("Nuevo usuario, puede continuar");
    return true;
  }
}

function creacion(email){
    
    const clave = "RegistroAnterior";
    const registro = localStorage.getItem(clave);

    if (!registro) {
      // No hay registro previo → lo guardamos
      localStorage.setItem(clave, email);
      // console.log("📩 Nuevo registro guardado:", email);
    } 
    else {
      // Ya había un registro
      //console.log("⚠️ Ya existe un registro previo:", registro);
    }
}

function verificarCorreo() {
  
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!regex.test(emaillog.value)) {
    emaillog.classList.add("invalid");
    pasaEmail = false

  }
  else{
    emaillog.classList.remove("invalid");
    pasaEmail = true
  }
  if (!regex.test(email.value)) {
    email.classList.add("invalid");
    pasaEmail = false
    motivo = "El correo no es válido"
  }
  else{
    email.classList.remove("invalid");
    pasaEmail = true
  }
}
function Yalogueado(id, tipo){
  // console.log(tipo)
  // console.log(id)
  let info = {
    id: id,
    tipo: tipo
  }
  localStorage.setItem("usuario", JSON.stringify(info));
  window.location.href = "index.html";
}