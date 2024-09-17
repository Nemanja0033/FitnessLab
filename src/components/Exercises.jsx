import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log('Exercises prop:', exercises);

  return (
    <Box color='white' id='exercises' sx={{ mt: { lg: '50px' } }} p='20px' textAlign='center'>
      <Typography sx={{ fontSize: { lg: '32px', xs: '26px' } }}>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap='wrap' justifyContent='center'>
        {Array.isArray(exercises) && exercises.length > 0 ? (
          exercises.map((exercise, index) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))
        ) : (
          <p>No exercises found.</p>
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;