import { Box, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import MediaCard from './ArticleCard';

const Articles = () => {
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
    <div>
      <Box id='articles' sx={{ mt: '150px', mb: '150px', textAlign: 'center' }}>
        <Typography sx={{fontSize: {lg: '32px', xs: '24px'}}} fontWeight='700' color='white' variant='h4'>
        Most Popular <span style={{ color: '#51b2ff' }}>Articles</span>
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
          }}
        >
          <Box sx={{ minWidth: '300px', marginRight: '20px' }}>
            <MediaCard
              title='Two Full-Body Squat Rack and Barbell Workout Routines'
              linkTo='https://www.muscleandstrength.com/articles/2-full-body-squat-rack-routines'
              text='If you have a rack, bar, and plates, then you have the tools necessary to train. These two full-body programs can help you achieve personal fitness success.'
              image='https://cdn.muscleandstrength.com/sites/default/files/strong_latino_man_doing_barbell_squat.jpg'
            />
          </Box>
          <Box sx={{ minWidth: '300px', marginRight: '20px' }}>
            <MediaCard
              title='How To Increase Strength: Ultimate Guide To Getting Big And Strong'
              linkTo='https://www.muscleandstrength.com/expert-guides/strengths'
              text='Looking to get strong? This expert guide teaches you how to increase your strength and power. Learn how to maximize your workouts and diet for maximum strength gains!'
              image='https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/field/image/expert-guide/increasing-strength-guide.png?itok=egiLhX7Z'
            />
          </Box>
          <Box sx={{ minWidth: '300px', marginRight: '20px' }}>
            <MediaCard
              title='The Ultimate Muscle Building Split Reference Guide'
              linkTo='https://www.muscleandstrength.com/articles/the-ultimate-muscle-building-split-reference-guide.html'
              text='A complete guide. Learn which splits are effective, and which workouts to avoid. Included are numerous workout and training splits examples.    '
              image='https://cdn.muscleandstrength.com/sites/default/files/the_ultimate_muscle_building_split_reference_guide.jpg'
            />
          </Box>
          <Box sx={{ minWidth: '300px', marginRight: '20px' }}>
            <MediaCard
              title='Your Body Type - Ectomorph, Mesomorph or Endomorph?'
              linkTo='https://www.muscleandstrength.com/articles/body-types-ectomorph-mesomorph-endomorph.html'
              text='Your body type can influence how you respond to different types of workouts and diet plans.'
              image='https://cdn.muscleandstrength.com/sites/default/files/body-types.jpg'
            />
          </Box>
          <Box sx={{ minWidth: '300px', marginRight: '20px' }}>
            <MediaCard
              title='The Clean Bulk Diet: 3 Options For More Lean Muscle'
              linkTo='https://www.muscleandstrength.com/articles/clean-bulk-diet-options-lean-muscle'
              text='Build lean muscle mass without packing on unwanted body fat.'
              image='https://cdn.muscleandstrength.com/sites/default/files/clean_bulk_diet_-_1200x630.jpg'
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}


export default Articles;
