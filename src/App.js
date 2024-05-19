import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Card from "./components/Card/Card";
import LikedPokemons from "./pages/LikedPokemons/LikedPokemons";
import { initializeDarkMode, applyDarkMode } from "./utility/Themes";
import "./App.css";

function App() {
  const [likedPokemons, setLikedPokemons] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [fromLikedPage, setFromLikedPage] = useState(false);

  useEffect(() => {
    initializeDarkMode(setDarkMode);
  }, []);

  useEffect(() => {
    applyDarkMode(darkMode);
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
            element={
              <Card
                addLikedPokemon={addLikedPokemon}
                fromLikedPage={fromLikedPage}
              />
            }
          />
          <Route
            path="/liked"
            element={
              <LikedPokemons
                likedPokemons={likedPokemons}
                setFromLikedPage={setFromLikedPage}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;