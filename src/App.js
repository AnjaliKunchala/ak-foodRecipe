// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from './components/RecipeCard';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Fetch recipes from an API (replace with real URL)
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://api.example.com/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Discover New Cooking Ideas</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="recipe-grid">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;
