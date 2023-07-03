import React,{useEffect,useState} from 'react';
import {AppBar,Toolbar,Grid} from '@mui/material';
import CustomizedSwitches from './switch';
import Landing from "../containers/Landing";
import Products from "../containers/Products";
import WhatElse from '../containers/Services';
import {CssBaseline} from '@mui/material';
import ContactUs from '../containers/ContactUs';

function ResponsiveAppBar(props) {

const [isTablet, setIsTablet] = useState(false);

useEffect(() => {
    const handleResize = () => {
    const isTablet = window.matchMedia('(max-width: 1024px)').matches;
    setIsTablet(isTablet);
};

handleResize(); // Check on initial render

window.addEventListener('resize', handleResize);
return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  return (
    <React.Fragment>
    <CssBaseline />
    <Grid container direction="column" spacing={2}>
      <Grid item xs={12}>
        <AppBar position="relative" color="transparent" elevation={0}>
            <Toolbar>
                <CustomizedSwitches checked={props.checked} onChange={() => { props.onChange() }} 
                style={{ color: props.theme }} />
            </Toolbar>
        </AppBar>
        </Grid>
        <Grid item xs={12}><Landing /></Grid>
        <Grid item xs={12}><Products /></Grid>
        <Grid item xs={12}><WhatElse /></Grid>
        <Grid item xs={12}><ContactUs /></Grid>
    </Grid></React.Fragment>
  );
}
export default ResponsiveAppBar;