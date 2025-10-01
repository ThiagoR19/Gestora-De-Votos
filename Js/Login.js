const localizacion = "PHP/Index.php"

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

buttonInicio.addEventListener("click", async () => {
  try {
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
    } else {
        alert("❌ Mal: " + data.message);
    }
} catch (error) {
    // Manejo más específico de errores
    if (error instanceof TypeError) {
        // Problemas de red, CORS, URL incorrecta
        console.error("Error de red o CORS:", error);
        alert("No se pudo conectar al servidor. Verifique la URL o su conexión.");
    } else if (error instanceof SyntaxError) {
        // JSON inválido
        console.error("Error de JSON:", error);
        alert("La respuesta del servidor no es válida.");
    } else {
        // Otros errores
        console.error("Error desconocido:", error);
        alert("Ocurrió un error inesperado: " + error.message);
    }
}

});
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
  console.log('hola')
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("active");
});

