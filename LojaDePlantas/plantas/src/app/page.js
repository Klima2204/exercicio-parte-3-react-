"use client"
import { useState } from 'react';
import { ThemeProvider, CssBaseline, Paper, Button, Box } from '@mui/material';
import { lightTheme, darkTheme } from '../Theme.jsx';
import PlantGrid from '../components/organisms/PlantGrid.jsx';
import PlantStore from '@/pages/PlantStore.jsx';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper elevation={3} sx={{ minHeight: '100vh', padding: 4 }}>
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <Button variant="contained" onClick={toggleTheme}>
            Alternar Tema
          </Button>
        </Box>
    <PlantStore/>
        <PlantGrid plants={[]} />
      </Paper>
    </ThemeProvider>
    </div>
  );
}

export default App;
