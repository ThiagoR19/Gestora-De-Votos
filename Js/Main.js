// LLamando a todos los mains

const mainHome = document.getElementById('Home')
const mainRanking = document.getElementById('Ranking')
const mainDetalleProyecto = document.getElementById('DetalleProyecto')
const mainListaNormal = document.getElementById('ListaNormal')
const mainListaAdmin = document.getElementById('ListaAdmin')
const mainLogin = document.getElementById('Login')
const mainReporte = document.getElementById('Reporte')
const mainCarga = document.getElementById('Carga')
const mainEstadisticas = document.getElementById('Estadisticas')
const mainMiCuenta = document.getElementById('MiCuenta')
const mainGestionar = document.getElementById('Gestionar')
const mainResultados = document.getElementById('Resultados')

const mains = [mainHome, mainRanking, mainDetalleProyecto, mainListaNormal, mainListaAdmin, mainLogin, mainReporte, mainCarga, mainEstadisticas, mainMiCuenta, mainGestionar, mainResultados]

const HeaderGS = document.getElementById('HeaderGS')
const HeaderGU = document.getElementById('HeaderGU')
const HeaderGA = document.getElementById('HeaderGA')
const HeaderGC = document.getElementById('HeaderGC')
const ocultarHeadersMain = (...headers) => headers.forEach(h => h.classList.add("none"));
const HeaderHS = document.getElementById('HeaderHS')
const HeaderHU = document.getElementById('HeaderHU')
const HeaderHC = document.getElementById('HeaderHC')
const HeaderHA = document.getElementById('HeaderHA')

 // Header que este en ese momento
const Footer = document.getElementById('Footer') // Footer que mas va a ser

const styleTag = document.getElementById('styles') // Etiqueta que cambia los estilos

// LLamando a todos los botones del header

const aReporte = document.getElementById('aReporte')
const footerResultados = document.getElementById('footerResultados')

// Agregandole funcionalidad a cada boton del header

aReporte.addEventListener('click', () => mostrarMain('Reporte', mains))
footerResultados.addEventListener('click', () => mostrarMain('Resultados', mains))


const HeaderHome = document.querySelectorAll('.HeaderHome')
const HeaderRanking = document.querySelectorAll('.HeaderRanking')
const HeaderMiCuenta = document.querySelectorAll('.HeaderMiCuenta')
const HeaderProyectos = document.querySelectorAll('.HeaderProyectos')
const HeaderProyectosA = document.querySelectorAll('.HeaderProyectosA')
const HeaderEstadistica = document.querySelectorAll('.HeaderEstadistica')
const HeaderGestionar = document.querySelectorAll('.HeaderGestionar')
const HeaderLogin = document.querySelectorAll('.HeaderLogin')
determinarHeader("Home")
HeaderHome.forEach(element => {
  element.addEventListener('click', () => {
    MenuGS.classList.remove('active')
    MenuGU.classList.remove('active')
    MenuGC.classList.remove('active')
    MenuGA.classList.remove('active')

    mostrarMain('Home', mains)

    IconoGS.classList.add("fa-bars");
    IconoGS.classList.remove("fa-times");

    IconoGU.classList.add("fa-bars");
    IconoGU.classList.remove("fa-times");

    IconoGC.classList.add("fa-bars");
    IconoGC.classList.remove("fa-times");

    IconoGA.classList.add("fa-bars");
    IconoGA.classList.remove("fa-times");

    if (window.innerWidth > 900) {
      document.querySelectorAll('.LastOne').forEach((e) => {
        e.classList.add('none')
      })
    } else {
      document.querySelectorAll('.LastOne').forEach((e) => {
        e.classList.remove('none')
      })
    }
  })
});

HeaderProyectos.forEach(element => {
  element.addEventListener('click', () => {
    MenuGS.classList.remove('active')
    MenuGU.classList.remove('active')
    MenuGC.classList.remove('active')
    MenuGA.classList.remove('active')

    mostrarMain('ListaNormal', mains)

    IconoGS.classList.add("fa-bars");
    IconoGS.classList.remove("fa-times");

    IconoGU.classList.add("fa-bars");
    IconoGU.classList.remove("fa-times");

    IconoGC.classList.add("fa-bars");
    IconoGC.classList.remove("fa-times");

    IconoGA.classList.add("fa-bars");
    IconoGA.classList.remove("fa-times");

    if (window.innerWidth > 900) {
      document.querySelectorAll('.LastOne').forEach((e) => {
        e.classList.add('none')
      })
    } else {
      document.querySelectorAll('.LastOne').forEach((e) => {
        e.classList.remove('none')
      })
    }
  })
});

HeaderProyectosA.forEach(element => {
  element.addEventListener('click', () => {
    MenuGU.classList.remove('active')
    MenuGC.classList.remove('active')
    MenuGA.classList.remove('active')

    mostrarMain('ListaAdmin', mains)

    IconoGU.classList.add("fa-bars");
    IconoGU.classList.remove("fa-times");

    IconoGC.classList.add("fa-bars");
    IconoGC.classList.remove("fa-times");

    IconoGA.classList.add("fa-bars");
    IconoGA.classList.remove("fa-times");

    if (window.innerWidth > 900) {
      document.querySelectorAll('.LastOne').forEach((e) => {
        e.classList.add('none')
      })
    } else {
      document.querySelectorAll('.LastOne').forEach((e) => {
        e.classList.remove('none')
      })
    }
  })
});

HeaderRanking.forEach(element => {
  element.addEventListener('click', () => {
    MenuGS.classList.remove('active')
    MenuGU.classList.remove('active')
    MenuGC.classList.remove('active')
    MenuGA.classList.remove('active')

    mostrarMain('Ranking', mains)

    IconoGS.classList.add("fa-bars");
    IconoGS.classList.remove("fa-times");

    IconoGU.classList.add("fa-bars");
    IconoGU.classList.remove("fa-times");

    IconoGC.classList.add("fa-bars");
    IconoGC.classList.remove("fa-times");

    IconoGA.classList.add("fa-bars");
    IconoGA.classList.remove("fa-times");

    if (window.innerWidth > 900) {
      document.querySelectorAll('.LastOne').forEach((e) => {
        e.classList.add('none')
      })
    } else {
      document.querySelectorAll('.LastOne').forEach((e) => {
        e.classList.remove('none')
      })
    }
  })
});

HeaderMiCuenta.forEach(element => {
  element.addEventListener('click', () => {
    MenuGS.classList.remove('active')
    MenuGU.classList.remove('active')
    MenuGC.classList.remove('active')
    MenuGA.classList.remove('active')

    mostrarMain('MiCuenta', mains)

    IconoGS.classList.add("fa-bars");
    IconoGS.classList.remove("fa-times");

    IconoGU.classList.add("fa-bars");
    IconoGU.classList.remove("fa-times");

    IconoGC.classList.add("fa-bars");
    IconoGC.classList.remove("fa-times");

    IconoGA.classList.add("fa-bars");
    IconoGA.classList.remove("fa-times");

    if (window.innerWidth > 900) {
      document.querySelectorAll('.LastOne').forEach((e) => {
        e.classList.add('none')
      })
    } else {
      document.querySelectorAll('.LastOne').forEach((e) => {
        e.classList.remove('none')
      })
    }
    editarCuenta()
  })
});

