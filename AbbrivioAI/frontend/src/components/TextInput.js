// src/components/TextInput.js
import React from 'react';
import { TextField } from '@mui/material';

const TextInput = ({ value, onChange }) => {
  return (
    <TextField
      label="Enter text to summarize"
      multiline
      rows={6}
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      margin="normal"
    />
  );
};

export default TextInput;
