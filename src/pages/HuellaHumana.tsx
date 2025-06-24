import React, { useState } from 'react';
import { Box, Container, Typography, Paper, IconButton, Stack, Button, Link } from '@mui/material';
import ForestIcon from '@mui/icons-material/Forest';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { motion, AnimatePresence } from 'framer-motion';
import ConceptCard from '../components/ConceptCard';
import paisajeImg from '../assets/paisaje.jpg';

interface SabiasQueProps {
  children: React.ReactNode;
  fuente?: string;
  link?: string;
}

const SabiasQue: React.FC<SabiasQueProps> = ({ children, fuente, link }) => (
  <Box
    sx={{
      p: { xs: 4, md: 8 },
      mb: 4,
      background: 'rgba(29,35,49,0.65)',
      borderLeft: '8px solid #CFFF4F',
      borderRadius: 5,
      boxShadow: '0 12px 48px 0 rgba(0,0,0,0.25)',
      color: '#fff',
      maxWidth: '950px',
      mx: 'auto',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 2,
      position: 'relative',
    }}
  >
    <LightbulbIcon sx={{ fontSize: 48, color: '#CFFF4F', mr: 2, mt: 0.5 }} />
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 900, mb: 1, color: '#C7F808', fontFamily: 'Oswald, Arial, sans-serif', textTransform: 'uppercase', letterSpacing: '-1px', textShadow: '0 2px 8px #1D233199' }}>
        ¿Sabías que...?
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.25rem', mb: 1, lineHeight: 1.7 }}>
        {children}
      </Typography>
      {fuente && link && (
        <Typography variant="body2" sx={{ color: '#CFFF4F', fontWeight: 700 }}>
          Fuente: <Link href={link} target="_blank" rel="noopener" sx={{ color: '#CFFF4F', textDecoration: 'underline', fontWeight: 700 }}>{fuente}</Link>
        </Typography>
      )}
    </Box>
  </Box>
);

const slides = [
  {
    key: 'descripcion',
    content: (
      <Box
        sx={{
          p: { xs: 4, md: 8 },
          mb: 4,
          background: 'rgba(29,35,49,0.65)',
          borderLeft: '8px solid #C7F808',
          borderRadius: 5,
          boxShadow: '0 12px 48px 0 rgba(0,0,0,0.25)',
          color: '#fff',
          maxWidth: '950px',
          mx: 'auto',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          position: 'relative',
        }}
      >
        <Typography variant="h3" sx={{ color: '#C7F808', fontWeight: 900, mb: 3, fontFamily: 'Oswald, Arial, sans-serif', textTransform: 'uppercase', letterSpacing: '-1px', lineHeight: 1.1 }}>
          ¿Qué es la Huella Humana?
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.25rem', mb: 2, lineHeight: 1.7 }}>
          La Huella Humana es un índice espacial que evalúa y cuantifica las presiones humanas sobre los ecosistemas naturales en una escala de 0 (mínima influencia) a 100 (máxima influencia). Este indicador integra múltiples factores de presión antropogénica incluyendo infraestructura construida, cambios en el uso del suelo (agricultura, pastoreo, plantaciones forestales), redes de transporte (carreteras y ferrocarriles), densidad poblacional, infraestructura eléctrica, actividades extractivas (petróleo, gas y minería) para generar mapas que revelan el grado de naturalidad de los ecosistemas.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.25rem', mb: 2, lineHeight: 1.7 }}>
          En Ecuador, el Ministerio de Ambiente, Agua y Transición Ecológica (MAATE), junto con el PNUD e instituciones científicas, trabajaron desde 2019 hasta 2022 bajo financiamiento de la NASA (<Link href="https://www.undp.org/es/ecuador/noticias/proyecto-nasa-en-ecuador-midio-los-avances-en-la-conservacion-de-los-ecosistemas-terrestres" target="_blank" rel="noopener" sx={{ color: '#CFFF4F', textDecoration: 'underline' }}>PNUD, 2023</Link>) para generar información que apoye la toma de decisiones en política pública ambiental basada en evidencia científica. Estos mapas forman parte del seguimiento del Objetivo de Desarrollo Sostenible 15 (Vida de Ecosistemas Terrestres) y permiten monitorear los patrones espaciotemporales de influencia humana a nivel nacional y subnacional.
        </Typography>
      </Box>
    ),
  },
  {
    key: 'importancia',
    content: (
      <Box
        sx={{
          p: { xs: 4, md: 8 },
          mb: 4,
          background: 'rgba(29,35,49,0.65)',
          borderLeft: '8px solid #C7F808',
          borderRadius: 5,
          boxShadow: '0 12px 48px 0 rgba(0,0,0,0.25)',
          color: '#fff',
          maxWidth: '950px',
          mx: 'auto',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          position: 'relative',
        }}
      >
        <Typography variant="h3" sx={{ color: '#C7F808', fontWeight: 900, mb: 3, fontFamily: 'Oswald, Arial, sans-serif', textTransform: 'uppercase', letterSpacing: '-1px', lineHeight: 1.1 }}>
          ¿Por qué es importante?
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.25rem', mb: 2, lineHeight: 1.7 }}>
          La transformación del territorio representa probablemente la mayor amenaza para la biodiversidad (<Link href="https://www.earthdata.nasa.gov/news/feature-articles/human-footprint" target="_blank" rel="noopener" sx={{ color: '#CFFF4F', textDecoration: 'underline' }}>NASA Earthdata, 2020</Link>), siendo uno de los países más megadiversos del mundo, requiere un monitoreo constante de estas presiones. La importancia de este indicador radica en que permite:
        </Typography>
        <ul style={{ marginLeft: 24, marginBottom: 24, color: '#fff', fontSize: '1.15rem', lineHeight: 1.7 }}>
          <li>Monitoreo de la biodiversidad: Identificar áreas donde la presión humana amenaza ecosistemas críticos y especies endémicas</li>
          <li>Planificación territorial: Guiar decisiones sobre uso del suelo y desarrollo de infraestructura de manera sostenible</li>
          <li>Evaluación de efectividad: Medir qué tan bien funcionan las áreas protegidas en mantener ecosistemas intactos</li>
          <li>Políticas públicas: Apoyar la toma de decisiones considerando que el consumo de recursos tiene un impacto sobre el planeta estrechamente relacionado con los hábitos de la población (<Link href="https://www.ambiente.gob.ec/identificacion-calculo-y-mitigacion-de-la-huella-ecologica-del-sector-publico-y-productivo-del-ecuador/" target="_blank" rel="noopener" sx={{ color: '#CFFF4F', textDecoration: 'underline' }}>MAATE, 2019</Link>)</li>
        </ul>
        <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.7 }}>
          El seguimiento de la Huella Humana es fundamental para que Ecuador pueda cumplir con sus compromisos internacionales de conservación y alcanzar la meta de proteger el 30% de sus tierras y mares para 2030.
        </Typography>
      </Box>
    ),
  },
  {
    key: 'sabias1',
    content: (
      <SabiasQue
        fuente="ScienceDirect"
        link="https://www.sciencedirect.com/science/article/abs/pii/S0143622816306105"
      >
        ¿Sabías que... la influencia humana y sus impactos son perceptibles en todos los ecosistemas, resultando en transformación del territorio, cambios en la biogeoquímica global y pérdida de diversidad biológica, pero Ecuador ha logrado mantener grandes extensiones de ecosistemas relativamente intactos?
      </SabiasQue>
    ),
  },
  {
    key: 'sabias2',
    content: (
      <SabiasQue
        fuente="NASA Applied Sciences"
        link="https://eo4sdg.org/wp-content/uploads/2021/10/Hansen-2Pager-Maintaining-Life-on-Land-in-Colombia-Ecuador-and-Peru.pdf"
      >
        ¿Sabías que... el proyecto NASA-Ecuador no solo mide la huella humana actual, sino que es el primero dentro del sistema en pronosticar cómo los cambios en el uso del suelo interactúan con el cambio climático en la región andina?
      </SabiasQue>
    ),
  },
  {
    key: 'dashboard',
    content: (
      <Box
        component="iframe"
        src="http://localhost:8000/"
        sx={{
          width: '100%',
          height: '800px',
          border: 'none',
          borderRadius: 3,
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.15)',
          mt: 4,
          background: '#2B443C',
          maxWidth: '1100px',
          mx: 'auto',
        }}
      />
    ),
  },
];

