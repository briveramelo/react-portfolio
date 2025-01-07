import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Box } from '@mui/material';

export const BeatingHeart: React.FC = () => {
    // Initialize the ref with a non-null assertion (!)
    const heartRef = useRef<HTMLSpanElement>(null!);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const minHeartRateBPM = 35.0;
    const maxHeartRateBPM = 50.0;
    const fixedAnimationSec = 0.5;

    // Update mouse position on mouse move
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const calculatePauseDuration = useCallback(() => {
        const heartRect = heartRef.current?.getBoundingClientRect();
        if (!heartRect) return 1; // fallback

        const heartCenter = {
            x: heartRect.left + heartRect.width / 2,
            y: heartRect.top + heartRect.height / 2,
        };
        const distanceToHeart = Math.sqrt(
            Math.pow(mousePosition.x - heartCenter.x, 2) +
            Math.pow(mousePosition.y - heartCenter.y, 2)
        );
        const maxDistance = window.innerWidth;
        const heartRateBPM = Math.max(
            minHeartRateBPM,
            Math.min(
                maxHeartRateBPM,
                minHeartRateBPM +
                (maxHeartRateBPM - minHeartRateBPM) *
                (1 - distanceToHeart / maxDistance)
            )
        );

        const totalCycleDurationSec = 60.0 / heartRateBPM;
        return totalCycleDurationSec - fixedAnimationSec;
    }, [mousePosition.x, mousePosition.y]);

    const startHeartbeat = useCallback(() => {
        if (heartRef.current) {
            heartRef.current.style.animation = `cardiacCycle ${fixedAnimationSec}s linear 1`;
        }
    }, []);

    const handleAnimationEnd = useCallback(() => {
        if (heartRef.current) {
            heartRef.current.style.animation = 'none';
        }

        const pauseDurationSec = calculatePauseDuration();
        setTimeout(() => {
            startHeartbeat();
        }, pauseDurationSec * 1000);
    }, [calculatePauseDuration, startHeartbeat]);

    // Start the first animation on mount
    useEffect(() => {
        startHeartbeat();
    }, [startHeartbeat]);

    return (
        <Box display="inline-block">
            <span
                ref={heartRef}
                className="heart"
                onAnimationEnd={handleAnimationEnd}
                aria-label="Beating Heart"
            >
                🫀
            </span>
        </Box>
    );
};
