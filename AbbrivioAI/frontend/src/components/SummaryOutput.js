// src/components/SummaryOutput.js
import React from 'react';
import { Typography } from '@mui/material';

const SummaryOutput = ({ summary }) => {
  return (
    summary && (
      <>
        <Typography variant="h6" style={{ marginTop: '1rem' }}>
          Summary:
        </Typography>
        <Typography variant="body1" style={{ whiteSpace: 'pre-wrap' }}>
          {summary}
        </Typography>
      </>
    )
  );
};

export default SummaryOutput;
