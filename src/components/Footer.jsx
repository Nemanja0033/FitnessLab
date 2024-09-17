import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box sx={{width: { lg: '100%', xs: '100%'}}} mt="80px" bgcolor="black">
    <Stack sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '40px', height: '40px' }} />
      <Typography variant='h4' color='white'>Fitenss <span style={{color: '#51b2ff'}}>Lab</span></Typography>
      <a href="https://github.com/Nemanja0033">Nemanja0033.github.io</a>
    </Stack>
  </Box>
);

export default Footer;