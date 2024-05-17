import React from 'react';
import { Link } from 'react-router-dom';
import { CiLight, CiDark } from 'react-icons/ci';
import styles from './Header.module.css';

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className={styles.header}>
      <h1>PokéSwipe</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/liked">Liked Pokémon</Link>
        {darkMode ? (
          <CiLight className={styles.icon} onClick={toggleDarkMode} />
        ) : (
          <CiDark className={styles.icon} onClick={toggleDarkMode} />
        )}
      </nav>
    </header>
  );
};

export default Header;
