using RecipeApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "FrontendDev",
        policy => policy.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod());
});

var app = builder.Build();

app.UseCors("FrontendDev");
app.UseSwagger();
app.UseSwaggerUI();

app.MapGet("/api/recipes", () => Results.Ok(RecipeStore.Recipes));

app.MapGet("/api/recipes/{id}", (int id) =>
{
    var recipe = RecipeStore.Recipes.FirstOrDefault(r => r.Id == id);
    return recipe is null ? Results.NotFound() : Results.Ok(recipe);
});

app.Run();
