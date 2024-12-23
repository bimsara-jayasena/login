import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import Header from '../components/Header';
import CustomizedDataGrid from '../components/CustomizedDataGrid';
import HighlightedCard from '../components/HighlightedCard';

import StatCard from '../components/StatCard';


export default function Tests() {
    const data = [
        {
          title: 'Total tests',
          value: '14k',
          interval: 'Last 30 days',
          trend: 'up',
          data: [
            200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
            360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
          ],
        },
        
      ];
      
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
                <Header pages={["Inventory","Tests"]}/>
        
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2,textAlign:'start' }}>
        Tests
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}
       {/*  <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <HighlightedCard />
        </Grid> */}
        
      </Grid>
      <Typography component="h2" variant="h6" sx={{ mb: 2 ,textAlign:'start'}}>
        Available Tests
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 12 }}>
          <CustomizedDataGrid />
        </Grid>
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
