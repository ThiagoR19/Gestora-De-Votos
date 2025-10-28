// === SELECTORES PRINCIPALES ===
const InputTitulo = document.getElementById('inputTitulo');
const InputDescripcion = document.getElementById('inputDescripcion');
const InputCategoria = document.getElementById('inputCategoria');
const InputAnio = document.getElementById('inputAnio');
const InputDivision = document.getElementById('inputDivision');

const grupos = document.querySelectorAll('.carga-proyecto-form__grupo');
const contenedorEstudiantes = grupos[0];
const contenedorProfesores = grupos[1];

const btnAgregarEstudiante = contenedorEstudiantes.querySelector('.carga-proyecto-form__btn');
const btnAgregarProfesor = contenedorProfesores.querySelector('.carga-proyecto-form__btn');

// Contenedor donde mostrar la vista previa (asegurate que exista en tu HTML)
const vistaPrevia = document.querySelector('.carga-proyecto-preview__listado-proyectos');

// === CREAMOS EL ARTICLE + ASIDE DE VISTA PREVIA ===
let previewWrapper = document.createElement('div');
previewWrapper.innerHTML = `
  <article class="proyecto-esp__article">
    <div class="proyecto-esp__article-div">
      <img id="Proyectos__article-div-img" src="./Imagenes/FotoEjemplo.png" alt="">
    </div>
    <div class="proyecto-esp__article-div">
      <div class="proyecto-esp__article-div-div">
        <h1 id="previewTitulo" class="proyecto-esp__article-div-div-h1">Título del proyecto</h1>
        <p id="previewDescripcion" class="proyecto-esp__article-div-div-p">Descripción breve del proyecto...</p>
        <button class="proyecto-esp__article-div-div-button">VOTAR</button>
      </div>
      <div class="proyecto-esp__article-div-div">
        <div class="proyecto-esp__article-div-div-div">
          <h2 class="proyecto-esp__article-div-div-div-div-h2">Categoría</h2>
          <p id="previewCategoria" class="proyecto-esp__article-div-div-div-div-p">---</p>
        </div>
        <div class="proyecto-esp__article-div-div-div">
          <h2 class="proyecto-esp__article-div-div-div-div-h2">Curso</h2>
          <p id="previewCurso" class="proyecto-esp__article-div-div-div-div-p">---</p>
        </div>
      </div>
    </div>
  </article>
  <aside class="aside">
    <div class="aside__div">
      <h2 class="aside__div-h2">Estudiantes</h2>
      <p id="previewEstudiantes" class="aside__div-p">Sin estudiantes</p>
    </div>
    <div class="aside__div">
      <h2 class="aside__div-h2">Profesores</h2>
      <p id="previewProfesores" class="aside__div-p">Sin profesores</p>
    </div>
  </aside>
`;
vistaPrevia.appendChild(previewWrapper);

// === REFERENCIAS A LOS ELEMENTOS DE PREVIEW ===
const previewTitulo = previewWrapper.querySelector('#previewTitulo');
const previewDescripcion = previewWrapper.querySelector('#previewDescripcion');
const previewCategoria = previewWrapper.querySelector('#previewCategoria');
const previewCurso = previewWrapper.querySelector('#previewCurso');
const previewEstudiantes = previewWrapper.querySelector('#previewEstudiantes');
const previewProfesores = previewWrapper.querySelector('#previewProfesores');

// === UTILIDADES ===
function capitalizarTexto(texto) {
  if (!texto) return '';
  return texto
    .toLowerCase()
    .split(' ')
    .filter(Boolean)
    .map(p => p[0].toUpperCase() + p.slice(1))
    .join(' ');
}

// Toma todos los inputs dentro de un contenedor y devuelve sus valores capitalizados y filtrados
function valoresInputsDel(contenedor) {
  return [...contenedor.querySelectorAll('.carga-proyecto-form__input')]
    .map(i => capitalizarTexto(i.value.trim()))
    .filter(v => v !== '');
}

