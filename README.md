** CLASE 30
*** CONSIGNA
Convertir todos los botones de colores a checkbox
1. cada vez que el usuario selecciona un checkbox, se filtra por ese color, no tienen que funcionar todos los checkbox a la vez
2. Hacer que todos los checkbox funcionan a la vez.


TAREA OBLIGATORIA
- CON EL CÓDIGO DE HOY HACER QUE SE VEAN TODOS CON EL CHECKBOX DE TODOS
no es necesario que se vean todos al des-seleccionar


TAREA OPTATIVA
- Agregar el modal en la Tienda


CÓDIGO DE LA CLASE

const cards = document.querySelectorAll('.card');
const botonesFiltro = document.querySelectorAll('.filtro-boton');
const filtroSexo = document.querySelectorAll("input[type='radio']");
const filtroBusqueda = document.querySelector('#filtro-nombre');
const filtroColor = document.querySelectorAll("input[type='checkbox']");

// TAREA: hasta las 20:30
// Convertir todos los botones de colores a checkbox

// 1. Cada vez que el usuario selecciona un checkbox, se filtra por ESE color
// no tienen que funcionar todos los checkbox a la vez.

// 2. SOLO CUANDO ESO ESTE LISTO Hacer que todos los checkbox funcionen a la vez.

filtroBusqueda.oninput = () => {
  for (let card of cards) {
    const busquedaUsuarioEnMinusculas = filtroBusqueda.value.toLowerCase();
    if (card.dataset.nombre.includes(busquedaUsuarioEnMinusculas)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  }
};

for (let checkbox of filtroColor) {
  checkbox.oninput = () => {
    for (let card of cards) {
      card.classList.add('hidden');
      for (let filtro2 of filtroColor) {
        if (filtro2.checked) {
          if (filtro2.value === card.dataset.color) {
            card.classList.remove('hidden');
          }
        }
      }
    }
  };
}

// queda como tarea que se vean "todos" al hacer
// click en el checkbox de todos

// NO es necesario hacer que se vean todas las tarjetas al deseleccionar todos los checkbox 