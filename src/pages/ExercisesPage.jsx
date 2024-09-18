import React from 'react'
import { Box } from '@mui/material'
import SearchExercises from '../components/SearchExercises.jsx'
import Exercises from '../components/Exercises.jsx'

const ExercisesPage = () => {

  return (
    <Box>
        <SearchExercises />
        <Exercises />
    </Box>
  )
}

export default ExercisesPage
