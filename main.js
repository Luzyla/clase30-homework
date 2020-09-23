
const cards = document.querySelectorAll(".card")
const filtroBusqueda = document.getElementById("filtro-nombre")
console.log('filtro de busqueda por nombre', filtroBusqueda)

const filtroColor = document.querySelectorAll(".boton-color")
console.log('filtro de busqueda por color', filtroColor)

const filtroSexo = document.querySelectorAll(".filtro-sexo")
console.log('filtro de busqueda por sexo', filtroSexo)



// FILTRO POR INPUT búsqueda nombre
filtroBusqueda.oninput = () => {
    for (let card of cards) {
        const busquedaUsuario = filtroBusqueda.value.toLowerCase()
        const nameCard = card.dataset.nombre
        console.log(busquedaUsuario)
        console.log(nameCard)

        if (nameCard.includes(busquedaUsuario)) {
            card.classList.remove("hidden")
        }
        else {
            card.classList.add("hidden")
        }
        
    }
}


// FILTRO ex-BOTONES ahora CHECKBOX
for (let checkbox of filtroColor) {
    checkbox.onclick = () => {
        for (let card of cards) {
            card.classList.add("hidden")
            if (checkbox.value === card.dataset.color) {
                card.classList.remove("hidden")
                for (let checkbox2 of filtroColor) {
                    for (let card of cards) {
                        if (checkbox2.checked) {
                                                       
                            if (checkbox2.value === card.dataset.color) {
                                card.classList.remove("hidden")
                            }
                            else if (checkbox2.value === "todos") {
                                card.classList.remove("hidden")
                            }
                        }
                    }
                }
            }
            else if (checkbox.value === "todos") {
                card.classList.remove("hidden")
            }
            else {
                card.classList.add("hidden")
            }
        }
    }
}



// FITRO x SEXO ~ RADIOS

for (let radio of filtroSexo) {
    radio.oninput = () => {
        for (let card of cards) {
            if (radio.value === "i") {
                card.classList.remove("hidden")
            }
            else if (radio.value === "f") {
                card.classList.remove("hidden")
            }
            else {
                card.classList.remove("hidden")
            }
        }
    }
}