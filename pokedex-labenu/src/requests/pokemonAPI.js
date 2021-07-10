import axios from 'axios'
import { base_url } from "../constants/api";


export const getPokemonList = async () => {
  try {
    const pokemonList = await axios.get(`${base_url}/pokemon`)
    
    const pokemonDetails = pokemonList?.data.results.map((pokemon) => {
      // console.log('POKEMON: ', pokemon);
      return getPokemonDetails(pokemon.name)
    })

    console.log('RESPOSTA: ', pokemonDetails);
    // console.log('RESPOSTA: ', pokemonList?.data.results);
  } catch (error) {
    console.log('ERRO LIST: ', error?.data);
  }

}

export const getPokemonDetails = async (pokemonName) => {
  try {
    const response = await axios.get(`${base_url}/pokemon/${pokemonName}`)
    
    const resposta = {
      nome: pokemonName,
      tipo: response.data.types[0].type.name,
      tamanho: response.data.height,
      peso: response.data.weight,
      url: response.data.sprites.front_default
    }

    // console.log('response: ', response);
    console.log('Detalhes do pokemon: ', resposta);
    return resposta
    
  } catch (error) {
    console.log('ERRO CATCH: ', error);
  }

}


// export const getPokemonList = () => {

//   const pokemon = axios.get(`${base_url}/pokemon`)
//     .then((response) => {
//       const pokemonDetails = response.data.results.map((pokemon) => {
//         const pokemonData = getPokemonDetails(pokemon.name)
//         return pokemonData
//       })
//       return pokemonDetails
//     })
//     .catch((error) => {
//       console.log('ERRO LIST: ', error?.data);
//     })
//     console.log('POKEMON ', pokemonDetails);
// }