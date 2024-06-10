import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px 0', textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Abbrivio AI. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
