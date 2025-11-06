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
    MenuHS.classList.remove('active')
    MenuHU.classList.remove('active')
    MenuHC.classList.remove('active')
    MenuHA.classList.remove('active')

    MenuGS.classList.remove('active')
    MenuGU.classList.remove('active')
    MenuGC.classList.remove('active')
    MenuGA.classList.remove('active')

    IconoHS.classList.add("fa-bars");
    IconoHS.classList.remove("fa-times");
    IconoHS.classList.remove("visible-forced");

    IconoHU.classList.add("fa-bars");
    IconoHU.classList.remove("fa-times");
    IconoHU.classList.remove("visible-forced");

    IconoHC.classList.add("fa-bars");
    IconoHC.classList.remove("fa-times");
    IconoHC.classList.remove("visible-forced");

    IconoHA.classList.add("fa-bars");
    IconoHA.classList.remove("fa-times");
    IconoHA.classList.remove("visible-forced");

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
    MostrarCoordinadores()
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
ocultarHeadersMain(HeaderGA, HeaderGC, HeaderGS, HeaderGU)


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
      ocultarHeadersMain(HeaderGA, HeaderGC, HeaderGS, HeaderGU)
      Footer.classList.add('none');
    } else {
      Footer.classList.remove('none');
    }
    if (mainAMostrar === "mainHome") {
      // console.log("se muestra el main")
    }
  })
}

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

function mostrarTopDelMain(dataProyectos) {
  let Top3 = dataProyectos.sort((a, b) => b.cantVotos - a.cantVotos).slice(0, 3);
  const Tops = document.getElementById('tops')

  Tops.innerHTML = `

    <article id="MejoresProyectos">
        <h2>Mejores Proyectos</h2>
    </article>

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

  mainListaNormal.innerHTML = ''

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

  mainListaAdmin.innerHTML = ''

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
              <label class="imageInput" for="imageInputC">Ingresar Imagenes</label>
              <input type="file" id="imageInputC" multiple accept="image/*" style="display: none;">
            </div>
            <button id="crearProyectoBtn">Crear Proyecto</button>
          </div>
        </div>
        <div class="carga-proyecto__preview-img">
          <img src="Imagenes/Fondo.png" alt="imagen_Colegio">
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
      </article>`;

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
        <div class="gallery">
          <div class="main-image-container">
            <img id="mainImageC" src="" alt="Imagen principal">
          </div>
          <div class="thumbnails-container" id="thumbnailsC">
          </div>
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

  const imageInputC = document.getElementById("imageInputC");
  const mainImageC = document.getElementById("mainImageC");
  const thumbnailsContainerC = document.getElementById("thumbnailsC");

  let currentIndexC = 0;
  let imagesC = ['ImagenDefault.png']

  renderGallery();

  imageInputC.addEventListener("change", (e) => {
    const files = Array.from(e.target.files);

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const nuevaImagen = event.target.result;

        if (imagesC.length === 1 && imagesC[0] === 'ImagenDefault.png') {
          imagesC = [];
        }

        imagesC.push(nuevaImagen);
        renderGallery();
      };
      reader.readAsDataURL(file);
    });
  });

  function renderGallery() {
    if (imagesC.length === 0) {
      imagesC = ['ImagenDefault.png'];
    }

    const imgSrcC = imagesC[currentIndexC].startsWith('data:')
      ? imagesC[currentIndexC]
      : `./Js/imagenes/${imagesC[currentIndexC]}`;

    mainImageC.src = imgSrcC;

    thumbnailsContainerC.innerHTML = "";

    imagesC.forEach((img, index) => {
      const thumbWrapper = document.createElement('div');
      thumbWrapper.classList.add('thumb-wrapper');

      const thumb = document.createElement('img');
      thumb.src = img.startsWith('data:') ? img : `./Js/imagenes/${img}`;
      if (index === currentIndexC) thumb.classList.add('active');

      thumb.addEventListener('click', () => {
        currentIndexC = index;
        renderGallery();
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'X';
      deleteBtn.classList.add('delete-thumb');
      deleteBtn.addEventListener('click', () => {
        if (imagesC.length === 1) {
          alert("No puedes dejar el proyecto sin imágenes.");
          return;
        }
        imagesC.splice(index, 1);
        if (currentIndexC >= imagesC.length) currentIndexC = imagesC.length - 1;
        renderGallery();
      });

      thumbWrapper.appendChild(thumb);
      thumbWrapper.appendChild(deleteBtn);
      thumbnailsContainerC.appendChild(thumbWrapper);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  });

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    renderGallery();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    renderGallery();
  }

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

  const crearProyectoBtn = document.getElementById('crearProyectoBtn')

  crearProyectoBtn.addEventListener('click', () => {
    if (confirm('¿Seguro que desea crear un nuevo proyecto?')) {

      const estudiantesArray = valoresInputsDel(contenedorEstudiantes);
      const profesoresArray = valoresInputsDel(contenedorProfesores)

      if (imagesC.length === 0) {
        images = ['ImagenDefault.png']
      }

      fetch(`${localizacion}/api/index.php?recurso=Proyectos`, {
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
          imagenes: imagesC
        })
      })
        .then(res => res.json())
        .then(data => {
          // console.log(data)
          if (data.success) {
            mostrarTexto("Proyecto creado correctamente ✅");
            const miSonido = new Audio('Sonidos/Check.mp3');
            miSonido.play();
            fetch(`${localizacion}/api/index.php?recurso=Proyectos`)
              .then(response => response.json())
              .then(data => {
                // console.log(data)
                dataProyectos = data.datos
                dataProyectosGlobal = dataProyectos
                mostrarRanking(dataProyectos)
                mostrarTopDelMain(dataProyectos)
                mostrarListaProyectos(dataProyectos)
                mostrarListaProyectosAdmin(dataProyectos)
                mostrarEstadisticas(dataProyectos)
              })
              .catch(error => {
                console.error("❌ Error en fetch:", error);
              });
          }
        })
        .catch(error => {
          console.error("❌ Error en fetch:", error);
        });
    }
  });

}