// === FUNCIONES DE ACTUALIZACIÓN ===
function actualizarCamposBase() {
  previewTitulo.textContent = InputTitulo && InputTitulo.value.trim() ? InputTitulo.value : 'Título del proyecto';
  previewDescripcion.textContent = InputDescripcion && InputDescripcion.value.trim() ? InputDescripcion.value : 'Descripción breve del proyecto...';
  previewCategoria.textContent = InputCategoria && InputCategoria.value.trim() ? InputCategoria.value : '---';
  const cursoTxt = `${InputAnio && InputAnio.value ? InputAnio.value : ''} ${InputDivision && InputDivision.value ? InputDivision.value : ''}`.trim();
  previewCurso.textContent = cursoTxt || '---';
}

function actualizarListas() {
  const estudiantes = valoresInputsDel(contenedorEstudiantes);
  const profesores = valoresInputsDel(contenedorProfesores);

  previewEstudiantes.textContent = estudiantes.length ? estudiantes.join(' - ') : 'Sin estudiantes';
  previewProfesores.textContent = profesores.length ? profesores.join(' - ') : 'Sin profesores';
}

function actualizarVistaCompleta() {
  actualizarCamposBase();
  actualizarListas();
}

// === AGREGAR EVENTOS A INPUTS EXISTENTES ===
function attachInputsEvents(contenedor) {
  const inputs = contenedor.querySelectorAll('.carga-proyecto-form__input');
  inputs.forEach(input => {
    // Por si acaso, removemos listeners previos antes de agregar
    input.removeEventListener('input', actualizarVistaCompleta);
    input.addEventListener('input', actualizarVistaCompleta);
  });
}

// Llamada inicial para los inputs ya presentes en HTML
attachInputsEvents(contenedorEstudiantes);
attachInputsEvents(contenedorProfesores);

// === FUNCIONES PARA CREAR NUEVOS INPUTS DINÁMICOS ===
function crearInputYAdjuntar(contenedor, placeholderTexto) {
  const nuevoInput = document.createElement('input');
  nuevoInput.type = 'text';
  nuevoInput.className = 'carga-proyecto-form__input';
  nuevoInput.placeholder = placeholderTexto;

  // Insertar antes del botón (asumimos que el botón ya existe)
  const boton = contenedor.querySelector('.carga-proyecto-form__btn');
  contenedor.insertBefore(nuevoInput, boton);

  // Agregar evento
  nuevoInput.addEventListener('input', actualizarVistaCompleta);

  // Actualizar vista tras agregar
  actualizarVistaCompleta();

  return nuevoInput;
}

// === BOTONES PARA AGREGAR (y prevenimos submit si están en form) ===
btnAgregarEstudiante.addEventListener('click', (e) => {
  if (e) e.preventDefault();
  crearInputYAdjuntar(contenedorEstudiantes, 'Nombre y apellido del estudiante');
});

btnAgregarProfesor.addEventListener('click', (e) => {
  if (e) e.preventDefault();
  crearInputYAdjuntar(contenedorProfesores, 'Nombre y apellido del profesor');
});

// === EVENTOS PARA CAMPOS PRINCIPALES ===
if (InputTitulo) InputTitulo.addEventListener('input', actualizarCamposBase);
if (InputDescripcion) InputDescripcion.addEventListener('input', actualizarCamposBase);
if (InputCategoria) InputCategoria.addEventListener('input', actualizarCamposBase);
if (InputAnio) InputAnio.addEventListener('input', actualizarCamposBase);
if (InputDivision) InputDivision.addEventListener('input', actualizarCamposBase);

// === LLAMADA INICIAL PARA RENDERIZAR LO QUE YA HAYA EN LOS INPUTS ===
actualizarVistaCompleta();


const cargarProyecto = document.getElementById('CargarProyecto')

let idCategoria

switch (previewCategoria.textContent) {
  case 
}

cargarProyecto.addEventListener('click', () => {
  fetch(`${localizacion}?action=cargarProyecto`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre: previewTitulo.textContent,
      anio: InputAnio.value,
      descpripcion: previewDescripcion.textContent,
      idCategoria: idCategoria,
      division: InputDivision.value
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    });
})