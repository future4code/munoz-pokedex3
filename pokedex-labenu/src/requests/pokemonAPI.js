import { RepeatOneSharp } from "@material-ui/icons";
import axios from "axios";
import { base_url } from "../constants/api";

export const getPokemonList = async (
  path,
  setListData,
  setPreviousPage,
  setNextPage
) => {
  try {
    const pokemonList = await axios.get(`${base_url}${path}`);

    setPreviousPage(pokemonList.data.previous);
    setNextPage(pokemonList.data.next);

    const pokemonDetailsPromisses = pokemonList?.data.results.map((pokemon) => {
      return getPokemonDetails(pokemon.name);
    });

    const pokemonDetails = await Promise.all(pokemonDetailsPromisses);
    console.log("RESPOSTA: ", pokemonDetails);

    setListData(pokemonDetails);
  } catch (error) {
    console.log("ERRO LIST: ", error?.data);
  }
};

export const getPokemonDetails = async (pokemonName) => {
  try {
    const response = await axios.get(`${base_url}/pokemon/${pokemonName}`);

    const resposta = {
      nome: pokemonName,
      id: response.data.id,
      tipo: response.data.types[0].type.name,
      tamanho: response.data.height,
      peso: response.data.weight,
      url: response.data.sprites.versions["generation-v"]["black-white"]
        .animated.front_default,
      habilidade: response.data.abilities[0].ability.name,
      hp: response.data.stats[0].base_stat,
      ataque: response.data.stats[1].base_stat,
      defesa: response.data.stats[2].base_stat,
      ataqueS: response.data.stats[3].base_stat,
      defesaS: response.data.stats[4].base_stat,
      velocidade: response.data.stats[5].base_stat
    };
    // console.log("Detalhes do pokemon: ", resposta.url);
    return resposta;
  } catch (error) {
    console.log("ERRO CATCH: ", error);
  }
};

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
      console.log(`DIFERENTE: ${response}`);
    })
    .catch((err) => console.log(err));
};
getPokemon();
