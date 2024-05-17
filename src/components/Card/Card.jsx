import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import logo from "../../assets/logo.png";
import styles from "./Card.module.css";

const Card = ({ addLikedPokemon, fromLikedPage }) => {
  const [pokemon, setPokemon] = useState(null);
  const [shownPokemonIds, setShownPokemonIds] = useState([]);
  const [likedCount, setLikedCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showLikedLink, setShowLikedLink] = useState(false);

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  useEffect(() => {
    if (fromLikedPage) {
      setShowLikedLink(true);
    }
  }, [fromLikedPage]);

  const fetchRandomPokemon = async () => {
    setLoading(true);
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
      setPokemon(pokemonData);
      setShownPokemonIds([...shownPokemonIds, id]);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = () => {
    addLikedPokemon(pokemon);
    setLikedCount(likedCount + 1);
    setShowLikedLink(true);
    fetchRandomPokemon();
  };

  const handleDislike = () => {
    fetchRandomPokemon();
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
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <CiHeart className={styles.heartIcon} onClick={handleLike} />
            <div className={styles.imageContainer}>
              <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <h2 className={styles.name}>{pokemon.name}</h2>
            <div className={styles.info}>
              <div className={styles.typesAbilities}>
                {pokemon.types.map((type, index) => (
                  <span key={index} className={styles.type}>
                    {type}
                  </span>
                ))}
                {pokemon.abilities.map((ability, index) => (
                  <span key={index} className={styles.ability}>
                    {ability}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.buttons}>
              <button className={styles.dislikeButton} onClick={handleDislike}>
                Dislike
              </button>
              <button className={styles.likeButton} onClick={handleLike}>
                Like
              </button>
            </div>
          </div>
        </div>
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
