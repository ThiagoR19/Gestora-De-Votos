window.fbAsyncInit = function() {
  FB.init({
    appId      : '791915376863309',
    cookie     : true,
    xfbml      : true,
    version    : 'v23.0'
  });
    
  FB.AppEvents.logPageView();   
    
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function onLogin(){
  FB.login(function(response){
    if(response.authResponse){
      console.log('Bienvenido!  Fetching your information.... ');
      FB.api('/me', function(response){
        console.log(response)
        RegistroConFacebook(response)
        console.log('Good to see you, ' + response.name + '.');
      });
    } else {
      console.log('User cancelled login or did not fully authorize.');
    }
  });
}
async function RegistroConFacebook(Respuesta){
  const datos = separarNombreYApellido(Respuesta.name);
  fetch(`${localizacion}/api/index.php?recurso=Usuarios`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      nombre: datos.nombre,
      apellido: datos.apellido,
      email: Respuesta.id,
      password: Respuesta.id,
      confirmPassword: Respuesta.id
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
    } 
    else {
      if (data.message == 'Faltan datos obligatorios') {
        console.log(data.faltantes)
        mostrarTexto("Complete todos los campos para registrarse ❌");
        const miSonido = new Audio('Sonidos/error.mp3');
        miSonido.play();
      } 
      if(data.message == 'Email ya registrado') {
        LogueoConFacebook(Respuesta);
      } 
      if(data.message == 'Las contraseñas no coinciden') {
        mostrarTexto("Las contraseñas no coinciden ❌");
        const miSonido = new Audio('Sonidos/error.mp3');
        miSonido.play();
      } else {
        console.log("el error anda aca");
        console.log(data.message);
      }
    }
  })
}
async function LogueoConFacebook(Respuesta){
  console.log("ando en logueo")
  try {
    const response = await fetch(`${localizacion}/api/index.php?recurso=Usuarios`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: "logueo",
            email: Respuesta.id,
            password: Respuesta.id
        })
    });
    
    console.log("Status:", response.status);

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
      console.log(data.message)
    }
  }
  catch (error) {
    console.error("❌ Eror en fetch:", error);
  }
}

//google
const CLIENT_ID = "772259205925-tft0mmur27s86r99k4a734t1r62vfa4u.apps.googleusercontent.com";

// Inicializa el SDK de Google
window.onload = function() {
  google.accounts.id.initialize({
    client_id: CLIENT_ID,
    callback: handleCredentialResponse
  });
};

document.getElementById("googleLoginBtn").addEventListener("click", (e) => {
  e.preventDefault();
  google.accounts.id.prompt();
});

async function handleCredentialResponse(respuestaGoogle) {
  try {
    const response = await fetch(`${localizacion}/api/index.php?recurso=Google`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          enviarRespuesta: respuestaGoogle
        })
    });
    
    console.log("Status:", response.status);

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
      console.log(data.message)
    }
  }
  catch (error) {
    console.error("❌ Eror en fetch:", error);
  }
  
}

//recursos
function separarNombreYApellido(nombreCompleto) {
  if (!nombreCompleto || typeof nombreCompleto !== 'string') {
    return { nombre: '', apellido: '' };
  }

  const partes = nombreCompleto.trim().split(/\s+/);
  const nombre = partes.shift() || '';
  const apellido = partes.join(' ') || '';

  return { nombre, apellido };
}