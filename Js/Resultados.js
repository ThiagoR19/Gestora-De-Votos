function mostrarResultados(data){
  const contenedorResultados = document.querySelector(".section__article-div-container");
  // console.log(data)
  let proyectoMasVotado = null;
  let maxVotos = -Infinity;

  data.forEach(proyecto => {
    if (proyecto.cantVotos > maxVotos) {
      maxVotos = proyecto.cantVotos;
      proyectoMasVotado = proyecto;
    }
  });
  // console.log(proyectoMasVotado)
  if (!contenedorResultados) {
    console.error("No se encontró nada");
  } 
  else {
    contenedorResultados.innerHTML = "";

    for (let año = 2020; año <= 2030; año++) {
      let nombreProyecto = "Sin registrar";
      let cantidadVotos = "Sin registrar";
      let imagen = "./Imagenes/Image-not-found.png"
      
      if (año<2025){
        nombreProyecto = "Sin registrar";
        cantidadVotos = "Sin registrar";
        imagen = "./Imagenes/Image-not-found.png"
      }
      else if (año === 2025) {
        nombreProyecto = proyectoMasVotado.nombre;
        cantidadVotos = proyectoMasVotado.cantVotos;
        imagen = `./Js/imagenes/${proyectoMasVotado.imagenes[0]}`

      } else if (año > 2025) {
        nombreProyecto = "Próximamente";
        cantidadVotos = "Próximamente";
        imagen = "./Imagenes/Image-not-found.png"
      }

      const tarjeta = document.createElement("div");
      tarjeta.classList.add("section__article-div");
      tarjeta.innerHTML = `
        <div class="section__article-div-div">
          <p class="section__article-div-div-p">
            <span class="section__article-div-div-p-span">${año}</span>
            <span class="section__article-div-div-p-span-linea"></span>
            <span class="section__article-div-div-p-span">${nombreProyecto}</span>
          </p>
          <img src="${imagen}" alt="${nombreProyecto}" class="section__article-div-div-img">
          <p class="section__article-div-div-p">Votos: ${cantidadVotos}</p>
        </div>
      `;
      contenedorResultados.appendChild(tarjeta);
    }

    let arrastrando = false;
    let inicioX = 0;
    let scrollInicial = 0;

    const empezarArrastre = (x) => {
      arrastrando = true;
      inicioX = x - contenedorResultados.offsetLeft;
      scrollInicial = contenedorResultados.scrollLeft;
      contenedorResultados.classList.add("active");
    };

    const terminarArrastre = () => {
      arrastrando = false;
      contenedorResultados.classList.remove("active");
    };

    const moverArrastre = (x) => {
      if (!arrastrando) return;
      const desplazamiento = (x - contenedorResultados.offsetLeft - inicioX) * 1.5;
      contenedorResultados.scrollLeft = scrollInicial - desplazamiento;
    };

    contenedorResultados.addEventListener("mousedown", (e) => empezarArrastre(e.pageX));
    contenedorResultados.addEventListener("mouseup", terminarArrastre);
    contenedorResultados.addEventListener("mouseleave", terminarArrastre);
    contenedorResultados.addEventListener("mousemove", (e) => moverArrastre(e.pageX));


    contenedorResultados.addEventListener("touchstart", (e) => empezarArrastre(e.touches[0].pageX), { passive: true });
    contenedorResultados.addEventListener("touchend", terminarArrastre);
    contenedorResultados.addEventListener("touchmove", (e) => {
      if (!arrastrando) return;
      moverArrastre(e.touches[0].pageX);
    }, { passive: false });


    const centrarAño = () => {
      const anchoTarjeta = 370 + 48; 
      const añoInicio = 2020;
      const añoFoco = 2025;
      const indice = añoFoco - añoInicio;
      const posicion = anchoTarjeta * indice - (window.innerWidth / 2) + (anchoTarjeta / 2);

      contenedorResultados.scrollLeft = posicion;
      setTimeout(() => contenedorResultados.scrollLeft = posicion, 100);
      setTimeout(() => contenedorResultados.scrollLeft = posicion, 250);
    };

    window.addEventListener("load", centrarAño);
  }


}