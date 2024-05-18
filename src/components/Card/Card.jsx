import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Card.module.css";
import { fetchRandomPokemon } from "../../utility/Api.js";
import SwipableCard from "./SwipableCard";

const Card = ({ addLikedPokemon, fromLikedPage }) => {
  const [pokemon, setPokemon] = useState(null);
  const [shownPokemonIds, setShownPokemonIds] = useState([]);
  const [likedCount, setLikedCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showLikedLink, setShowLikedLink] = useState(false);

  useEffect(() => {
    fetchRandomPokemonData();
  }, []);

  useEffect(() => {
    if (fromLikedPage) {
      setShowLikedLink(true);
    }
  }, [fromLikedPage]);

  const fetchRandomPokemonData = async () => {
    setLoading(true);
    try {
      const pokemonData = await fetchRandomPokemon(shownPokemonIds);
      setPokemon(pokemonData);
      setShownPokemonIds([...shownPokemonIds, pokemonData.id]);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = () => {
    addLikedPokemon(pokemon);
    setLikedCount(likedCount + 1);
    setShowLikedLink(true);
    fetchRandomPokemonData();
  };

  const handleDislike = () => {
    fetchRandomPokemonData();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      {loading ? (
        <div className={styles.cardContainer}>
          <h2>Loading...</h2>
        </div>
      ) : (
        <SwipableCard
          pokemon={pokemon}
          handleLike={handleLike}
          handleDislike={handleDislike}
        />
      )}
      {showLikedLink && (
        <div className={styles.likedLinkContainer}>
          <Link to="/liked" className={styles.likedLink}>
            Go to Liked Pokémon
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;