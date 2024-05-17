import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Welcome to PokéSwipe!</h2>
        <p>Pokémon Appear One at a Time</p>
        <p>Choose "Like" or "Dislike"</p>
        <p>Build Your Favorite Team</p>
        <Link to="/swipe">
          <button className={styles.startButton}>Let's Go!</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
