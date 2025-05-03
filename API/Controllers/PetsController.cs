using System;
using Application.Pets.Commands;
using Application.Pets.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

// route prefix is api/pets because the controller is named PetsController.
public class PetsController: BaseApiController // Primary constructor
{
    [HttpGet]
    public async Task<ActionResult<List<Pet>>> GetPets() // Returen an Http result
    {
        // Use mediator send to send request to handler
        return await Mediator.Send(new GetPetList.Query()); 
    } 

    [HttpGet("{id}")]
    public async Task<ActionResult<Pet>> GetPetDetails(string id)
    {
        return await Mediator.Send(new GetPetDetails.Query{Id = id});
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreatePet(Pet pet)
    {
        return await Mediator.Send(new CreatePet.Command{Pet = pet});
    }

    [HttpPut]
    public async Task<ActionResult> EditPet(Pet pet)
    {
        await Mediator.Send(new EditPet.Command { Pet = pet });

        return NoContent(); // Not returning anything but the request was ok
    }

    [HttpDelete("{Id}")]
    public async Task<ActionResult> DeleteActivity(string id)
    {
        await Mediator.Send(new DeletePet.Command{Id = id});

        return Ok();
    }
}
