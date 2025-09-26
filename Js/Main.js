const mainHome = document.getElementById('Home')
const mainRanking = document.getElementById('Ranking')
const mainProyectos = document.getElementById('Proyectos')
const mainListaNormal = document.getElementById('ListaNormal')
const mainListaAdmin = document.getElementById('ListaAdmin')
const mainLogin = document.getElementById('Login')
const mainReporte = document.getElementById('Reporte')


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


const mains = [mainHome, mainRanking, mainProyectos, mainListaNormal, mainListaAdmin, mainLogin, mainReporte]


aRanking.addEventListener('click', () => mostrarMain('Ranking', mains))
aListaNormal.addEventListener('click', () => mostrarMain('ListaNormal', mains))
aListaNormalFooter.addEventListener('click', () => mostrarMain('ListaNormal', mains))
aHome.addEventListener('click', () => mostrarMain('Home', mains))
aHomeFooter.addEventListener('click', () => mostrarMain('Home', mains))
aReporte.addEventListener('click', () => mostrarMain('Reporte', mains))
buttonListaHome.addEventListener('click', () => mostrarMain('ListaNormal', mains))
buttonMoreHome.addEventListener('click', () => mostrarMain('ListaNormal', mains))
VerProyecto1.addEventListener('click', () => mostrarMain('Proyectos', mains))
VerProyecto2.addEventListener('click', () => mostrarMain('Proyectos', mains))
VerProyecto3.addEventListener('click', () => mostrarMain('Proyectos', mains))



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
      mostrarLogin()
    }
  })
}


