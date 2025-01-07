import React from 'react';
import { Box, Typography, LinearProgress, linearProgressClasses } from '@mui/material';
import { styled } from '@mui/system';
import { SkillData } from '../utils/types';
import { getProgressColor } from '../utils/utils';

interface SkillProps {
    skill: SkillData;
}

const ColorfulLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    borderRadius: 4,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#e0e0e0',
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 4,
    },
}));

const Skill: React.FC<SkillProps> = ({ skill }) => {
    const { name, stat, src } = skill;

    return (
        <Box display="flex" alignItems="center" mb={1} sx={{ height: 40 }}>
            <Box sx={{ height: '100%', mr: 1 }}>
                <img
                    src={`../assets/skills/${src}`}
                    alt={name}
                    style={{ height: '100%', objectFit: 'contain' }}
                />
            </Box>
            <Box flexGrow={1}>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">{name}</Typography>
                    <Typography variant="body2" sx={{ color: getProgressColor(stat) }}>
                        {stat}%
                    </Typography>
                </Box>
                <ColorfulLinearProgress
                    variant="determinate"
                    value={stat}
                    sx={{
                        [`& .${linearProgressClasses.bar}`]: {
                            backgroundColor: getProgressColor(stat),
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default Skill;
