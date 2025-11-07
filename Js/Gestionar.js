const btnSubmit = document.getElementById("btnSubmitGestionar")
btnSubmit.addEventListener("click", (event) => {
    event.preventDefault()
    Agregar()
});
async function MostrarCoordinadores(){
    const input = document.getElementById("Input")
    input.textContent = ""
    input.value = ""
    try{
        const CoordinadoresContenedor = document.getElementById("CoordinadoresContenedor")
        CoordinadoresContenedor.innerHTML= ""
        const response = await fetch (`${localizacion}/api/index.php?recurso=Coordinadores`,{
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        data = await response.json()

        
        // console.log (data)
        if (data.success == true){
            data.correos.forEach((element, index) => {
                let contador = index + 1; 
                CoordinadoresContenedor.insertAdjacentHTML("beforeend", `
                    <div class="coordinador">
                        <div class="coordinador__info">
                        <div class="coordinador__avatar"><i class="fa-regular fa-user"></i></div>
                        <div class="coordinador__detalle">
                            <div class="coordinador__datos">
                            <span class="coordinador__email" id="Correo${contador}">${element.Correo}</span>
                            <input type="email" id="NuevoCorreo${contador}" class="form__input2" placeholder="Ingrese Un Nuevo Correo" value="${element.Correo}">
                            </div>
                        </div>
                        </div>
                        <div class="coordinador__acciones">
                        <button class="btn btn--delete" id="Delete${contador}"><i class="fa-regular fa-trash-can"></i></button>
                        <button class="btn btn--check" id="Check${contador}"><i class="fa-solid fa-check"></i></button>
                        <button class="btn btn--edit" id="Editar${contador}"><i class="fa-solid fa-pen"></i></button>
                        
                        </div>
                    </div>
                `);

                document.getElementById(`Check${contador}`).classList.add("none")
                document.getElementById(`NuevoCorreo${contador}`).classList.add("none")

                document.getElementById(`Delete${contador}`).addEventListener("click", () => Deletear(contador));
                document.getElementById(`Editar${contador}`).addEventListener("click", () => MostrarEdicion(contador));
                document.getElementById(`Check${contador}`).addEventListener("click", () => Editar(contador,element.id));
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
        // console.log (data)
        if (data.success == true || data.success=="ok"){
            // console.log (data.message)
            MostrarCoordinadores()
            
        }
        else{
            // console.log (data.message)
        }
        
    }
    catch (error) {
        console.error("❌ Eror en fetch:", error);
    }
}
function MostrarEdicion(id){
    const checkG = document.getElementById(`Check${id}`)
    const NuevoCorreoG = document.getElementById(`NuevoCorreo${id}`)

    checkG.classList.toggle("none")
    NuevoCorreoG.classList.toggle("none")

}
async function Editar(id,idReal){

    correo = document.getElementById(`NuevoCorreo${id}`).value
    try{
        response = await fetch(`${localizacion}/api/index.php?recurso=Coordinadores`,{
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                Correo: correo,
                id: idReal
            })
        })
        data = await response.json()
        // console.log (data)
        if (data.success == true || data.success=="ok" || data==undefined){
            // console.log (data.message)
            MostrarCoordinadores()
            
        }
    }
    catch (error) {
        console.error("❌ Eror en fetch:", error);
    }
}
async function Agregar(){
    const Correo = document.getElementById("Input").value
    try{
        response = await fetch(`${localizacion}/api/index.php?recurso=Coordinadores`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                Correo: Correo
            })
        })
        data = await response.json()
        // console.log (data)
        if (data.success == "ok" || data.success==true){
            MostrarCoordinadores()
        }
        else{
            // console.log(data)
        }
        
    }
    catch (error) {
        console.error("❌ Eror en fetch:", error);
    }
}