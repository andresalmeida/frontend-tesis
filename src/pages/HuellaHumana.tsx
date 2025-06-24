import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import paisajeImg from '../assets/paisaje.jpg';

const HuellaHumana = () => {
  const navigate = useNavigate();

  const handleMoreInfo = () => {
    navigate('/huella-humana-info');
  };

  return (
    <Box>
      {/* Header compacto */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3,
        }}
      >
        <Box
          component="img"
          src={paisajeImg}
          alt="Huella Humana"
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            filter: 'brightness(0.4) blur(1px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(120deg, rgba(29,35,49,0.8) 0%, rgba(199,248,8,0.2) 100%)',
            zIndex: 2,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3, textAlign: 'center', py: 3 }}>
          <Typography variant="h2" component="h1" sx={{ 
            color: '#C7F808', 
            fontWeight: 900, 
            fontSize: { xs: '2rem', md: '3rem' },
            mb: 1,
            fontFamily: 'Oswald, Arial, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '-1px'
          }}>
            Huella Humana
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#fff', 
            fontWeight: 300,
            fontSize: { xs: '1rem', md: '1.2rem' },
            opacity: 0.9
          }}>
            Análisis de presiones antropogénicas sobre ecosistemas terrestres
          </Typography>
        </Container>
      </Box>

      {/* Botón de más información */}
      <Container maxWidth="lg" sx={{ mb: 4, textAlign: 'center' }}>
        <Button
          variant="contained"
          startIcon={<InfoIcon />}
          onClick={handleMoreInfo}
          sx={{
            bgcolor: '#C7F808',
            color: '#1D2331',
            fontWeight: 700,
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            '&:hover': {
              bgcolor: '#B8E907',
              transform: 'translateY(-2px)',
            },
            boxShadow: '0 4px 12px rgba(199,248,8,0.3)',
            transition: 'all 0.3s ease',
          }}
        >
          Más información sobre Huella Humana
        </Button>
      </Container>

      {/* Dashboard */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        <Box
          component="iframe"
          src="http://localhost:8000/"
          sx={{
            width: '100%',
            height: '80vh',
            border: 'none',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            mb: 4,
          }}
        />
      </Container>
    </Box>
  );
};

export default HuellaHumana; 