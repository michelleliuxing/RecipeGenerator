import PetCard from "./PetCard";

type Props = {
    pets: Pet[]
}

export default function PetList({ pets }: Props) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mx-auto max-w-7xl">
            {pets.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
            ))}
        </div>
    )
}