HeaderEstadistica.forEach(element => {
  element.addEventListener('click', () => {
    MenuGU.classList.remove('active')
    MenuGC.classList.remove('active')
    MenuGA.classList.remove('active')

    mostrarMain('Estadisticas', mains)

    IconoGU.classList.add("fa-bars");
    IconoGU.classList.remove("fa-times");

    IconoGC.classList.add("fa-bars");
    IconoGC.classList.remove("fa-times");

    IconoGA.classList.add("fa-bars");
    IconoGA.classList.remove("fa-times");

    if (window.innerWidth > 900) {
      document.querySelectorAll('.LastOne').forEach((e) => {
        e.classList.add('none')
      })
    } else {
      document.querySelectorAll('.LastOne').forEach((e) => {
        e.classList.remove('none')
      })
    }
  })
});

HeaderGestionar.forEach(element => {
  element.addEventListener('click', () => {
    MenuGU.classList.remove('active')
    MenuGC.classList.remove('active')
    MenuGA.classList.remove('active')

    mostrarMain('Gestionar', mains)

    IconoGU.classList.add("fa-bars");
    IconoGU.classList.remove("fa-times");

    IconoGC.classList.add("fa-bars");
    IconoGC.classList.remove("fa-times");

    IconoGA.classList.add("fa-bars");
    IconoGA.classList.remove("fa-times");

    if (window.innerWidth > 900) {
      document.querySelectorAll('.LastOne').forEach((e) => {
        e.classList.add('none')
      })
    } else {
      document.querySelectorAll('.LastOne').forEach((e) => {
        e.classList.remove('none')
      })
    }
  })
});

HeaderLogin.forEach(element => {
  element.addEventListener('click', () => {
    if (element.textContent === "Registrarse") {
      container.classList.add("active");
    }
    mostrarMain('Login', mains)
    MenuGS.classList.toggle('active')
  })
});


document.querySelectorAll('.ojitos').forEach((e) => {
  e.addEventListener('click', (event) => {
    if (event.target.previousElementSibling.getAttribute('type') == 'text') {
      event.target.previousElementSibling.setAttribute('type', 'password')
    } else {
      event.target.previousElementSibling.setAttribute('type', 'text')
    }
    e.classList.toggle('fa-eye')
    e.classList.toggle('fa-eye-slash')
  })
})


//Boton de VerProyectos del Home (Hero)

const buttonListaHome = document.getElementById('buttonListaHome')

// const UsuarioLogin = document.getElementById('UsuarioLogin')
// UsuarioLogin.addEventListener('click', () => mostrarMain('Login', mains))

let dataProyectosGlobal = []

// Agregandole funcionalidad al ranking 

const btn = document.getElementById("btn-Categorias");
const menuCategorias = document.getElementById("menuCategorias");

window.addEventListener("click", (e) => {
  if (!e.target.matches("#menuCategorias")) {
    menuCategorias.classList.remove("show");
  }
});

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  menuCategorias.classList.toggle("show");
});



// Seccion del slider del ranking

const slider = document.getElementById('slider')
const groups = document.querySelectorAll('.grupoDeProyectos')

let currentIndex = 0

function updateSlider() {
  const groups = document.querySelectorAll('.grupoDeProyectos')
  if (groups.length === 0) return

  const groupWidth = groups[0].offsetWidth + 20
  slider.style.transform = `translateX(${-currentIndex * groupWidth}px)`
}

function moveLeft() {
  const groups = document.querySelectorAll('.grupoDeProyectos')
  if (currentIndex > 0) {
    currentIndex--
    updateSlider()
  }
}

function moveRight() {
  const groups = document.querySelectorAll('.grupoDeProyectos')
  if (currentIndex < groups.length - 1) {
    currentIndex++
    updateSlider()
  }
}

window.addEventListener('resize', updateSlider)

// Se le da un display none a todo menos el Home

for (let i = 0; i < mains.length; i++) {
  mains[i].classList.add('none')
}
mains[0].classList.remove('none')
ocultarHeadersMain(HeaderGA,HeaderGC,HeaderGS,HeaderGU)


function mostrarMain(mainAMostrar, mains) {
  window.scrollTo(0, 0);
  styleTag.setAttribute('href', `./Styles/${mainAMostrar}.css`)
  determinarHeader(mainAMostrar)
  mains.forEach(element => {
    if (element.id === `${mainAMostrar}`) {
      element.classList.remove('none')
    } else {
      element.classList.add('none')
    }

    if (mainAMostrar === 'Login') {
      ocultarHeadersMain(HeaderGA,HeaderGC,HeaderGS,HeaderGU)
      console.log("se ocultan")
      Footer.classList.add('none');
    } else {
      Footer.classList.remove('none');
    }
    if (mainAMostrar==="mainHome"){
      console.log("se muestra el main")
    }
  })
}

// herramienta de textos 
function aplicarVerMasAuto() {
  document.querySelectorAll("[data-max]").forEach(el => {
    const max = parseInt(el.dataset.max);
    const clickCode = el.dataset.onclick || el.dataset.click;
    if (clickCode) {
      aplicarVerMas(el, max, (elemento, texto) => {
        eval(clickCode); // ⚠️ cuidado, eval ejecuta código directamente
      });
    }
  });
}
function aplicarVerMas(elemento, maxLongitud, callback) {
  if (!elemento) return;

  const texto = elemento.textContent.trim();

  if (texto.length > maxLongitud) {
    const textoCorto = texto.slice(0, maxLongitud) + "... ";
    const verMas = document.createElement("span");
    verMas.textContent = "Ver más";
    verMas.classList.add("ver-mas");

    verMas.addEventListener("click", () => callback());

    elemento.textContent = textoCorto;
    elemento.appendChild(verMas);
  }
}

// Funciones que muestran dinamicamente del JSON

function mostrarTopDelMain(dataProyectos) {
  let Top3 = dataProyectos.sort((a, b) => b.cantVotos - a.cantVotos).slice(0, 3);
  const Tops = document.getElementById('tops')

  Tops.innerHTML = `
    <article class="tops__article">
        <div class="tops__article-divImg">
          <img src="./Js/imagenes/${Top3[0].imagenes[0]}" alt="Imagen principal del proyecto" class="tops__article-divImg-img">
        </div>
        <div class="tops__article-lineas">
          <div class="tops__article-lineas-circulo">1</div>
        </div>
        <div class="tops__article-divcard">
          <div>
            <p class="tops__article-divcard-div-text" data-max="200" data-onclick="mostrarMain('DetalleProyecto', mains);verDescripcionDelProyecto(${Top3[0].id})">
              ${Top3[0].descripcion}
            </p>
          </div>
          <div class="tops__article-divcard-buttons">
            <button class="tops__article-divcard-buttons-button blanco">Votos: ${Top3[0].cantVotos}</button>
            <button class="tops__article-divcard-buttons-button azul" onClick="mostrarMain('DetalleProyecto', mains); verDescripcionDelProyecto(${Top3[0].id})">Ver
              Proyecto</button>
          </div>
        </div>
      </article>

      <article class="tops__article reverse">
        <div class="tops__article-divImg">
          <img src="./Js/imagenes/${Top3[1].imagenes[0]}" alt="" class="tops__article-divImg-img">
        </div>
        <div class="tops__article-lineas">
          <div class="tops__article-lineas-circulo">2</div>
        </div>
        <div class="tops__article-divcard">
          <div>
            <p class="tops__article-divcard-div-text"data-max="200" data-onclick="mostrarMain('DetalleProyecto', mains);verDescripcionDelProyecto(${Top3[1].id})">
              ${Top3[1].descripcion}
            </p>
          </div>
          <div class="tops__article-divcard-buttons">
            <button class="tops__article-divcard-buttons-button blanco">Votos: ${Top3[1].cantVotos}</button>
            <button class="tops__article-divcard-buttons-button azul" onClick="mostrarMain('DetalleProyecto', mains); verDescripcionDelProyecto(${Top3[1].id})">Ver
              Proyecto</button>
          </div>
        </div>
      </article>

      <article class="article-wrapper">
        <article class="tops__article">
          <div class="tops__article-divImg">
            <img src="./Js/imagenes/${Top3[2].imagenes[0]}" alt="" class="tops__article-divImg-img">
          </div>
          <div class="tops__article-lineas">
            <div class="tops__article-lineas-circulo">3</div>
          </div>
          <div class="tops__article-divcard">
            <div>
              <p class="tops__article-divcard-div-text" data-max="200" data-onclick="mostrarMain('DetalleProyecto', mains);verDescripcionDelProyecto(${Top3[2].id})">
                ${Top3[2].descripcion}
              </p>
            </div>
            <div class="tops__article-divcard-buttons">
              <button class="tops__article-divcard-buttons-button blanco">Votos: ${Top3[2].cantVotos}</button>
              <button class="tops__article-divcard-buttons-button azul" onClick="mostrarMain('DetalleProyecto', mains); verDescripcionDelProyecto(${Top3[2].id})">Ver
                Proyecto</button>
            </div>
          </div>
        </article>
        <div class="article-overlay">
          <button class="btn-overlay" onClick="mostrarMain('ListaNormal', mains)">Ver más</button>
        </div>
      </article>`
  aplicarVerMasAuto();
}

