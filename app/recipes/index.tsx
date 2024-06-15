'use client';

import React, { useEffect, useState } from 'react';

import RecipeCard from '../components/RecipeCard';
import { useRouter } from 'next/router';

// Define the Recipe interface
interface Recipe {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
}

const RecipesIndex = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch('/api/recipes');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setRecipes(data);
        setError(null); // Reset the error if there was one previously
      } catch (err) {
        const error = err as Error;
        setError(error.message || 'Failed to load recipes');
      } finally {
        setLoading(false); // Ensure loading is turned off after fetching
      }
    };

    fetchRecipes();
  }, []);

  const handleRecipeClick = (id: string) => {
    router.push(`/recipes/${id}`);
  };

  if (loading) return <div>Loading recipes...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
        {recipes.map((recipe: Recipe, index: number) => (
          <div key={index} onClick={() => handleRecipeClick(recipe.id)} style={{ cursor: 'pointer' }}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesIndex;