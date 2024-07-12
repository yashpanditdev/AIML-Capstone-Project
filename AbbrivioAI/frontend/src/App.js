import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import SummaryPage from './components/SummaryPage';

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
      marginTop: '5rem',
      marginBottom: '1rem',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavigationBar />
      <SummaryPage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
