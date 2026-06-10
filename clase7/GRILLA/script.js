//paso 1
let orden=false
const personajes= [
    {nombre: "Hello Kitty", 
    imagen: "./imagenes/kitty.png",
    especie: "Gato",
    cumpleaños: "1 de noviembre",
    año: 1974
    },
    {nombre: "My Melody", 
    imagen: "./imagenes/melody.png",
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
    imagen: "./imagenes/cinna.png",
    especie: "Perro",
    cumpleaños: "6 de marzo",
    año: 2001
    },
    {nombre: "Pochacco",
    imagen: "./imagenes/pochacco.png",
    especie: "Perro",
    cumpleaños: "31 de octubre",
    año: 1989
    },
    {nombre: "Badtz-Maru",
    imagen: "./imagenes/batzmaru.webp",
    especie: "Pingüino",
    cumpleaños: "1 de abril",
    año: 1993
    },
    {nombre: "ChocoCat",
    imagen: "./imagenes/chococat.png",
    especie: "Gato",
    cumpleaños: "10 de mayo",
    año: 1996
    }
]

//paso 2
function crearCard(personaje){
    const card= document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <img src="${personaje.imagen}" alt="${personaje.nombre}">
    <div class="card-info">
    <h2>${personaje.nombre}</h2>
      <span class="especie">Especie:${personaje.especie}</span>
      <p>Cumpleaños: ${personaje.cumpleaños}</p>
      <span class="año">Año Debut: ${personaje.año}</span>
    </div>
    `
    return card
}

//paso 3
function renderGrilla(lista){
    const grilla = document.querySelector("#grilla");
    const contador = document.querySelector("#contador")
    grilla.innerHTML = "";

    lista.forEach(function(personaje){
        const card =  crearCard(personaje);
        grilla.appendChild(card);
    });
    if(lista.length>0){
    contador.textContent= lista.length + " personajes encontrados";
    }
    else{
        contador.textContent = "No se encontraron resultados"
    }
}

//paso 4
function buscar(lista, termino){
    return lista.filter(function(personaje){
        return personaje.nombre.toLowerCase().includes(termino.toLowerCase());
        });
}

//paso 5
function filtrarPorEspecie(lista, especie){
    if ( especie === "") return lista;
    return lista.filter(function(personaje){
        return personaje.especie === especie;
    });
}

//paso 6
function buscarYFiltrar(){
    const termino= document.querySelector("#busqueda").value;
    const especie= document.querySelector("#especie").value;
    let resultado = buscar(personajes, termino);
    resultado= filtrarPorEspecie(resultado, especie);
    if (orden== true){
        resultado= ordenar(resultado)
    }
    renderGrilla(resultado);
}

function ordenar(lista){
    return lista.sort(function(a,b){
        return b.año - a.año;
    })  
}

//paso 7
document.querySelector("#busqueda").addEventListener("input", buscarYFiltrar);
document.querySelector("#especie").addEventListener("change", buscarYFiltrar);

document.querySelector("#ordenar").addEventListener("click", function(){
    orden= !orden
    if (orden == true){
        this.textContent= "Quitar orden por año"
    }
    else{
        this.textContent= "Ordenar por año (mayor a menor)"
    }
    buscarYFiltrar()
})

document.querySelector("#reset").addEventListener("click", function(){
    document.querySelector("#busqueda").value= ""
    document.querySelector("#especie").value= ""
    orden= false
    document.querySelector("#ordenar").textContent= "Ordenar por año (mayor a menor)"
    buscarYFiltrar
})

renderGrilla(personajes);