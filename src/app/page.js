import Navbar from './components/Navbar';
import { Typography, Container, Box, Button } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container sx={{ paddingTop: 4 }}>
        <Typography variant="h3" align="center">Welcome to Gaia</Typography>
        <Box sx={{ marginTop: 4, textAlign: 'center' }}>
          <Typography variant="h5">
            An AI-powered safety companion to help women stay safe in risky situations.
          </Typography>
          <Button variant="contained" color="primary" href="/emergency" sx={{ marginTop: 3 }}>
            Get Help Now
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
