'use client';

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { ParsedUrlQuery } from "querystring";
import fs from 'fs/promises';
import path from 'path';

interface Recipe {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

interface RecipeDetailProps {
  params: {
    recipe: string;
  };
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ params }) => {
  const { recipe: recipeId } = params;
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const filePath = path.join(process.cwd(), 'public/recipes', `${recipeId}.json`);
      const jsonData = await fs.readFile(filePath);
      setRecipe(JSON.parse(jsonData.toString()));
    };

    fetchRecipe();
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
      <Image src={recipe.imageUrl} alt={recipe.name} width={500} height={300} />
    </div>
  );
};

export default RecipeDetail;