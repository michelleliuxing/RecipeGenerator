import { Card, CardContent } from "@mui/material"

type Props = {
    pet: Pet
}

export default function PetCard({ pet }: Props) {
    return (
        <Card sx={{ borderRadius: 3 }} className="transition w-full">
            <CardContent className="p-6">
                <div className="flex items-start justify-between">
                    <div className="flex items-center">
                        <img
                            src="/pets/cat3.png"
                            className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                            <h3 className="text-xl font-bold font-heading">{pet.name}</h3>
                            <p className="text-neutral-600">{pet.breed}</p>
                        </div>
                    </div>
                    <div className="text-neutral-400 hover:text-neutral-600 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-neutral-500">Age</p>
                        <p className="font-medium">{pet.age} years</p>
                    </div>
                    <div>
                        <p className="text-sm text-neutral-500">Weight</p>
                        <p className="font-medium">{pet.weight} kg</p>
                    </div>
                    <div>
                        <p className="text-sm text-neutral-500">Activity Level</p>
                        <p className="font-medium capitalize">{pet.activityLevel}</p>
                    </div>
                    <div>
                        <p className="text-sm text-neutral-500">Health</p>
                        {pet.healthIssues !== "None" ? (
                            <div className="flex items-center">
                                <span className="border border-red-400 rounded-full px-2 py-0.5 text-sm text-red-400 text-xs">
                                    {pet.healthIssues}
                                </span>
                            </div>
                        ) : (
                            <p className="font-medium">None</p>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}