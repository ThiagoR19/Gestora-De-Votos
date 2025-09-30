const mainHome = document.getElementById('Home')
const mainRanking = document.getElementById('Ranking')
const mainProyectos = document.getElementById('Proyectos')
const mainListaNormal = document.getElementById('ListaNormal')
const mainListaAdmin = document.getElementById('ListaAdmin')
const mainLogin = document.getElementById('Login')
const mainReporte = document.getElementById('Reporte')
const mainCarga = document.getElementById('Carga')

const Header = document.getElementById('Header')
const Footer = document.getElementById('Footer')

const styleTag = document.getElementById('styles')

const aRanking = document.getElementById('aRanking')
const aListaNormal = document.getElementById('aListaNormal')
const aListaNormalFooter = document.getElementById('aListaNormalFooter')
const aHome = document.getElementById('aHome')
const aHomeFooter = document.getElementById('aHomeFooter')
const aReporte = document.getElementById('aReporte')
const buttonListaHome = document.getElementById('buttonListaHome')
const buttonMoreHome = document.getElementById('buttonMoreHome')
const VerProyecto1 = document.getElementById('VerProyecto1')
const VerProyecto2 = document.getElementById('VerProyecto2')
const VerProyecto3 = document.getElementById('VerProyecto3')
const Editar1 = document.getElementById('Editar1')
const Editar2 = document.getElementById('Editar2')
const Editar3 = document.getElementById('Editar3')

const buttonProyectoIndividual1 = document.getElementById('buttonProyectoIndividual1')
const buttonProyectoIndividual2 = document.getElementById('buttonProyectoIndividual2')
const buttonProyectoIndividual3 = document.getElementById('buttonProyectoIndividual3')

const Ver1 = document.getElementById('Ver1')
const Ver2 = document.getElementById('Ver2')
const Ver3 = document.getElementById('Ver3')

const UsuarioLogin = document.getElementById('UsuarioLogin')

const mains = [mainHome, mainRanking, mainProyectos, mainListaNormal, mainListaAdmin, mainLogin, mainReporte, mainCarga]

aRanking.addEventListener('click', () => mostrarMain('Ranking', mains))
aListaNormal.addEventListener('click', () => mostrarMain('ListaAdmin', mains))
aListaNormalFooter.addEventListener('click', () => mostrarMain('ListaNormal', mains))
aHome.addEventListener('click', () => mostrarMain('Home', mains))
aHomeFooter.addEventListener('click', () => mostrarMain('Home', mains))
aReporte.addEventListener('click', () => mostrarMain('Reporte', mains))
buttonListaHome.addEventListener('click', () => mostrarMain('ListaNormal', mains))
buttonMoreHome.addEventListener('click', () => mostrarMain('ListaNormal', mains))
VerProyecto1.addEventListener('click', () => mostrarMain('Proyectos', mains))
VerProyecto2.addEventListener('click', () => mostrarMain('Proyectos', mains))
VerProyecto3.addEventListener('click', () => mostrarMain('Proyectos', mains))
buttonProyectoIndividual1.addEventListener('click', () => mostrarMain('Proyectos', mains))
buttonProyectoIndividual2.addEventListener('click', () => mostrarMain('Proyectos', mains))
buttonProyectoIndividual3.addEventListener('click', () => mostrarMain('Proyectos', mains))
Editar1.addEventListener('click', () => mostrarMain('Carga', mains))
Editar2.addEventListener('click', () => mostrarMain('Carga', mains))
Editar3.addEventListener('click', () => mostrarMain('Carga', mains))
Ver1.addEventListener('click', () => mostrarMain('Proyectos', mains))
Ver2.addEventListener('click', () => mostrarMain('Proyectos', mains))
Ver3.addEventListener('click', () => mostrarMain('Proyectos', mains))

UsuarioLogin.addEventListener('click', () => mostrarMain('Login', mains))

for (let i = 0; i < mains.length; i++) {
  mains[i].classList.add('none')
}
mains[0].classList.remove('none')

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

fetch("./Js/json/proyectos.json")
  .then(response => response.json())
  .then(dataProyectos => {
    let Top3 = dataProyectos.sort((a, b) => b.cantVotos - a.cantVotos).slice(0,3);
    mostrarTopDelMain(Top3)
    mostrarListaProyectos(dataProyectos)
  });

fetch("./Js/json/proyectos.json")
  .then(response => response.json())
  .then(dataProyectos => {
    let Top3 = dataProyectos.sort((a, b) => b.cantVotos - a.cantVotos).slice(0,3);
    mostrarTopDelMain(Top3)
    mostrarListaProyectos(dataProyectos)
  });



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
      </article>
  
  `
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
          <button id="VerProyecto1" class="ListaNormal__article-div-div-button">Ver Proyecto</button>
        </div>
      </div>
    </article>`) 
  });
}




