// LLamando a todos los mains

const mainHome = document.getElementById('Home')
const mainRanking = document.getElementById('Ranking')
const mainProyectos = document.getElementById('Proyectos')
const mainListaNormal = document.getElementById('ListaNormal')
const mainListaAdmin = document.getElementById('ListaAdmin')
const mainLogin = document.getElementById('Login')
const mainReporte = document.getElementById('Reporte')
const mainCarga = document.getElementById('Carga')

const mains = [mainHome, mainRanking, mainProyectos, mainListaNormal, mainListaAdmin, mainLogin, mainReporte, mainCarga]

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

//Boton de VerProyectos del Home (Hero)

const buttonListaHome = document.getElementById('buttonListaHome')

// Agregandole funcionalidad a cada boton del header

aRanking.addEventListener('click', () => mostrarMain('Ranking', mains))
aListaNormal.addEventListener('click', () => mostrarMain('ListaAdmin', mains))
aListaNormalFooter.addEventListener('click', () => mostrarMain('ListaNormal', mains))
aHome.addEventListener('click', () => mostrarMain('Home', mains))
aHomeFooter.addEventListener('click', () => mostrarMain('Home', mains))
aReporte.addEventListener('click', () => mostrarMain('Reporte', mains))
buttonListaHome.addEventListener('click', () => mostrarMain('ListaNormal', mains))

const UsuarioLogin = document.getElementById('UsuarioLogin')
UsuarioLogin.addEventListener('click', () => mostrarMain('Login', mains))

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
} mains[0].classList.remove('none')

// Funciones que muestran dinamicamente del JSON

function mostrarMain(mainAMostrar, mains) {
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
    
  })
}

function mostrarTopDelMain(Top3) {
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
            <p class="tops__article-divcard-div-text">
              ${Top3[0].descripcion}
            </p>
          </div>
          <div class="tops__article-divcard-buttons">
            <button class="tops__article-divcard-buttons-button blanco">Votos: ${Top3[0].cantVotos}</button>
            <button class="tops__article-divcard-buttons-button azul" id="buttonProyectoIndividual1">Ver
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
            <button class="tops__article-divcard-buttons-button azul" id="buttonProyectoIndividual2">Ver
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
              <button class="tops__article-divcard-buttons-button azul" id="buttonProyectoIndividual3">Ver
                Proyecto</button>
            </div>
          </div>
        </article>
        <div class="article-overlay">
          <button class="btn-overlay" id="buttonMoreHome">Ver más</button>
        </div>
      </article>`
}

function mostrarListaProyectos(dataProyectos) {

  dataProyectos.forEach(e => {

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
          <button onClick="mostrarMain('Proyectos', mains)" class="ListaNormal__article-div-div-button">Ver Proyecto</button>
        </div>
      </div>
    </article>`) 
  });
}

function mostrarListaProyectosAdmin(dataProyectos) {

   dataProyectos.forEach(e => {

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
          <button onClick="mostrarMain('Proyectos', mains)" class="ListaAdmin__article-div-div-button"><i
              class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
    </article>`) 
  });
}

function mostrarRanking(dataProyectos) {

  let cont = 0
  let cantidadDeGruposDe3 = Math.ceil(dataProyectos.length/3)

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
            <h2 class="rank__article-div-div-div-h2">0${cont+1}</h2>
            <div class="rank__article-div-div-div-div"></div>
          </div>
          <h2 class="rank__article-div-div-div-h2">${dataProyectos[cont].nombre}</h2>
        </div>
        <div class="rank__article-div-div">
          <div id="container" class="rank__article-div-div-div">
            <img class="rank__article-div-div-img" src="./Imagenes/FotoEjemplo.png" alt="">
          </div>
          <p class="rank__article-div-div-p">${dataProyectos[cont].descripcion}</p>
        </div>
        <div class="rank__article-div-div">
          <div id="votosYVer" class="rank__article-div-div-div">
            <button class="rank__article-div-div-div-button">Votos: ${dataProyectos[cont].cantVotos}</button>
            <button class="rank__article-div-div-div-button">Ver Proyecto</button>
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

// LLamada al json y ejecucion de las funciones.

fetch("./Js/json/proyectos.json")
  .then(response => response.json())
  .then(dataProyectos => {
    let Top3 = dataProyectos.sort((a, b) => b.cantVotos - a.cantVotos).slice(0,3);
    mostrarRanking(dataProyectos)
    mostrarTopDelMain(Top3)
    mostrarListaProyectos(dataProyectos)
    mostrarListaProyectosAdmin(dataProyectos)
  });



