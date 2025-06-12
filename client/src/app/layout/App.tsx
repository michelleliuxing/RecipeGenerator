import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import CssBaseline from '@mui/material/CssBaseline';
import PetDashboard from "../../features/pets/dashboard/PetDashboard";
import { Box, Container, Typography, CircularProgress, Alert, Fade, Paper } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import FavoriteIcon from '@mui/icons-material/Favorite';

function App() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get<Pet[]>('https://localhost:5001/api/pets');
        setPets(response.data);
      } catch (err) {
        setError('Failed to load pets. Please try again later.');
        console.error('Error fetching pets:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  if (loading) {
    return (
      <>
        <CssBaseline />
        <NavBar />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
          }}
        >
          <CircularProgress size={60} sx={{ mb: 2, color: '#ef6c00' }} />
          <Typography variant="h6" color="text.secondary">
            Loading your pets...
          </Typography>
        </Box>
      </>
    );
  }

  if (error) {
    return (
      <>
        <CssBaseline />
        <NavBar />
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Alert severity="error" sx={{ borderRadius: 2 }}>
            {error}
          </Alert>
        </Container>
      </>
    );
  }

  return (
    <>
      <CssBaseline />
      <NavBar />

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            transform: 'translate(50%, -50%)'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 150,
            height: 150,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            transform: 'translate(-50%, 50%)'
          }}
        />

        <Container maxWidth="lg">
          <Fade in timeout={1000}>
            <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
                <PetsIcon sx={{ fontSize: 48, mr: 2 }} />
                <FavoriteIcon sx={{ fontSize: 32, color: '#ff6b6b' }} />
              </Box>

              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                Welcome to PetFoodGenius
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  fontWeight: 300,
                  maxWidth: 600,
                  mx: 'auto'
                }}
              >
                Discover personalized nutrition recipes tailored for your beloved pets' unique needs
              </Typography>

              {pets.length > 0 && (
                <Paper
                  elevation={0}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    px: 3,
                    py: 1.5,
                    borderRadius: 25,
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                >
                  <PetsIcon sx={{ mr: 1, fontSize: 20 }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {pets.length} {pets.length === 1 ? 'Pet' : 'Pets'} Registered
                  </Typography>
                </Paper>
              )}
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{
        background: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)',
        minHeight: '100vh',
        py: 4
      }}>
        <Fade in timeout={1200}>
          <Box>
            <PetDashboard pets={pets} />
          </Box>
        </Fade>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
          color: 'white',
          py: 4,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body1" sx={{ mb: 1 }}>
            Made with <FavoriteIcon sx={{ fontSize: 16, color: '#ff6b6b', mx: 0.5 }} /> for your furry friends
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © 2024 PetFoodGenius. Nourishing pets, one recipe at a time.
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default App;
