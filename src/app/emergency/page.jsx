"use client";

import Navbar from '../components/Navbar';
import { Button, Container, Box, Typography } from '@mui/material';
import EmergencyIcon from '@mui/icons-material/Emergency';

const Emergency = () => {
  const handleEmergencyCall = () => {
    window.location.href = 'tel:911'; // Simulating an emergency call
  };

  return (
    <div>
      <Navbar />
      <Container sx={{ paddingTop: 4 }}>
        <Typography variant="h4" align="center">
          <EmergencyIcon /> Emergency Call
        </Typography>
        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
          <Typography variant="h6">
            In case of an emergency, please call 911 or use the button below.
          </Typography>
          <Button variant="contained" color="error" onClick={handleEmergencyCall} sx={{ marginTop: 3 }}>
            <EmergencyIcon /> Call Emergency
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Emergency;