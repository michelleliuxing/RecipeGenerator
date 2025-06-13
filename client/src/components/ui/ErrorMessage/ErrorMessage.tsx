import { Alert, Box, Container } from '@mui/material';

interface ErrorMessageProps {
    message: string;
    fullScreen?: boolean;
}

export default function ErrorMessage({ message, fullScreen = false }: ErrorMessageProps) {
    const content = (
        <Alert
            severity="error"
            sx={{
                borderRadius: 3,
                background: 'rgba(255, 235, 238, 0.8)',
                border: '1px solid rgba(211, 47, 47, 0.2)',
                color: '#8B4513'
            }}
        >
            {message}
        </Alert>
    );

    if (fullScreen) {
        return (
            <Box
                sx={{
                    minHeight: '100vh',
                    background: 'linear-gradient(135deg, #f9dba8 0%, #fbf5eb 50%, #fef7e0 100%)',
                    pt: { xs: '100px', md: '120px' },
                    px: 2
                }}
            >
                <Container maxWidth="md">
                    {content}
                </Container>
            </Box>
        );
    }

    return content;
} 