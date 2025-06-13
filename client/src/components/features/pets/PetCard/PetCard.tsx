import {
    CardContent,
    Typography,
    Box,
    Chip,
    Fade
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CakeIcon from '@mui/icons-material/Cake';
import ScaleIcon from '@mui/icons-material/Scale';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SetMealIcon from '@mui/icons-material/SetMeal';
import { Card, Button } from '../../../ui';
import { COLORS, GRADIENTS } from '../../../../utils';
import type { Pet } from '../../../../types';

interface PetCardProps {
    pet: Pet;
    index?: number;
    onCreateRecipe?: (pet: Pet) => void;
}

export default function PetCard({ pet, index = 0, onCreateRecipe }: PetCardProps) {
    const handleCreateRecipe = () => {
        onCreateRecipe?.(pet);
    };

    return (
        <Fade in timeout={1400 + index * 200}>
            <Card variant="glass" hover>
                <CardContent sx={{ p: 4 }}>
                    {/* Pet Header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Box
                            component="img"
                            src="/pets/cat3.png"
                            alt={pet.name}
                            sx={{
                                width: 64,
                                height: 64,
                                borderRadius: '50%',
                                objectFit: 'cover',
                                mr: 2,
                                border: `3px solid rgba(${COLORS.primary}, 0.2)`,
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}
                        />
                        <Box sx={{ flex: 1 }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 800,
                                    color: COLORS.brown,
                                    mb: 0.5,
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                {pet.name}
                                <FavoriteIcon sx={{ ml: 1, fontSize: 20, color: '#ff6b6b' }} />
                            </Typography>
                            <Typography variant="body1" sx={{ color: COLORS.brown, opacity: 0.8 }}>
                                {pet.breed}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Pet Details Grid */}
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 2,
                        mb: 3
                    }}>
                        <Box sx={{
                            textAlign: 'center',
                            p: 2,
                            borderRadius: 3,
                            background: `rgba(210, 105, 30, 0.05)`
                        }}>
                            <CakeIcon sx={{ fontSize: 24, color: COLORS.primary, mb: 1 }} />
                            <Typography variant="body2" sx={{
                                color: COLORS.brown,
                                opacity: 0.7,
                                fontSize: '0.75rem'
                            }}>
                                Age
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: COLORS.brown }}>
                                {pet.age} years
                            </Typography>
                        </Box>
                        <Box sx={{
                            textAlign: 'center',
                            p: 2,
                            borderRadius: 3,
                            background: `rgba(210, 105, 30, 0.05)`
                        }}>
                            <ScaleIcon sx={{ fontSize: 24, color: COLORS.primary, mb: 1 }} />
                            <Typography variant="body2" sx={{
                                color: COLORS.brown,
                                opacity: 0.7,
                                fontSize: '0.75rem'
                            }}>
                                Weight
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: COLORS.brown }}>
                                {pet.weight} kg
                            </Typography>
                        </Box>
                    </Box>

                    {/* Activity & Health */}
                    <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <DirectionsRunIcon sx={{ fontSize: 20, color: COLORS.primary, mr: 1 }} />
                            <Typography variant="body2" sx={{
                                color: COLORS.brown,
                                opacity: 0.7,
                                mr: 'auto'
                            }}>
                                Activity Level
                            </Typography>
                            <Chip
                                label={pet.activityLevel}
                                size="small"
                                sx={{
                                    background: GRADIENTS.primary,
                                    color: 'white',
                                    fontWeight: 600,
                                    textTransform: 'capitalize'
                                }}
                            />
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <HealthAndSafetyIcon sx={{ fontSize: 20, color: COLORS.primary, mr: 1 }} />
                            <Typography variant="body2" sx={{
                                color: COLORS.brown,
                                opacity: 0.7,
                                mr: 'auto'
                            }}>
                                Health
                            </Typography>
                            {pet.healthIssues !== "None" ? (
                                <Chip
                                    label={pet.healthIssues}
                                    size="small"
                                    sx={{
                                        background: 'rgba(255, 87, 87, 0.1)',
                                        color: COLORS.error,
                                        border: '1px solid rgba(255, 87, 87, 0.3)',
                                        fontWeight: 500
                                    }}
                                />
                            ) : (
                                <Chip
                                    label="Healthy"
                                    size="small"
                                    sx={{
                                        background: 'rgba(76, 175, 80, 0.1)',
                                        color: COLORS.success,
                                        border: '1px solid rgba(76, 175, 80, 0.3)',
                                        fontWeight: 500
                                    }}
                                />
                            )}
                        </Box>
                    </Box>

                    {/* Recipe Button */}
                    <Button
                        fullWidth
                        variant="primary"
                        startIcon={<SetMealIcon />}
                        onClick={handleCreateRecipe}
                        sx={{ py: 1.5 }}
                    >
                        Create Recipe for {pet.name}
                    </Button>
                </CardContent>
            </Card>
        </Fade>
    );
} 