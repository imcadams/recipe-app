import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Recipe } from "../types";

export default function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/recipes", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load recipes (${response.status})`);
        }
        return response.json() as Promise<Recipe[]>;
      })
      .then(setRecipes)
      .catch((err: Error) => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
        </li>
      ))}
    </ul>
  );
}
