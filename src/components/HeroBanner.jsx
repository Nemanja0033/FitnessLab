import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
 
const HeroBanner = () => {
  return (
    <Box sx={{ mt: {lg: '212px', xs: '150px'}, ml: { lg: '10px', md: '150px', xs: '80px'}}} position='relative' p='20px'>
      <Typography color='#51b2ff' fontWeight='600' fontSize='46px'>
        FitnessLab
      </Typography>
      <Typography color='white' sx={{ fontSize: {lg: '50px', xs: '40px'}}}>
      Fit. Strong. Thrive.
      </Typography>
      <br />
      <Typography color='white' sx={{ fontSize: {lg: '32px', xs: '30px'}}} mb='20px'>
      <span style={{color: 'grey'}}>Find your Drive.</span>
      <br />
      <span style={{color: 'grey'}}>Start your Fitness Journey!</span>
      </Typography>
      <Button href='#workouts' style={{height: '50px'}} variant="contained">Explore Workouts</Button>
      <img src={HeroBannerImage} alt="hero" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner