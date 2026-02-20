import { pokemonData } from "./RollSystem.js"

// Criando variáveis da barra de Status
let pokeImg = document.getElementsByClassName("pokemon-image-section")[0]
let HpBar = document.getElementsByClassName("stat-bar-fill")[0]
let AttBar = document.getElementsByClassName("stat-bar-fill")[1]
let DefBar = document.getElementsByClassName("stat-bar-fill")[2]
let SpABar = document.getElementsByClassName("stat-bar-fill")[3]
let SpDBar = document.getElementsByClassName("stat-bar-fill")[4]
let SpedBar = document.getElementsByClassName("stat-bar-fill")[5]


let HpVal = document.getElementsByClassName("stat-value")[0]
let AttVal = document.getElementsByClassName("stat-value")[1]
let DefVal = document.getElementsByClassName("stat-value")[2]
let SpAVal = document.getElementsByClassName("stat-value")[3]
let SpDVal = document.getElementsByClassName("stat-value")[4]
let SpedVal = document.getElementsByClassName("stat-value")[5]

// Criando variáveis das informações do pokemon

let type = document.getElementsByClassName("pokemon-type")[0]
let pokemonName = document.getElementsByClassName("pokemon-name")[0]
pokemonName.innerHTML += `${pokemonData.name}`
pokemonName.innerHTML += `${" #"+pokemonData.id}`


function typeSelector(){
    if(pokemonData.types.length == 2){
        console.log("2 Tipos")
        let type1 = pokemonData.types[0].type.name
        let type2 = pokemonData.types[1].type.name
        console.log(type1)
        console.log(type2)
        type.innerHTML += `<span class="type-badge ${type1}">${type1}</span>`
        type.innerHTML += `<span class="type-badge ${type2}">${type2}</span>`
        console.log(type)

    }else if(pokemonData.types.length == 1){
        console.log("1 Tipo")
        let type1 = pokemonData.types[0].type.name
        type.innerHTML = `<span class="type-badge ${type1}">${type1}</span>`
    }
}

typeSelector()


// Alterando imagem conforme o pokemon
pokeImg.innerHTML = `<img src="${pokemonData.sprites.front_default}" alt="Pokémon">`

// Alterando Status conforme o pokemon

HpVal.innerHTML = `${pokemonData.stats[0].base_stat}`
AttVal.innerHTML = `${pokemonData.stats[1].base_stat}`
DefVal.innerHTML = `${pokemonData.stats[2].base_stat}`
SpAVal.innerHTML = `${pokemonData.stats[3].base_stat}`
SpDVal.innerHTML = `${pokemonData.stats[4].base_stat}`
SpedVal.innerHTML = `${pokemonData.stats[5].base_stat}`

HpBar.style.width = `${pokemonData.stats[0].base_stat}%`
AttBar.style.width = `${pokemonData.stats[1].base_stat}%`
DefBar.style.width = `${pokemonData.stats[2].base_stat}%`
SpABar.style.width = `${pokemonData.stats[3].base_stat}%`
SpDBar.style.width = `${pokemonData.stats[4].base_stat}%`
SpedBar.style.width = `${pokemonData.stats[5].base_stat}%`

console.log(HpBar.style.width)



console.log(pokemonData.stats[0].base_stat)