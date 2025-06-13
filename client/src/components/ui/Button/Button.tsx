import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { ReactNode } from 'react';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    loading?: boolean;
}

export default function Button({
    children,
    variant = 'primary',
    loading = false,
    disabled,
    sx = {},
    ...props
}: ButtonProps) {
    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return {
                    background: 'linear-gradient(45deg, #D2691E 30%, #CD853F 90%)',
                    color: 'white',
                    fontWeight: 600,
                    '&:hover': {
                        background: 'linear-gradient(45deg, #CD853F 30%, #D2691E 90%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 24px rgba(210, 105, 30, 0.4)'
                    }
                };
            case 'secondary':
                return {
                    background: 'rgba(139, 69, 19, 0.1)',
                    color: '#8B4513',
                    fontWeight: 500,
                    '&:hover': {
                        background: 'rgba(139, 69, 19, 0.2)',
                        transform: 'translateY(-1px)'
                    }
                };
            case 'outline':
                return {
                    background: 'transparent',
                    color: '#8B4513',
                    border: '2px solid rgba(210, 105, 30, 0.3)',
                    fontWeight: 500,
                    '&:hover': {
                        background: 'rgba(210, 105, 30, 0.1)',
                        borderColor: '#D2691E'
                    }
                };
            case 'ghost':
                return {
                    background: 'transparent',
                    color: '#8B4513',
                    fontWeight: 500,
                    '&:hover': {
                        background: 'rgba(139, 69, 19, 0.08)'
                    }
                };
            default:
                return {};
        }
    };

    return (
        <MuiButton
            {...props}
            disabled={disabled || loading}
            sx={{
                borderRadius: 3,
                textTransform: 'none',
                transition: 'all 0.3s ease',
                ...getVariantStyles(),
                ...sx
            }}
        >
            {loading ? 'Loading...' : children}
        </MuiButton>
    );
} 