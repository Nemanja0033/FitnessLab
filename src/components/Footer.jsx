import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TextField, Button} from '@mui/material';


const Footer = () => (
  <Box sx={{ width: { lg: '100%', xs: '100%' } }} mt="80px" bgcolor="#51b2ff">
  <Stack sx={{ alignItems: 'flex-start' }} flexWrap="wrap" px="40px" pt="24px">
    <Typography fontWeight='700' variant='h4' color='white'>Free Workouts & Advice</Typography>
    <a>We send you the latest workouts, videos, expert guides and deals.</a>
    <Box sx={{ display: 'flex', mt: '20px', alignItems: 'center' }}>
      <TextField
        style={{ backgroundColor: 'white' }}
        sx={{ input: { fontWeight: '700', border: 'none' }, width: { lg: '700px', md: '350px', sm: '250px', xs: '250px' } }}
        height='46px'
        placeholder='Email Address'
        type='text'
      />
      <Button variant='contained' sx={{ height: '57px', width: { lg: '120px', sm: '70px' }, ml: '5px' }}>Subscribe</Button>
    </Box>
    <br />
  </Stack>
  <Box display='flex' justifyContent='space-around' alignItems='center' color='grey' textAlign='center' sx={{ width: { lg: '100%', xs: '100%' }, height: '100px'}} bgcolor='#242829'>
    <br />
    <Typography fontWeight='700' variant='h5'>
      Fitness<span style={{color: '#51b2ff'}}>Lab</span>
    </Typography>
    <a style={{color: 'grey'}} href="https://github.com/Nemanja0033">by nemanja0033.github.io</a>
    <br />
    <a style={{color: 'grey'}} href="">MuscleLand</a>
  </Box>
</Box>

);

export default Footer;