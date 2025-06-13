import { Box, CircularProgress, Typography } from '@mui/material';

interface LoadingSpinnerProps {
    message?: string;
    size?: number;
    fullScreen?: boolean;
}

export default function LoadingSpinner({
    message = 'Loading...',
    size = 50,
    fullScreen = false
}: LoadingSpinnerProps) {
    const containerStyles = fullScreen ? {
        position: 'fixed' as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #f9dba8 0%, #fbf5eb 50%, #fef7e0 100%)',
        zIndex: 9999
    } : {};

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: fullScreen ? '100vh' : '200px',
                pt: fullScreen ? { xs: '100px', md: '120px' } : 0,
                ...containerStyles
            }}
        >
            <Box
                component="img"
                src="/logo_clear_background.PNG"
                alt="PawfectBite Logo"
                sx={{
                    height: 80,
                    width: 'auto',
                    mb: 3,
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                        '0%': { transform: 'scale(1)' },
                        '50%': { transform: 'scale(1.05)' },
                        '100%': { transform: 'scale(1)' }
                    }
                }}
            />
            <CircularProgress
                size={size}
                thickness={4}
                sx={{
                    mb: 2,
                    color: '#D2691E',
                    '& .MuiCircularProgress-circle': {
                        strokeLinecap: 'round'
                    }
                }}
            />
            <Typography variant="h6" sx={{ color: '#8B4513', fontWeight: 500 }}>
                {message}
            </Typography>
        </Box>
    );
} 