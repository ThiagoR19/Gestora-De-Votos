const IconoGS = document.getElementById("IconoGS");
const IconoGU = document.getElementById("IconoGU");
const IconoGC = document.getElementById("IconoGC");
const IconoGA = document.getElementById("IconoGA");

const MenuGS = document.getElementById("MenuGS");
const MenuGU = document.getElementById("MenuGU");
const MenuGC = document.getElementById("MenuGC");
const MenuGA = document.getElementById("MenuGA");

const menuIcon = document.getElementById("menuIcon");
const fullscreenMenu = document.getElementById("fullscreenMenu");

const IconoUserGU = document.getElementById("IconoUserGU");
const IconoUserGC = document.getElementById("IconoUserGC");
const IconoUserGA = document.getElementById("IconoUserGA");


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

// UserIconHome.addEventListener("click", () => {
//   menuAbierto = !menuAbierto;
//   fullscreenMenu.classList.toggle("active", menuAbierto);
//   if (menuAbierto) {
//     menuIcon.classList.remove("fa-bars");
//     menuIcon.classList.add("fa-times");
//     menuIcon.classList.add("visible-forced");
//   } else {
//     menuIcon.classList.remove("fa-times");
//     menuIcon.classList.add("fa-bars");
//     menuIcon.classList.remove("visible-forced");
//   }
// });

actualizarMenuIcon(mediaQuery);




//General

// GS

IconoGS.addEventListener("click", () => {
  MenuGS.classList.toggle("active");
  IconoGS.classList.toggle("fa-bars");
  IconoGS.classList.toggle("fa-times");
});

// GU

IconoGU.addEventListener("click", () => {
  MenuGU.classList.toggle("active");
  IconoGU.classList.toggle("fa-bars");
  IconoGU.classList.toggle("fa-times");
  if (window.innerWidth > 900) {
    document.querySelectorAll('.LastOne').forEach((e)=>{
    e.classList.toggle('none')
  })
  }
});

IconoUserGU.addEventListener("click", () => {
  MenuGU.classList.toggle("active");
  if (window.innerWidth > 900) {
    document.querySelectorAll('.LastOne').forEach((e)=>{
      e.classList.toggle('none')
    })
  }
  IconoGU.classList.toggle("fa-bars");
  IconoGU.classList.toggle("fa-times");
});


// GC

IconoGC.addEventListener("click", () => {
  MenuGC.classList.toggle("active");
  IconoGC.classList.toggle("fa-bars");
  IconoGC.classList.toggle("fa-times");
  if (window.innerWidth > 900) {
    document.querySelectorAll('.LastOne').forEach((e)=>{
    e.classList.toggle('none')
  })
  }
});

IconoUserGC.addEventListener("click", () => {
  MenuGC.classList.toggle("active");
  if (window.innerWidth > 900) {
    document.querySelectorAll('.LastOne').forEach((e)=>{
      e.classList.toggle('none')
    })
  }
  IconoGC.classList.toggle("fa-bars");
  IconoGC.classList.toggle("fa-times");
});

// GA

IconoGA.addEventListener("click", () => {
  MenuGA.classList.toggle("active");
  IconoGA.classList.toggle("fa-bars");
  IconoGA.classList.toggle("fa-times");
  if (window.innerWidth > 900) {
    document.querySelectorAll('.LastOne').forEach((e)=>{
    e.classList.toggle('none')
  })
  }
});

IconoUserGA.addEventListener("click", () => {
  console.log('hola')
  MenuGA.classList.toggle("active");
  if (window.innerWidth > 900) {
    document.querySelectorAll('.LastOne').forEach((e)=>{
      e.classList.toggle('none')
    })
  }
  IconoGA.classList.toggle("fa-bars");
  IconoGA.classList.toggle("fa-times");
});











if (window.innerWidth > 900) {
  document.querySelectorAll('.LastOne').forEach((e)=>{
    e.classList.add('none')
  })
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    document.querySelectorAll('.LastOne').forEach((e)=>{
      e.classList.add('none')
    })
  } else {
    document.querySelectorAll('.LastOne').forEach((e)=>{
      e.classList.remove('none')
    })
  }
}); 