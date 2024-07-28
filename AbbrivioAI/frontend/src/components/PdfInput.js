// src/components/PdfInput.js
import React from 'react';
import { Button, Input } from '@mui/material';

const PdfInput = ({ onFileChange }) => {
  return (
    <div>
      <Input
        type="file"
        accept="application/pdf"
        onChange={onFileChange}
        style={{ display: 'none' }}
        id="pdf-upload"
      />
      <label htmlFor="pdf-upload">
        <Button variant="contained" component="span">
          Upload PDF
        </Button>
      </label>
    </div>
  );
};

export default PdfInput;
