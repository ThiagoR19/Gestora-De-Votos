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

const Header = document.getElementById('Header')
const Footer = document.getElementById('Footer')

const styleTag = document.getElementById('styles') // Etiqueta que cambia los estilos

// LLamando a todos los botones del header

const aRanking = document.getElementById('aRanking')
const aListaNormal = document.getElementById('aListaNormal')
const aListaNormalFooter = document.getElementById('aListaNormalFooter')
const aHome = document.getElementById('aHome')
const aHomeFooter = document.getElementById('aHomeFooter')
const aReporte = document.getElementById('aReporte')
const footerResultados = document.getElementById('footerResultados')
const VerProyectosHome = document.getElementById('VerProyectosHome')


const HeaderHome = document.querySelectorAll('.HeaderHome')
const HeaderRanking = document.querySelectorAll('.HeaderRanking')
const HeaderMiCuenta = document.querySelectorAll('.HeaderMiCuenta')
const HeaderProyectos = document.querySelectorAll('.HeaderProyectos')
const HeaderEstadistica = document.querySelectorAll('.HeaderEstadistica')
const HeaderGestionar = document.querySelectorAll('.HeaderGestionar')
const HeaderLogin = document.querySelectorAll('.HeaderLogin')

HeaderHome.forEach(element => {
  element.addEventListener('click', ()=> {
    mostrarMain('Home', mains)
    fullscreenMenuGeneral.classList.toggle('active')
  })
});

HeaderProyectos.forEach(element => {
  element.addEventListener('click', ()=> {
    mostrarMain('ListaNormal', mains)
    fullscreenMenuGeneral.classList.toggle('active')
  })
});

HeaderRanking.forEach(element => {
  element.addEventListener('click', ()=> {
    mostrarMain('Ranking', mains)
    fullscreenMenuGeneral.classList.toggle('active')
  })
});

HeaderMiCuenta.forEach(element => {
  element.addEventListener('click', ()=> {
    mostrarMain('MiCuenta', mains)
    fullscreenMenuGeneral.classList.toggle('active')
  })
});

HeaderEstadistica.forEach(element => {
  element.addEventListener('click', ()=> {
    mostrarMain('Estadisticas', mains)
    fullscreenMenuGeneral.classList.toggle('active')
  })
});

HeaderGestionar.forEach(element => {
  element.addEventListener('click', ()=> {
    mostrarMain('Gestionar', mains)
    fullscreenMenuGeneral.classList.toggle('active')
  })
});

HeaderLogin.forEach(element => {
  element.addEventListener('click', ()=> {
    if (element.textContent === "Registrarse"){
      container.classList.add("active");
    }
    mostrarMain('Login', mains)
    fullscreenMenuGeneral.classList.toggle('active')
    
  })
});



//Boton de VerProyectos del Home (Hero)

const buttonListaHome = document.getElementById('buttonListaHome')

// Agregandole funcionalidad a cada boton del header

aRanking.addEventListener('click', () => mostrarMain('Ranking', mains))
aListaNormal.addEventListener('click', () => mostrarMain('ListaAdmin', mains))
aListaNormalFooter.addEventListener('click', () => mostrarMain('ListaNormal', mains))
aHome.addEventListener('click', () => mostrarMain('Home', mains))
aHomeFooter.addEventListener('click', () => mostrarMain('Home', mains))
aReporte.addEventListener('click', () => mostrarMain('Reporte', mains))
footerResultados.addEventListener('click', () => mostrarMain('Resultados', mains))
VerProyectosHome.addEventListener('click', () => mostrarMain('ListaNormal', mains))


const UsuarioLogin = document.getElementById('UsuarioLogin')
UsuarioLogin.addEventListener('click', () => mostrarMain('Login', mains))

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
Header.classList.add('none')


