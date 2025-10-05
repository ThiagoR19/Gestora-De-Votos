const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");
const fullscreenMenu = document.getElementById("fullscreenMenu");
const fullscreenMenuGeneral = document.getElementById("fullscreenMenuGeneral");
const UserIconHome = document.getElementById("UserIconHome");

let menuAbierto = false;
let menuAbiertoG = false;

// Home

const mediaQuery = window.matchMedia("(max-width: 900px)");

function actualizarMenuIcon(e) {
  if (e.matches) {
    menuIcon.classList.remove("visible-forced");
  } else {
    if (!menuAbierto) {
      menuIcon.classList.remove("visible-forced");
    }
  }
}

mediaQuery.addEventListener("change", actualizarMenuIcon);

menuIcon.addEventListener("click", () => {
  const esPantallaChica = mediaQuery.matches;
  menuAbierto = !menuAbierto;
  fullscreenMenu.classList.toggle("active", menuAbierto);

  if (menuAbierto) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    if (esPantallaChica) {
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    } else {
      menuIcon.classList.remove("visible-forced");
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  }
});

UserIconHome.addEventListener("click", () => {
  menuAbierto = !menuAbierto;
  fullscreenMenu.classList.toggle("active", menuAbierto);
  if (menuAbierto) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
    menuIcon.classList.add("visible-forced");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("visible-forced");
  }
});

actualizarMenuIcon(mediaQuery);





//General


menu.addEventListener("click", () => {
  const esPantallaChica = mediaQuery.matches;
  menuAbiertoG = !menuAbiertoG;
  fullscreenMenuGeneral.classList.toggle("active", menuAbiertoG);

  if (menuAbiertoG) {
    menu.classList.remove("fa-bars");
    menu.classList.add("fa-times");
  } else {
    if (esPantallaChica) {
      menu.classList.remove("fa-times");
      menu.classList.add("fa-bars");
    } else {
      menu.classList.remove("visible-forced");
      menu.classList.remove("fa-times");
      menu.classList.add("fa-bars");
    }
  }
});