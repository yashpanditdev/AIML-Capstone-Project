// src/components/SummaryPage.js
import React, { useState } from 'react';
import { Container, Typography, Paper, Button } from '@mui/material';
import TextInput from './TextInput';
import PdfInput from './PdfInput';
import SummaryOutput from './SummaryOutput';
import { generateSummary, summarizePdf } from '../api';

function SummaryPage() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [pdfFile, setPdfFile] = useState(null);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      let generatedSummary = '';
      if (pdfFile) {
        generatedSummary = await summarizePdf(pdfFile);
      } else if (inputText) {
        generatedSummary = await generateSummary(inputText);
      } else {
        alert('Please provide either text or a PDF file to summarize.');
        return;
      }
      setSummary(generatedSummary);
    } catch (error) {
      console.error('Error generating summary:', error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem', marginBottom: '2rem', flex: 1 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Abbrivio AI: Summaries in Progress!
      </Typography>
      <Paper style={{ padding: '1rem' }}>
        <TextInput value={inputText} onChange={handleChange} />
        <PdfInput onFileChange={handleFileChange} />
        <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '1rem' }}>
          Summarize
        </Button>
        <SummaryOutput summary={summary} />
      </Paper>
    </Container>
  );
}

export default SummaryPage;