function mostrarMain(mainAMostrar, mains) {
  window.scrollTo(0, 0);
  styleTag.setAttribute('href', `./Styles/${mainAMostrar}.css`)
  mains.forEach(element => {
    if (element.id === `${mainAMostrar}`) {
      element.classList.remove('none')
    } else {
      element.classList.add('none')
    }

    if (mainAMostrar === 'Login') {
      Header.classList.add('none');
      Footer.classList.add('none');
    } else {
      Header.classList.remove('none');
      Footer.classList.remove('none');
    }

    if (mainAMostrar === 'Home') {
      Header.classList.add('none');
    }
  })
}

// Funciones que muestran dinamicamente del JSON
function aplicarVerMasAuto() {
  console.log ("aplicarVerMasAuto");
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
  console.log ("aplicarVerMas");
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
    console.log ("aplicarVerMas - hecho");
  }
}

function mostrarTopDelMain(dataProyectos) {
  let Top3 = dataProyectos.sort((a, b) => b.cantVotos - a.cantVotos).slice(0, 3);
  const Tops = document.getElementById('tops')

  Tops.innerHTML = `
    <article class="tops__article">
        <div class="tops__article-divImg">
          <img src="./Imagenes/FotoEjemplo.png" alt="" class="tops__article-divImg-img">
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
          <img src="./Imagenes/FotoEjemplo.png" alt="" class="tops__article-divImg-img">
        </div>
        <div class="tops__article-lineas">
          <div class="tops__article-lineas-circulo">2</div>
        </div>
        <div class="tops__article-divcard">
          <div>
            <p class="tops__article-divcard-div-text">
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
            <img src="./Imagenes/FotoEjemplo.png" alt="" class="tops__article-divImg-img">
          </div>
          <div class="tops__article-lineas">
            <div class="tops__article-lineas-circulo">3</div>
          </div>
          <div class="tops__article-divcard">
            <div>
              <p class="tops__article-divcard-div-text">
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

    mainListaNormal.insertAdjacentHTML('beforeend', `
    <article class="ListaNormal__article">
      <div class="ListaNormal__article-div">
        <img class="ListaNormal__article-div-img" src="./Imagenes/FotoEjemplo.png" alt="">
      </div>
      <div class="ListaNormal__article-div">
        <div class="ListaNormal__article-div-div">
          <h2>${e.nombre}</h2>
          <div>
            <img src="./Imagenes/Estrellas.png" alt="Imagen de estrella">
            <img src="./Imagenes/Estrellas.png" alt="Imagen de estrella">
            <img src="./Imagenes/Estrellas.png" alt="Imagen de estrella">
            <img src="./Imagenes/Estrellas.png" alt="Imagen de estrella">
            <img src="./Imagenes/Estrellas.png" alt="Imagen de estrella">
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

  dataProyectos.forEach((e) => {

    mainListaAdmin.insertAdjacentHTML('beforeend', `
    <article class="ListaAdmin__article">
      <div class="ListaAdmin__article-div">
        <img class="ListaAdmin__article-div-img" src="./Imagenes/FotoEjemplo.png" alt="">
      </div>
      <div class="ListaAdmin__article-div">
        <div class="ListaAdmin__article-div-div">
          <h2>${e.nombre}</h2>
          <div>
            <img src="./Imagenes/Estrellas.png" alt="Imagen de estrella">
            <img src="./Imagenes/Estrellas.png" alt="Imagen de estrella">
            <img src="./Imagenes/Estrellas.png" alt="Imagen de estrella">
            <img src="./Imagenes/Estrellas.png" alt="Imagen de estrella">
            <img src="./Imagenes/Estrellas.png" alt="Imagen de estrella">
          </div>
        </div>
        <div class="ListaAdmin__article-div-div">
          <p class="ListaAdmin__article-div-div-p">${e.descripcion}</p>
        </div>
        <div class="ListaAdmin__article-div-div">
          <button class="ListaAdmin__article-div-div-button"><i class="fa-solid fa-trash"></i></button>
          <button onClick="mostrarMain('Carga', mains)" class="ListaAdmin__article-div-div-button"><i class="fa-solid fa-pencil"></i></button>
          <button onClick="mostrarMain('DetalleProyecto', mains); verDescripcionDelProyecto(${e.id})" class="ListaAdmin__article-div-div-button"><i
              class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
    </article>`)
  });
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
            <img class="rank__article-div-div-img" src="./Imagenes/FotoEjemplo.png" alt="">
          </div>
          <p class="rank__article-div-div-p" data-max="100" data-onclick="mostrarMain('DetalleProyecto', mains); verDescripcionDelProyecto(${proyectosOrdenados[cont].id})">${proyectosOrdenados[cont].descripcion}</p>
        </div>
        <div class="rank__article-div-div">
          <div class="rank__article-div-div-div">
            <button class="rank__article-div-div-div-button">Votos: ${proyectosOrdenados[cont].cantVotos}</button>
            <button onClick="mostrarMain('DetalleProyecto', mains); verDescripcionDelProyecto(${proyectosOrdenados[cont].id})" class="rank__article-div-div-div-button">Ver Proyecto</button>
          </div>
          <div class="estrellas rank__article-div-div-div">
            <img src="./Imagenes/Estrellas.png" alt="Imagen de Estrella">
            <img src="./Imagenes/Estrellas.png" alt="Imagen de Estrella">
            <img src="./Imagenes/Estrellas.png" alt="Imagen de Estrella">
            <img src="./Imagenes/Estrellas.png" alt="Imagen de Estrella">
            <img src="./Imagenes/Estrellas.png" alt="Imagen de Estrella">
          </div>
        </div>`

      cont++
      grupoDeProyectos.appendChild(tarjeta)
    }
    slider.appendChild(grupoDeProyectos)
  }
}

function verDescripcionDelProyecto(e) {

  mainDetalleProyecto.innerHTML = ``



  dataProyectosGlobal.forEach(element => {
    if(element.id === e) {
      proyecto = element
    }
  });

  let article = document.createElement('ARTICLE')
  let aside = document.createElement('ASIDE')

  article.classList.add('proyecto-esp__article')

  article.innerHTML = `
    <article class="proyecto-esp__article">
      <div class="proyecto-esp__article-div">
        <img id="Proyectos__article-div-img" src="./Imagenes/FotoEjemplo.png" alt="">
        <div id="Proyectos__article-div-imgs">
          <img src="./Imagenes/FotoEjemplo.png" alt="">
          <img src="./Imagenes/FotoEjemplo.png" alt="">
          <img src="./Imagenes/FotoEjemplo.png" alt="">
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
            <img src="./Imagenes/Estrellas.png" alt="Imagen de una estrella">
            <img src="./Imagenes/Estrellas.png" alt="Imagen de una estrella">
            <img src="./Imagenes/Estrellas.png" alt="Imagen de una estrella">
            <img src="./Imagenes/Estrellas.png" alt="Imagen de una estrella">
            <img src="./Imagenes/Estrellas.png" alt="Imagen de una estrella">
          </div>
        </div>
      </div>
    </article>`

  let estudiantes = proyecto.estudiantes;
  let p1 = document.createElement('p');
  p1.classList.add('aside__div-p');
  p1.textContent = estudiantes.map(e => e.nombre).join(" - ");

  let profesores = proyecto.profesores;
  let p2 = document.createElement('p');
  p2.classList.add('aside__div-p');
  p2.textContent = profesores.map(p => p.nombre).join(" - ");

  aside.innerHTML = `
      <div class="aside__div">
          <h2 class="aside__div-h2">Estudiantes</h2>
          <p class="aside__div-p">${p1.textContent}</p>
        </div>
        <div class="aside__div">
          <h2 class="aside__div-h2">Profesores</h2>
          <p class="aside__div-p">${p2.textContent}</p>
        </div>`

  mainDetalleProyecto.appendChild(article)
  mainDetalleProyecto.appendChild(aside)
}

// LLamada al json y ejecucion de las funciones.

async function cargarProyectos() {
  const response = await fetch("./Js/json/proyectos.json")
  const dataProyectos = await response.json()
  dataProyectosGlobal = dataProyectos
  mostrarRanking(dataProyectos)
  mostrarTopDelMain(dataProyectos)
  mostrarListaProyectos(dataProyectos)
  mostrarListaProyectosAdmin(dataProyectos)
} cargarProyectos()


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