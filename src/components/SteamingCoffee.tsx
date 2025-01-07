import React, { useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import './SteamingCoffee.css';

export const SteamingCoffee: React.FC = () => {
    // Create refs for the three steam puffs with non-null assertion to avoid TypeScript errors
    const steamRefs = [
        useRef<HTMLDivElement>(null!),
        useRef<HTMLDivElement>(null!),
        useRef<HTMLDivElement>(null!),
    ];

    // Animation constants
    const xAmpPx = 4; // Amplitude of X-axis movement in pixels
    const maxYPx = -60; // Maximum Y-axis movement in pixels

    /**
     * animatePuff replays the rising steam puff animation indefinitely
     */
    const animatePuff = (element: HTMLDivElement, durationMs: number) => {
        // Reset initial styles
        element.style.transform = 'translate(0px, 0px)';
        element.style.opacity = '0';

        const startTimeMs = performance.now();

        const frame = (currentTimeMs: number) => {
            const elapsedTimeMs = currentTimeMs - startTimeMs;
            const progressFraction = elapsedTimeMs / durationMs;

            if (progressFraction < 1) {
                // Animate X (sine wave)
                const xPositionPx = Math.sin(progressFraction * Math.PI * 2) * xAmpPx;
                const adjustedXPositionPx = element.classList.contains('flipped')
                    ? -xPositionPx
                    : xPositionPx;

                // Animate Y (ease-in for first half, linear for second half)
                const yPositionPx =
                    progressFraction < 0.5
                        ? maxYPx * (Math.pow(progressFraction * 2, 2) / 2)
                        : maxYPx * progressFraction;

                // Animate opacity (ease-in-out)
                const opacityFraction =
                    progressFraction < 0.5
                        ? progressFraction * 2
                        : (1 - progressFraction) * 2;

                // Apply styles
                element.style.transform = `translate(${adjustedXPositionPx}px, ${yPositionPx}px)`;
                element.style.opacity = `${opacityFraction}`;

                requestAnimationFrame(frame);
            } else {
                // Restart animation
                animatePuff(element, durationMs);
            }
        };

        requestAnimationFrame(frame);
    };

    // Start animations for all puffs with a staggered start
    useEffect(() => {
        steamRefs.forEach((steamRef, index) => {
            if (steamRef.current) {
                setTimeout(() => {
                    animatePuff(steamRef.current!, 6000);
                }, index * 2000);
            }
        });
    }, []);

    return (
        <Box
            sx={{
                position: 'relative',
                width: '40px',
                height: '0px',
                zIndex: 1,
                marginTop: '-20px', // Adjust as needed
            }}
        >
            {steamRefs.map((steamRef, index) => (
                <Box
                    key={index}
                    ref={steamRef}
                    sx={{
                        position: 'absolute',
                        width: '4px',
                        height: '33px',
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)',
                        borderRadius: '50%',
                        opacity: 0,
                        transform: `scaleX(${index === 1 ? '-1' : '1'})`,
                    }}
                />
            ))}
        </Box>
    );
};
