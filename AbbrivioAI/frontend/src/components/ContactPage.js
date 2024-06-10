// ContactPage.js
import React, { useState, useEffect } from 'react';
import { Grid, Avatar, Typography } from '@mui/material';
import axios from 'axios';

const baseURL = 'http://localhost:8000';

const ContactPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Fetch team members' data from backend server
    axios.get(`${baseURL}/api/team-members/`)
      .then(response => {
        setTeamMembers(response.data);
      })
      .catch(error => {
        console.error('Error fetching team members:', error);
      });
  }, []);

  const handleProfileClick = (linkedinUrl) => {
    window.open(linkedinUrl, '_blank');
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Our Team
      </Typography>
      <Grid container spacing={2}>
        {teamMembers.map(member => (
          <Grid item key={member.id}>
            <Avatar 
              alt={member.name} 
              src={member.photo_url} 
              onClick={() => handleProfileClick(member.linkedin_url)} 
              style={{ cursor: 'pointer' }} 
            />
            <Typography>{member.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ContactPage;
