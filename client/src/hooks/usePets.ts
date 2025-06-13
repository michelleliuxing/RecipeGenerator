import { useState, useEffect } from 'react';
import { petService } from '../services/petService';
import type { Pet } from '../types';

export const usePets = () => {
    const [pets, setPets] = useState<Pet[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPets = async () => {
        try {
            setLoading(true);
            setError(null);
            const fetchedPets = await petService.getAllPets();
            setPets(fetchedPets);
        } catch (err) {
            setError('Failed to load pets. Please try again later.');
            console.error('Error fetching pets:', err);
        } finally {
            setLoading(false);
        }
    };

    const addPet = async (petData: Omit<Pet, 'id'>) => {
        try {
            const newPet = await petService.createPet(petData);
            setPets(prev => [...prev, newPet]);
            return newPet;
        } catch (err) {
            setError('Failed to add pet.');
            throw err;
        }
    };

    const updatePet = async (id: string, petData: Partial<Pet>) => {
        try {
            const updatedPet = await petService.updatePet(id, petData);
            setPets(prev => prev.map(pet => pet.id === id ? updatedPet : pet));
            return updatedPet;
        } catch (err) {
            setError('Failed to update pet.');
            throw err;
        }
    };

    const deletePet = async (id: string) => {
        try {
            await petService.deletePet(id);
            setPets(prev => prev.filter(pet => pet.id !== id));
        } catch (err) {
            setError('Failed to delete pet.');
            throw err;
        }
    };

    useEffect(() => {
        fetchPets();
    }, []);

    return {
        pets,
        loading,
        error,
        refetch: fetchPets,
        addPet,
        updatePet,
        deletePet
    };
}; 