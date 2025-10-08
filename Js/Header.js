const HeaderLogueado = document.getElementById("Header");
const HeaderNoLogueado = document.getElementById("HeaderNoLogin");

console.log(localStorage.getItem("usuario"))
if (localStorage.getItem("usuario")) {
    HeaderLogueado.style.display = "none";
    HeaderNoLogueado.style.display = "flex";
}
else{
    HeaderLogueado.style.display = "flex";
    HeaderNoLogueado.style.display = "none";
}