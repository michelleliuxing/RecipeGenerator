import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';
import { GRADIENTS } from '../../../utils';

interface PageContainerProps {
    children: ReactNode;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    withPadding?: boolean;
    background?: 'primary' | 'alt' | 'none';
}

export default function PageContainer({
    children,
    maxWidth = 'lg',
    withPadding = true,
    background = 'primary'
}: PageContainerProps) {
    const getBackground = () => {
        switch (background) {
            case 'primary':
                return GRADIENTS.background;
            case 'alt':
                return GRADIENTS.backgroundAlt;
            default:
                return 'none';
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: getBackground(),
                pt: withPadding ? { xs: '100px', md: '120px' } : 0,
                pb: withPadding ? 6 : 0
            }}
        >
            <Container maxWidth={maxWidth} sx={{ position: 'relative', zIndex: 1 }}>
                {children}
            </Container>
        </Box>
    );
} 