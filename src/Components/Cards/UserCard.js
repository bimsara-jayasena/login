import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import petient from '../../Assests/petient.jpg';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function UserCard() {
  return (
    <Card sx={{ minWidth: 275,width:'30rem' ,border:'2px solid   #018b87','&:hover':{
      transform:'scale(1.1)',
      transition:'0.5s',
      boxShadow:' 0 6px 20px 0  #018b87',
      cursor:'pointer'
    }}} >
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Sign up as User
        </Typography>
        <img src={petient} alt='nurse'/>
      </CardContent>
      
    </Card>
  );
}
