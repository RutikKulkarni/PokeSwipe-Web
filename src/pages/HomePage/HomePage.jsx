import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import heartIcon from "../../assets/heart-icon.png";
import logo from "../../assets/logo.png";

const HomePage = () => {
  return (
    <div>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <img src={heartIcon} alt="Heart Icon" className={styles.heartIcon} />
          <h2>How to Play PokéSwipe</h2>
          <p>Pokémon Appear One at a Time</p>
          <p>Choose "Like" or "Dislike"</p>
          <p>Build Your Favorite Team</p>
          <Link to="/swipe">
            <button className={styles.startButton}>Let's Go!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
