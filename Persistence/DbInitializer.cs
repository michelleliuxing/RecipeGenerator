using System;
using Domain;

namespace Persistence;

public class DbInitializer
{
    public static async Task SeedData(AppDbContext context)
    {
        if (context.Pets.Any()) return; 

        var pets = new List<Pet> // Define initial data in the database
        {
            new() {
                Name = "Max",
                Age = 3,
                Specie = Species.Dog,
                IsDesexed = true,
                Breed = "Labrador Retriever"
            },
            new() {
                Name = "Bella",
                Age = 2,
                Specie = Species.Dog,
                IsDesexed = true,
                Breed = "German Shepherd"
            },
            new() {
                Name = "Mimi",
                Age = 4,
                Specie = Species.Cat,
                IsDesexed = true,
                Breed = "Siamese"
            },
            new() {
                Name = "Fifi",
                Age = 1,
                Specie = Species.Cat,
                IsDesexed = false,
                Breed = "Tabby"
            }
        };

        context.Pets.AddRange(pets); // Entity Framework racking updates in memeory
        await context.SaveChangesAsync(); // Add data to database
    }
}
