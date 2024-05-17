import React from 'react';
import styles from './LikedPokemons.module.css';

const LikedPokemons = ({ likedPokemons }) => {
  return (
    <div className={styles.likedPokemons}>
      <h1 className={styles.title}>Pokémon you have liked ❤️</h1>
      <div className={styles.pokemonGrid}>
        {likedPokemons.map((pokemon, index) => (
          <div key={index} className={styles.pokemonCard}>
            <div className={styles.imageContainer}>
              <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <h3 className={styles.name}>{pokemon.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedPokemons;
