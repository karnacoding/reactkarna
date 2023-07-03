import React,{useEffect,useState} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {CssBaseline} from '@mui/material';
import Personalimg from "../images/hero/personal-image.svg";
import {Typography} from '@mui/material';

function Landing() {
    return (
      <React.Fragment>
      <CssBaseline />
      <Grid container spacing={2} justifyContent="space-around" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={4}>
        <img src={Personalimg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h6">Kundan Karn</Typography>
            
            <Grid item>const getYouRunning = &#123;</Grid>
              <Typography>yourNeeds: &#123;</Typography>
                <Typography>&emsp;&emsp;frontend:['React','Redux','Next.js','Gatsby'],</Typography>
                <Typography>&emsp;&emsp;backend:['Java','Python','node.js (try to)'],</Typography>
                <Typography>&emsp;&emsp;database:['mysql','mongodb'],</Typography>
                <Typography>&emsp;&emsp;hosting:['netlify','AWS s3 bucket impl']</Typography>
                <Typography>&emsp; &#125;</Typography>
                <Typography>&#125;</Typography>
                <Typography>console.log("we deliver" + </Typography>
                  <Typography>JSON.stringify(getYourRunning.yourNeeds));</Typography>
            
          </Grid>
      </Grid>
      </Grid>
      </Grid>
      </React.Fragment>
    );
}

export default Landing;