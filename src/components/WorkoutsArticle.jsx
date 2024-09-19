import MediaCard from '../components/ArticleCard'
import React, { useRef, useState } from 'react';
import { Box, Typography } from '@mui/material'

const WorkoutsArticle = () => {
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    const startDrag = (event) => {
      setIsDragging(true);
      const pageX = event.type === 'mousedown' ? event.pageX : event.touches[0].pageX;
      setStartX(pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    };
  
    const endDrag = () => {
      setIsDragging(false);
    };
  
    const drag = (event) => {
      if (!isDragging) return;
      const pageX = event.type === 'mousemove' ? event.pageX : event.touches[0].pageX;
      const walk = (pageX - startX) * 1.5;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };
    
  return (
    <Box mt='50px'>
        <Typography sx={{fontSize: {lg: '32px', xs: '24px'}}} fontWeight='700' variant='h3' color='white' textAlign='center'>
            Trending in <span style={{color: '#51b2ff'}}>Workouts</span>
        </Typography>
        <Box 
        ref={scrollContainerRef}
        onMouseDown={startDrag}
        onMouseLeave={endDrag}
        onMouseUp={endDrag}
        onMouseMove={drag}
        onTouchStart={startDrag} 
        onTouchEnd={endDrag} 
        onTouchMove={drag}

        sx={{
      display: 'flex',
      overflowX: 'auto', 
      padding: '20px',
      whiteSpace: 'nowrap', 
      scrollbarWidth: 'none', 
      '&::-webkit-scrollbar': {
        display: 'none', 
      },
    }}>
        <Box sx={{ minWidth: '300px', marginRight: '20px' }}>
        <MediaCard title='4 Day Maximum Mass Workout'
                   linkTo='https://www.muscleandstrength.com/workouts/4-day-maximum-mass-workout'
                   text='A mass building routine that features a great combination of effective compound and isolation movements along with intense, high impact five minute burn sets.'
                   image='https://cdn.muscleandstrength.com/sites/default/files/4_day_maximum_mass_-_1200x630.jpg' />
        </Box>
        <Box sx={{ minWidth: '300px', marginRight: '20px' }}>
        <MediaCard title='6 Day Push/Pull/Legs (PPL) Powerbuilding Workout Split & Meal Plan'
                   linkTo='https://www.muscleandstrength.com/workouts/6-day-powerbuilding-split-meal-plan'
                   text='This 6 day push/pull/legs workout routine split is a high volume'
                   image='https://cdn.muscleandstrength.com/sites/default/files/6_day_ppl_-_1200x630.jpg' />
        </Box>
        <Box sx={{ minWidth: '300px', marginRight: '20px' }}>
        <MediaCard title='Dumbbell Only Workout: 3 Day Full Body Dumbbell Workout'
                   linkTo='https://www.muscleandstrength.com/workouts/3-day-full-body-dumbbell-workout'
                   text='This workout program only requires dumbbells, has just the right amount of volume to promote muscle growth'
                   image='https://cdn.muscleandstrength.com/sites/default/files/3_day_dumbbell_only_workout_-_1200x630.jpg' />  
        </Box>
        <Box sx={{ minWidth: '300px', marginRight: '20px' }}>
        <MediaCard title='Muscle & Strength Full Body Workout Routine'
                   linkTo='https://www.muscleandstrength.com/workouts/muscle-strength-full-body-workout-routine'
                   text='This M&S mass building routine is perfect for lifters who want to give full body workouts a try.'
                   image='https://cdn.muscleandstrength.com/sites/default/files/ms_full_body_routine_-_1200x630.jpg' />
        </Box>
        <Box sx={{ minWidth: '300px', marginRight: '20px' }}>
        <MediaCard title='10 Week Mass Building Program'
                   linkTo='https://www.muscleandstrength.com/workouts/10-week-mass-building-program.html'
                   text='This workout is designed to increase your muscle mass as much as possible in 10 weeks.'
                   image='https://cdn.muscleandstrength.com/sites/default/files/10_week_mass_building_program_-_1200x630.jpg' />     
        </Box>
    </Box>
    </Box>
  )
}

export default WorkoutsArticle
