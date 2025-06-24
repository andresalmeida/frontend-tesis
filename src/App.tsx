import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HuellaHumana from './pages/HuellaHumana';
import BosquesRiparios from './pages/BosquesRiparios';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/huella-humana" element={<HuellaHumana />} />
          <Route path="/bosques-riparios" element={<BosquesRiparios />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
