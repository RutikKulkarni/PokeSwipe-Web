import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Card from "./components/Card/Card";
import LikedPokemons from "./pages/LikedPokemons/LikedPokemons";
import "./App.css";

function App() {
  const [likedPokemons, setLikedPokemons] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDarkScheme);

    if (prefersDarkScheme) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const addLikedPokemon = (pokemon) => {
    setLikedPokemons([...likedPokemons, pokemon]);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="app">
      <Router>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/swipe"
            element={<Card addLikedPokemon={addLikedPokemon} />}
          />
          <Route
            path="/liked"
            element={<LikedPokemons likedPokemons={likedPokemons} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
