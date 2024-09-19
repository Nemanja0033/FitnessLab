import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import WorkoutsArticle from './WorkoutsArticle'


const Workouts = () => {
  return (
    <Stack mt='100px' id='workouts'>
        <Typography variant='h3' color='white' fontWeight='700' textAlign='center'>
            Explore <span style={{color: '#51b2ff'}}>Workouts</span>
        </Typography>
        <Typography  color='grey' mt='30px' variant='h5' textAlign='center'>
        Welcome to your personalized workout library! Whether you’re a beginner or a seasoned pro, we’ve got a variety of workouts tailored to your fitness level and goals. From strength training to cardio bursts, our diverse selection will keep your routine fresh and exciting.
        </Typography>
    <Box  className='workout-box' mt='50px' sx={{display: 'flex', justifyContent: 'center', width: { lg:'100%', md: '500px', xs: '300px'}}}>
        <img className='workout-men-img' src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/workoutsformen.jpg?itok=jALf6fyP" alt="" />
        <Button href='https://www.muscleandstrength.com/workouts/men' variant='contained'>Workout For Men</Button>
    </Box>
    <Box className='workout-box' mt='50px' sx={{display: 'flex', justifyContent: 'center', width: { lg:'100%', md: '500px', xs: '300px'}}}>
        <img className='workout-women-img' src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/workoutsforwomen.jpg?itok=G4rsV_4R" alt="" />
        <Button  href='https://www.muscleandstrength.com/workouts/women' variant='contained'>Workout For Women</Button>
    </Box>
    <WorkoutsArticle />
    </Stack>
  )
}

export default Workouts
