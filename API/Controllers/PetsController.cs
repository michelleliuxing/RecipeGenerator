using System;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

// route prefix is api/pets because the controller is named PetsController.
public class PetsController(AppDbContext context) : BaseApiController // Primary constructor
{
    [HttpGet]
    public async Task<ActionResult<List<Pet>>> GetPets() // Returen an Http result
    {
        return await context.Pets.ToListAsync(); // Always use Async when using database queries
    } 

    [HttpGet("{id}")]
    public async Task<ActionResult<Pet>> GetPetDetails(string id)
    {
        var pet = await context.Pets.FindAsync(id);

        if (pet == null) return NotFound(); // Returen NotFound as an ActionResult if pet not found with the id supplied

        return pet;
    }
}
