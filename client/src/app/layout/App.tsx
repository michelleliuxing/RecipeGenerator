import axios from "axios";
import { Container} from "@mui/material";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import CssBaseline from '@mui/material/CssBaseline';
import PetDashboard from "../../features/pets/dashboard/PetDashboard";

function App() {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    axios.get<Pet[]>('https://localhost:5001/api/pets')
      .then(response => setPets(response.data))

    return () => {}
  }, [])

  return (
    <>
      <CssBaseline />
      <NavBar />
        <PetDashboard pets={pets} />
    </>
  )
}

export default App;
