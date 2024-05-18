import axios from "axios";

export const fetchRandomPokemon = async (shownPokemonIds) => {
  try {
    let id;
    do {
      id = Math.floor(Math.random() * 898) + 1;
    } while (shownPokemonIds.includes(id));

    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    const data = response.data;
    const pokemonData = {
      id: data.id,
      name: data.name,
      abilities: data.abilities.map((ability) => ability.ability.name),
      types: data.types.map((type) => type.type.name),
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
    };
    return pokemonData;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw error;
  }
};
