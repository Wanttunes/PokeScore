import { searchData } from "./SearchApi.js"
let pokemonId = Math.floor(Math.random() * 1025)
export let pokemonData = await searchData(pokemonId)




if(pokemonData != undefined){
    console.log(pokemonData.name)
}
