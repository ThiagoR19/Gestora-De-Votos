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
      Header.classList.remove('none')
      Footer.classList.remove('none')
    } else {
      element.classList.add('none')
      Header.classList.remove('none')
      Footer.classList.remove('none')
    }
    if (element.id === `Login`) {
      Header.classList.add('none')
      Footer.classList.add('none')
    }
  })
}


