//./src/components/NavBar.tsx
"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import PlusIcon from '@mui/icons-material/PlusOne';
import LoginIcon from '@mui/icons-material/Login';
import RegisterIcon from '@mui/icons-material/PersonAdd';

export default function BarováNavigácia() {
  const setValue = React.useState(0)[1];

  const getValue = () => {
    switch (window.location.pathname) {
      case "/": return 0;
      case "/post": return 1;
      case "/auth/register": return 2;
      case "/auth/login": return 3;
      default: return 0;
    }
  }

  console.log(getValue());

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={getValue()}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
      <BottomNavigationAction label="Domov" icon={<HomeIcon />} onClick={() => { window.location.href = "/" }} />
      <BottomNavigationAction label="Pridať" icon={<PlusIcon />} onClick={() => { window.location.href = "/post"; }} />
      <BottomNavigationAction label="Registrácia" icon={<RegisterIcon />} onClick={() => { window.location.href = "/auth/register"; }} />
      <BottomNavigationAction label="Prihlásenie" icon={<LoginIcon />} onClick={() => { window.location.href = "/auth/login"; }} />
    </BottomNavigation>
    </Box>
  );
}