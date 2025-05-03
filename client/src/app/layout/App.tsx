import axios from "axios";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

function App() {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    axios.get<Pet[]>('https://localhost:5001/api/pets')
      .then(response => setPets(response.data))

    return () => { }
  }, [])

  return (
    <>
    <NavBar></NavBar>
      <Typography variant='h3'>RecipeGenerator</Typography>
      <List>
        {pets.map((pet) => (
          <ListItem key={pet.id}>
            <ListItemText>
              {pet.name}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App;