function EliminarProyecto(id) {
  if (confirm("¿Estás seguro que quieres eliminar este proyecto?")) {
    fetch(`${localizacion}/api/index.php?recurso=Proyectos&idProyecto=${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        if (data.success) {
          mostrarTexto("Proyecto eliminado correctamente ✅");
          const miSonido = new Audio('Sonidos/Check.mp3');
          miSonido.play();
          fetch(`${localizacion}/api/index.php?recurso=Proyectos`)
            .then(response => response.json())
            .then(data => {
              // console.log(data)
              dataProyectos = data.datos
              dataProyectosGlobal = dataProyectos
              mostrarRanking(dataProyectos)
              mostrarTopDelMain(dataProyectos)
              mostrarListaProyectos(dataProyectos)
              mostrarListaProyectosAdmin(dataProyectos)
              mostrarEstadisticas(dataProyectos)
            })
            .catch(error => {
              console.error("❌ Error en fetch:", error);
            });
        }
      })
      .catch(error => {
        console.error("❌ Error en fetch:", error);
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
    const promedio = p => p.cantCalificacionesEstrellas ? p.cantEstrellas / p.cantCalificacionesEstrellas : 0;
    proyectosOrdenados = dataProyectos.slice().sort((a, b) => promedio(b) - promedio(a));
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
    aplicarVerMasAuto()
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
  
      <article class="carga-proyecto">
        <div class="carga-proyecto__info">
          <div class="carga-proyecto__titulo">
            <label class="carga-proyecto__label">Titulo del Proyecto</label>
            <input value="${proyecto.nombre}" type="text" id="inputTitulo" class="carga-proyecto__input"
              placeholder="Ingrese el título del proyecto">
          </div>

          <div class="carga-proyecto__descripcion">
            <label class="carga-proyecto__label">Descripcion del Proyecto</label>
            <textarea id="inputDescripcion" class="carga-proyecto__textarea"
              placeholder="Ingrese una descripción detallada del proyecto."></textarea>
          </div>

          <div class="carga-proyecto__imagenes">
            <label class="carga-proyecto__label">Agregar imágenes</label>
            <div class="carga-proyecto__imagenes-cont">
              <label class="imageInput" for="imageInput">Ingresar Imagenes</label>
              <input type="file" id="imageInput" multiple accept="image/*" style="display: none;">
            </div>
            <button id="editarProyecto">Cargar Proyecto</button>
          </div>
        </div>
        <div class="carga-proyecto__preview-img">
          <img src="Imagenes/Fondo.png" alt="imagem_Colegio">
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
      </article>`

  mainCarga.appendChild(section)

  const InputTitulo = document.getElementById('inputTitulo');
  const InputDescripcion = document.getElementById('inputDescripcion');
  const InputCategoria = document.getElementById('inputCategoria');
  const InputAnio = document.getElementById('inputAnio');
  const InputDivision = document.getElementById('inputDivision');

  InputDescripcion.value = proyecto.descripcion

  const grupos = document.querySelectorAll('.carga-proyecto-form__grupo');
  const contenedorEstudiantes = grupos[0];

  proyecto.estudiantes.forEach((estudiante) => {
    let input = document.createElement('input')
    input.type = 'text'
    input.value = `${estudiante}`
    input.classList.add('carga-proyecto-form__input')
    contenedorEstudiantes.appendChild(input)
  })

  const contenedorProfesores = grupos[1];

  proyecto.profesores.forEach((profesor) => {
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
        <div class="gallery">
          <div class="main-image-container">
            <img id="mainImage" src="" alt="Imagen principal">
          </div>
          <div class="thumbnails-container" id="thumbnails">
          </div>
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

  // Funcion de carrousel

  const imageInput = document.getElementById("imageInput");
  const mainImage = document.getElementById("mainImage");
  const thumbnailsContainer = document.getElementById("thumbnails");
  let currentIndex = 0;

  let images = (proyecto?.imagenes && proyecto.imagenes.length > 0)
    ? [...proyecto.imagenes]
    : ['ImagenDefault.png'];

  renderGallery();

  imageInput.addEventListener("change", (e) => {
    const files = Array.from(e.target.files);

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const nuevaImagen = event.target.result;

        if (images.length === 1 && images[0] === 'ImagenDefault.png') {
          images = [];
        }

        images.push(nuevaImagen);
        renderGallery();
      };
      reader.readAsDataURL(file);
    });
  });

  function renderGallery() {
    if (images.length === 0) {
      images = ['ImagenDefault.png'];
    }

    const imgSrc = images[currentIndex].startsWith('data:')
      ? images[currentIndex]
      : `./Js/imagenes/${images[currentIndex]}`;

    mainImage.src = imgSrc;

    thumbnailsContainer.innerHTML = "";

    images.forEach((img, index) => {
      const thumbWrapper = document.createElement('div');
      thumbWrapper.classList.add('thumb-wrapper');

      const thumb = document.createElement('img');
      thumb.src = img.startsWith('data:') ? img : `./Js/imagenes/${img}`;
      if (index === currentIndex) thumb.classList.add('active');

      thumb.addEventListener('click', () => {
        currentIndex = index;
        renderGallery();
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'X';
      deleteBtn.classList.add('delete-thumb');
      deleteBtn.addEventListener('click', () => {
        if (images.length === 1) {
          alert("No puedes dejar el proyecto sin imágenes.");
          return;
        }
        images.splice(index, 1);
        if (currentIndex >= images.length) currentIndex = images.length - 1;
        renderGallery();
      });

      thumbWrapper.appendChild(thumb);
      thumbWrapper.appendChild(deleteBtn);
      thumbnailsContainer.appendChild(thumbWrapper);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  });

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    renderGallery();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    renderGallery();
  }

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

    const cursoTxt = `${InputAnio && InputAnio.value ? InputAnio.value : ''} ${InputDivision && InputDivision.value ? InputDivision.value : ''} `.trim();
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

    if (!images || images.length === 0) {
      images = ['ImagenDefault.png']
    }

    if (confirm('¿Seguro que desea actualizar este proyecto?')) {
      fetch(`${localizacion}/api/index.php?recurso=Proyectos`, {
        method: "PUT",
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
          imagenes: images
        })
      })
        .then(res => res.json())
        .then(data => {
          // console.log(data)
          if (data.success) {
            mostrarTexto("Proyecto actualizado correctamente ✅😄");
            const miSonido = new Audio('Sonidos/Check.mp3');
            miSonido.play();
            fetch(`${localizacion}/api/index.php?recurso=Proyectos`)
              .then(response => response.json())
              .then(data => {
                dataProyectos = data.datos
                dataProyectosGlobal = dataProyectos
                mostrarRanking(dataProyectos)
                mostrarTopDelMain(dataProyectos)
                mostrarListaProyectos(dataProyectos)
                mostrarListaProyectosAdmin(dataProyectos)
                mostrarEstadisticas(dataProyectos)
              })
              .catch(error => {
                console.error("❌ Error en fetch:", error);
              });
          } else if (data.message == "Faltan datos obligatorios") {
            mostrarTexto(`Faltan datos obligatorios ❌ (${data.faltantes} )`);
            const miSonido = new Audio('Sonidos/error.mp3');
            miSonido.play();
          }
        })
        .catch(error => {
          console.error("❌ Error en fetch:", error);
        });
    }
  })
}


