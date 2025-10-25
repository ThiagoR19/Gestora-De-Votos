function determinarHeader(main) {
    console.log("holaaaaaaaaaaaaaaaaaaaaaaaa")
  const HeaderGS = document.getElementById("HeaderGS");
  const HeaderGU = document.getElementById("HeaderGU");
  const HeaderGC = document.getElementById("HeaderGC");
  const HeaderGA = document.getElementById("HeaderGA");

  const HeaderHS = document.getElementById("HeaderHS");
  const HeaderHU = document.getElementById("HeaderHU");
  const HeaderHC = document.getElementById("HeaderHC");
  const HeaderHA = document.getElementById("HeaderHA");

  let caso = null;

  // Oculta todos los headers al inicio
  const ocultarHeaders = (...headers) => headers.forEach(h => h.classList.add("none"));
  const userStr = localStorage.getItem("usuario");
  const usuario = JSON.parse(userStr);
  if (main === "Home") {
    ocultarHeaders(HeaderGS, HeaderGU, HeaderGC, HeaderGA);

    if (userStr) {
        console.log (usuario)
        switch (usuario.tipo) {
            case 1:
                caso = "HeaderHU";
                ocultarHeaders(HeaderHS, HeaderHC, HeaderHA, HeaderGA, HeaderGU, HeaderGC, HeaderGS);
                HeaderHU.classList.remove("none")
                break;

            case 2:
                caso = "HeaderHC";
                ocultarHeaders(HeaderHS, HeaderHU, HeaderHA , HeaderGA, HeaderGU, HeaderGC, HeaderGS);
                HeaderHC.classList.remove("none")
                break;

            case 3:
                caso = "HeaderHA";
                ocultarHeaders(HeaderHS, HeaderHU, HeaderHC, HeaderGA, HeaderGU, HeaderGC, HeaderGS);
                HeaderHA.classList.remove("none");
                break;

            default:
                alert("Tipo de usuario no encontrado");
        }
    } 
    else {
        caso = "HeaderHS";
        HeaderHS.classList.remove("none")
        console.log("aca")
        ocultarHeaders(HeaderHU, HeaderHC, HeaderHA);
    }

    return caso;
  }
  else{
    if (userStr) {
      switch (usuario.tipo) {
        case 1:
          caso = "HeaderGU";
          ocultarHeaders(HeaderGS, HeaderGC, HeaderGA);
          HeaderGU.classList.remove("none");
          console.log("se hizo el 1")
          break;

        case 2:
          caso = "HeaderGC";
          ocultarHeaders(HeaderGS, HeaderGU, HeaderGA);
          HeaderGC.classList.remove("none");
          console.log("se hizo el 2")
          break;

        case 3:
          caso = "HeaderGA";
          ocultarHeaders(HeaderGS, HeaderGU, HeaderGC);
          HeaderGA.classList.remove("none");
          console.log("se hizo el 3")
          break;

        default:
          alert("Tipo de usuario no encontrado");
          break;
      }
    } 
    else {
      caso = "HeaderGS";
      HeaderGS.classList.remove("none");
      console.log("se hizo el 4")
      ocultarHeaders(HeaderGU, HeaderGC, HeaderGA);
    }
    

  }

  
}
