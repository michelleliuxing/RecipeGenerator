export const COLORS = {
    primary: '#D2691E',
    secondary: '#CD853F',
    brown: '#8B4513',
    cream: '#f9dba8',
    lightCream: '#fbf5eb',
    white: '#fef7e0',
    error: '#ff5757',
    success: '#4caf50',
} as const;

export const GRADIENTS = {
    primary: 'linear-gradient(45deg, #D2691E 30%, #CD853F 90%)',
    primaryReverse: 'linear-gradient(45deg, #CD853F 30%, #D2691E 90%)',
    background: 'linear-gradient(135deg, #f9dba8 0%, #fbf5eb 30%, rgb(249, 233, 201) 70%, #fef7e0 100%)',
    backgroundAlt: 'linear-gradient(135deg, #f9dba8 0%, #fbf5eb 50%, #fef7e0 100%)',
    header: 'linear-gradient(135deg, rgba(249, 219, 168, 0.95) 0%, rgba(251, 245, 235, 0.95) 50%, rgba(249, 233, 201, 0.95) 100%)',
} as const;

export const ANIMATIONS = {
    float: {
        '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
        '50%': { transform: 'translateY(-20px) rotate(5deg)' }
    },
    pulse: {
        '0%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.05)' },
        '100%': { transform: 'scale(1)' }
    },
    gentleBounce: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-10px)' }
    }
} as const;

export const ACTIVITY_LEVELS = [
    { value: 'low', label: 'Low' },
    { value: 'moderate', label: 'Moderate' },
    { value: 'high', label: 'High' }
] as const; 