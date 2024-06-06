// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SummarizeButton from './components/SummarizeButton';
import SummaryOutput from './components/SummaryOutput';
import TextInput from './components/TextInput';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h4: {
      marginBottom: '1rem',
    },
  },
});

const baseURL = 'http://localhost:8000';

function App() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${baseURL}/api/documents/`, { text: inputText });
      console.log('Response from backend:', response.data);
      setSummary(response.data.summary);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Abbrivio AI: Summaries in Progress!
        </Typography>
        <Paper style={{ padding: '1rem' }}>
          <TextInput value={inputText} onChange={handleChange} />
          <SummarizeButton onClick={handleSubmit} />
          <SummaryOutput summary={summary} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