const inputDePerfil = document.getElementById("inputDePerfil");
const imagenDePerfil = document.querySelector(".article__div-img");
let imagenBase64 = ""; // acá guardamos la imagen real para enviar al servidor

inputDePerfil.addEventListener("change", function (event) {
  const archivo = event.target.files[0];

  if (archivo) {
    // Mostrar vista previa
    const url = URL.createObjectURL(archivo);
    imagenDePerfil.src = url;

    // Convertir a base64 para enviar
    const reader = new FileReader();
    reader.readAsDataURL(archivo);
    reader.onload = function () {
      imagenBase64 = reader.result; // data:image/png;base64,...
    };
  } else {
    imagenDePerfil.src = "./Imagenes/Usuario.png";
    imagenBase64 = "";
  }
});

if (localStorage.getItem("usuario")) {
  const userStr = localStorage.getItem("usuario");
  const usuario = JSON.parse(userStr);
  idUsuario = usuario.id
  // console.log(idUsuario)
  fetch(`${localizacion}/api/index.php?recurso=Usuarios&idUsuario=${idUsuario}&action=verCuenta`)
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      if (data.data.imagen) {
        let headerImagenes = [
          document.getElementById('IconoUserGU'),
          document.getElementById('IconoUserGC'),
          document.getElementById('IconoUserGA'),
          document.getElementById('IconoUserHU'),
          document.getElementById('IconoUserHC'),
          document.getElementById('IconoUserHA')
        ]
        headerImagenes.forEach((Imagen) => {
          Imagen.src = `./Js/imagenes/${data.data.imagen}`
        })
      }
    })
    .catch(error => {
      console.error("❌ Error en fetch:", error);
    });
}


