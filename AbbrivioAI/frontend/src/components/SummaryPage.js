import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, Paper } from '@mui/material';
import TextInput from './TextInput';
import SummarizeButton from './SummarizeButton';
import SummaryOutput from './SummaryOutput';

const baseURL = 'http://localhost:8000';

function SummaryPage() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${baseURL}/api/generate-summary/`, { text: inputText });
      console.log('Response from backend:', response.data);
      setSummary(response.data.summary);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem', marginBottom: '2rem', flex: 1 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Abbrivio AI: Summaries in Progress!
      </Typography>
      <Paper style={{ padding: '1rem' }}>
        <TextInput value={inputText} onChange={handleChange} />
        <SummarizeButton onClick={handleSubmit} />
        <SummaryOutput summary={summary} />
      </Paper>
    </Container>
  );
}

export default SummaryPage;
