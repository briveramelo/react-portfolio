import React from "react";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface StarRatingProps {
  count: number; // 1–5
}

const StarRating: React.FC<StarRatingProps> = ({ count }) => {
  return (
    <Box display="flex">
      {Array.from({ length: count }, (_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          style={{
            color: "#FFD700",
            marginRight: 4,
          }}
        />
      ))}
    </Box>
  );
};

export default StarRating;
