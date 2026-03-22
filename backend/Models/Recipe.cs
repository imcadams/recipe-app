namespace RecipeApi.Models;

public sealed class Recipe
{
    public required int Id { get; init; }
    public required string Title { get; init; }
    public required int Yield { get; init; }
    public required IReadOnlyList<string> Ingredients { get; init; }
}

public static class RecipeStore
{
    public static readonly IReadOnlyList<Recipe> Recipes =
    [
        new Recipe
        {
            Id = 1,
            Title = "Chicken Stir-Fry",
            Yield = 2,
            Ingredients =
            [
                "30g olive oil",
                "200g chicken breast",
                "500g broccoli florets",
                "250g red bell pepper",
                "60g soy sauce",
                "10g garlic",
                "5g ginger"
            ]
        },
        new Recipe
        {
            Id = 2,
            Title = "Veggie Omelette",
            Yield = 1,
            Ingredients =
            [
                "100g large eggs",
                "40g diced onion",
                "50g diced tomato",
                "20g spinach leaves",
                "15g olive oil",
                "150g small corn tortillas",
                "3g Salt and pepper (to taste)"
            ]
        },
        new Recipe
        {
            Id = 3,
            Title = "Overnight Oats",
            Yield = 4,
            Ingredients =
            [
                "160g rolled oats",
                "1000g almond milk",
                "70g chia seeds",
                "60g honey",
                "300g blueberries"
            ]
        }
    ];
}
