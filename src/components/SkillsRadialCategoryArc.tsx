import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSpringValue, animated } from '@react-spring/web';
import { getProgressColor } from '../utils/utils';

interface SkillsRadialCategoryArcProps {
    value: number;
    animate: boolean;
}

const SkillsRadialCategoryArc: React.FC<SkillsRadialCategoryArcProps> = ({ value, animate }) => {
    const size = 120;
    const radius = 50;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const halfCircumference = circumference / 2;

    const arcSpringValue = useSpringValue(0, {
        from: { val: 0 },
        to: { val: value },
        config: { tension: 170, friction: 26 },
        immediate: !animate,
    });

    return (
        <Box
            position="relative"
            width={size}
            height={size / 2}
            sx={{ overflow: 'visible' }}
        >
            <svg width={size} height={size / 2} style={{ transform: 'rotate(180deg)' }}>
                {/* Background path (gray) */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    stroke="#e0e0e0"
                    strokeWidth={strokeWidth}
                    strokeDasharray={halfCircumference + ' ' + halfCircumference}
                    strokeDashoffset={0}
                />

                {/* Animated progress path */}
                <animated.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${halfCircumference} ${halfCircumference}`}
                    strokeDashoffset={halfCircumference - (arcSpringValue.get() / 100) * halfCircumference}
                    strokeLinecap="round"
                    // animate stroke color
                    stroke={getProgressColor(arcSpringValue.get())}
                />
            </svg>

            {/* Numeric value in the center */}
            <Box
                position="absolute"
                top="50%"
                left="50%"
                sx={{
                    transform: 'translate(-50%, -50%) rotate(180deg)',
                }}
            >
                <animated.div
                    style={{
                        color: getProgressColor(arcSpringValue.get()),
                        transition: 'color 0.2s',
                    }}
                >
                    <Typography variant="h6" component="span" fontWeight="bold">
                        {arcSpringValue.get().toFixed(0)}
                    </Typography>
                </animated.div>
            </Box>
        </Box>
    );
};

export default SkillsRadialCategoryArc;
