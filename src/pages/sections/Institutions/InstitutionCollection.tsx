import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Institution from "./Institution";
import { InstitutionData } from "../../../data/institutionData";

interface InstitutionCollectionProps {
  title: string;
  data: InstitutionData[];
  textColor: string;
  invertImage: boolean;
}

const InstitutionCollection: React.FC<InstitutionCollectionProps> = ({
  title,
  data,
  textColor,
  invertImage,
}) => {
  return (
    <Box
      sx={{
        px: "clamp(16px, 5vw, 32px)",
        width: "100%",
      }}
    >
      <Box maxWidth={"lg"} mx={"auto"}>
        <Typography variant="h3" sx={{ color: textColor, mt: 0 }}>
          {title}
        </Typography>
        <Grid container spacing={12} justifyContent="center" pt={1}>
          {data.map((item, index) => (
            <Grid key={`${item.name}-${index}`} item xs={12} sm={6} md={4}>
              <Institution
                institution={item}
                textColor={textColor}
                invertImage={invertImage}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default InstitutionCollection;
