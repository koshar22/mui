import { ThemeProvider } from '@emotion/react';
import { AppBar, Button, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import Homepage from '../Pages/HomePage';

export default function Navbar() {
  return (
    //   <ThemeProvider>

    //   </ThemeProvider>
      <div>
          <nav>
              <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#ccc'}}>
                  <h2>Amazon</h2>
                  <div><Link to='/'>Home</Link></div>
                  <div><Link to='/about'>About</Link></div>
                  <div><Link to='/error'>Error</Link></div>
              </div>
          </nav>
      </div>
  )
}
