import { Box } from '@mui/material';
import { ANIMATIONS } from '../../../utils';

interface FloatingElement {
    emoji: string;
    top: string;
    left?: string;
    right?: string;
    size: string;
    animationDuration: string;
    reverse?: boolean;
}

const floatingElements: FloatingElement[] = [
    {
        emoji: '🦴',
        top: '20%',
        right: '5%',
        size: '2rem',
        animationDuration: '4s'
    },
    {
        emoji: '🥩',
        top: '60%',
        left: '3%',
        size: '1.8rem',
        animationDuration: '3s',
        reverse: true
    },
    {
        emoji: '🐟',
        top: '40%',
        right: '15%',
        size: '1.5rem',
        animationDuration: '5s'
    }
];

export default function FloatingElements() {
    return (
        <>
            {floatingElements.map((element, index) => (
                <Box
                    key={index}
                    sx={{
                        position: 'fixed',
                        top: element.top,
                        left: element.left,
                        right: element.right,
                        fontSize: element.size,
                        opacity: 0.3,
                        animation: `float ${element.animationDuration} ease-in-out infinite ${element.reverse ? 'reverse' : ''}`,
                        zIndex: 0,
                        '@keyframes float': ANIMATIONS.float
                    }}
                >
                    {element.emoji}
                </Box>
            ))}
        </>
    );
} 