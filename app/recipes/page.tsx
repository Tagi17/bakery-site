import Image from 'next/image';
import RecipesList from "./recipesList.json";

interface Recipe {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const RecipesListPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {RecipesList.map(recipe => (
        <div key={recipe.id} className="bg-white rounded-lg shadow p-4">
          <h2 className="text-2xl font-semibold mb-2">{recipe.name}</h2>
          <p>{recipe.description}</p>
          <Image
            src={recipe.imageUrl}
            alt={recipe.name}
            width={500}
            height={300}
            layout='responsive'
          />
        </div>
      ))}
    </div>
  );
};

export default RecipesListPage;
