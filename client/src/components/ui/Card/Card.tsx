import { Card as MuiCard, CardProps as MuiCardProps } from '@mui/material';
import { ReactNode } from 'react';

interface CardProps extends Omit<MuiCardProps, 'children' | 'variant'> {
    children: ReactNode;
    variant?: 'elevated' | 'outlined' | 'glass';
    hover?: boolean;
}

export default function Card({
    children,
    variant = 'elevated',
    hover = false,
    sx = {},
    ...props
}: CardProps) {
    const getVariantStyles = () => {
        switch (variant) {
            case 'glass':
                return {
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    border: '2px solid rgba(210, 105, 30, 0.1)',
                };
            case 'outlined':
                return {
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(210, 105, 30, 0.2)',
                };
            default:
                return {
                    background: 'rgba(255, 255, 255, 0.9)',
                    boxShadow: '0 4px 16px rgba(139, 69, 19, 0.1)',
                };
        }
    };

    const hoverStyles = hover ? {
        transition: 'all 0.3s ease',
        '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 16px 48px rgba(139, 69, 19, 0.2)',
            border: '2px solid rgba(210, 105, 30, 0.3)'
        }
    } : {};

    return (
        <MuiCard
            {...props}
            sx={{
                borderRadius: 4,
                ...getVariantStyles(),
                ...hoverStyles,
                ...sx
            }}
        >
            {children}
        </MuiCard>
    );
} 