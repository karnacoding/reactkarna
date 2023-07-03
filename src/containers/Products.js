import React,{useEffect,useState} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {CssBaseline,Typography} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import QRCodeWithLogo from './QRcode';

function Products() {
    return (
      <React.Fragment>
      <CssBaseline />
      <Grid container spacing={4}>
        <Grid item xs={12} >
          <Typography variant="h6" xs={4}><WorkIcon fontSize='large' style={{ verticalAlign: 'middle' }}/> &emsp; Products</Typography>
        </Grid>
        <Grid container spacing={4} justifyContent="space-around" alignItems="center">
          <Grid item xs={3}><QRCodeWithLogo/></Grid>
            <Grid item xs={7}>
              <Typography variant="h5">QRwale</Typography>
              <Typography>QRCode service for restaurants and individuals: Boost business visually, streamline ordering with skip-the-line, quick menu search, and personalized dashboard for menu management with analytics.</Typography>
            </Grid>
        </Grid>
      </Grid>
      </React.Fragment>
    );
}

export default Products;