function editarCuenta() {
  if (!localStorage.getItem("usuario")) { return }
  const userStr = localStorage.getItem("usuario");
  const usuario = JSON.parse(userStr);
  idUsuario = usuario.id

  fetch(`${localizacion}/api/index.php?recurso=Usuarios&idUsuario=${idUsuario}&action=verCuenta`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data.success) {
        const nombre = document.getElementById('nombreUsuario')
        const apellido = document.getElementById('apellidoUsuario')
        const contraseniaActual = document.getElementById('contraseña')
        const contraseniaNueva = document.getElementById('contraseñaNueva')
        const actualizarCuenta = document.getElementById('actualizarCuenta')
        const imagenDePerfil = document.querySelector('.article__div-img');

        nombre.value = data.data.Nombre
        apellido.value = data.data.Apellido

        if (data.data.imagen) {
          imagenDePerfil.src = `./Js/imagenes/${data.data.imagen} `
        }

        actualizarCuenta.addEventListener('click', () => {
          if (contraseniaActual.value && contraseniaNueva.value == '') {
            mostrarTexto("Su nueva contraseña no puede estar vacía ❌");
            const miSonido = new Audio('Sonidos/error.mp3');
            miSonido.play();
            return
          }
          fetch(`${localizacion}/api/index.php?recurso=Usuarios`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              idUsuario: idUsuario,
              nombre: nombre.value,
              apellido: apellido.value,
              contrasenia: contraseniaActual.value,
              contraseniaNueva: contraseniaNueva.value,
              imagen: imagenBase64
            })
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if (data.success) {
                mostrarTexto("Datos actualizados correctamente ✅");
                const miSonido = new Audio('Sonidos/Check.mp3');
                miSonido.play();
                fetch(`${localizacion}/api/index.php?recurso=Usuarios&idUsuario=${idUsuario}&action=verCuenta`)
                  .then(response => response.json())
                  .then(data => {
                    // console.log(data)
                    if (data.data.imagen) {
                      headerImagenes = [
                        document.getElementById('IconoUserGU'),
                        document.getElementById('IconoUserGC'),
                        document.getElementById('IconoUserGA'),
                        document.getElementById('IconoUserHU'),
                        document.getElementById('IconoUserHC'),
                        document.getElementById('IconoUserHA')
                      ]
                      headerImagenes.forEach((Imagen) => {
                        Imagen.src = `./Js/imagenes/${data.data.imagen} `
                      })
                    }
                  })
                  .catch(error => {
                    console.error("❌ Error en fetch:", error);
                  });
              } else {
                mostrarTexto("Hubo un error al intentar actualizar sus datos ❌");
                const miSonido = new Audio('Sonidos/error.mp3');
                miSonido.play();
              }
            })
            .catch(error => {
              console.error("❌ Error en fetch:", error);
            });
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

  fetch(`${localizacion}/api/index.php?recurso=Votos&idUsuario=${idUsuario}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      if (data.success) {
        let proyectosVotados = data.proyectos
        // console.log(proyectosVotados)
      } else {
        // console.log(data.message);
      }
    })
    .catch(error => {
      console.error("❌ Error en fetch:", error);
    });

  let proyectosCalificados
  let PermitirEstrella = true
  let proyecto
  let permitir = true

  fetch(`${localizacion}/api/index.php?recurso=Estrellas&idUsuario=${idUsuario}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      dataProyectosGlobal.forEach(element => {
        if (element.id === e) {
          proyecto = element
        }
      });

      if (data.success) {
        proyectosCalificados = data.proyectos
        proyectosCalificados.forEach(element => {
          if (element.idProyecto !== proyecto.id && permitir == true) {
            PermitirEstrella = true;
          }
          else {
            PermitirEstrella = false;
            permitir = false
          }
        })
      }
      //todo este codigo iba fuera del then pero lo puse aca por prisas
      mainDetalleProyecto.innerHTML = ``


      let article = document.createElement('ARTICLE')
      let aside = document.createElement('ASIDE')

      article.classList.add('proyecto-esp__article-container')

      article.innerHTML = `
    <article class="proyecto-esp__article">
      <div class="proyecto-esp__article-div">
        <div class="gallery">
          <div class="main-image-container">
            <img id="mainImageV" src="" alt="Imagen principal">
          </div>
          <div class="thumbnails-containerV" id="thumbnailsV">
          </div>
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
      modaldiv.setAttribute('id', 'modal')
      modaldiv.setAttribute('class', 'modal')
      modaldiv.innerHTML = `
            <div class="modal__content">
              <p id="modal-text">¿Desea confirmar su voto? <br> Si vota este proyecto, no podrá retirar su voto.</p>
              <div class="modal__buttons">
                <button onClick="if (confirmarCallback) confirmarCallback();
      cerrarModal();" id="modal-confirm">Confirmar</button>
                <button onClick="cerrarModal()" id="modal-cancel">Cancelar</button>
              </div>
            </div>`

      modaldiv.addEventListener('click', () => {
        if (e.target === modal) cerrarModal();
      })

      mainDetalleProyecto.appendChild(article)
      mainDetalleProyecto.appendChild(aside)
      mainDetalleProyecto.appendChild(modaldiv)
      if (PermitirEstrella == true) {
        instanciarEstrellas(proyecto.id)
      }
      else {
        proyectosCalificados.forEach(element => {
          if (element.idProyecto === proyecto.id) {
            // console.log(element.cantEstrellas)
            iluminarEstrellas(element.cantEstrellas)
          }
          else {
            // console.log("no entro")
          }
        })
      }

      const mainImageV = document.getElementById("mainImageV");
      const thumbnailsContainerV = document.getElementById("thumbnailsV");


      let imagesV = proyecto?.imagenes ? [...proyecto.imagenes] : [];

      // console.log(imagesV)
      let currentIndexV = 0;

      renderGallery();

      function renderGallery() {
        if (imagesV.length === 0) return;

        const imgSrcV = imagesV[currentIndexV].startsWith('data:')
          ? imagesV[currentIndexV]
          : `./Js/imagenes/${imagesV[currentIndexV]}`;

        mainImageV.src = imgSrcV;

        thumbnailsContainerV.innerHTML = "";

        imagesV.forEach((img, index) => {
          const thumb = document.createElement('img');
          thumb.src = img.startsWith('data:') ? img : `./Js/imagenes/${img}`;
          if (index === currentIndexV) thumb.classList.add('active');

          thumb.addEventListener('click', () => {
            currentIndexV = index;
            renderGallery();
          });

          thumbnailsContainerV.appendChild(thumb);
        });
      }

      document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      });

      function nextImage() {
        currentIndexV = (currentIndexV + 1) % imagesV.length;
        renderGallery();
      }

      function prevImage() {
        currentIndexV = (currentIndexV - 1 + imagesV.length) % imagesV.length;
        renderGallery();
      }


      const BotonesVotar = document.querySelectorAll('.proyecto-esp__article-div-div-button')

      BotonesVotar.forEach((e) => {

        e.addEventListener('click', () => {
          abrirModal(() => {
            fetch(`${localizacion}/api/index.php?recurso=Votos`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                idUsuario: idUsuario,
                idProyecto: proyecto.id
              })
            })
              .then(res => res.json())
              .then(data => {
                // console.log(data)
                if (data.success) {
                  mostrarTexto("¡Felicidades! Ha votado correctamente ✅😄");
                  const miSonido = new Audio('Sonidos/Check.mp3');
                  miSonido.play();
                }
                if (data.message === "El usuario no tiene votos disponibles") {
                  mostrarTexto("No tiene mas votos disponibles ❌");
                  const miSonido = new Audio('Sonidos/error.mp3');
                  miSonido.play();
                }
                if (data.message === "El usuario ya votó este proyecto") {
                  mostrarTexto("Ya ha votado este proyecto ❌");
                  const miSonido = new Audio('Sonidos/error.mp3');
                  miSonido.play();
                }
                if (data.message === "Faltan datos: idUsuario o idProyecto") {
                  mostrarTexto("Inicie sesion para votar un proyecto ❌");
                  const miSonido = new Audio('Sonidos/error.mp3');
                  miSonido.play();
                }
              })
              .catch(error => {
                console.error("❌ Error en fetch:", error);
              });
          })
        })
      })
    })
    .catch(error => {
      console.error("❌ Error en fetch:", error);
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

fetch(`${localizacion}/api/index.php?recurso=Proyectos`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // console.log(data.datos)
    dataProyectos = data.datos
    dataProyectosGlobal = dataProyectos
    mostrarRanking(dataProyectos)
    mostrarTopDelMain(dataProyectos)
    mostrarListaProyectos(dataProyectos)
    mostrarListaProyectosAdmin(dataProyectos)
    mostrarEstadisticas(dataProyectos)
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

document.querySelector('.article__div-button2').addEventListener('click', () => {
  if (confirm("¿Estás seguro que desea cerrar sesion?")) {
    mostrarTexto("Su cuenta se ah cerrado correctamente ✅");
    localStorage.removeItem("usuario")
    window.location.reload();
  }
})

//Funcion para borrar cuenta
const botonBorrarCuenta = document.getElementById('BorrarCuenta')
botonBorrarCuenta.addEventListener('click', () => { borrarCuenta() })

function borrarCuenta() {
  let idUsuario = null

  if (localStorage.getItem("usuario")) {
    const userStr = localStorage.getItem("usuario");
    const usuario = JSON.parse(userStr);
    idUsuario = usuario.id
  }

  if (idUsuario && confirm("¿Estás seguro que quieres eliminar esta cuenta, se borrará toda la participacion que haya tenido en el sitio?")) {
    fetch(`${localizacion}/api/index.php?recurso=Usuarios&idUsuario=${idUsuario}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        if (data.success) {
          mostrarTexto("Su cuenta se ah borrado correctamente ✅");
          alert(data.message)
          localStorage.removeItem("usuario")
          window.location.reload();
        }
      })
      .catch(error => {
        console.error("❌ Error en fetch:", error);
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

// Funcion de estadisticas

function mostrarEstadisticas(dataProyectos) {

  let proyectos = []
  dataProyectos.forEach((proyecto) => {
    let proyectoEstadistica = {
      id: proyecto.id,
      nombre: proyecto.nombre,
      votos: proyecto.cantVotos,
      estrellas: proyecto.cantEstrellas
    }
    proyectos.push(proyectoEstadistica)
  })

  const chart = document.getElementById("chart");
  const xAxis = document.getElementById("x-axis");
  const yAxis = document.getElementById("y-axis");

  // Función para renderizar el gráfico
  function renderChart(data, tipo = "votos") {
    // Limpiamos contenido previo
    chart.innerHTML = "";
    xAxis.innerHTML = "";
    yAxis.innerHTML = "";

    // Ordenamos según tipo (votos o estrellas)
    const proyectosOrdenados = [...data].sort((a, b) => b[tipo] - a[tipo]);

    // Calculamos máximo
    const maxValor = Math.max(...proyectosOrdenados.map(p => p[tipo]));
    const step = Math.ceil(maxValor / 5);
    const maxY = step * 5;

    // Crear etiquetas Y y líneas de cuadrícula
    for (let y = maxY; y >= 0; y -= step) {
      const label = document.createElement("div");
      label.classList.add("y-label");
      label.style.bottom = (y / maxY * 100) + "%";
      label.textContent = y;
      yAxis.appendChild(label);

      const grid = document.createElement("div");
      grid.classList.add("grid-line");
      grid.style.bottom = (y / maxY * 100) + "%";
      chart.appendChild(grid);
    }

    // Crear barras y etiquetas X
    proyectosOrdenados.forEach(p => {
      const bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = (p[tipo] / maxY * 100) + "%";
      bar.title = `${p.nombre}: ${p[tipo]} ${tipo}`;
      chart.appendChild(bar);

      const label = document.createElement("div");
      label.classList.add("bar-label");
      label.textContent = p.nombre;
      xAxis.appendChild(label);
    });
  }

  renderChart(proyectos, "votos");

  const btnEstrellas = document.querySelector(".Estadisticas__section-article-div-div-div-button:nth-child(1)");
  const btnVotos = document.querySelector(".Estadisticas__section-article-div-div-div-button:nth-child(2)");

  btnEstrellas.addEventListener("click", () => renderChart(proyectos, "estrellas"));
  btnVotos.addEventListener("click", () => renderChart(proyectos, "votos"));

  const contenedor = document.getElementById('Estadisticas__proyectos');

  // Función para renderizar proyectos
  function renderProyectos(data) {
    contenedor.innerHTML = ""; // Limpiamos
    data.forEach((proyecto, index) => {
      const div = document.createElement('div');
      div.innerHTML = `
            <div class="Estadisticas__proyecto">
              <span class="Estadisticas__proyecto-numero">${index + 1}.</span>
              <div class="Estadisticas__proyecto-info">
                <h4 class="Estadisticas__proyecto-nombre">${proyecto.nombre}</h4>
                <p class="Estadisticas__proyecto-votos">Votos: ${proyecto.votos}</p>
                <p class="Estadisticas__proyecto-estrellas">Estrellas: ${proyecto.estrellas}</p>
              </div>
            </div>
            `;
      contenedor.appendChild(div);
    });
  }

  // Función para ordenar y renderizar
  function ordenarProyectos(tipo) {
    let proyectosOrdenados;
    if (tipo === "proyectos") {
      proyectosOrdenados = [...proyectos].sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else {
      proyectosOrdenados = [...proyectos].sort((a, b) => b[tipo] - a[tipo]);
    }
    renderProyectos(proyectosOrdenados);
  }

  // Botones
  const btnEstrellas2 = document.querySelector('.Estadisticas__section-article-div-div-button:nth-child(1)');
  const btnVotos2 = document.querySelector('.Estadisticas__section-article-div-div-button:nth-child(2)');
  const btnProyectos = document.querySelector('.Estadisticas__section-article-div-div-button:nth-child(3)');

  btnEstrellas2.addEventListener('click', () => ordenarProyectos('estrellas'));
  btnVotos2.addEventListener('click', () => ordenarProyectos('votos'));
  btnProyectos.addEventListener('click', () => ordenarProyectos('proyectos'));

  // Render inicial
  renderProyectos(proyectos);

}


// En este codigo hay un error que genera unas comillas de mas en la linea 