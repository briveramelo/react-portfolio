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
        width: "100%",
        "&:hover .colored": {
          opacity: "1 !important",
        },
        "&:hover .white": {
          opacity: "0 !important",
        },
        "&:hover .text": {
          opacity: 1,
        },
      }}
    >
      <Box maxWidth={"lg"} mx={"auto"}>
        <Typography variant="h1" sx={{ color: textColor, mt: 4 }}>
          {title}
        </Typography>
        <Grid
          container
          spacing={12}
          justifyContent="center"
          // alignItems="center"
          pt={1}
        >
          {data.map((item, index) => (
            <Grid key={`${item.name}-${index}`} item xs={10} sm={6} md={4}>
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
