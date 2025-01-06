import React, { useRef, useEffect } from 'react';
import { Box } from '@mui/material'; // Optional MUI usage, feel free to adjust
import './SteamingCoffee.css';

export const SteamingCoffee: React.FC = () => {
    // Create three refs for the three steam puffs
    const steamRefs = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
    ];

    // Animation constants
    const xAmpPx = 4;    // Amplitude of X-axis movement in pixels
    const maxYPx = -60;  // Maximum Y-axis movement in pixels

    /**
     * animatePuff replays the rising steam puff animation indefinitely
     * by recursively calling itself when complete.
     */
    const animatePuff = (element: HTMLDivElement, durationMs: number) => {
        // Reset initial styles
        element.style.transform = 'translate(0px, 0px)';
        element.style.opacity = '0';

        const startTimeMs = performance.now();

        function frame(currentTimeMs: number) {
            const elapsedTimeMs = currentTimeMs - startTimeMs;
            const progressFraction = elapsedTimeMs / durationMs;

            if (progressFraction < 1) {
                // Animate X (sine wave)
                const xPositionPx = Math.sin(progressFraction * Math.PI * 2) * xAmpPx;
                // Flip if element has "flipped" class
                const adjustedXPositionPx = element.classList.contains('flipped')
                    ? -xPositionPx
                    : xPositionPx;

                // Animate Y:
                // For the first half of the progress, use an ease-in (quadratic)
                // Then continue linearly for the second half
                let yPositionPx = 0;
                if (progressFraction < 0.5) {
                    const halfProgress = progressFraction * 2; // 0 to 1
                    yPositionPx = maxYPx * (Math.pow(halfProgress, 2) / 2);
                } else {
                    // Past 50%, just scale linearly
                    yPositionPx = maxYPx * progressFraction;
                }

                // Animate Opacity (ease-in-out)
                let opacityFraction = 0;
                if (progressFraction < 0.5) {
                    // Ease in
                    opacityFraction = progressFraction * 2;
                } else {
                    // Ease out
                    opacityFraction = (1 - progressFraction) * 2;
                }

                // Apply dynamic transforms
                element.style.transform = `translate(${adjustedXPositionPx}px, ${yPositionPx}px)`;
                element.style.opacity = `${opacityFraction}`;

                requestAnimationFrame(frame);
            } else {
                // Animation finished, restart
                animatePuff(element, durationMs);
            }
        }

        requestAnimationFrame(frame);
    };

    // On mount, kick off each puff’s animation with a staggered start
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
        <Box className="steam-container">
            <div className="steam" ref={steamRefs[0]} />
            <div className="steam flipped" ref={steamRefs[1]} />
            <div className="steam" ref={steamRefs[2]} />
        </Box>
    );
};
