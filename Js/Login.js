var pasaEmail = false
var motivo = ""

const localizacion = "PHP/Index.php"
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


buttonInicio.addEventListener("click", async () => {
  // try {
    const response = await fetch(`${localizacion}`, {
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

    // Verificar si la respuesta HTTP es correcta
    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
    }

    // Intentar parsear el JSON
    const data = await response.json();
    console.log (data)
    // Validar la respuesta del backend
    if (data.success) {
      alert("✅ Bien: " + data.message);
      mostrarHeaderPorUsuario(data.datos.tipo)
    } else {
        alert("❌ Mal: " + data.message);
    }
});

buttonRegister.addEventListener("click", async () => {

  pasaEmail = verificacionRegistro(email.value);

  if (pasaEmail==true) {
    console.log ("el correo ha sido verificado")
    try {
      const response = await fetch(localizacion, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          accion: "registrar",
          nombre: nombre.value,
          apellido: apellido.value,
          email: email.value,
          password: password.value,
          confirmPassword: confirmPassword.value
        })
      });
      console.log("Status:", response.status);

      const data = await response.json();

      console.log(data);

      if (!data.success) {
        if (data.faltantes) {
          alert("Faltan los siguientes campos: " + data.faltantes.join(", "));
        } else {
          console.log("el error anda aca")
          alert(data.message);
        }
      } 
      else {
        creacion(email.value);
        //localStorage.setItem("usuario", JSON.stringify(data.tipo));
        alert("✅ Bien: " + data.message);
        //var info = JSON.parse(localStorage.getItem("usuario"));
        console.log(info);
      }
    } 
    catch (error) {
      console.error("❌ Eror en fetch:", error);
      alert("❌ Error: " + (error.message || error));
    }
  }
  else{
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


function mostrarHeaderPorUsuario(tipo) {
  if (tipo == 1){
    console.log ("hola soy usuario")
  }
  else if (tipo == 2){
    console.log ("hola soy coordinador")
  }
  else if (tipo == 3){
    console.log ("hola soy admin")
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