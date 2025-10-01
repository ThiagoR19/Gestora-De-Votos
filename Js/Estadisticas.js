const proyectos = [
  { especialidad: "Electro mecánica", votos: 120 },
  { especialidad: "Construcciones", votos: 80 },
  { especialidad: "Economía", votos: 200 },
  { especialidad: "Informática", votos: 150 },
  { especialidad: "Química", votos: 50 },
  { especialidad: "asdasd", votos: 230 },
  { especialidad: "asdasd", votos: 230 }
];

const chart = document.getElementById("chart");
const xAxis = document.getElementById("x-axis");
const yAxis = document.getElementById("y-axis");

const maxVotos = Math.max(...proyectos.map(p => p.votos));
const step = 50;
const maxY = Math.ceil(maxVotos / step) * step;

for (let y = maxY; y >= 0; y -= step) {
  const label = document.createElement("div");
  label.classList.add("y-label");
  label.textContent = y;
  yAxis.appendChild(label);

  const grid = document.createElement("div");
  grid.classList.add("grid-line");
  grid.style.bottom = (y / maxY * 100) + "%";
  chart.appendChild(grid);
}

proyectos.forEach(p => {
  const bar = document.createElement("div");
  bar.classList.add("bar");
  bar.style.height = (p.votos / maxY * 100) + "%";
  bar.title = `${p.especialidad}: ${p.votos} votos`;
  chart.appendChild(bar);

  const label = document.createElement("div");
  label.classList.add("bar-label");
  label.textContent = p.especialidad;
  xAxis.appendChild(label);
});