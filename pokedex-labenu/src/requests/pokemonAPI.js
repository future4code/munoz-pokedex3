import { RepeatOneSharp } from "@material-ui/icons";
import axios from "axios";
import { base_url } from "../constants/api";
import { convertDecimetresToCm, convertHectogramsToKg } from "../services/formatDataPokemons";

export const getPokemonList = async (path, setListData, setPreviousPage, setNextPage) => {
  // console.log('REQUEST LISTA POKEMONS');
  try {
    const pokemonList = await axios.get(`${base_url}${path}`);

    setPreviousPage(pokemonList.data.previous);
    setNextPage(pokemonList.data.next);

    const pokemonDetailsPromisses = pokemonList?.data.results.map((pokemon) => {
      return getPokemonDetails(pokemon.name);
    });

    const pokemonDetails = await Promise.all(pokemonDetailsPromisses);

    setListData(pokemonDetails);
  } catch (error) {
    console.error(error.data);
    // console.log("ERRO LIST: ", error?.data);
  }
};

export const getPokemonDetails = async (pokemonName) => {
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
      habilidade: response.data.abilities[0].ability.name,
      hp: response.data.stats[0].base_stat,
      ataque: response.data.stats[1].base_stat,
      defesa: response.data.stats[2].base_stat,
      ataqueS: response.data.stats[3].base_stat,
      defesaS: response.data.stats[4].base_stat,
      velocidade: response.data.stats[5].base_stat
    };

    return resposta;
  } catch (error) {
    console.log("ERRO CATCH: ", error);
  }
};

export const getLocations = async (id) => {
  // if (id){
    try {
      const locais = await axios.get(`${base_url}/pokemon/${id}/encounters`);
      return locais;
    } catch (error) {
      console.log("ERRO LOCAIS: ", error);
    }
  // }
}

export const getCharacteristics = async (id) => {
  // if (id) {
    try {
      const characteristics = await axios.get(`${base_url}/characteristic/${id}`);
  
      return characteristics;
    } catch (error) {
      console.log("ERRO LOCAIS: ", error);
    }
  // }
}
