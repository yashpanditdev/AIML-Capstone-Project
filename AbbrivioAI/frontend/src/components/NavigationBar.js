import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import ContactPage from './ContactPage'; // Importing the ContactPage component
import AboutPage from './AboutPage'; // Importing the AboutPage component

const NavigationBar = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  const handleAboutClick = () => {
    setOpenAbout(true);
  };

  const handleCloseAbout = () => {
    setOpenAbout(false);
  };

  const handleContactClick = () => {
    setOpenContact(true);
  };

  const handleCloseContact = () => {
    setOpenContact(false);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Abbrivio AI
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit" onClick={handleAboutClick}>About</Button>
          <Button color="inherit" onClick={handleContactClick}>Contact</Button>
        </Toolbar>
      </AppBar>

      <Dialog open={openAbout} onClose={handleCloseAbout}>
        <DialogTitle>About Abbrivio AI</DialogTitle>
        <DialogContent>
          <AboutPage />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAbout} color="primary">Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openContact} onClose={handleCloseContact}>
        <DialogTitle>Contact Our Team</DialogTitle>
        <DialogContent>
          <ContactPage />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseContact} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NavigationBar;
