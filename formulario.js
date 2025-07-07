const formulario = document.querySelector("#form");

formulario.onsubmit = function (e) {
  e.preventDefault(); // ✅ Corregido prevent() → preventDefault()

  const n = formulario.elements[0];
  const ed = formulario.elements[1];
  const na = formulario.elements[2];

  const nombre = n.value;
  const edad = ed.value;
  const nacionalidad = na.options[na.selectedIndex].value;

  // Validaciones
  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    ed.classList.add("error");
  }

  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

function agregarInvitado(nombre, edad, nacionalidad) {
  const nacionalidades = {
    ar: "Argentina",
    mx: "Mexicana",
    vnzl: "Venezolana",
    per: "Peruana"
  };

  const lista = document.getElementById("lista-de-invitados");

  const elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista"); // ✅ Corregido: .add en lugar de .added
  lista.appendChild(elementoLista);

  // ✅ Evitamos repetir estructura con una función
  function crearElemento(descripcion, valor) {
    const span = document.createElement("span");
    const input = document.createElement("input");
    const br = document.createElement("br");
    span.textContent = `${descripcion}: `;
    input.value = valor;
    elementoLista.appendChild(span);
    elementoLista.appendChild(input);
    elementoLista.appendChild(br);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidades[nacionalidad]);

  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";

  const corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    elementoLista.remove(); // ✅ Elimina todo el bloque del invitado
  };
}
