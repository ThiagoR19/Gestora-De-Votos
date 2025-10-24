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
  const ocultarHeaders = (...headers) => headers.forEach(h => h.style.display = "none");

  if (main === "mainHome") {
    ocultarHeaders(HeaderGS, HeaderGU, HeaderGC, HeaderGA);

    const userStr = localStorage.getItem("usuario");

    if (userStr) {
        const usuario = JSON.parse(userStr);
        console.log (usuario)
        switch (usuario.tipo) {
            case 1:
                caso = "HeaderHU";
                ocultarHeaders(HeaderHS, HeaderHC, HeaderHA);
                HeaderHU.style.display = "flex";
                break;

            case 2:
                caso = "HeaderHC";
                ocultarHeaders(HeaderHS, HeaderHU, HeaderHA);
                HeaderHC.style.display = "flex";
                break;

            case 3:
                caso = "HeaderHA";
                ocultarHeaders(HeaderHS, HeaderHU, HeaderHC);
                HeaderHA.style.display = "flex";
                break;

            default:
                alert("Tipo de usuario no encontrado");
        }
    } 
    else {
        caso = "HeaderHS";
        HeaderHS.style.display = "flex";
        console.log("aca")
        ocultarHeaders(HeaderHU, HeaderHC, HeaderHA);
    }

    return caso;
  }

  // Si no es mainHome
  const userStr = localStorage.getItem("usuario");

  if (userStr) {
    const usuario = JSON.parse(userStr);

    switch (usuario.tipo) {
      case 1:
        caso = "HeaderGU";
        ocultarHeaders(HeaderGS, HeaderGC, HeaderGA);
        HeaderGU.style.display = "flex";
        break;

      case 2:
        caso = "HeaderGC";
        ocultarHeaders(HeaderGS, HeaderGU, HeaderGA);
        HeaderGC.style.display = "flex";
        break;

      case 3:
        caso = "HeaderGA";
        ocultarHeaders(HeaderGS, HeaderGU, HeaderGC);
        HeaderGA.style.display = "flex";
        break;

      default:
        alert("Tipo de usuario no encontrado");
    }
  } else {
    caso = "HeaderGS";
    HeaderGS.style.display = "flex";
    ocultarHeaders(HeaderGU, HeaderGC, HeaderGA);
  }
  
  return caso;
}
