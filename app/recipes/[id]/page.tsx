'use client';

import Image from 'next/image';
import React from 'react';
import recipes from '../../recipes/recipesList.json';
import { useSearchParams } from 'next/navigation'

const RecipeDetail = () => {
    const searchParams = useSearchParams()
    const id = searchParams.get('id');
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-6">{recipe.name}</h1>
      <div className="w-full h-96 relative">
        <Image src={recipe.imageUrl} alt={recipe.name} layout="fill" objectFit="cover" />
      </div>
      <p className="text-lg mt-4">{recipe.description}</p>
    </div>
  );
};

export default RecipeDetail;