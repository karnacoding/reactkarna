import React,{useEffect,useState,useRef} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {CssBaseline,Typography} from '@mui/material';
import WhatElseIcon from '@mui/icons-material/MiscellaneousServicesSharp';
import { Stepper, Step, StepLabel, StepContent, StepConnector } from '@mui/material';
import { motion } from 'framer-motion';


function Services() {
 
  const steps = [
    'Incorporate business design to customize look-alive websites',
    "If it isn't fast, We won't pitch",
    'Before serving, We taste (Oops test)',
    'Third party integration, project structure simplicity, you got us!',
  ];

  const [activeStep, setActiveStep] = useState(0);
  const refArray = useRef([]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setActiveStep(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust the threshold as per your requirement
    });

    refArray.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);



    return (
      <React.Fragment>
      <CssBaseline />
      <Grid container spacing={4}>
        <Grid item xs={11} >
          <Typography variant="h6" xs={4}><WhatElseIcon fontSize='large' style={{ verticalAlign: 'middle' }}/> &emsp; Services</Typography>
        </Grid>
        <Grid container spacing={4} justifyContent="space-around" alignItems="center">
        <Stepper activeStep={activeStep} orientation="vertical" connector={<StepConnector />}>
        {steps.map((step, index) => (
          <Step key={index}>
            <motion.div
              ref={(element) => (refArray.current[index] = element)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1}}
            >
              <StepLabel>
                <hr
                  style={{
                    borderTop: `2px solid ${index === activeStep ? '#000000' : '#CCCCCC'}`,
                    marginLeft: '10px',
                    marginRight: '10px',
                  }}
                />
              </StepLabel>
              <StepContent>{step}</StepContent>
            </motion.div>
          </Step>
        ))}
      </Stepper>

        </Grid>
      </Grid>
      </React.Fragment>
    );
}

export default Services;