l = ['addpost', 'search', 'notifications', 'gdpr', 'about-me']

import os

for path in l:
    os.mkdir(f"./{path}")
    f = open(f'./{path}/page.tsx', "w+")
    f.write("""
// src/app/"""+path+"""/page.tsx

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'

export default function ComboBox() {
  return (
        <Container>
            <Typography>""" +path+ """</Typography>
        </Container>
    );
}
    
    """)

