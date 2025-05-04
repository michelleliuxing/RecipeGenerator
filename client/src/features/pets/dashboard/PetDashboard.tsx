import { Grid, List } from "@mui/material";
import PetList from "./PetList";

type Props = {
    pets: Pet[];
}

export default function PetDashboard({pets}: Props) {
  return (
    <div>
        <Grid>
            <List>
                <PetList pets={pets}></PetList>
            </List>
        </Grid>
    </div>
  )
}
