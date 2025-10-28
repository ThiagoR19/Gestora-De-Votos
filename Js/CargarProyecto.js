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

const previewTitulo = previewWrapper.querySelector('#previewTitulo');
const previewDescripcion = previewWrapper.querySelector('#previewDescripcion');
const previewCategoria = previewWrapper.querySelector('#previewCategoria');
const previewCurso = previewWrapper.querySelector('#previewCurso');
const previewEstudiantes = previewWrapper.querySelector('#previewEstudiantes');
const previewProfesores = previewWrapper.querySelector('#previewProfesores');

function capitalizarTexto(texto) {
  if (!texto) return '';
  return texto
    .toLowerCase()
    .split(' ')
    .filter(Boolean)
    .map(p => p[0].toUpperCase() + p.slice(1))
    .join(' ');
}

function valoresInputsDel(contenedor) {
  return [...contenedor.querySelectorAll('.carga-proyecto-form__input')]
    .map(i => capitalizarTexto(i.value.trim()))
    .filter(v => v !== '');
}

function actualizarCamposBase() {
  previewTitulo.textContent = InputTitulo && InputTitulo.value.trim() ? InputTitulo.value : 'Título';
  previewDescripcion.textContent = InputDescripcion && InputDescripcion.value.trim() ? InputDescripcion.value : 'Descripción';
  previewCategoria.textContent =
  InputCategoria && InputCategoria.value.trim()
    ? InputCategoria.options[InputCategoria.selectedIndex].text
    : '---';

  const cursoTxt = `${InputAnio && InputAnio.value ? InputAnio.value : ''} ${InputDivision && InputDivision.value ? InputDivision.value : ''}`.trim();
  previewCurso.textContent = cursoTxt || '---';
}

let estudiantesArray = []
let profesoresArray = []

function actualizarListas() {
  const estudiantes = valoresInputsDel(contenedorEstudiantes);
  const profesores = valoresInputsDel(contenedorProfesores);

  previewEstudiantes.textContent = estudiantes.length ? estudiantes.join(' - ') : 'Sin estudiantes';
  previewProfesores.textContent = profesores.length ? profesores.join(' - ') : 'Sin profesores';

  estudiantesArray = estudiantes
  profesoresArray = profesores
}

function actualizarVistaCompleta() {
  actualizarCamposBase();
  actualizarListas();
}

function attachInputsEvents(contenedor) {
  const inputs = contenedor.querySelectorAll('.carga-proyecto-form__input');
  inputs.forEach(input => {
    input.removeEventListener('input', actualizarVistaCompleta);
    input.addEventListener('input', actualizarVistaCompleta);
  });
}

attachInputsEvents(contenedorEstudiantes);
attachInputsEvents(contenedorProfesores);

function crearInputYAdjuntar(contenedor, placeholderTexto) {
  const nuevoInput = document.createElement('input');
  nuevoInput.type = 'text';
  nuevoInput.className = 'carga-proyecto-form__input';
  nuevoInput.placeholder = placeholderTexto;

  const boton = contenedor.querySelector('.carga-proyecto-form__btn');
  contenedor.insertBefore(nuevoInput, boton);

  nuevoInput.addEventListener('input', actualizarVistaCompleta);

  actualizarVistaCompleta();

  return nuevoInput;
}

btnAgregarEstudiante.addEventListener('click', () => {
  crearInputYAdjuntar(contenedorEstudiantes, 'Nombre y apellido del estudiante');
});

btnAgregarProfesor.addEventListener('click', () => {
  crearInputYAdjuntar(contenedorProfesores, 'Nombre y apellido del profesor');
});

if (InputTitulo) InputTitulo.addEventListener('input', actualizarCamposBase);
if (InputDescripcion) InputDescripcion.addEventListener('input', actualizarCamposBase);
if (InputCategoria) InputCategoria.addEventListener('input', actualizarCamposBase);
if (InputAnio) InputAnio.addEventListener('input', actualizarCamposBase);
if (InputDivision) InputDivision.addEventListener('input', actualizarCamposBase);

actualizarVistaCompleta();

const cargarProyecto = document.getElementById('CargarProyecto')

cargarProyecto.addEventListener('click', () => {
  fetch(`${localizacion}?action=cargarProyecto`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre: previewTitulo.textContent,
      anio: InputAnio.value,
      descripcion: previewDescripcion.textContent,
      idCategoria: parseInt(InputCategoria.value) || null,
      division: InputDivision.value,
      estudiantes: estudiantesArray,
      profesores: profesoresArray,
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  });
})