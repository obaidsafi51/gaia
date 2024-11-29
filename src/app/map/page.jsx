import Navbar from '../components/Navbar';
import { Container, Typography } from '@mui/icons-material';
import dynamic from 'next/dynamic';

import Map from '../components/Map';

const SafetyMap = () => {
  return (
    <div>
      <Navbar />
      <Container sx={{ paddingTop: 4 }}>
        <Typography variant="h4" align="center">Safety Map</Typography>
        <Typography variant="body1" align="center" sx={{ marginTop: 2 }}>
          View areas of concern based on real-time emergency call data.
        </Typography>
        <MapWithNoSSR />
      </Container>
    </div>
  );
};

export default SafetyMap;