function mostrarListaProyectos(dataProyectos) {

  dataProyectos.forEach((e) => {
    let estrellas = EstablecerEstrellas(e.cantEstrellas, e.cantCalificacionesEstrellas)
    mainListaNormal.insertAdjacentHTML('beforeend', `
    <article class="ListaNormal__article">
      <div class="ListaNormal__article-div">
        <img class="ListaNormal__article-div-img" src="./Js/imagenes/${e.imagenes[0]}" alt="">
      </div>
      <div class="ListaNormal__article-div">
        <div class="ListaNormal__article-div-div">
          <h2>${e.nombre}</h2>
          <div style="display:flex;">
            <div class="${estrellas[0]}">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="${estrellas[1]}">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="${estrellas[2]}">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="${estrellas[3]}">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="${estrellas[4]}">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
          </div>
        </div>
        <div class="ListaNormal__article-div-div">
          <p class="ListaNormal__article-div-div-p">${e.descripcion}</p>
        </div>
        <div class="ListaNormal__article-div-div">
          <button onClick="mostrarMain('DetalleProyecto', mains); verDescripcionDelProyecto(${e.id})" class="ListaNormal__article-div-div-button">Ver Proyecto</button>
        </div>
      </div>
    </article>`)
  });
  aplicarVerMasAuto();
}

function mostrarListaProyectosAdmin(dataProyectos) {

  let buttonAgregar = document.createElement('button')
  buttonAgregar.innerHTML = 'Agregar proyecto'
  buttonAgregar.classList.add('buttonAgregar')
  buttonAgregar.classList.add('HeaderCarga')

  buttonAgregar.addEventListener('click', () => {
    MenuGS.classList.remove('active')
    MenuGU.classList.remove('active')
    MenuGC.classList.remove('active')
    MenuGA.classList.remove('active')

    mostrarMain('Carga', mains)

    IconoGS.classList.add("fa-bars");
    IconoGS.classList.remove("fa-times");

    IconoGU.classList.add("fa-bars");
    IconoGU.classList.remove("fa-times");

    IconoGC.classList.add("fa-bars");
    IconoGC.classList.remove("fa-times");

    IconoGA.classList.add("fa-bars");
    IconoGA.classList.remove("fa-times");

    if (window.innerWidth > 900) {
      document.querySelectorAll('.LastOne').forEach((e) => {
        e.classList.add('none')
      })
    } else {
      document.querySelectorAll('.LastOne').forEach((e) => {
        e.classList.remove('none')
      })
    }
    crearProyecto()
  })

  mainListaAdmin.appendChild(buttonAgregar)



  dataProyectos.forEach((e) => {
    let estrellas = EstablecerEstrellas(e.cantEstrellas, e.cantCalificacionesEstrellas)
    mainListaAdmin.insertAdjacentHTML('beforeend', `
    <article class="ListaAdmin__article">
      <div class="ListaAdmin__article-div">
        <img class="ListaAdmin__article-div-img" src="./Js/imagenes/${e.imagenes[0]}" alt="">
      </div>
      <div class="ListaAdmin__article-div">
        <div class="ListaAdmin__article-div-div">
          <h2>${e.nombre}</h2>
          <div style="display:flex;">
            <div class="${estrellas[0]}">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="${estrellas[1]}">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="${estrellas[2]}">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="${estrellas[3]}">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="${estrellas[4]}">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
          </div>
        </div>
        <div class="ListaAdmin__article-div-div">
          <p class="ListaAdmin__article-div-div-p">${e.descripcion}</p>
        </div>
        <div class="ListaAdmin__article-div-div">
          <button onClick="EliminarProyecto(${e.id})" class="ListaAdmin__article-div-div-button"><i class="fa-solid fa-trash"></i></button>
          <button onClick="mostrarMain('Carga', mains); editarProyecto(${e.id})" class="ListaAdmin__article-div-div-button"><i class="fa-solid fa-pencil"></i></button>
          <button onClick="mostrarMain('DetalleProyecto', mains); verDescripcionDelProyecto(${e.id})" class="ListaAdmin__article-div-div-button"><i
              class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
    </article>`)
  });
}

