import React, {useRef, useEffect, useState, useCallback} from 'react';
import {Box} from '@mui/material';
import './BeatingHeart.css';

export const BeatingHeart: React.FC = () => {
    const heartRef = useRef<HTMLSpanElement>(null);

    // Store mouse position in local state
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    // Minimum/maximum BPM (beats per minute)
    const minHeartRateBPM = 35.0;
    const maxHeartRateBPM = 50.0;
    // Fixed animation duration (in seconds) for .5s heartbeat
    const fixedAnimationSec = 0.5;

    // Update the mouse position on mouse move
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({x: event.clientX, y: event.clientY});
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    /**
     * Calculate the pause duration based on mouse distance to the heart
     * The further the mouse, the slower the heartbeat (and vice versa).
     */
    const calculatePauseDuration = useCallback(() => {
        if (!heartRef.current) return 1; // fallback

        const heartRect = heartRef.current.getBoundingClientRect();
        const heartCenter = {
            x: heartRect.left + heartRect.width / 2,
            y: heartRect.top + heartRect.height / 2,
        };

        // Distance between mouse and heart center
        const distanceToHeart = Math.sqrt(
            Math.pow(mousePosition.x - heartCenter.x, 2) +
            Math.pow(mousePosition.y - heartCenter.y, 2)
        );

        // Use the viewport width as a rough "max distance"
        const maxDistance = window.innerWidth;

        // Interpolate heart rate between min and max based on distance
        const heartRateBPM = Math.max(
            minHeartRateBPM,
            Math.min(
                maxHeartRateBPM,
                minHeartRateBPM +
                (maxHeartRateBPM - minHeartRateBPM) *
                (1 - distanceToHeart / maxDistance)
            )
        );

        // Total cycle duration (in seconds) = 60 / BPM
        const totalCycleDurationSec = 1.0 / (heartRateBPM / 60.0);

        // Pause duration = total cycle minus the 0.5s animation
        const pauseDurationSec = totalCycleDurationSec - fixedAnimationSec;
        return pauseDurationSec;
    }, [mousePosition.x, mousePosition.y]);

    /**
     * Start the heartbeat animation (adding the CSS animation to the heart).
     */
    const startHeartbeat = useCallback(() => {
        if (heartRef.current) {
            heartRef.current.style.animation = `cardiacCycle ${fixedAnimationSec}s linear 1`;
        }
    }, []);

    /**
     * Handle what happens when the animation ends:
     * 1) Remove the animation
     * 2) Wait for the pause
     * 3) Restart the animation
     */
    const handleAnimationEnd = useCallback(() => {
        if (heartRef.current) {
            heartRef.current.style.animation = 'none';
        }

        const pauseDurationSec = calculatePauseDuration();
        setTimeout(() => {
            startHeartbeat();
        }, pauseDurationSec * 1000);
    }, [calculatePauseDuration, startHeartbeat]);

    // On mount, start the first animation
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
