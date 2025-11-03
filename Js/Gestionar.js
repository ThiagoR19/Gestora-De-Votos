async function MostrarCoordinadores(){
    try{
        const CoordinadoresContenedor = document.getElementById("CoordinadoresContenedor")
        const response = await fetch (`${localizacion}/api/index.php?recurso=Coordinadores`,{
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        data = await response.json()

        contador = 0
        console.log (data)
        if (data.success == true){
            data.correos.forEach(element => {
                contador += 1
                CoordinadoresContenedor.innerHTML +=`
                    <div class="coordinador">
                        <div class="coordinador__info">
                        <div class="coordinador__avatar"><i class="fa-regular fa-user"></i></div>
                        <div class="coordinador__detalle">
                            <div class="coordinador__datos">
                            <span class="coordinador__email" id="Correo${contador}">${element.Correo}</span>
                            </div>
                        </div>
                        </div>
                        <div class="coordinador__acciones">
                        <button class="btn btn--delete" id="Delete${contador}"><i class="fa-regular fa-trash-can"></i></button>
                        <button class="btn btn--edit" id="Editar${contador}"><i class="fa-solid fa-pen"></i></button>
                        </div>
                    </div>
                `
                document.getElementById(`Delete${contador}`).addEventListener("click", () => Deletear(contador));
                document.getElementById(`Editar${contador}`).addEventListener("click", () => Editar(contador));
            });
        }
        else{

        }
        

    }
    catch (error) {
        console.error("❌ Eror en fetch:", error);
    }
}

async function Deletear(id){
    correo = document.getElementById(`Correo${id}`).textContent
    try{
        response = await fetch(`${localizacion}/api/index.php?recurso=Coordinadores`,{
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                Correo: correo 
            })
        })
        data = await response.json()

        if (data.success == true || data.success=="ok"){
            console.log (data.message)
            MostrarCoordinadores()
        }
        else{
            console.log (data.message)
        }
    }
    catch (error) {
        console.error("❌ Eror en fetch:", error);
    }
}
function Editar(id){

}