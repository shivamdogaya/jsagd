import  React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'


const options = [
  { label: 'Cardiology', value: 'Cardiology' },
  { label: 'Dermatology', value: 'Dermatology' },
  { label: 'Gynacologist', value: 'Gynacologist' },
  { label: 'Neurology', value: 'Neurology' },
  { label: 'Pediatrics', value: 'Pediatrics' },
];

const PatientDashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] =useState('');

  const logoStyles = {
    maxWidth: '100%',
    height: 'auto',
    '@media (max-width: 600px)': {
      maxWidth: '80%',
    },
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const handleButtonClick = () => {
    console.log(selectedOption);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleGeneralOPD=()=>{
    console.log('available general doctors shown');
  }

  const handleLogoutClick= () =>{
    console.log('redirect to login page');
  }
  const handleUploadHealthRecordClick = () => {
    // navigate to view/edit profile page
    navigate('/health-record');
  };
  const handleViewEditProfileClick = () => {
    // navigate to view/edit profile page
    navigate('/edit-profile');
  };
  const handlePrescriptionClick = () => {
    // navigate to view/edit profile page
    navigate('/edit-profile');
  };
  return (
    <div style={{background: ' linear-gradient(135deg, #FFA07A, #87CEFA)', height: '100vh'}}>
     <AppBar position="static" sx={{ marginBottom:'20%',background:'black'}}>
        <Toolbar >
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
            sx={{ mr: 2 }}
          >
            <MenuItem style={{height:'100px',width:'200px'}} onClick={handleUploadHealthRecordClick}>Upload Health Records</MenuItem>
            <MenuItem style={{height:'100px',width:'200px'}} onClick={handleViewEditProfileClick}>View/Edit Profile</MenuItem>
            <MenuItem style={{height:'100px',width:'200px'}} onClick={handlePrescriptionClick}>Prescription</MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img  src="logo.png" alt="e-mantrana" style={{ marginLeft:'40%',maxWidth: '20%', height: 'auto',logoStyles }} />
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
      onClick={handleGeneralOPD}
    >
      <h3 style={{ color: 'black' }}>GENERAL OPD</h3>
    </Button>
    <Select  options={options} value={selectedOption} onChange={handleChange} />
    <Button
      style={{ width: '40%',marginLeft:'30%',marginBottom:'5%',marginTop:'5%', height: '50px', backgroundColor: 'gray', borderRadius: '25px' }}
      variant="contained"
      color="success"
      type="submit"
      onClick={handleButtonClick}
    >
        <h3 style={{ color: 'black' }}>Specialized OPD</h3>
      </Button>
  </Grid>
</Grid>
    </div>
  )
}

export default PatientDashboard;
