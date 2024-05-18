import React from 'react';
import { CiHeart } from 'react-icons/ci';
// import styles from './SwipableCard.module.css';
import styles from './Card.module.css';

const SwipableCard = ({ pokemon, handleLike, handleDislike }) => {
  return (
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
  );
};

export default SwipableCard;
