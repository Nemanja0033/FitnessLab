import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'


const Workouts = () => {
  return (
    <Stack mt='100px' id='workouts'>
        <Typography variant='h3' color='white' fontWeight='700' textAlign='center'>
            Explore <span style={{color: '#51b2ff'}}>Workouts</span>
        </Typography>
    <Box  className='workout-box' mt='50px' sx={{display: 'flex', justifyContent: 'center', width: { lg:'100%', md: '500px', xs: '300px'}}}>
        <img className='workout-men-img' src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/workoutsformen.jpg?itok=jALf6fyP" alt="" />
        <Button href='https://www.muscleandstrength.com/workouts/men' variant='contained'>Workout For Men</Button>
    </Box>
    <Box className='workout-box' mt='50px' sx={{display: 'flex', justifyContent: 'center', width: { lg:'100%', md: '500px', xs: '300px'}}}>
        <img className='workout-women-img' src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/workoutsforwomen.jpg?itok=G4rsV_4R" alt="" />
        <Button  href='https://www.muscleandstrength.com/workouts/women' variant='contained'>Workout For Women</Button>
    </Box>
    </Stack>
  )
}

export default Workouts
