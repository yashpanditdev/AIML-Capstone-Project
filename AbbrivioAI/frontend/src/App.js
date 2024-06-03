// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Text Summarization Web App</h1>
      <textarea
        placeholder="Enter text to summarize..."
        value={inputText}
        onChange={handleChange}
        rows={10}
        cols={50}
      />
      <br />
      <button onClick={handleSubmit}>Summarize</button>
      <br />
      <h2>Summary:</h2>
      <p>{summary}</p>
    </div>
  );
}

export default App;
