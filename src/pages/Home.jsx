import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner.jsx';
import SearchExercises from '../components/SearchExercises.jsx'
import Exercises from '../components/Exercises.jsx'; 
import Articles from '../components/Articles.jsx';
import Workouts from '../components/Workouts.jsx';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]); 

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
      <Articles />
      <Workouts />
    </Box>
  );
};

export default Home;