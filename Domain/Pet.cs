using System;
using System.Security.Cryptography;

namespace Domain;

public enum Species
{
    Cat,
    Dog
}

public class Pet
{
    public string Id { get; set; } = Guid.NewGuid().ToString(); // Create new GUID for new Pet
    public required string Name { get; set; }
    public int Age { get; set; }
    public required Species Specie { get; set; }
    public bool IsDesexed { get; set; }
    public string? Breed { get; set; }
}
