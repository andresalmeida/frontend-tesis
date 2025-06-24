import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import lanchaImg from '../assets/lancha.jpg';
import '@fontsource/oswald/700.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Imagen de fondo */}
      <Box
        component="img"
        src={lanchaImg}
        alt="Portada Indicadores Ambientales"
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
          filter: 'brightness(0.45) blur(1.5px)',
        }}
      />
      {/* Overlay degradado */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(120deg, rgba(29,35,49,0.85) 0%, rgba(199,248,8,0.10) 100%)',
          zIndex: 2,
        }}
      />
      {/* Contenido principal */}
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 3, py: 10, textAlign: 'center' }}>
        <Typography
          variant="h2"
          sx={{
            color: '#C7F808',
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontFamily: 'Oswald, Arial, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '-0.5px',
            lineHeight: 1.05,
            textShadow: '0 2px 16px rgba(0,0,0,0.18)',
          }}
        >
          Indicadores Ambientales del Ecuador
        </Typography>
        <Typography variant="h5" sx={{ color: '#fff', mb: 4, fontWeight: 500 }}>
          Ministerio del Ambiente, Agua y Transición Ecológica
        </Typography>
        <Typography variant="body1" sx={{ color: '#CFFF4F', mb: 6, fontSize: '1.2rem' }}>
          Plataforma interactiva para la consulta y visualización de los principales indicadores ambientales del país.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 5, py: 2, fontWeight: 700, fontSize: '1.2rem', borderRadius: 3, boxShadow: '0 4px 24px 0 rgba(199,248,8,0.10)' }}
            onClick={() => navigate('/huella-humana')}
          >
            Huella Humana
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 5, py: 2, fontWeight: 700, fontSize: '1.2rem', borderRadius: 3, boxShadow: '0 4px 24px 0 rgba(199,248,8,0.10)' }}
            onClick={() => navigate('/bosques-riparios')}
          >
            Bosques Riparios
          </Button>
        </Stack>
      </Container>
      {/* Footer para logos institucionales */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 4,
          py: 2,
          zIndex: 4,
          opacity: 0.85,
        }}
      >
        {/* Aquí irán los logos: izquierda, centro y derecha */}
        <Box sx={{ width: 120, height: 48, bgcolor: 'transparent' }} />
        <Box sx={{ width: 220, height: 48, bgcolor: 'transparent' }} />
        <Box sx={{ width: 180, height: 48, bgcolor: 'transparent' }} />
      </Box>
    </Box>
  );
};

export default Home; 