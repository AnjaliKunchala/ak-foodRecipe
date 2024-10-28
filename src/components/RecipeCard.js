// src/components/RecipeCard.js
import React from 'react';
import './RecipeCard.css';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <div className="recipe-info">
        <h2 className="recipe-title">{recipe.title}</h2>
        <p className="recipe-description">{recipe.description}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
