import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard({ text, title, linkTo, image}) {
  return (
    <Card >
      <CardMedia
        sx={{ height: 140}}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={linkTo} size="small" variant='contained'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
