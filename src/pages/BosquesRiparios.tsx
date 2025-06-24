import React, { useState } from 'react';
import { Box, Container, Typography, IconButton, Stack, Button, Link } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { motion, AnimatePresence } from 'framer-motion';
import cascadaImg from '../assets/cascada.jpg';

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
          ¿Qué son los Bosques Riparios?
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.25rem', mb: 2, lineHeight: 1.7 }}>
          Los bosques riparios son ecosistemas forestales que se desarrollan en las márgenes de ríos, quebradas, riachuelos y otros cuerpos de agua dulce. Estos bosques forman una franja de vegetación que actúa como zona de transición entre los ecosistemas acuáticos y terrestres. En Ecuador, los bosques riparios incluyen una diversidad de especies arbóreas, arbustivas y herbáceas nativas que han evolucionado específicamente para prosperar en condiciones de alta humedad y fluctuaciones periódicas del nivel del agua.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.25rem', mb: 2, lineHeight: 1.7 }}>
          Estos bosques desempeñan un papel importante en la preservación del recurso hídrico y estabilización de los cauces, como corredores de dispersión de la biota y como albergues para la fauna en épocas secas (<Link href="https://www.wwf.es/nuestro_trabajo/informe_planeta_vivo_ipv/huella_ecologica/" target="_blank" rel="noopener" sx={{ color: '#CFFF4F', textDecoration: 'underline' }}>WWF, 2022</Link>). Como parte del proyecto NASA Life on Land, el monitoreo de estos ecosistemas permite evaluar su estado de conservación y las presiones antropogénicas que enfrentan a lo largo del territorio ecuatoriano.
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
          ¿Por qué son importantes?
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.25rem', mb: 2, lineHeight: 1.7 }}>
          Los bosques riparios son ecosistemas críticos que proporcionan múltiples servicios ecosistémicos esenciales para la sostenibilidad ambiental y el bienestar humano en Ecuador:
        </Typography>
        <ul style={{ marginLeft: 24, marginBottom: 24, color: '#fff', fontSize: '1.15rem', lineHeight: 1.7 }}>
          <li><b>Regulación hídrica:</b> Actúan como filtros naturales que purifican el agua, regulan el flujo de los ríos y previenen la erosión de las riberas, manteniendo la calidad del recurso hídrico que abastece a comunidades y ciudades.</li>
          <li><b>Biodiversidad:</b> Los bosques junto a los ríos actúan como amortiguadores para reducir el impacto de las perturbaciones antropogénicas en el río (<Link href="https://www.sciencedirect.com/science/article/abs/pii/S0143622816306105" target="_blank" rel="noopener" sx={{ color: '#CFFF4F', textDecoration: 'underline' }}>ScienceDirect</Link>), y albergan una extraordinaria diversidad de especies, muchas de ellas endémicas. En Ecuador, estos ecosistemas son refugio para anfibios, aves, mamíferos y una rica flora adaptada a condiciones riparias.</li>
          <li><b>Conectividad ecológica:</b> Funcionan como corredores biológicos que permiten el movimiento y dispersión de especies entre diferentes hábitats, siendo cruciales para mantener poblaciones viables y la resiliencia de los ecosistemas.</li>
          <li><b>Mitigación del cambio climático:</b> Estos bosques almacenan grandes cantidades de carbono y ayudan a regular el microclima local, contribuyendo a la estabilización climática regional.</li>
          <li><b>Protección ante desastres naturales:</b> Reducen significativamente el riesgo de inundaciones y deslizamientos, protegiendo a las comunidades asentadas en las cuencas hidrográficas.</li>
        </ul>
      </Box>
    ),
  },
  {
    key: 'sabias1',
    content: (
      <SabiasQue
        fuente="INABIO"
        link="https://www.ambiente.gob.ec/wp-content/uploads/downloads/2017/08/Boletin-Nro.-1.-Huella-Ecologica.pdf"
      >
        ¿Sabías que... en el Parque Nacional Yasuní habitan 458 especies de peces de agua dulce, muchas de las cuales dependen directamente de los bosques riparios para su supervivencia y reproducción?
      </SabiasQue>
    ),
  },
  {
    key: 'sabias2',
    content: (
      <SabiasQue
        fuente="ScienceDirect"
        link="https://www.sciencedirect.com/science/article/pii/S2212041624000597"
      >
        ¿Sabías que... Ecuador tenía 15.8 millones de hectáreas de bosque natural en 2020, que se extienden sobre el 62% de su superficie terrestre, y una gran parte de estos incluyen valiosos ecosistemas riparios?
      </SabiasQue>
    ),
  },
  {
    key: 'dashboard',
    content: (
      <Box
        component="iframe"
        src="URL_DEL_DASHBOARD_SHINY"
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

const BosquesRiparios = () => {
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
          src={cascadaImg}
          alt="Bosques Riparios"
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
            Bosques Riparios
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

export default BosquesRiparios; 