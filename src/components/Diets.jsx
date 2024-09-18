import { Box, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import MediaCard from './ArticleCard';

const Diets = () => {
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
      <Box id='diets' sx={{ mt: '150px', mb: '150px', textAlign: 'center' }}>
        <Typography sx={{fontSize: {lg: '32px', xs: '24px'}}} fontWeight='700' color='white' variant='h4'>
        Trending in <span style={{ color: '#51b2ff' }}>Diets</span>
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
              title='The Clean Eating Diet Plan Guide'
              linkTo='https://www.muscleandstrength.com/diet-plans/clean-eating-diet'
              text='Learn everything you need to know before starting the Clean Eating Diet plan'
              image='https://cdn.muscleandstrength.com/sites/default/files/field/feature-wide-image/article/clean-eating.jpg'
            />
          </Box>
          <Box sx={{ minWidth: '300px', marginRight: '20px' }}>
            <MediaCard
              title='The Ketogenic & Low Carb Diet Plan Guide'
              linkTo='https://www.muscleandstrength.com/diet-plans/ketogenic-low-carb-diets'
              text='Learn everything you need to know before starting the Keto Diet plan'
              image='https://cdn.muscleandstrength.com/sites/default/files/field/feature-wide-image/article/keto-diet.jpg'
            />
          </Box>
          <Box sx={{ minWidth: '300px', marginRight: '20px' }}>
            <MediaCard
              title='The Paleolithic (Paleo) Diet Plan Guide'
              linkTo='https://www.muscleandstrength.com/diet-plans/paleo-diet'
              text='Learn everything you need to know before starting the Paleo Diet plan'
              image='https://cdn.muscleandstrength.com/sites/default/files/field/feature-wide-image/article/paleo-diet.jpg'
            />
          </Box>
          <Box sx={{ minWidth: '300px', marginRight: '20px' }}>
            <MediaCard
              title='The Gluten Free Diet Plan Guide'
              linkTo='https://www.muscleandstrength.com/diet-plans/gluten-free-diet'
              text='Learn everything you need to know before starting the Gluten Free Diet'
              image='https://cdn.muscleandstrength.com/sites/default/files/field/feature-wide-image/article/gluten-free-diet.jpg'
            />
          </Box>
          <Box sx={{ minWidth: '300px', marginRight: '20px' }}>
            <MediaCard
              title='The Zone Diet Plan Guide'
              linkTo='https://www.muscleandstrength.com/diet-plans/zone-diet'
              text='Learn everything you need to know before starting the Zone Diet plan'
              image='https://cdn.muscleandstrength.com/sites/default/files/field/feature-wide-image/article/zone-diet-guide-2.jpg'
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}


export default Diets;
