import { Box, Paper, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { COLORS } from '../../../../utils';

interface PetStatsProps {
    petCount: number;
    recipeCount?: number;
}

export default function PetStats({ petCount, recipeCount = 24 }: PetStatsProps) {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            mb: 4,
            flexWrap: 'wrap'
        }}>
            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '2px solid rgba(210, 105, 30, 0.1)',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    minWidth: 120,
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 12px 40px rgba(139, 69, 19, 0.15)'
                    }
                }}
            >
                <FavoriteIcon sx={{ fontSize: 30, color: COLORS.primary, mb: 1 }} />
                <Typography variant="h4" sx={{ fontWeight: 800, color: COLORS.brown }}>
                    {petCount}
                </Typography>
                <Typography variant="body2" sx={{ color: COLORS.brown, opacity: 0.8 }}>
                    Happy {petCount === 1 ? 'Pet' : 'Pets'}
                </Typography>
            </Paper>

            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '2px solid rgba(210, 105, 30, 0.1)',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    minWidth: 120,
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 12px 40px rgba(139, 69, 19, 0.15)'
                    }
                }}
            >
                <RestaurantIcon sx={{ fontSize: 30, color: COLORS.primary, mb: 1 }} />
                <Typography variant="h4" sx={{ fontWeight: 800, color: COLORS.brown }}>
                    {recipeCount}
                </Typography>
                <Typography variant="body2" sx={{ color: COLORS.brown, opacity: 0.8 }}>
                    Recipes
                </Typography>
            </Paper>
        </Box>
    );
} 