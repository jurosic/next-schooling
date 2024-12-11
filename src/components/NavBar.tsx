"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import PlusIcon from '@mui/icons-material/PlusOne';
import LoginIcon from '@mui/icons-material/Login';
import RegisterIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { ThemeProvider } from '@/components/ThemeContext';
import '@/styles/themes.css'; // Ensure this import is present

export default function BarováNavigácia() {
  const handleLogout = () => {
    signOut({ callbackUrl: '/' }); // Redirect to login page after logout
  };

  const [value, setValue] = React.useState(0);
  
  const { data: session } = useSession();
  const isLoggedIn = !!session;
  console.log(session?.user?.image || '');

  const getValue = () => {
    switch (window.location.pathname) {
      case "/": return 0;
      case "/post": return 1;
      case "/auth/login": return 3;
      case "/auth/logout": return 3;
      default: return 0;
    }
  }

  React.useEffect(() => {
    setValue(getValue());
  }, []);

  return (
    <ThemeProvider>
      <Box sx={{ width: 500, backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} href="/" />
          <BottomNavigationAction label="Post" icon={<PlusIcon />} href="/post" />
          {!isLoggedIn ? (
              <BottomNavigationAction label="Login" icon={<LoginIcon />} href="/auth/login" />
          ) : (
              <BottomNavigationAction label="Logout" icon={<LogoutIcon />} onClick={handleLogout} />
            )}
          {!isLoggedIn ? (
            <></>
          ) : (
            <Avatar alt="User Avatar" src={session?.user?.image || ''} />
          )}
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
}