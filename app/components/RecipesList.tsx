import React from 'react';
import RecipeCard from './RecipeCard';
import recipes from '../recipes/recipesList.json';

// Assuming the JSON is imported here


const RecipesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesList;
