import Image from "next/legacy/image";
import React from "react";
import recipes from "../../recipes/recipesList.json";

interface Recipe {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
}

interface RecipeDetailProps {
  params: { id: string };
}

export default function RecipeDetail({ params }: RecipeDetailProps) {
  const recipe = recipes.find((r) => r.id === params.id);

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-6">{recipe.name}</h1>
      <div className="w-full h-96 relative">
        <Image
          src={recipe.imageUrl}
          alt={recipe.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="text-lg mt-4">{recipe.description}</p>
    </div>
  );
}

// Static generation of paths for each recipe
export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id
  }));
}
