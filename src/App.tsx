import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HuellaHumana from './pages/HuellaHumana';
import HuellaHumanaInfo from './pages/HuellaHumanaInfo';
import BosquesRiparios from './pages/BosquesRiparios';
import BosquesRipariosInfo from './pages/BosquesRipariosInfo';
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
          <Route path="/huella-humana-info" element={<HuellaHumanaInfo />} />
          <Route path="/bosques-riparios" element={<BosquesRiparios />} />
          <Route path="/bosques-riparios-info" element={<BosquesRipariosInfo />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
