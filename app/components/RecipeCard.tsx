import Image from "next/legacy/image";
import Link from "next/link";

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
      <div className="mb-15 mx-auto max-w-md block border border-gray-200 min-h-[450px] px-4 sm:w-96 lg:w-104 shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300">
        {recipe.imageUrl && (
          <div className="w-full h-48 overflow-hidden ">
            <Image
              src={recipe.imageUrl}
              alt={recipe.name}
              layout="responsive"
              width={100}
              height={48}
              objectFit="cover"
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray overflow-hidden">
            {recipe.name}
          </h3>
          <p className="text-gray-600">{recipe.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
