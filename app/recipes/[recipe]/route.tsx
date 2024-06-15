import { NextRequest, NextResponse } from "next/server";

import fs from "fs/promises";
import path from "path";

export async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const recipeId = searchParams.get("recipe");

  const recipesDirectory = path.join(
    process.cwd(),
    "public",
    "recipes",
    `${recipeId}.json`
  );

  try {
    const data = await fs.readFile(recipesDirectory, "utf-8");
    const recipe = JSON.parse(data);

    return new NextResponse(JSON.stringify(recipe), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Recipe not found" }), {
      status: 404,
    });
  }
}
