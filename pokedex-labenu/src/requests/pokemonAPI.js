import axios from "axios";
import { base_url } from "../constants/api";
import { convertDecimetresToCm, convertHectogramsToKg, translateType } from "../services/formatDataPokemons";

export const getPokemonList = async (path, setListData, setPreviousPage, setNextPage) => {
  console.log('REQUEST LISTA POKEMONS');
  try {
    const pokemonList = await axios.get(`${base_url}${path}`);

    setPreviousPage(pokemonList.data.previous);
    setNextPage(pokemonList.data.next);

    const pokemonDetailsPromisses = pokemonList?.data.results.map((pokemon) => {
      return getPokemonDetails(pokemon.name);
    });

    const pokemonDetails = await Promise.all(pokemonDetailsPromisses);
    // console.log("RESPOSTA: ", pokemonDetails);

    setListData(pokemonDetails);
  } catch (error) {
    console.error(error.data);
    // console.log("ERRO LIST: ", error?.data);
  }
};

export const getPokemonDetails = async (pokemonName) => {
  console.log('REQUEST DETALHES POKEMONS');
  try {
    const response = await axios.get(`${base_url}/pokemon/${pokemonName}`);

    const resposta = {
      nome: pokemonName,
      id: response.data.id,
      tipo: response.data.types,
      tamanho: convertDecimetresToCm(response.data.height),
      peso: convertHectogramsToKg(response.data.weight),
      url: {
        artwork_front: response.data.sprites.other['official-artwork'].front_default,
        gif_front_default: response.data.sprites.versions["generation-v"]["black-white"].animated.front_default,
        gif_back_default: response.data.sprites.versions["generation-v"]["black-white"].animated.back_default,
        gif_front_female: response.data.sprites.versions["generation-v"]["black-white"].animated.front_female,
        gif_back_female: response.data.sprites.versions["generation-v"]["black-white"].animated.back_female,
      },
      habilidades: response.data.abilities,
      formas: response.data.forms,
      locais: response.data.location_area_encounters
    };

    console.log("Detalhes do pokemon: ", resposta);
    return resposta;
  } catch (error) {
    console.log("ERRO CATCH: ", error);
  }
};

export const getLocations = async (url) => {
  try {
    const locais = await axios.get(`${url}`);
    return locais;
  } catch (error) {
    console.log("ERRO LOCAIS: ", error);
  }
}


// export const getNextPagePokemonList = async (setData) => {
//   try {
//     const pokemonList = await axios.get(`${base_url}/pokemon`)

//     const pokemonDetailsPromisses = pokemonList?.data.results.map((pokemon) => {
//       return getPokemonDetails(pokemon.name)
//     })

//     const pokemonDetails = await Promise.all(pokemonDetailsPromisses)
//     console.log('RESPOSTA: ', pokemonDetails);

//     setData(pokemonDetails)

//   } catch (error) {
//     console.log('ERRO LIST: ', error?.data);
//   }

// }
const getPokemon = () => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/`)
    .then((response) => {
      // console.log(`DIFERENTE: ${response}`);
    })
    .catch((err) => console.log(err));
};
getPokemon();
