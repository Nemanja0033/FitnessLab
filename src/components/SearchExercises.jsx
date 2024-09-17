import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerecisesOptions, fetchData } from '../utils/fetchData';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => { 

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyPartsData = async () => {
      try {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerecisesOptions);
        setBodyParts(['all', ...bodyPartsData]);
      } catch (error) {
        console.error('Error fetching body parts data:', error);
      }
    };

    fetchBodyPartsData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerecisesOptions);
        const searchedExercises = exerciseData.filter(exercise =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
        );

        setSearch('');
        setExercises(searchedExercises);
      } catch (error) {
        console.error('Error fetching exercises data:', error);
        setExercises([]); 
      }
    }
  };

  return (
    <Stack sx={{ mt: { lg: '300px', xs: '200px' } }} alignItems='center' justifyContent='center' p='20px'>
      <Typography mb='20px' color='white' fontWeight='700' sx={{ fontSize: { lg: '46px', xs: '22px' } }}>
        Search for the <span style={{ color: '#51b2ff' }}>Workouts</span>
      </Typography>
      <Box position='relative' mb='72px' color='white'>
        <TextField
          style={{ backgroundColor: 'white' }}
          sx={{ input: { fontWeight: '700', border: 'none' }, width: { lg: '1000px', md: '450px', sm: '350px', xs: '200px' } }}
          height='76px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
        />
        <Button onClick={handleSearch} variant='contained' sx={{ height: '57px', width: { lg: '120px', sm: '70px' } }}>
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;