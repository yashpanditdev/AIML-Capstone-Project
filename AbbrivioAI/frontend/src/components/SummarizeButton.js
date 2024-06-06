// src/components/SummarizeButton.js
import React from 'react';
import { Button } from '@mui/material';

const SummarizeButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      fullWidth
    >
      Summarize
    </Button>
  );
};

export default SummarizeButton;
