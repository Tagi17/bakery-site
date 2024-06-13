'use client';

import React from 'react';
import RecipeCard from '../components/RecipeCard';
import recipesData from '../data/recipes/recipesList.json';

// Define the Recipe interface
interface Recipe {
  name: string;
  imageUrl: string;
  description: string;
  slug: string;
}

// Import the JSON and assert its type
const recipes: Recipe[] = recipesData as Recipe[];

const RecipesIndex = () => {
  if (!Array.isArray(recipes)) {
    return <p>Error loading recipes.</p>; // Basic error handling
  }

  console.log(recipesData);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
        {recipes.map((recipe: Recipe, index: number) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesIndex;