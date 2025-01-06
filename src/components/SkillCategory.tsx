import React, { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import Skill from './Skill';
import { StatsCategory } from '../utils/types';
import SkillsRadialCategoryArc from './SkillsRadialCategoryArc';

interface SkillCategoryProps {
    categoryData: StatsCategory;
    animate: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ categoryData, animate }) => {
    const { category, stats } = categoryData;

    // Compute average
    const average = useMemo(() => {
        if (!stats || stats.length === 0) return 0;
        const sum = stats.reduce((acc, s) => acc + s.stat, 0);
        return Math.round(sum / stats.length);
    }, [stats]);

    return (
        <Box sx={{ mb: 4 }}>
            {/* Category name */}
            <Typography variant="h5" mb={2}>
                {category}
            </Typography>

            {/* Radial arc for category average */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SkillsRadialCategoryArc value={average} animate={animate} />
            </Box>

            {/* Skills list */}
            {stats.map((skill, idx) => (
                <Skill key={idx} skill={skill} animate={animate} />
            ))}
        </Box>
    );
};

export default SkillCategory;
