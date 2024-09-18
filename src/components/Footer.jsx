import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


const Footer = () => (
  <Box sx={{width: { lg: '100%', xs: '100%'}}} mt="80px" bgcolor="#51b2ff">
    <Stack sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <Typography fontWeight='700' variant='h4' color='white'>FitenssLab</Typography>
      <a href="https://github.com/Nemanja0033">©Nemanja0033.github.io</a>
      <br />
    </Stack>
  </Box>
);

export default Footer;