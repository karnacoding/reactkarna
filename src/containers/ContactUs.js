import React,{useEffect,useState} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {CssBaseline,Typography,TextField,Button,Box} from '@mui/material';
import ContactUsIcon from '@mui/icons-material/ScheduleSendSharp';
import axios from 'axios';

function ContactUs() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      useEffect(() => {
        // Reset the form data after successful submission
        if (formData.submitted) {
          setFormData({
            name: '',
            email: '',
            message: '',
            submitted: false
          });
        }
      }, [formData.submitted]);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Send the form data to the backend using Axios
        axios.post('/api/send-email', formData)
          .then((response) => {
            // Handle the response from the backend if needed
            console.log(response.data);
    
            // Set the submitted flag to true
            setFormData({ ...formData, submitted: true });
          })
          .catch((error) => {
            // Handle any errors that occur during the request
            console.error(error);
          });
      };

    return (
      <React.Fragment>
      <CssBaseline />
      <Grid container spacing={4}>
        <Grid item xs={12} >
          <Typography variant="h6" xs={4}><ContactUsIcon fontSize='large' style={{ verticalAlign: 'middle' }}/> &emsp; Contact</Typography>
        </Grid>
        <Grid container rowSpacing={0}>
            <Grid item>
                <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            label="Full Name"
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange}
                        />
                        <Typography>The favourite part in knowing our client</Typography>
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="email" 
                            label="Email Address"
                            value={formData.email} 
                            onChange={handleChange}
                        />
                        <Typography>The favourite part in replying to our client</Typography>
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            multiline
                            rows={4}
                            label="Message"
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange}
                        />
                        <Typography>Let us know how can we help</Typography>
                        </Grid>
                        <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            </Grid>
        </Grid>
      </Grid>
      </React.Fragment>
    );
}

export default ContactUs;