import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'


const Navbar = () => {
  return (
    <div>
      <Stack direction='row' justifyContent='space-around' sx={{ gap: { sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} px='20px'>
        <Link to='/'>
          <img src={Logo} alt="logo" style={{width: '55px', height: "55px", marginTop: '20px', marginLeft: '20px'}} />
        </Link>
        <Stack sx={{gap: {lg: '40px', md: '30px', sm: '24px', xs: '8px'}, fontSize: {lg: '24px', md: '24', xs: '14px'}}} direction='row' alignItems='flex-end'> 
        <Link to='/' style={{textDecoration: 'none', color: 'white', borderBottom: '3px solid #51b2ff'}}>Home</Link>
        <Link to='/workouts' style={{textDecoration: 'none', color: 'white'}}>Workouts</Link>
        <Link to='/exercisepage' style={{textDecoration: 'none', color: 'white'}}>Exercises</Link>
        <Link to='/articlepage' style={{textDecoration: 'none', color: 'white'}}>Articles</Link>
        <Link to='/dietspage' style={{textDecoration: 'none', color: 'white'}}>Diets</Link>
        </Stack>
      </Stack>
    </div>
  )
}

export default Navbar