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
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "772259205925-tft0mmur27s86r99k4a734t1r62vfa4u.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });

  document.getElementById("customGoogleBtn").addEventListener("click", () => {
    google.accounts.id.prompt((notification) => {
      console.log("Prompt:", notification);
    });
  });

  document.getElementById("customGoogleBtnLogin").addEventListener("click", () => {
    google.accounts.id.prompt((notification) => {
      console.log("Prompt:", notification);
    });
  });
};
function handleCredentialResponse(response) {
  console.log("Token recibido:", response.credential);
  localStorage.setItem('token', response.credential);

  const url = "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + response.credential;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      fetch(`${localizacion}/api/index.php?recurso=Usuarios`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          nombre: data.given_name,
          apellido: data.family_name,
          email: data.email,
          password: data.iss,
          confirmPassword: data.iss
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

      
      
    })
    .catch(err => {
      console.error("Error al comunicarse con Google:", err);
    });

}
async function LogueoConGoogle(Respuesta){
  console.log("ando en logueo")
  try {
    const response = await fetch(`${localizacion}/api/index.php?recurso=Usuarios`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: "logueo",
            email: Respuesta.email,
            password: Respuesta.iss
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