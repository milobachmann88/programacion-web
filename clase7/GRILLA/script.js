
const personajes= [
    {nombre: "Hello Kitty", 
    imagen: "./imagenes/kitty.jpeg",
    especie: "Gato",
    cumpleaños: "1 de noviembre",
    año: 1974
    },
    {nombre: "My Melody", 
    imagen: "./imagenes/melody.webp",
    especie: "Conejo",
    cumpleaños: "18 de enero",
    año: 1975
    },
    {nombre: "Pompompurin", 
    imagen: "./imagenes/pompom.webp",
    especie: "Perro",
    cumpleaños: "16 de abril",
    año: 1996
    },
    {nombre: "Keroppi",
    imagen: "./imagenes/keroppi.webp",
    especie: "Rana",
    cumpleaños: "10 de julio",
    año: 1988
    },
    {nombre: "Cinnamoroll",
    imagen: "./imagenes/cinna.jpeg",
    especie: "Perro",
    cumpleaños: "6 de marzo",
    año: 2001
    },
    {nombre: "Pochacco",
    imagen: "./imagenes/pochacco.jpg",
    especie: "Perro",
    cumpleaños: "31 de octubre",
    año: 1989
    },
    {nombre: "Badtz-Maru",
    imagen: "./imagenes/batzmaru.jpeg",
    especie: "Pingüino",
    cumpleaños: "1 de abril",
    año: 1993
    },
    {nombre: "ChocoCat",
    imagen: "./imagenes/chococat.jpeg",
    especie: "gato",
    cumpleaños: "10 de mayo",
    año: 1996
    }
]

function crearCard(personaje){
    const card= document.createElement("div");
    card.classList.add("card");
    card.innerHTML `
    <img src="${personaje.imagen}" alt="${personaje.nombre}">
    <div class="card-info">
      <span class="especie">${personaje.especie}</span>
      <h2>${personaje.nombre}</h2>
      <p>${personaje.cumpleaños}</p>
      <span class="año">★ ${personaje.año}</span>
    </div>
    `
    return card
}

let html = "";

personajes.forEach((personaje)=>{
    html += crearCard(personaje)
})

document.querySelector("#grilla").innerHTML = html;
