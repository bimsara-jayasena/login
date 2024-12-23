import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import nurse from '../../Assests/nurse_2.jpg';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function NurseCard() {
  return (
    <Card sx={{ minWidth: 280,width:'30rem',height:'auto',border:'2px solid   #018b87','&:hover':{
      transform:'scale(1.1)',
      transition:'0.5s',
      boxShadow:' 0 6px 20px 0  #018b87',
      cursor:'pointer'
    } }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Sign up as Nurse
        </Typography>
       <img src={nurse} alt='nurse' width={400} />
      </CardContent>
      
    </Card>
  );
}
