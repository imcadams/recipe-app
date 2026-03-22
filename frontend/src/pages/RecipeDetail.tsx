import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Recipe } from "../types";

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Recipe id is missing.");
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    fetch(`/api/recipes/${id}`, { signal: controller.signal })
      .then((response) => {
        if (response.status === 404) {
          throw new Error("Recipe not found.");
        }
        if (!response.ok) {
          throw new Error(`Failed to load recipe (${response.status})`);
        }
        return response.json() as Promise<Recipe>;
      })
      .then(setRecipe)
      .catch((err: Error) => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [id]);

  if (loading) return <p>Loading recipe...</p>;
  if (error) return <p>{error}</p>;
  if (!recipe) return <p>Recipe unavailable.</p>;

  return (
    <section>
      <p>
        <Link to="/">Back to recipes</Link>
      </p>
      <h2>{recipe.title}</h2>
      <p>Yield: {recipe.yield}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </section>
  );
}