function crearProyecto() {
  mainCarga.innerHTML = '';

  const section = document.createElement('section');

  section.innerHTML = `
  <section>
      <article class="carga-proyecto">
        <div class="carga-proyecto__info">
          <div class="carga-proyecto__titulo">
            <label class="carga-proyecto__label">Título del Proyecto</label>
            <input type="text" id="inputTitulo" class="carga-proyecto__input"
              placeholder="Ingrese el título del proyecto">
          </div>

          <div class="carga-proyecto__descripcion">
            <label class="carga-proyecto__label">Descripción del Proyecto</label>
            <textarea id="inputDescripcion" class="carga-proyecto__textarea"
              placeholder="Ingrese una descripción detallada del proyecto."></textarea>
          </div>

          <div class="carga-proyecto__imagenes">
            <label class="carga-proyecto__label">Agregar imágenes</label>
            <div class="carga-proyecto__imagenes-cont">
              <input id="inputImage1" class="inputImage" type="file" name="imagen[]" accept="image/*">
              <input id="inputImage2" class="inputImage" type="file" name="imagen[]" accept="image/*">
              <input id="inputImage3" class="inputImage" type="file" name="imagen[]" accept="image/*">
              <input id="inputImage4" class="inputImage" type="file" name="imagen[]" accept="image/*">
            </div>
            <button id="crearProyectoBtn">Crear Proyecto</button>
          </div>
        </div>
        <div class="carga-proyecto__preview-img">
          <img src="Imagenes/IMG_Colegio.png" alt="imagen_Colegio">
        </div>
      </article>

      <article class="carga-proyecto-form">
        <div class="carga-proyecto-form__grupo">
          <h3 class="carga-proyecto-form__titulo">Estudiantes</h3>
        </div>

        <div class="carga-proyecto-form__grupo">
          <h3 class="carga-proyecto-form__titulo">Profesores</h3>
        </div>

        <div class="carga-proyecto-form__grupo">
          <h3 class="carga-proyecto-form__titulo">Curso</h3>
          <input type="number" class="carga-proyecto-form__input" id="inputAnio" placeholder="Año del curso">
          <input type="number" class="carga-proyecto-form__input" id="inputDivision" placeholder="División del curso">

          <div class="carga-proyecto-form__select-wp">
            <h3 class="carga-proyecto-form__titulo">Categoría</h3>
            <select id="inputCategoria" class="carga-proyecto-form__select">
              <option value="">Categoría</option>
              <option value="1">Robótica</option>
              <option value="2">Energías Renovables</option>
              <option value="3">Programación</option>
              <option value="4">Economía</option>
              <option value="5">Ciencias</option>
              <option value="6">Construcciones</option>
            </select>
          </div>
        </div>
      </article>

      <article class="carga-proyecto-preview">
        <h3 class="carga-proyecto-preview__title">Vista previa</h3>
        <div class="carga-proyecto-preview__listado-proyectos"></div>
      </article>
    </section>`;

  mainCarga.appendChild(section);

  const InputTitulo = document.getElementById('inputTitulo');
  const InputDescripcion = document.getElementById('inputDescripcion');
  const InputCategoria = document.getElementById('inputCategoria');
  const InputAnio = document.getElementById('inputAnio');
  const InputDivision = document.getElementById('inputDivision');

  const grupos = document.querySelectorAll('.carga-proyecto-form__grupo');
  const contenedorEstudiantes = grupos[0];
  const contenedorProfesores = grupos[1];

  const btnAgregarEstudiante = document.createElement('button');
  btnAgregarEstudiante.innerHTML = '+ Agregar Estudiante';
  btnAgregarEstudiante.classList.add('carga-proyecto-form__btn');
  contenedorEstudiantes.appendChild(btnAgregarEstudiante);

  const btnAgregarProfesor = document.createElement('button');
  btnAgregarProfesor.innerHTML = '+ Agregar Profesor';
  btnAgregarProfesor.classList.add('carga-proyecto-form__btn');
  contenedorProfesores.appendChild(btnAgregarProfesor);

  const vistaPrevia = document.querySelector('.carga-proyecto-preview__listado-proyectos');
  const previewWrapper = document.createElement('div');
  previewWrapper.innerHTML = `
    <article class="proyecto-esp__article">
      <div class="proyecto-esp__article-div">
        <img id="Proyectos__article-div-img1"></img>
        <div class="proyecto-esp__article-div-imgs">
          <img id="Proyectos__article-div-img2"></img>
          <img id="Proyectos__article-div-img3"></img>
          <img id="Proyectos__article-div-img4"></img>
        </div>
      </div>
      <div class="proyecto-esp__article-div">
        <div class="proyecto-esp__article-div-div">
          <h1 id="previewTitulo" class="proyecto-esp__article-div-div-h1">Título del proyecto</h1>
          <p id="previewDescripcion" class="proyecto-esp__article-div-div-p">Descripción breve del proyecto...</p>
          <button class="proyecto-esp__article-div-div-button">VOTAR</button>
        </div>
        <div class="proyecto-esp__article-div-div">
          <div class="proyecto-esp__article-div-div-div">
            <div class="proyecto-esp__article-div-div-div-div">
              <h2 class="proyecto-esp__article-div-div-div-div-h2">Categoría</h2>
              <p id="previewCategoria" class="proyecto-esp__article-div-div-div-div-p">---</p>
            </div>
            <div class="proyecto-esp__article-div-div-div-div">
              <h2 class="proyecto-esp__article-div-div-div-div-h2">Curso</h2>
              <p id="previewCurso" class="proyecto-esp__article-div-div-div-div-p">---</p>
            </div>
          </div>
          <div class="proyecto-esp__article-div-div-div">
            <div class="img_blanco_negro" id="estrella1" value="1">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="img_blanco_negro" id="estrella2" value="2">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="img_blanco_negro" id="estrella3" value="3">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="img_blanco_negro" id="estrella4" value="4">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="img_blanco_negro" id="estrella5" value="5">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
          </div>
        </div>
      </div>
    </article>
    <aside class="aside">
      <div class="aside__div">
        <h2 class="aside__div-h2">Estudiantes</h2>
        <p id="previewEstudiantes" class="aside__div-p">Sin estudiantes</p>
      </div>
      <div class="aside__div">
        <h2 class="aside__div-h2">Profesores</h2>
        <p id="previewProfesores" class="aside__div-p">Sin profesores</p>
      </div>
    </aside>
  `;
  vistaPrevia.appendChild(previewWrapper);

  const previewTitulo = previewWrapper.querySelector('#previewTitulo');
  const previewDescripcion = previewWrapper.querySelector('#previewDescripcion');
  const previewCategoria = previewWrapper.querySelector('#previewCategoria');
  const previewCurso = previewWrapper.querySelector('#previewCurso');
  const previewEstudiantes = previewWrapper.querySelector('#previewEstudiantes');
  const previewProfesores = previewWrapper.querySelector('#previewProfesores');

  function capitalizarTexto(texto) {
    return texto ? texto.trim().split(' ').map(p => p[0].toUpperCase() + p.slice(1)).join(' ') : '';
  }

  function valoresInputsDel(contenedor) {
    return [...contenedor.querySelectorAll('.carga-proyecto-form__input')]
      .map(i => capitalizarTexto(i.value))
      .filter(v => v);
  }

  function actualizarVista() {
    previewTitulo.textContent = InputTitulo.value || 'Título del proyecto';
    previewDescripcion.textContent = InputDescripcion.value || 'Descripción breve del proyecto...';
    previewCategoria.textContent = InputCategoria.value
      ? InputCategoria.options[InputCategoria.selectedIndex].text
      : '---';
    previewCurso.textContent = `${InputAnio.value || ''} ${InputDivision.value || ''}`.trim() || '---';
    previewEstudiantes.textContent = valoresInputsDel(contenedorEstudiantes).join(' - ') || 'Sin estudiantes';
    previewProfesores.textContent = valoresInputsDel(contenedorProfesores).join(' - ') || 'Sin profesores';
  }

  [InputTitulo, InputDescripcion, InputCategoria, InputAnio, InputDivision].forEach(input =>
    input?.addEventListener('input', actualizarVista)
  );

  function crearInputYAdjuntar(contenedor, placeholder) {
    const nuevoInput = document.createElement('input');
    nuevoInput.type = 'text';
    nuevoInput.placeholder = placeholder;
    nuevoInput.classList.add('carga-proyecto-form__input');
    contenedor.insertBefore(nuevoInput, contenedor.querySelector('.carga-proyecto-form__btn'));
    nuevoInput.addEventListener('input', actualizarVista);
  }

  btnAgregarEstudiante.addEventListener('click', () =>
    crearInputYAdjuntar(contenedorEstudiantes, 'Nombre y apellido del estudiante')
  );

  btnAgregarProfesor.addEventListener('click', () =>
    crearInputYAdjuntar(contenedorProfesores, 'Nombre y apellido del profesor')
  );

  actualizarVista();

  let arrayDeImagenes = [null,null,null,null]

  const inputs = document.querySelectorAll('.inputImage');

  inputs.forEach((input) => {
    input.addEventListener('change', (event) => {
      const num = parseInt(input.id.replace('inputImage', '')) - 1;
      const file = event.target.files[0];
      const img = document.getElementById(`Proyectos__article-div-img${num + 1}`);

      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          img.src = e.target.result;
          arrayDeImagenes[num] = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        img.src = '';
        arrayDeImagenes[num] = null;
      }

      console.log(arrayDeImagenes);
    });
  });

    arrayDeImagenes.forEach((imagen, i) => {
      const img = document.getElementById(`Proyectos__article-div-img${i + 1}`);
      if (img) img.src = `./Js/imagenes/${imagen}`;
    });

  const crearProyectoBtn = document.getElementById('crearProyectoBtn')

  crearProyectoBtn.addEventListener('click', () => {
    if (confirm('¿Seguro que desea crear un nuevo proyecto?')) {

      const estudiantesArray = valoresInputsDel(contenedorEstudiantes);
      const profesoresArray = valoresInputsDel(contenedorProfesores);

      let imagenesFinales = arrayDeImagenes.filter(Boolean);

      fetch(`${localizacion}?action=cargarProyecto`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: previewTitulo.textContent,
          anio: InputAnio.value,
          descripcion: previewDescripcion.textContent,
          idCategoria: parseInt(InputCategoria.value) || null,
          division: InputDivision.value,
          estudiantes: estudiantesArray,
          profesores: profesoresArray,
          imagenes: imagenesFinales
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.success) {
          mostrarTexto("Proyecto creado correctamente ✅");
          const miSonido = new Audio('Sonidos/Check.mp3');
          miSonido.play();
        }
      });
    }
  });

}


