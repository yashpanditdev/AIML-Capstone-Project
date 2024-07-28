import React, { useState } from 'react';
import { Container, Typography, Paper, Button, Alert } from '@mui/material';
import TextInput from './TextInput';
import PdfInput from './PdfInput';
import SummaryOutput from './SummaryOutput';
import { generateSummary, summarizePdf } from '../api';

function SummaryPage() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');  // New state for upload status

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
    setUploadStatus('PDF uploaded successfully');  // Update status on file change
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
        {uploadStatus && (  // Conditional rendering based on upload status
          <Alert severity="success" style={{ marginTop: '1rem' }}>
            {uploadStatus}
          </Alert>
        )}
        <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '1rem' }}>
          Summarize
        </Button>
        <SummaryOutput summary={summary} />
      </Paper>
    </Container>
  );
}

export default SummaryPage;
