"use client"

import Link from 'next/link';
import { AppBar, Toolbar, Container, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EmergencyIcon from '@mui/icons-material/Emergency';
import MapIcon from '@mui/icons-material/Map';
import { useState } from 'react';
import Login from './Login';

const Navbar = () => {

  const [login, setLogin] = useState(false);
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
          <button
        onClick={() => (login === true ? setLogin(false) : setLogin(true))}
        className="w-[5rem] h-[3rem] bg-gray-300 rounded-md flex items-center justify-center fixed right-4 top-4">
        Login
      </button>
      {
        login && (
          <Login />
        )
      }
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;