import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    axios.get<Pet[]>('https://localhost:5001/api/pets')
      .then(response => setPets(response.data)) // trigger a re-render of the component with the new data

    return () => { } // When component mount in strict mode, it will also execute this cleaner code besides useEffect
  }, [])

  return (
    <>
      <Typography variant="h3" className="app">Recipe Generator</Typography>
      <Typography variant="h4">My Pets</Typography>
      <List>
        {pets.map((pet) => (
          <ListItem key={pet.id}>
            <ListItemText>{pet.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>

  )
}

export default App
