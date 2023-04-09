import React,{useState} from 'react';
import { Grid,Button, Input,Box } from '@mui/material';
import Header from './Header';


const HealthRecord = () => {
  const [selectedFile,setSelectedFile]=useState('');

  const handleFileChange = (e) =>{
       setSelectedFile(e.target.files[0]);
  };
    const handleUploadClick = () =>{
        //enter upload logic here
        console.log('image uploaded');
    }
  return (
    <div style={{background: ' linear-gradient(135deg, #FFA07A, #87CEFA)', height: '100vh'}}>
        <Header/>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:'10%'
          }}
        >
          <Box
            sx={{
              width: '50%',
              height: '500px',
              bgcolor: 'lightgray',
              borderRadius: '20px',
              boxShadow: 1,
        
            }}
          >
  <Grid container spacing={2} justifyContent="center">
  <Grid item xs={12} sm={6} md={4}>
    <Input  style={{marginTop:'50%',width:'100%'}} type="file" name="file" onChange={handleFileChange} ></Input>
    <Button
      style={{ width: '100%',marginTop:'5%', height: '20%', backgroundColor: 'white', borderRadius: '25px' }}
      variant="contained"
      color="success"
      type="submit"
      onClick={handleUploadClick}
    >
      <h3 style={{ color: 'black' }}>UPLOAD </h3>
    </Button>
    </Grid>
    </Grid>
    </Box>
    </Box>
    </div>
  )
}

export default HealthRecord;