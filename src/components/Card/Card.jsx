import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Card.module.css';

const Card = ({ addLikedPokemon }) => {
  const [pokemon, setPokemon] = useState(null);
  const [shownPokemonIds, setShownPokemonIds] = useState([]);

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  const fetchRandomPokemon = async () => {
    try {
      let id;
      do {
        id = Math.floor(Math.random() * 898) + 1;
      } while (shownPokemonIds.includes(id));
      
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = response.data;
      const pokemonData = {
        id: data.id,
        name: data.name,
        abilities: data.abilities.map((ability) => ability.ability.name).join(', '),
        types: data.types.map((type) => type.type.name).join(', '),
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      };
      setPokemon(pokemonData);
      setShownPokemonIds([...shownPokemonIds, id]);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  };

  const handleLike = () => {
    addLikedPokemon(pokemon);
    fetchRandomPokemon();
  };

  const handleDislike = () => {
    fetchRandomPokemon();
  };

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <h3 className={styles.name}>{pokemon.name}</h3>
        <div className={styles.info}>
          <p>{pokemon.types} {pokemon.abilities}</p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.dislikeButton} onClick={handleDislike}>Dislike</button>
          <button className={styles.likeButton} onClick={handleLike}>Like</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
