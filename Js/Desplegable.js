// Variables Generales

const IconoGS = document.getElementById("IconoGS");
const IconoGU = document.getElementById("IconoGU");
const IconoGC = document.getElementById("IconoGC");
const IconoGA = document.getElementById("IconoGA");

const MenuGS = document.getElementById("MenuGS");
const MenuGU = document.getElementById("MenuGU");
const MenuGC = document.getElementById("MenuGC");
const MenuGA = document.getElementById("MenuGA");

const IconoUserGU = document.getElementById("IconoUserGU");
const IconoUserGC = document.getElementById("IconoUserGC");
const IconoUserGA = document.getElementById("IconoUserGA");

// Variables Del Home

const IconoHS = document.getElementById("IconoHS");
const IconoHU = document.getElementById("IconoHU");
const IconoHC = document.getElementById("IconoHC");
const IconoHA = document.getElementById("IconoHA");
const MenuHS = document.getElementById("MenuHS");
const MenuHU = document.getElementById("MenuHU");
const MenuHC = document.getElementById("MenuHC");
const MenuHA = document.getElementById("MenuHA");
const IconoUserHU = document.getElementById("IconoUserHU");
const IconoUserHC = document.getElementById("IconoUserHC");
const IconoUserHA = document.getElementById("IconoUserHA");

// Home

//HS

IconoHS.addEventListener("click", () => {
  MenuHS.classList.toggle("active");
  IconoHS.classList.toggle("visible-forced");
  IconoHS.classList.toggle("fa-times");
  IconoHS.classList.toggle("fa-bars");
});

//HU

IconoHU.addEventListener("click", () => {
  MenuHU.classList.toggle("active");
  IconoHU.classList.toggle("visible-forced");
  IconoHU.classList.toggle("fa-times");
  IconoHU.classList.toggle("fa-bars");
});

IconoUserHU.addEventListener("click", () => {
  MenuHU.classList.toggle("active");
  IconoHU.classList.toggle("fa-bars");
  IconoHU.classList.toggle("fa-times");
  IconoHU.classList.toggle("visible-forced");
});

//HC

IconoHC.addEventListener("click", () => {
  MenuHC.classList.toggle("active");
  IconoHC.classList.toggle("visible-forced");
  IconoHC.classList.toggle("fa-times");
  IconoHC.classList.toggle("fa-bars");
});

IconoUserHC.addEventListener("click", () => {
  MenuHC.classList.toggle("active");
  IconoHC.classList.toggle("fa-bars");
  IconoHC.classList.toggle("fa-times");
  IconoHC.classList.toggle("visible-forced");
});

//HA

IconoHA.addEventListener("click", () => {
  MenuHA.classList.toggle("active");
  IconoHA.classList.toggle("visible-forced");
  IconoHA.classList.toggle("fa-times");
  IconoHA.classList.toggle("fa-bars");
});

IconoUserHA.addEventListener("click", () => {
  MenuHA.classList.toggle("active");
  IconoHA.classList.toggle("fa-bars");
  IconoHA.classList.toggle("fa-times");
  IconoHA.classList.toggle("visible-forced");
});

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

// Comprobaciones del ancho

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