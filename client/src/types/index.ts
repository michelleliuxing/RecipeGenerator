export interface Pet {
    id: string;
    name: string;
    breed: string;
    age: number;
    weight: number;
    activityLevel: 'low' | 'moderate' | 'high';
    healthIssues: string;
}

export interface Recipe {
    id: string;
    petId: string;
    name: string;
    ingredients: string[];
    instructions: string[];
    nutritionalInfo: {
        calories: number;
        protein: number;
        fat: number;
        carbs: number;
    };
    createdAt: string;
}

export interface ApiResponse<T> {
    data: T;
    message?: string;
    success: boolean;
}

export interface LoadingState {
    isLoading: boolean;
    error: string | null;
} 