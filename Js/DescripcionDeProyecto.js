function EstablecerEstrellas(CantEstrellas,CantReseñas){
    let estrellasCompletas = Math.floor(CantEstrellas / CantReseñas);
    let estrellasMedia = (CantEstrellas / CantReseñas) - estrellasCompletas >= 0.5 ? 1 : 0;
    let estrellas =["","","","",""]
    for(let i=0; i<5; i++){
        if ((estrellasCompletas-1)>=0){
            estrellas[i]=""
            estrellasCompletas-=1
        }
        else{
           
            if (estrellasMedia!=0){
                estrellas[i]="media_estrella"
                estrellasMedia = 0
            }
            else{
                estrellas[i]="img_blanco_negro"
            }
        }
    }
    return estrellas
}

function instanciarEstrellas(proyecto) {
  const ids = ['estrella1','estrella2','estrella3','estrella4','estrella5'];

  // map -> getElementById, filter(Boolean) elimina nulls
  const todasEstrellas = ids
    .map(id => document.getElementById(id))
    .filter(Boolean);

  // Si no hay elementos, salimos (opcional)
  if (todasEstrellas.length === 0) return;

  // Añadimos el listener de forma segura
  todasEstrellas.forEach(estrella => {
    estrella._onOver = (e) => reColoreado(e, estrella);
    estrella._onLeave = (e) => quitadoReColoreado(e, estrella);
    estrella._onClick = (e) => calificado(e, estrella, todasEstrellas,proyecto)

    estrella.addEventListener('mouseover', estrella._onOver);
    estrella.addEventListener('mouseleave', estrella._onLeave);
    estrella.addEventListener('click', estrella._onClick);
  });
}

function reColoreado(e,estrella){
    let pos = estrella.getAttribute('value')
    for(let i=pos; i>=1; i--){
        if ((i-1)>=0){
            document.getElementById(`estrella${i}`).classList.remove("img_blanco_negro")
        }
        pos-=1
    }
}
function quitadoReColoreado(e,estrella){
    let pos = estrella.getAttribute('value')
    for(let i=pos; i>=1; i--){
        if ((i-1)>=0){
            document.getElementById(`estrella${i}`).classList.add("img_blanco_negro")
        }
        pos-=1
    }
}
async function calificado(e, estrella, todasEstrellas, proyectoid) {
  // 1️⃣ Mostrar valor por consola
  const valor = estrella.getAttribute('value');
  // 2️⃣ Desactivar TODOS los listeners (no solo de la estrella clickeada)
  todasEstrellas.forEach(est => {
    if (est._onOver) {
      est.removeEventListener('mouseover', est._onOver);
      est._onOver = null;
    }
    if (est._onLeave) {
      est.removeEventListener('mouseleave', est._onLeave);
      est._onLeave = null;
    }
    if (est._onClick) {
      est.removeEventListener('click', est._onClick);
      est._onClick = null;
    }
    // Opcional: cursor visualmente desactivado
    est.style.cursor = "default";
  });

  // 3️⃣ Asegurar que queden iluminadas hasta la calificación seleccionada
  for (let i = 1; i <= 5; i++) {
    const est = document.getElementById(`estrella${i}`);
    if (i <= valor) {
      est.classList.remove("img_blanco_negro");
    } else {
      est.classList.add("img_blanco_negro");
    }
  }

  try{
    let userData = JSON.parse(localStorage.getItem("usuario"));
    if (userData) {
      fetch(`${localizacion}/api/index.php?recurso=Estrellas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        action: "calificar",
        calificacion: valor,
        userid: userData.id,
        proyecto:proyectoid
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'ok') {
          mostrarTexto("Calificacion agregada correctamente ✅😄");
          const miSonido = new Audio('Sonidos/Check.mp3');
          miSonido.play();
        }
      })
    } else {
      mostrarTexto("Inicie sesion para calificar ❌");
      const miSonido = new Audio('Sonidos/error.mp3');
      miSonido.play();
    }
  }
  catch(err){
    console.error(err)
  }
}
function iluminarEstrellas(numero) {
  
  numero = Math.max(1, Math.min(numero, 5));

  for (let i = 1; i <= numero; i++) {
    const estrella = document.getElementById(`estrella${i}`);
    if (estrella) {
      estrella.classList.remove("img_blanco_negro");
    }
  }
}