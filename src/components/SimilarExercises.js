import React from "react";
import { Typography, Box, Stack } from "@mui/material";


import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography color="#fff" variant="h3" mb={5}>
        Similar Workouts
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography color="#fff" variant="h3" mb={5}>
        Workouts That Use The Same Equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
         
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
