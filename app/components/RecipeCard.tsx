import Image from 'next/image';
import Link from 'next/link';

interface Recipe {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
}

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
      <Link href={`/recipes/${recipe.id}`}>
        <a className="block border border-gray-200 shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300">
          {recipe.imageUrl && (
            <div className="w-full h-48 overflow-hidden">
              <Image src={recipe.imageUrl} alt={recipe.name} layout="responsive" width={100} height={48} objectFit="cover" />
            </div>
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{recipe.name}</h3>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        </a>
      </Link>
    );
};
  
export default RecipeCard;
