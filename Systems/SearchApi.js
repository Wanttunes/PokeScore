

// Validações de erros e boas praticas para a função de busca

export async function searchData(pokemonId){
    console.log(pokemonId)
    let api = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    return fetch(api)
    .then(response => {
        if (!response.ok){
            throw new Error("Erro na requisição " + response.status)
        }
        return response.json()
    })
    .then(data => {
        if(!data){
            throw new Error("Dados não encontrados")
        }
        return data
    })
    .catch(error => {
        console.log("Mensagem de erro: " + error.message)
    })
}


//1034