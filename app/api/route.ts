// import fs from 'fs/promises';
// import path from 'path';

// export default async function handler(req, res) {
//     // Set the path to the recipes file
//     const filePath = path.join(process.cwd(), 'public', 'recipesList.json');

//     try {
//         // Read the file content
//         const jsonData = await fs.readFile(filePath, 'utf8');
//         // Parse the JSON data
//         const recipes = JSON.parse(jsonData);
//         // Return the data as JSON
//         res.status(200).json(recipes);
//     } catch (error) {
//         // Handle any errors
//         res.status(500).json({ message: 'Failed to read recipes data', error: error.message });
//     }
// }
