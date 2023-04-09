import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DoctorDashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
 

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  
  const handleViewPatientsClick = () => {
    // Add code to handle View Patients button click
    console.log('View Patients button clicked');
  };

  const handleBookAppointmentClick = () => {
    // Add code to handle Book Appointment button click
    console.log('Book Appointment button clicked');
  };

  const handleViewHistoryClick = () => {
    // Add code to handle View History button click
    console.log('View History button clicked');
  };
  const handleLogoutClick = () =>{
    
    console.log('redirect to login page again');
  }
  const handleViewEditProfileClick = () => {
    // navigate to view/edit profile page
    navigate('/edit-profile');
  };
  return (
    <div style={{background: ' linear-gradient(135deg, #FFA07A, #87CEFA)', height: '100vh'}}>
      <AppBar position="static" style={{ background: '#2E3B55',marginBottom:'20%' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={open}
            onClose={handleClose}
          >
           
            <MenuItem style={{height:'100px',width:'200px'}}   onClick={handleViewEditProfileClick}>View/Edit Profile</MenuItem>
     
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img style={{ marginLeft: '40%' }} src='logo.png' alt='e-mantrana' />
          </Typography>
          <Button color="inherit" onClick={handleLogoutClick}>LogOut</Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} justifyContent="center">
  <Grid item xs={12} sm={6} md={4}>
    <Button
      style={{ width: '100%',marginBottom:'5%', height: '50px', backgroundColor: 'gray', borderRadius: '25px' }}
      variant="contained"
      color="success"
      type="submit"
      onClick={handleViewPatientsClick}
    >
      <h3 style={{ color: 'black' }}>VIEW PATIENTS</h3>
    </Button>
    <Button
      style={{ width: '100%',marginBottom:'5%', height: '50px', backgroundColor: 'gray', borderRadius: '25px' }}
      variant="contained"
      color="success"
      type="submit"
      onClick={handleBookAppointmentClick}
    >
      <h3 style={{ color: 'black' }}>BOOK APPOINTMENT</h3>
    </Button>
    <Button
      style={{ width: '100%', height: '50px', backgroundColor: 'gray', borderRadius: '25px' }}
      variant="contained"
      color="success"
      type="submit"
      onClick={handleViewHistoryClick}
    >
      <h3 style={{ color: 'black' }}>VIEW HISTORY</h3>
    </Button>
  </Grid>
</Grid>
    </div>
  )
}

export default DoctorDashboard;