const HuellaHumana = () => {
  const [slide, setSlide] = useState(0);

  const handlePrev = () => setSlide((prev) => (prev > 0 ? prev - 1 : prev));
  const handleNext = () => setSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  const goToDashboard = () => setSlide(slides.length - 1);

  return (
    <Box>
      {/* Hero Section con imagen de fondo */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: '320px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 4,
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
            filter: 'brightness(0.5) blur(1px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(120deg, rgba(29,35,49,0.7) 0%, rgba(199,248,8,0.15) 100%)',
            zIndex: 2,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3, py: 6 }}>
          <Typography variant="h1" component="h1" gutterBottom sx={{ color: '#C7F808', fontWeight: 900, fontSize: { xs: '2.5rem', md: '5rem' } }}>
            Huella Humana
          </Typography>
        </Container>
      </Box>
      {/* Slides animados */}
      <Container maxWidth="lg" sx={{ minHeight: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ width: '100%' }}
          >
            {slides[slide].content}
            {/* Botón directo al dashboard en slides 0-3 */}
            {slide < slides.length - 1 && slide !== slides.length - 1 && (
              <Button variant="contained" color="primary" sx={{ mt: 3, fontWeight: 700 }} onClick={goToDashboard}>
                Ir directo al dashboard
              </Button>
            )}
          </motion.div>
        </AnimatePresence>
        {/* Navegación por flechas */}
        <Stack direction="row" spacing={2} sx={{ mt: 2 }} alignItems="center" justifyContent="center">
          <IconButton onClick={handlePrev} disabled={slide === 0} sx={{ color: '#C7F808', bgcolor: 'rgba(29,35,49,0.7)', '&:hover': { bgcolor: '#C7F808', color: '#1D2331' } }}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography sx={{ color: '#C7F808', fontWeight: 700 }}>{slide + 1} / {slides.length}</Typography>
          <IconButton onClick={handleNext} disabled={slide === slides.length - 1} sx={{ color: '#C7F808', bgcolor: 'rgba(29,35,49,0.7)', '&:hover': { bgcolor: '#C7F808', color: '#1D2331' } }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Stack>
    </Container>
    </Box>
  );
};

export default HuellaHumana; 