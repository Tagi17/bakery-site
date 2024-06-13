import Link from 'next/link';

interface Recipe {
    slug: string;
    name: string;
    imageUrl: string;  // Uncomment and use if you're going to include images
    description: string;
  }
  
  // Type the props of the component using the Recipe interface
  interface RecipeCardProps {
    recipe: Recipe;
  }
  
  const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
      <Link href={`/recipes/${recipe.slug}`}>
        <a className="block border border-gray-200 shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300">
          {/* Uncomment and use if you're going to include images
          <img src={recipe.imageUrl} alt={recipe.name} className="w-full h-48 object-cover" /> */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{recipe.name}</h3>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        </a>
      </Link>
    );
  };
  
  export default RecipeCard;