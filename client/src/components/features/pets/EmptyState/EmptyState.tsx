import { Box, Typography, Fade } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '../../../ui';
import { COLORS, ANIMATIONS } from '../../../../utils';

interface EmptyStateProps {
    onAddPet?: () => void;
}

export default function EmptyState({ onAddPet }: EmptyStateProps) {
    return (
        <Fade in timeout={1000}>
            <Box sx={{ textAlign: 'center', py: 8 }}>
                <Box
                    sx={{
                        fontSize: '4rem',
                        mb: 3,
                        animation: 'gentle-bounce 2s ease-in-out infinite',
                        '@keyframes gentle-bounce': ANIMATIONS.gentleBounce
                    }}
                >
                    🐾
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700, color: COLORS.brown, mb: 2 }}>
                    No furry friends yet!
                </Typography>
                <Typography variant="body1" sx={{ color: COLORS.brown, opacity: 0.8, mb: 4 }}>
                    Add your first pet to start creating personalised recipes
                </Typography>
                <Button
                    variant="primary"
                    size="large"
                    startIcon={<AddIcon />}
                    onClick={onAddPet}
                    sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem'
                    }}
                >
                    Add Your First Pet
                </Button>
            </Box>
        </Fade>
    );
} 