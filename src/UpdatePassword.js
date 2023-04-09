import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import {Grid} from '@mui/material';

import { AppBar, Toolbar, Typography } from '@mui/material';

function UpdatePassword() {
  const [formData, setFormData] = useState({
    mobile: '',
    password: '',
    confirmPassword: ''
  });



  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form input before submission
    if ( !formData.mobile ||  !formData.password || !formData.confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

  
    if (!/^\d{10}$/.test(formData.mobile)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }


    // Handle form submission here
    console.log('Submitted form:', formData);

    // Reset form fields
    setFormData({
      mobile: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className='patient'>
    <form className='form-container' onSubmit={handleSubmit}>
    <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <img  style={{marginLeft :'40%'}}src='logo.png' alt='e-mantrana'></img>
         </Typography>
        </Toolbar>
       </AppBar>
       <div className='header' style={{ display:'flex',justifyContent: 'center',color:'white',padding: 80}}><h1>Forgot Paasword</h1></div>
      <div style={{ display: "flex", flexWrap:'wrap',flexDirection:'column', gap: '16px', justifyContent: 'center',alignItems:'center'}}>
        <div style={{ flex: "1 1 50%", marginBottom: '40px' }}>
          <TextField
            style={{ width: 400, marginRight: '80px', backgroundColor: '#faebd7' }}
            id="mobile"
            label="Enter Mobile Number"
            type="tel"
            value={formData.mobile}
            onChange={handleFormChange}
          />
    </div>
    <div style={{ flex: "1 1 50%", marginBottom: '40px' }}>
          <TextField
            style={{ width: 400, marginRight: '80px', backgroundColor: '#faebd7' }}
            id="password"
            label="Enter Password"
            value={formData.password}
            onChange={handleFormChange}
          />
          <TextField
            style={{ width: 400, backgroundColor: '#faebd7' }}
            id="confirmPassword"
            label="Confirm Paasword"
            value={formData.confirmPassword}
            onChange={handleFormChange}
          />
        </div>
    </div>
    <Grid container spacing={2} justifyContent="center">
  <Grid item xs={12} sm={6} md={4}>
    <Button
      style={{ width: '100%', height: '50px', backgroundColor: 'darkgray', borderRadius: '25px' }}
      variant="contained"
      color="success"
      type="submit"
    >
      <h3 style={{ color: 'black' }}>SAVE</h3>
    </Button>
  </Grid>
</Grid>

</form>
<Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
      <h3 style={{color:'Darkgray'}}>Need help?Contact us at <a style={{color:'red'}} href="tel:6265161019">123-456-7890</a> or <a  style={{color:'red'}} href="shivamdogaya07@gmail.com">support@example.com</a>.</h3>
 </Typography>
</div>

  );
}
export default UpdatePassword;