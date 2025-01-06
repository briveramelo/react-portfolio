import React, { useState } from "react";
import SkillCategory from "./SkillCategory";
import { statsData } from "../data/statsData";
import {Box, Switch, Typography} from "@mui/material";

const SkillsSection: React.FC = () => {
    const [animate, setAnimate] = useState<boolean>(true);

    const toggleAnimation = () => {
        setAnimate((prev) => !prev);
    };

    return (
        <Box sx={{ p: 2 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h4">My Skills</Typography>
                <Box display="flex" alignItems="center">
                    <Typography>Animate</Typography>
                    <Switch checked={animate} onChange={toggleAnimation} />
                </Box>
            </Box>

            {/* Render each category */}
            {statsData.map((category, index) => (
                <SkillCategory key={index} categoryData={category} animate={animate} />
            ))}
        </Box>
    );
};

export default SkillsSection;