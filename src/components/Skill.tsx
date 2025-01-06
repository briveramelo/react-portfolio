import React from 'react';
import { Box, Typography, LinearProgress, linearProgressClasses } from '@mui/material';
import { styled } from '@mui/system';
import { useSpringValue, animated, to } from '@react-spring/web';
import { SkillData } from '../utils/types';
import { getProgressColor } from '../utils/utils';

interface SkillProps {
    skill: SkillData;
    animate: boolean;
}

// We wrap MUI's LinearProgress in an `animated()` so we can
// pass animated values to "value" prop.
const AnimatedLinearProgress = animated(LinearProgress);

// Optionally, style it (like the old version) for consistent color
const ColorfulLinearProgress = styled(AnimatedLinearProgress)(({ theme }) => ({
    height: 8,
    borderRadius: 4,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#e0e0e0',
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 4,
    },
}));

const Skill: React.FC<SkillProps> = ({ skill, animate }) => {
    const { name, stat, src } = skill;

    const barValue = useSpringValue(0, {
        from: { val: 0 },
        to: { val: stat },
        config: { tension: 170, friction: 26 },
        immediate: !animate,
    });

    return (
        <Box
            display="flex"
            alignItems="center"
            mb={1}
            sx={{ height: 40 }}
        >
            {/* Icon */}
            <Box sx={{ height: '100%', mr: 1 }}>
                <img
                    src={`'../assets/skills/${src}`}
                    alt={name}
                    style={{ height: '100%', objectFit: 'contain' }}
                />
            </Box>

            {/* Skill name & bar */}
            <Box flexGrow={1}>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">{name}</Typography>

                    {/* Animated text color + numeric value */}
                    <animated.span
                        sx={{
                            color: getProgressColor(barValue.get()),
                            transition: 'color 0.2s',
                        }}
                    >
                        <div>{barValue.get().toFixed(0)}</div>
                    </animated.span>
                </Box>

                {/* Animated MUI LinearProgress */}
                <ColorfulLinearProgress
                    variant="determinate"
                    // The "value" prop is animated via react-spring
                    value={barValue}
                    sx={{
                        [`& .${linearProgressClasses.bar}`]: {
                            // Animate bar color
                            backgroundColor: getProgressColor(barValue.get()),
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default Skill;
