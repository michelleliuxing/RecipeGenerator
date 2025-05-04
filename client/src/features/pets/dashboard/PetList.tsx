import { Box } from "@mui/material";
import PetCard from "./PetCard";

type Props = {
    pets: Pet[]
}

export default function PetList({ pets }: Props) {
    return (
        <section className="py-12 bg-[#f4f1de]">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {pets.map((pet) => (
                    <PetCard key={pet.id} pet={pet} />
                ))}
            </div>
        </div>
        </section>
    )
}