import { Typography, Box, Fade, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import PetsIcon from '@mui/icons-material/Pets';
import {
    PageContainer,
    FloatingElements,
    LoadingSpinner,
    ErrorMessage,
    PetCard,
    PetStats,
    EmptyState
} from '../components';
import { usePets } from '../hooks';
import { COLORS, GRADIENTS } from '../utils';
import type { Pet } from '../types';

export default function MyPetsPage() {
    const { pets, loading, error } = usePets();

    if (loading) {
        return <LoadingSpinner fullScreen message="Loading your furry friends..." />;
    }

    if (error) {
        return <ErrorMessage message={error} fullScreen />;
    }

    const handleCreateRecipe = (pet: Pet) => {
        // TODO: Navigate to recipe creation page
        console.log('Creating recipe for:', pet.name);
    };

    const handleAddPet = () => {
        // TODO: Open add pet modal/form
        console.log('Add new pet');
    };

    return (
        <>
            <FloatingElements />
            <PageContainer>
                {/* Header Section */}
                <Fade in timeout={800}>
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
                            <PetsIcon sx={{ fontSize: 50, color: COLORS.primary, mr: 2 }} />
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 1000,
                                    background: GRADIENTS.primary,
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontSize: { xs: '2.5rem', md: '3.5rem' }
                                }}
                            >
                                My Purmily
                            </Typography>
                        </Box>

                        <Typography
                            variant="h6"
                            sx={{
                                color: COLORS.brown,
                                fontWeight: 400,
                                maxWidth: 600,
                                mx: 'auto',
                                mb: 4
                            }}
                        >
                            Meet your adorable companions and create pawsome recipes just for them! 🐾
                        </Typography>

                        {/* Stats Cards */}
                        <PetStats petCount={pets.length} />
                    </Box>
                </Fade>

                {/* Content */}
                {pets.length === 0 ? (
                    <EmptyState onAddPet={handleAddPet} />
                ) : (
                    <Fade in timeout={1200}>
                        <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                sm: 'repeat(2, 1fr)',
                                lg: 'repeat(3, 1fr)'
                            },
                            gap: 4
                        }}>
                            {pets.map((pet, index) => (
                                <PetCard
                                    key={pet.id}
                                    pet={pet}
                                    index={index}
                                    onCreateRecipe={handleCreateRecipe}
                                />
                            ))}
                        </Box>
                    </Fade>
                )}

                {/* Floating Action Button */}
                <Fab
                    onClick={handleAddPet}
                    sx={{
                        position: 'fixed',
                        bottom: 32,
                        right: 32,
                        background: GRADIENTS.primary,
                        color: 'white',
                        width: 64,
                        height: 64,
                        boxShadow: '0 8px 24px rgba(210, 105, 30, 0.4)',
                        '&:hover': {
                            background: GRADIENTS.primaryReverse,
                            transform: 'scale(1.05)',
                            boxShadow: '0 12px 32px rgba(210, 105, 30, 0.5)'
                        }
                    }}
                >
                    <AddIcon sx={{ fontSize: 28 }} />
                </Fab>
            </PageContainer>
        </>
    );
} 