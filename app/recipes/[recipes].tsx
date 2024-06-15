// // pages/recipes/[slug].tsx

// import { GetStaticPaths, GetStaticProps } from "next";

// import fs from 'fs/promises';
// import path from 'path';
// import { useRouter } from 'next/router';

// interface Recipe {
//   slug: string;
//   name: string;
//   description: string;
//   imageUrl: string;
// }

// interface RecipeDetailProps {
//   recipe: Recipe;
// }

// const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
//   if (!recipe) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{recipe.name}</h1>
//       <p>{recipe.description}</p>
//       {/* <img src={recipe.imageUrl} alt={recipe.name} />  */}
//       {/* More detailed recipe content here */}
//     </div>
//   );
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const recipes = require("../../data/recipes/recipesList.json");

//   const paths = recipes.map((recipe: Recipe) => ({
//     params: { slug: recipe.slug },
//   }));

//   return { paths, fallback: "blocking" };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { slug } = params as { slug: string };
//   const recipes = require("../../data/recipes/recipesList.json");
//   const recipe = recipes.find((r: Recipe) => r.slug === slug);

//   return { props: { recipe } };
// };

// export default RecipeDetail;
