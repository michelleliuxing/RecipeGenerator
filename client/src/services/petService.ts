import axios from 'axios';
import type { Pet } from '../types';

const API_BASE_URL = 'https://localhost:5001/api';

class PetService {
    private api = axios.create({
        baseURL: API_BASE_URL,
        timeout: 10000,
    });

    async getAllPets(): Promise<Pet[]> {
        const response = await this.api.get<Pet[]>('/pets');
        return response.data;
    }

    async getPetById(id: string): Promise<Pet> {
        const response = await this.api.get<Pet>(`/pets/${id}`);
        return response.data;
    }

    async createPet(petData: Omit<Pet, 'id'>): Promise<Pet> {
        const response = await this.api.post<Pet>('/pets', petData);
        return response.data;
    }

    async updatePet(id: string, petData: Partial<Pet>): Promise<Pet> {
        const response = await this.api.put<Pet>(`/pets/${id}`, petData);
        return response.data;
    }

    async deletePet(id: string): Promise<void> {
        await this.api.delete(`/pets/${id}`);
    }
}

export const petService = new PetService(); 