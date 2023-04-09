import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';

const Header = () => {
  const logoStyles = {
    maxWidth: '100%',
    height: 'auto',
    '@media (max-width: 600px)': {
      maxWidth: '80%',
    },
  };
  return (
    <AppBar position="static" sx={{ marginBottom:'2%',background:'black'}}>
      <Toolbar>
        <Typography variant="h6" sx={{flexGrow: 1 }}>
        <img  src="logo.png" alt="e-mantrana" style={{ marginLeft:'40%',maxWidth: '20%', height: 'auto',logoStyles }} />
        </Typography>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
