import React from "react";
import { Link } from "react-router-dom";
import styles from "./LikedPokemons.module.css";
import logo from "../../assets/logo.png";
import { IoIosArrowDropleft } from "react-icons/io";

const LikedPokemons = ({ likedPokemons, setFromLikedPage }) => {
  return (
    <div className={styles.likedPokemons}>
      <div className={styles.logoContainer}>
        <Link
          to="/swipe"
          className={styles.goBackButton}
          onClick={() => setFromLikedPage(true)}
        >
          <IoIosArrowDropleft className={styles.goBackIcon} />
        </Link>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
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
