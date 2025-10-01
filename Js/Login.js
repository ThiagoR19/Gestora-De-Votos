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

function verificarCorreo() {

  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!regex.test(emaillog.value)) {
    emaillog.classList.add("invalid");
  }
  else{
    emaillog.classList.remove("invalid");
  }
  if (!regex.test(email.value)) {
    email.classList.add("invalid");
  }
  else{
    email.classList.remove("invalid");
  }
}

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

    // Validar la respuesta del backend
    if (data.success) {
      alert("✅ Bien: " + data.message);
      mostrarHeaderPorUsuario(data.datos.tipo)
    } else {
        alert("❌ Mal: " + data.message);
    }


});
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

buttonRegister.addEventListener("click", async () => {
  try {
    const response = await fetch(`${localizacion}`, {
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

    const data = await response.json();
    console.log(data);
    if (!data.success) {
      if (data.faltantes) {
        alert("Faltan los siguientes campos: " + data.faltantes.join(", "));
      } else {
        alert(data.message);
      }
    } 
    else {
      alert(data.message);
    }
  } 
  catch (error) {
    console.error("Error:", error);
    alert("Hubo un error en la solicitud");
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

