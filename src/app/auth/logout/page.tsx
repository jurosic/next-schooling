// src/app/profile/[id]/page.tsx

"use client";

import * as React from 'react';
import { signOut } from 'next-auth/react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function ComboBox() {
  const handleLogout = () => {
    signOut({ callbackUrl: '/' }); // Redirect to login page after logout
  };

  return (
    <Container>
      <Typography>Profile Page</Typography>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
}