var pasaEmail = false
var motivo = ""

let localizacion;

if (location.hostname === "localhost") {
  localizacion = "/Gestora-De-Votos/PHP/Index.php";
} else {
  localizacion = "https://riffo.ctpoba.com/PHP/Index.php";
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
    const response = await fetch(localizacion, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            accion: "login",
            email: emaillog.value,
            password: passwordlog.value
        })
    });
    
    console.log("Status:", response.status);

    const data = await response.json();

    // Intentar parsear el JSON
    console.log(data)
    // Validar la respuesta del backend
    if (data.success) {
      alert("✅ Bien: " + data.message);
      Yalogueado (data.datos.id, data.datos.tipo);
    } else {
        alert("❌ Mal: " + data.message);
    }
  }
  catch (error) {
      console.error("❌ Eror en fetch:", error);
      alert("❌ Error: " + (error.message || error));
    }
});

buttonRegister.addEventListener("click", async () => {

  pasaEmail = verificacionRegistro(email.value);

  if (pasaEmail==true) {
    console.log ("el correo ha sido verificado")
    fetch(localizacion, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'registrar',
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
      })
    })
      .then(response => response.json())
      .then(data => { 
        console.log(data);
        if (data.status === "ok") {
          alert("Usuario insertado correctamente");
          creacion(email.value);
          Yalogueado(data.datos?.id, data.datos?.tipo);
          alert("✅ Bien: " + data.message);
        } else {
          if (data.faltantes) {
            alert("Faltan los siguientes campos: " + data.faltantes.join(", "));
          } else {
            console.log("el error anda aca");
            alert(data.message);
          }
        }
      })
      /*.catch(error => {
        console.error("❌ Error en fetch:", error);
      });*/
      
  } else {
    switch (motivo) {
      case "Ya estabas registrado con otra cuenta":
        alert("❌ Mal: " + motivo);
        break;
      case "El correo no es válido":
        alert("❌ Mal: " + motivo);
        break;
      default:
        alert("❌ Mal: Ha ocurrido un error inesperado");
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
    if (registro != email) {
      // El email ya está registrado
      console.log("ya haz entrado con otra cuenta")
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
      console.log("📩 Nuevo registro guardado:", email);
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
  console.log(tipo)
  console.log(id)
  alert("hola")
  let info = {
    id: id,
    tipo: tipo
  }
  localStorage.setItem("usuario", JSON.stringify(info));
  window.location.href = "index.html";
}