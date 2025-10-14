function EstablecerEstrellas(CantEstrellas,CantReseñas){
    console.log(CantEstrellas)
    console.log(CantReseñas)
    let estrellasCompletas = Math.floor(CantEstrellas / CantReseñas);
    let estrellasMedia = (CantEstrellas / CantReseñas) - estrellasCompletas >= 0.5 ? 1 : 0;
    console.log(estrellasCompletas)
    console.log(estrellasMedia)
    let estrellas =["","","","",""]
    for(let i=0; i<5; i++){
        if ((estrellasCompletas-1)>=0){
            estrellas[i]=""
            estrellasCompletas-=1
        }
        else{
           
            if (estrellasMedia!=0){
                estrellas[i]="img_mitad"
                estrellasMedia = 0
            }
            else{
                estrellas[i]="img_blanco_negro"
            }
        }
    }
    console.log(estrellas)
    return estrellas
}
function instanciarEstrellas() {
  const ids = ['estrella1','estrella2','estrella3','estrella4','estrella5'];

  // map -> getElementById, filter(Boolean) elimina nulls
  const todasEstrellas = ids
    .map(id => document.getElementById(id))
    .filter(Boolean);

  // Si no hay elementos, salimos (opcional)
  if (todasEstrellas.length === 0) return;

  // Añadimos el listener de forma segura
  todasEstrellas.forEach(estrella => {
    // Si tu recoloreado necesita el event:
    estrella.addEventListener('mousemove', (e) => recoloreado(e, estrella));
    console.log("hola")
    // Si recoloreado no necesita parámetros, podés usar:
    // estrella.addEventListener('mousemove', recoloreado);
  });
}

function recoloreado(e,estrella){
    console.log("hola")
}
