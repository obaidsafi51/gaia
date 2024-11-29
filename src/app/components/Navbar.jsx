import Link from 'next/link';
import { AppBar, Toolbar, Container, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EmergencyIcon from '@mui/icons-material/Emergency';
import MapIcon from '@mui/icons-material/Map';

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container>
          <Button color="inherit" component={Link} href="/">
            <HomeIcon /> Home
          </Button>
          <Button color="inherit" component={Link} href="/emergency">
            <EmergencyIcon /> Emergency
          </Button>
          <Button color="inherit">
            <MapIcon /> Safety Map
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;