function EliminarProyecto(id) {
  if (confirm("¿Estás seguro que quieres eliminar este proyecto?")) {
    fetch(`${localizacion}?action=borrarProyecto`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idProyecto: id
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.success) {
          mostrarTexto("Proyecto eliminado correctamente ✅");
          const miSonido = new Audio('Sonidos/Check.mp3');
          miSonido.play();
        }
    });
  }
}

function mostrarRanking(dataProyectos, ordenamiento = 0) {

  slider.innerHTML = ''

  let proyectosOrdenados;

  if (ordenamiento == 0) {
    proyectosOrdenados = dataProyectos.sort((a, b) => b.cantVotos - a.cantVotos);
  }
  if (ordenamiento == 1) {
    proyectosOrdenados = dataProyectos.sort((a, b) => a.categoria.localeCompare(b.categoria));
  }
  if (ordenamiento == 2) {
    proyectosOrdenados = dataProyectos.sort((a, b) => b.cantEstrellas - a.cantEstrellas);
  }

  let cont = 0
  let cantidadDeGruposDe3 = Math.ceil(dataProyectos.length / 3)

  for (let i = 0; i < cantidadDeGruposDe3; i++) {
    let grupoDeProyectos = document.createElement('DIV')
    grupoDeProyectos.classList.add('grupoDeProyectos')

    for (let j = 0; j < 3; j++) {

      if (cont === dataProyectos.length) {
        break
      }
      let estrellas = EstablecerEstrellas(proyectosOrdenados[cont].cantEstrellas, proyectosOrdenados[cont].cantCalificacionesEstrellas)
      let tarjeta = document.createElement('DIV')
      tarjeta.classList.add('tarjeta')

      tarjeta.innerHTML = `
        <div class="rank__article-div-div">
          <div class="rank__article-div-div-div">
            <h2 class="rank__article-div-div-div-h2">0${cont + 1}</h2>
            <div class="rank__article-div-div-div-div"></div>
          </div>
          <h2 class="rank__article-div-div-div-h2">${proyectosOrdenados[cont].nombre}</h2>
        </div>
        <div class="rank__article-div-div">
          <div id="container" class="rank__article-div-div-div">
            <img class="rank__article-div-div-img" src="./Js/imagenes/${proyectosOrdenados[cont].imagenes[0]}" alt="">
          </div>
          <p class="rank__article-div-div-p" data-max="100" data-onclick="mostrarMain('DetalleProyecto', mains); verDescripcionDelProyecto(${proyectosOrdenados[cont].id})">${proyectosOrdenados[cont].descripcion}</p>
        </div>
        <div class="rank__article-div-div">
          <div class="rank__article-div-div-div">
            <button class="rank__article-div-div-div-button">Votos: ${proyectosOrdenados[cont].cantVotos}</button>
            <button onClick="mostrarMain('DetalleProyecto', mains); verDescripcionDelProyecto(${proyectosOrdenados[cont].id})" class="rank__article-div-div-div-button">Ver Proyecto</button>
          </div>
          <div class="estrellas rank__article-div-div-div" style="display:flex;">
            <div class="${estrellas[0]}">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="${estrellas[1]}">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="${estrellas[2]}">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="${estrellas[3]}">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="${estrellas[4]}">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
          </div>
        </div>`

      cont++
      grupoDeProyectos.appendChild(tarjeta)
    }
    slider.appendChild(grupoDeProyectos)
  }
}

function editarProyecto(e) {

  mainCarga.innerHTML = ''

  dataProyectosGlobal.forEach(element => {
    if (element.id === e) {
      proyecto = element
      idProyecto = proyecto.id
    }
  });

  let section = document.createElement('section')

  section.innerHTML = `
  
  <section>
      <article class="carga-proyecto">
        <div class="carga-proyecto__info">
          <div class="carga-proyecto__titulo">
            <label class="carga-proyecto__label">Titulo del Proyecto</label>
            <input value="${proyecto.nombre}" type="text" id="inputTitulo" class="carga-proyecto__input"
              placeholder="Ingrese el titulo del proyecto">
          </div>

          <div class="carga-proyecto__descripcion">
            <label class="carga-proyecto__label">Descripcion del Proyecto</label>
            <textarea id="inputDescripcion" class="carga-proyecto__textarea"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></textarea>
          </div>

          <div class="carga-proyecto__imagenes">
            <label class="carga-proyecto__label">Agregar imágenes</label>
            <div class="carga-proyecto__imagenes-cont">
              <input id="inputImage1" class="inputImage" type="file" name="imagen[]" accept="image/*">
              <input id="inputImage2" class="inputImage" type="file" name="imagen[]" accept="image/*">
              <input id="inputImage3" class="inputImage" type="file" name="imagen[]" accept="image/*">
              <input id="inputImage4" class="inputImage" type="file" name="imagen[]" accept="image/*">
            </div>
            <button id="editarProyecto">Cargar Proyecto</button>
          </div>
        </div>
        <div class="carga-proyecto__preview-img">
          <img src="Imagenes/IMG_Colegio.png" alt="imagem_Colegio">
        </div>
      </article>

      <article class="carga-proyecto-form">
        <div class="carga-proyecto-form__grupo">
          <h3 class="carga-proyecto-form__titulo">Estudiantes</h3>
        </div>

        <div class="carga-proyecto-form__grupo">
          <h3 class="carga-proyecto-form__titulo">Profesores</h3>
        </div>

        <div class="carga-proyecto-form__grupo">
          <h3 class="carga-proyecto-form__titulo">Curso</h3>
          <input type="number" class="carga-proyecto-form__input" id="inputAnio" placeholder="Año del curso" value="${proyecto.años}">
          <input type="number" class="carga-proyecto-form__input" id="inputDivision" placeholder="División del curso" value="${proyecto.division}">

          <div class="carga-proyecto-form__select-wp">
            <h3 class="carga-proyecto-form__titulo">Categoria</h3>
            <select id="inputCategoria" class="carga-proyecto-form__select">
              <option value="">Categoria</option>
              <option value="1">Robótica</option>
              <option value="2">Energías Renovables</option>
              <option value="3">Programación</option>
              <option value="4">Economía</option>
              <option value="5">Ciencias</option>
              <option value="6">Construcciones</option>
            </select>
          </div>
        </div>
      </article>

      <article class="carga-proyecto-preview">
        <h3 class="carga-proyecto-preview__title">Vista previa</h3>
        <div class="carga-proyecto-preview__listado-proyectos">
        </div>
      </article>
    </section>`

  mainCarga.appendChild(section)

  const InputTitulo = document.getElementById('inputTitulo');
  const InputDescripcion = document.getElementById('inputDescripcion');
  const InputCategoria = document.getElementById('inputCategoria');
  const InputAnio = document.getElementById('inputAnio');
  const InputDivision = document.getElementById('inputDivision');

  InputDescripcion.value = proyecto.descripcion

  const grupos = document.querySelectorAll('.carga-proyecto-form__grupo');
  const contenedorEstudiantes = grupos[0];

  proyecto.estudiantes.forEach((estudiante)=> {
    let input = document.createElement('input')
    input.type = 'text'
    input.value = `${estudiante}`
    input.classList.add('carga-proyecto-form__input')
    contenedorEstudiantes.appendChild(input)
  })

  const contenedorProfesores = grupos[1];

  proyecto.profesores.forEach((profesor)=> {
    let input = document.createElement('input')
    input.type = 'text'
    input.value = `${profesor}`
    input.classList.add('carga-proyecto-form__input')
    contenedorProfesores.appendChild(input)
  })

  const btnAgregarEstudiante = document.createElement('button')
  btnAgregarEstudiante.innerHTML = '+ Agregar Estudiante'
  btnAgregarEstudiante.classList.add('carga-proyecto-form__btn')
  contenedorEstudiantes.appendChild(btnAgregarEstudiante)

  const btnAgregarProfesor = document.createElement('button')
  btnAgregarProfesor.innerHTML = '+ Agregar Estudiante'
  btnAgregarProfesor.classList.add('carga-proyecto-form__btn')
  contenedorProfesores.appendChild(btnAgregarProfesor)

  // Contenedor donde mostrar la vista previa (asegurate que exista en tu HTML)
  const vistaPrevia = document.querySelector('.carga-proyecto-preview__listado-proyectos');

  let previewWrapper = document.createElement('div');
  previewWrapper.innerHTML = `
    <article class="proyecto-esp__article">
      <div class="proyecto-esp__article-div">
        <img id="Proyectos__article-div-img1"></img>
        <div class="proyecto-esp__article-div-imgs">
          <img id="Proyectos__article-div-img2"></img>
          <img id="Proyectos__article-div-img3"></img>
          <img id="Proyectos__article-div-img4"></img>
        </div>
      </div>
      <div class="proyecto-esp__article-div">
        <div class="proyecto-esp__article-div-div">
          <h1 id="previewTitulo" class="proyecto-esp__article-div-div-h1">Título del proyecto</h1>
          <p id="previewDescripcion" class="proyecto-esp__article-div-div-p">Descripción breve del proyecto...</p>
          <button class="proyecto-esp__article-div-div-button">VOTAR</button>
        </div>
        <div class="proyecto-esp__article-div-div">
          <div class="proyecto-esp__article-div-div-div">
            <div class="proyecto-esp__article-div-div-div-div">
              <h2 class="proyecto-esp__article-div-div-div-div-h2">Categoría</h2>
              <p id="previewCategoria" class="proyecto-esp__article-div-div-div-div-p">---</p>
            </div>
            <div class="proyecto-esp__article-div-div-div-div">
              <h2 class="proyecto-esp__article-div-div-div-div-h2">Curso</h2>
              <p id="previewCurso" class="proyecto-esp__article-div-div-div-div-p">---</p>
            </div>
          </div>
          <div class="proyecto-esp__article-div-div-div">
            <div class="img_blanco_negro" id="estrella1" value="1">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="img_blanco_negro" id="estrella2" value="2">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="img_blanco_negro" id="estrella3" value="3">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="img_blanco_negro" id="estrella4" value="4">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="img_blanco_negro" id="estrella5" value="5">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
          </div>
        </div>
      </div>
    </article>
    <aside class="aside">
      <div class="aside__div">
        <h2 class="aside__div-h2">Estudiantes</h2>
        <p id="previewEstudiantes" class="aside__div-p">Sin estudiantes</p>
      </div>
      <div class="aside__div">
        <h2 class="aside__div-h2">Profesores</h2>
        <p id="previewProfesores" class="aside__div-p">Sin profesores</p>
      </div>
    </aside>
  `;
  vistaPrevia.appendChild(previewWrapper);

  let arrayDeImagenes = []

  fetch(`${localizacion}?action=verImagenes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idProyecto })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.success) {
      arrayDeImagenes = data.imagenes

      console.log(arrayDeImagenes)

      const inputs = document.querySelectorAll('.inputImage');

      inputs.forEach((input) => {
      input.addEventListener('change', (event) => {
        const num = parseInt(input.id.replace('inputImage', '')) - 1;
        const file = event.target.files[0];
        const img = document.getElementById(`Proyectos__article-div-img${num + 1}`);

        if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
            img.src = e.target.result;
            arrayDeImagenes[num] = e.target.result;
          };
          reader.readAsDataURL(file);
        } else {
          img.src = '';
          arrayDeImagenes[num] = null;
        }

        console.log(arrayDeImagenes);
      });
    });

      arrayDeImagenes.forEach((imagen, i) => {
        const img = document.getElementById(`Proyectos__article-div-img${i + 1}`);
        if (img) img.src = `./Js/imagenes/${imagen}`;
      });
    }
  });


  const previewTitulo = previewWrapper.querySelector('#previewTitulo');
  const previewDescripcion = previewWrapper.querySelector('#previewDescripcion');
  const previewCategoria = previewWrapper.querySelector('#previewCategoria');
  const previewCurso = previewWrapper.querySelector('#previewCurso');
  const previewEstudiantes = previewWrapper.querySelector('#previewEstudiantes');
  const previewProfesores = previewWrapper.querySelector('#previewProfesores');

  function capitalizarTexto(texto) {
    if (!texto) return '';
    return texto
      .toLowerCase()
      .split(' ')
      .filter(Boolean)
      .map(p => p[0].toUpperCase() + p.slice(1))
      .join(' ');
  }

  function valoresInputsDel(contenedor) {
    return [...contenedor.querySelectorAll('.carga-proyecto-form__input')]
      .map(i => capitalizarTexto(i.value.trim()))
      .filter(v => v !== '');
  }

  function actualizarCamposBase() {
    previewTitulo.textContent = InputTitulo && InputTitulo.value.trim() ? InputTitulo.value : 'Título';
    previewDescripcion.textContent = InputDescripcion && InputDescripcion.value.trim() ? InputDescripcion.value : 'Descripción';
    previewCategoria.textContent =
    InputCategoria && InputCategoria.value.trim()
      ? InputCategoria.options[InputCategoria.selectedIndex].text
      : '---';

    const cursoTxt = `${InputAnio && InputAnio.value ? InputAnio.value : ''} ${InputDivision && InputDivision.value ? InputDivision.value : ''}`.trim();
    previewCurso.textContent = cursoTxt || '---';
  }

  let estudiantesArray = []
  let profesoresArray = []

  function actualizarListas() {
    const estudiantes = valoresInputsDel(contenedorEstudiantes);
    const profesores = valoresInputsDel(contenedorProfesores);

    previewEstudiantes.textContent = estudiantes.length ? estudiantes.join(' - ') : 'Sin estudiantes';
    previewProfesores.textContent = profesores.length ? profesores.join(' - ') : 'Sin profesores';

    estudiantesArray = estudiantes
    profesoresArray = profesores
  }

  function actualizarVistaCompleta() {
    actualizarCamposBase();
    actualizarListas();
  }

  function attachInputsEvents(contenedor) {
    const inputs = contenedor.querySelectorAll('.carga-proyecto-form__input');
    inputs.forEach(input => {
      input.removeEventListener('input', actualizarVistaCompleta);
      input.addEventListener('input', actualizarVistaCompleta);
    });
  }

  attachInputsEvents(contenedorEstudiantes);
  attachInputsEvents(contenedorProfesores);

  function crearInputYAdjuntar(contenedor, placeholderTexto) {
    const nuevoInput = document.createElement('input');
    nuevoInput.type = 'text';
    nuevoInput.className = 'carga-proyecto-form__input';
    nuevoInput.placeholder = placeholderTexto;

    const boton = contenedor.querySelector('.carga-proyecto-form__btn');
    contenedor.insertBefore(nuevoInput, boton);

    nuevoInput.addEventListener('input', actualizarVistaCompleta);

    actualizarVistaCompleta();

    return nuevoInput;
  }

  btnAgregarEstudiante.addEventListener('click', () => {
    crearInputYAdjuntar(contenedorEstudiantes, 'Nombre y apellido del estudiante');
  });

  btnAgregarProfesor.addEventListener('click', () => {
    crearInputYAdjuntar(contenedorProfesores, 'Nombre y apellido del profesor');
  });

  if (InputTitulo) InputTitulo.addEventListener('input', actualizarCamposBase);
  if (InputDescripcion) InputDescripcion.addEventListener('input', actualizarCamposBase);
  if (InputCategoria) InputCategoria.addEventListener('input', actualizarCamposBase);
  if (InputAnio) InputAnio.addEventListener('input', actualizarCamposBase);
  if (InputDivision) InputDivision.addEventListener('input', actualizarCamposBase);

  actualizarVistaCompleta();

  const editarProyecto = document.getElementById('editarProyecto')

  editarProyecto.addEventListener('click', () => {

    if(confirm('¿Seguro que desea actualiza este proyecto?')) {
      let imagenesFinales = arrayDeImagenes.filter(Boolean);
      fetch(`${localizacion}?action=editarProyecto`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: previewTitulo.textContent,
          anio: InputAnio.value,
          descripcion: previewDescripcion.textContent,
          idCategoria: parseInt(InputCategoria.value) || null,
          division: InputDivision.value,
          estudiantes: estudiantesArray,
          profesores: profesoresArray,
          idProyecto: idProyecto, 
          imagenes: imagenesFinales
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.success) {
          mostrarTexto("Proyecto actualizado correctamente ✅😄");
          const miSonido = new Audio('Sonidos/Check.mp3');
          miSonido.play();
        }
      });
    }
  })
  
}

function editarCuenta() {
  if (localStorage.getItem("usuario")) {
    const userStr = localStorage.getItem("usuario");
    const usuario = JSON.parse(userStr);
    idUsuario = usuario.id
    console.log(idUsuario)
  }

  fetch(`${localizacion}?idUsuario=${idUsuario}&action=verCuenta`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if(data.success) {
        const nombre = document.getElementById('nombreUsuario')
        const apellido = document.getElementById('apellidoUsuario')
        const contrasenia = document.getElementById('contraseña')
        const repetContra = document.getElementById('repetContra')
        const actualizarCuenta = document.getElementById('actualizarCuenta')
        
        nombre.value = data.data.Nombre
        apellido.value = data.data.Apellido
        contrasenia.value = data.data.contrasenia
        repetContra.value = data.data.contrasenia

        actualizarCuenta.addEventListener('click', ()=> {
          if (contrasenia.value == repetContra.value) {
            fetch(`${localizacion}?action=actualizarCuenta`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
              idUsuario: idUsuario,
              nombre: nombre.value,
              apellido: apellido.value,
              contrasenia: contrasenia.value
            })
            })
            .then(res => res.json())
            .then(data => {
              if(data.success) {
                mostrarTexto("Datos actualizados correctamente ✅");
                const miSonido = new Audio('Sonidos/Check.mp3');
                miSonido.play();
              } else {
                mostrarTexto("Hubo un error al intentar actualizar sus datos ❌");
                const miSonido = new Audio('Sonidos/error.mp3');
                miSonido.play();
              } 
            });
          } else {
            mostrarTexto("Las contraseñas no coinciden ❌");
            const miSonido = new Audio('Sonidos/error.mp3');
            miSonido.play();
          }
        })
      }
    })
    .catch(error => {
      console.error("❌ Error en fetch:", error);
    });
}

function verDescripcionDelProyecto(e) {

  let idUsuario = null

  if (localStorage.getItem("usuario")) {
    const userStr = localStorage.getItem("usuario");
    const usuario = JSON.parse(userStr);
    idUsuario = usuario.id
  }


  fetch(`${localizacion}?action=verVotos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idUsuario })
  })
  .then(res => res.json())
  .then(data => {
    if(data.success){
      let proyectosVotados = data.proyectos
    } else {
      console.log(data.message);
    }
  });

  let proyectosCalificados
  let PermitirEstrella = true
  let proyecto
  let permitir = true
  fetch(`${localizacion}?action=verCalificaciones`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idUsuario })
  })
  .then(res => res.json())
  .then(data => {
    if(data.success){
      proyectosCalificados = data.proyectos
      dataProyectosGlobal.forEach(element => {
        if (element.id === e) {
          proyecto = element
        }
      });
      proyectosCalificados.forEach(element=>{
        if (element.idProyecto !== proyecto.id && permitir==true){
          PermitirEstrella = true;
        } 
        else {
          PermitirEstrella = false;
          permitir = false
        }
      })
    } else {
      console.log(data.message);
    }
    //todo este codigo iba fuera del then pero lo puse aca por prisas
    mainDetalleProyecto.innerHTML = ``
  
  
  let article = document.createElement('ARTICLE')
  let aside = document.createElement('ASIDE')

  article.classList.add('proyecto-esp__article')

  article.innerHTML = `
    <article class="proyecto-esp__article">
      <div class="proyecto-esp__article-div">
        <img id="Proyectos__article-div-img" src="./Js/imagenes/${proyecto.imagenes[0]}" alt="">
        <div id="Proyectos__article-div-imgs">
          <img src="./Js/imagenes/${proyecto.imagenes[1]}" alt="">
          <img src="./Js/imagenes/${proyecto.imagenes[2]}" alt="">
          <img src="./Js/imagenes/${proyecto.imagenes[3]}" alt="">
        </div>
      </div>
      <div class="proyecto-esp__article-div">
        <div class="proyecto-esp__article-div-div">
          <h1 class="proyecto-esp__article-div-div-h1">${proyecto.nombre}</h1>
          <p class="proyecto-esp__article-div-div-p">${proyecto.descripcion}</p>
          <button class="proyecto-esp__article-div-div-button">VOTAR</button>
        </div>
        <div class="proyecto-esp__article-div-div">
          <div class="proyecto-esp__article-div-div-div">
            <div class="proyecto-esp__article-div-div-div-div">
              <h2 class="proyecto-esp__article-div-div-div-div-h2">Categoria</h2>
              <p class="proyecto-esp__article-div-div-div-div-p">${proyecto.categoria}</p>
            </div>
            <div class="proyecto-esp__article-div-div-div-div">
              <h2 class="proyecto-esp__article-div-div-div-div-h2">Curso</h2>
              <p class="proyecto-esp__article-div-div-div-div-p">${proyecto.años}o ${proyecto.division}a</p>
            </div>
          </div>
          <div class="proyecto-esp__article-div-div-div">
            <div class="img_blanco_negro" id="estrella1" value="1">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="img_blanco_negro" id="estrella2" value="2">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="img_blanco_negro" id="estrella3" value="3">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="img_blanco_negro" id="estrella4" value="4">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            <div class="img_blanco_negro" id="estrella5" value="5">
              <img src="./Imagenes/Estrellas.png" alt="Estrellas">
            </div>
            
          </div>
        </div>
      </div>
    </article>`
  let estudiantes = proyecto.estudiantes;
  let p1 = document.createElement('p');
  p1.classList.add('aside__div-p');
  p1.textContent = estudiantes.join(" - ");

  let profesores = proyecto.profesores;
  let p2 = document.createElement('p');
  p2.classList.add('aside__div-p');
  p2.textContent = profesores.join(" - ");

  aside.innerHTML = `
      <div class="aside__div">
          <h2 class="aside__div-h2">Estudiantes</h2>
          <p class="aside__div-p">${p1.textContent}</p>
        </div>
        <div class="aside__div">
          <h2 class="aside__div-h2">Profesores</h2>
          <p class="aside__div-p">${p2.textContent}</p>
        </div>`

  let modaldiv = document.createElement('div')
  modaldiv.setAttribute('id','modal')
  modaldiv.setAttribute('class','modal')
  modaldiv.innerHTML = `
  <div class="modal__content">
      <p id="modal-text">¿Desea confirmar su voto? <br> Si vota este proyecto, no podrá retirar su voto.</p>
      <div class="modal__buttons">
        <button onClick="if (confirmarCallback) confirmarCallback();
      cerrarModal();" id="modal-confirm">Confirmar</button>
        <button onClick="cerrarModal()" id="modal-cancel">Cancelar</button>
      </div>
    </div>`

    modaldiv.addEventListener('click', ()=> {
      if (e.target === modal) cerrarModal();
    })

  mainDetalleProyecto.appendChild(article)
  mainDetalleProyecto.appendChild(aside)
  mainDetalleProyecto.appendChild(modaldiv)
  if (PermitirEstrella == true){
    console.log("aca entro")
    instanciarEstrellas(proyecto.id)
  }
  else{
    proyectosCalificados.forEach(element=>{
      if (element.idProyecto === proyecto.id){
        console.log(element.cantEstrellas)
        iluminarEstrellas(element.cantEstrellas)
      }
      else{
        console.log("no entro")
      }
    })
  }

  const BotonesVotar = document.querySelectorAll('.proyecto-esp__article-div-div-button')

  BotonesVotar.forEach((e)=> {

    e.addEventListener('click', ()=> {
      abrirModal(()=> {
        fetch(`${localizacion}?action=votar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idUsuario: idUsuario,
          idProyecto: proyecto.id
        })
      })
      .then(res => res.json())
      .then(data => {
        if(data.success) {
          mostrarTexto("¡Felicidades! Ha votado correctamente ✅😄");
          const miSonido = new Audio('Sonidos/Check.mp3');
          miSonido.play();
        }
        if(data.message === "El usuario no tiene votos disponibles") {
          mostrarTexto("No tiene mas votos disponibles ❌");
          const miSonido = new Audio('Sonidos/error.mp3');
          miSonido.play();
        } 
        if(data.message === "El usuario ya votó este proyecto") {
          mostrarTexto("Ya ah votado este proyecto ❌");
          const miSonido = new Audio('Sonidos/error.mp3');
          miSonido.play();
        }
        console.log(data)
      });
      })
    })
  })
  });
}

let confirmarCallback = null;

function abrirModal(callback) {
  confirmarCallback = callback;
  modal.style.display = 'flex';
}

function cerrarModal() {
  modal.style.display = 'none';
}

// LLamada al json y ejecucion de las funciones.

fetch(`${localizacion}?action=pedirProyectos`)
  .then(response => response.json())
  .then(data => {
    dataProyectos = data.datos
    dataProyectosGlobal = dataProyectos
    mostrarRanking(dataProyectos)
    mostrarTopDelMain(dataProyectos)
    mostrarListaProyectos(dataProyectos)
    mostrarListaProyectosAdmin(dataProyectos) 
  })
  .catch(error => {
    console.error("❌ Error en fetch:", error);
  });

let ordenarCat = document.getElementById('OrdenarPorCategoria')
let ordenarVot = document.getElementById('OrdenarPorVoto')
let ordenarEst = document.getElementById('OrdenarPorEstrella')

ordenarVot.addEventListener('click', () => {
  mostrarRanking(dataProyectosGlobal, 0)
})

ordenarCat.addEventListener('click', () => {
  mostrarRanking(dataProyectosGlobal, 1)
})

ordenarEst.addEventListener('click', () => {
  mostrarRanking(dataProyectosGlobal, 2)
})

// Funcion para Cerrar Sesion

document.querySelector('.article__div-button2').addEventListener('click', ()=> {
  if(confirm("¿Estás seguro que desea cerrar sesion?")) {
    mostrarTexto("Su cuenta se ah cerrado correctamente ✅");
    localStorage.removeItem("usuario")
    window.location.reload();
  }
})

//Funcion para borrar cuenta

const botonBorrarCuenta = document.getElementById('BorrarCuenta')

botonBorrarCuenta.addEventListener('click', ()=> {
  borrarCuenta()
})

function borrarCuenta () {
  let idUsuario = null

  if (localStorage.getItem("usuario")) {
    const userStr = localStorage.getItem("usuario");
    const usuario = JSON.parse(userStr);
    idUsuario = usuario.id
  }
  
  if (idUsuario && confirm("¿Estás seguro que quieres eliminar esta cuenta, se borrará toda la participacion que haya tenido en el sitio?")) {
    fetch(`${localizacion}?action=borrarCuenta`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idUsuario: idUsuario
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.success) {
        mostrarTexto("Su cuenta se ah borrado correctamente ✅");
        alert(data.message)
        localStorage.removeItem("usuario")
        window.location.reload();
      }
    });
  }
}

//Funcion de notificacion

function mostrarTexto(texto) {
  const msg = document.createElement("div");
  msg.className = "mensaje";
  msg.textContent = texto;
  document.body.appendChild(msg);

  setTimeout(() => msg.classList.add("mostrar"), 100);

  setTimeout(() => {
    msg.classList.add("ocultar");
    setTimeout(() => msg.remove(), 800);
  }, 2100);
}