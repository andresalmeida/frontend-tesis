import React from 'react';
import { Box, Container, Typography, Button, Link, Chip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import paisajeImg from '../assets/paisaje.jpg';
import maateLogo from '../assets/logos/MAATE.png';
import onuLogo from '../assets/logos/ONU.png';
import nasaLogo from '../assets/logos/NASA.png';
import eneLogo from '../assets/logos/ENE.png';
import espeLogo from '../assets/logos/ESPE.png';

const HuellaHumanaInfo = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/huella-humana');
  };

  return (
    <Box>
      {/* Hero Section - Blog Style */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
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
            filter: 'brightness(0.3)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)',
            zIndex: 2,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
          <Typography variant="h1" component="h1" sx={{ 
            color: '#fff', 
            fontWeight: 900, 
            fontSize: { xs: '2.5rem', md: '4.5rem' },
            mb: 3,
            fontFamily: 'Oswald, Arial, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '-2px',
            lineHeight: 0.9,
            textShadow: '0 4px 20px rgba(0,0,0,0.8)'
          }}>
            HUELLA HUMANA
            <br />
            <Box component="span" sx={{ fontSize: { xs: '1.8rem', md: '3rem' }, fontWeight: 600 }}>
              PRESIONES ANTROPOGÉNICAS EN ECUADOR
            </Box>
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Article Header */}
        <Box sx={{ mb: 6 }}>
          <Button
            variant="text"
            startIcon={<ArrowBackIcon />}
            onClick={handleGoBack}
            sx={{
              color: '#C7F808',
              fontWeight: 600,
              mb: 4,
              '&:hover': {
                bgcolor: 'rgba(199,248,8,0.1)',
              },
            }}
          >
            Volver al Dashboard
          </Button>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }}>
            <Chip 
              label="Monitoreo Ambiental" 
              sx={{ bgcolor: '#C7F808', color: '#1D2331', fontWeight: 700, cursor: 'default' }}
              onClick={() => {}}
            />
            <Chip 
              label="Biodiversidad" 
              sx={{ bgcolor: 'rgba(199,248,8,0.2)', color: '#C7F808', fontWeight: 600, cursor: 'default' }}
              onClick={() => {}}
            />
            <Chip 
              label="NASA Ecuador" 
              sx={{ bgcolor: 'rgba(199,248,8,0.2)', color: '#C7F808', fontWeight: 600, cursor: 'default' }}
              onClick={() => {}}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, color: '#888', fontSize: '0.9rem' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PersonIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2">Proyecto NASA Life on Land</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarTodayIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2">Diciembre 2024</Typography>
            </Box>
          </Box>
        </Box>

        {/* Article Content */}
        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          {/* Introduction */}
          <Typography variant="h4" sx={{ 
            color: '#C7F808', 
            fontWeight: 700, 
            mb: 3,
            fontSize: { xs: '1.5rem', md: '2rem' }
          }}>
            ¿Qué es la Huella Humana?
          </Typography>
          
          <Typography variant="body1" sx={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.8, 
            mb: 4,
            color: '#E0E0E0'
          }}>
            La Huella Humana es un índice espacial que evalúa y cuantifica las presiones humanas sobre los ecosistemas naturales en una escala de 0 (mínima influencia) a 100 (máxima influencia).
          </Typography>

          <Typography variant="body1" sx={{ 
            fontSize: '1.1rem', 
            lineHeight: 1.7, 
            mb: 5,
            color: '#CCCCCC'
          }}>
            Este indicador integra múltiples factores de presión antropogénica incluyendo infraestructura construida, cambios en el uso del suelo (agricultura, pastoreo, plantaciones forestales), redes de transporte (carreteras y ferrocarriles), densidad poblacional, infraestructura eléctrica, actividades extractivas (petróleo, gas y minería) para generar mapas que revelan el grado de naturalidad de los ecosistemas.
          </Typography>

          {/* Importance Section */}
          <Typography variant="h4" sx={{ 
            color: '#C7F808', 
            fontWeight: 700, 
            mb: 3,
            mt: 6,
            fontSize: { xs: '1.5rem', md: '2rem' }
          }}>
            Importancia del Monitoreo
          </Typography>

          <Typography variant="body1" sx={{ 
            fontSize: '1.1rem', 
            lineHeight: 1.7, 
            mb: 3,
            color: '#CCCCCC'
          }}>
            La transformación del territorio representa probablemente la mayor amenaza para la biodiversidad. Ecuador, siendo uno de los países más megadiversos del mundo, requiere un monitoreo constante de estas presiones. La importancia radica en que permite:
          </Typography>

          <Box sx={{ pl: 3, mb: 5 }}>
            <Typography variant="h6" sx={{ color: '#C7F808', fontWeight: 600, mb: 2 }}>
              🔍 Monitoreo de la Biodiversidad
            </Typography>
            <Typography variant="body1" sx={{ 
              fontSize: '1.05rem', 
              lineHeight: 1.6, 
              mb: 3,
              color: '#CCCCCC',
              pl: 2
            }}>
              Identificar áreas donde la presión humana amenaza ecosistemas críticos y especies endémicas.
            </Typography>

            <Typography variant="h6" sx={{ color: '#C7F808', fontWeight: 600, mb: 2 }}>
              🏗️ Planificación Territorial
            </Typography>
            <Typography variant="body1" sx={{ 
              fontSize: '1.05rem', 
              lineHeight: 1.6, 
              mb: 3,
              color: '#CCCCCC',
              pl: 2
            }}>
              Guiar decisiones sobre uso del suelo y desarrollo de infraestructura de manera sostenible.
            </Typography>

            <Typography variant="h6" sx={{ color: '#C7F808', fontWeight: 600, mb: 2 }}>
              🛡️ Evaluación de Efectividad
            </Typography>
            <Typography variant="body1" sx={{ 
              fontSize: '1.05rem', 
              lineHeight: 1.6, 
              mb: 3,
              color: '#CCCCCC',
              pl: 2
            }}>
              Medir qué tan bien funcionan las áreas protegidas en mantener ecosistemas intactos.
            </Typography>
          </Box>

          {/* Data Highlights */}
          <Box sx={{ 
            bgcolor: 'rgba(199,248,8,0.1)', 
            p: 4, 
            borderRadius: 3,
            border: '1px solid rgba(199,248,8,0.3)',
            mb: 5
          }}>
            <Typography variant="h5" sx={{ 
              color: '#C7F808', 
              fontWeight: 700, 
              mb: 3,
              textAlign: 'center'
            }}>
              🎯 Objetivo de Desarrollo Sostenible 15
            </Typography>
            
            <Typography variant="body1" sx={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.7, 
              mb: 3,
              color: '#E0E0E0',
              textAlign: 'center'
            }}>
              El seguimiento de la Huella Humana es fundamental para que Ecuador pueda cumplir con sus compromisos internacionales de conservación.
            </Typography>

            <Typography variant="body1" sx={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.7,
              color: '#E0E0E0',
              textAlign: 'center'
            }}>
              <strong>Meta:</strong> Proteger el <strong>30%</strong> de tierras y mares para 2030
            </Typography>
          </Box>

          {/* Project Context */}
          <Typography variant="h4" sx={{ 
            color: '#C7F808', 
            fontWeight: 700, 
            mb: 3,
            mt: 6,
            fontSize: { xs: '1.5rem', md: '2rem' }
          }}>
            Proyecto NASA-Ecuador
          </Typography>

          <Typography variant="body1" sx={{ 
            fontSize: '1.1rem', 
            lineHeight: 1.7, 
            mb: 4,
            color: '#CCCCCC'
          }}>
            En Ecuador, el Ministerio de Ambiente, Agua y Transición Ecológica (MAATE), junto con el PNUD e instituciones científicas, trabajaron desde 2019 hasta 2022 bajo financiamiento de la NASA para generar información que apoye la toma de decisiones en política pública ambiental basada en evidencia científica.
          </Typography>

          <Typography variant="body1" sx={{ 
            fontSize: '1.1rem', 
            lineHeight: 1.7, 
            mb: 4,
            color: '#CCCCCC'
          }}>
            Este proyecto representa el primer sistema en pronosticar cómo los cambios en el uso del suelo interactúan con el cambio climático en la región andina, estableciendo un precedente para el monitoreo ambiental en América Latina.
          </Typography>

          {/* References */}
          <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid #333' }}>
            <Typography variant="h6" sx={{ color: '#C7F808', fontWeight: 600, mb: 3 }}>
              Referencias
            </Typography>
            <Typography variant="body2" sx={{ color: '#888', mb: 2 }}>
              • <Link href="https://www.undp.org/es/ecuador/noticias/proyecto-nasa-en-ecuador-midio-los-avances-en-la-conservacion-de-los-ecosistemas-terrestres" target="_blank" sx={{ color: '#C7F808' }}>PNUD (2023)</Link> - Proyecto NASA en Ecuador
            </Typography>
            <Typography variant="body2" sx={{ color: '#888', mb: 2 }}>
              • <Link href="https://www.earthdata.nasa.gov/news/feature-articles/human-footprint" target="_blank" sx={{ color: '#C7F808' }}>NASA Earthdata (2020)</Link> - Human Footprint
            </Typography>
            <Typography variant="body2" sx={{ color: '#888' }}>
              • <Link href="https://www.ambiente.gob.ec/identificacion-calculo-y-mitigacion-de-la-huella-ecologica-del-sector-publico-y-productivo-del-ecuador/" target="_blank" sx={{ color: '#C7F808' }}>MAATE (2019)</Link> - Huella Ecológica Ecuador
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: 'rgba(29,35,49,0.95)',
          borderTop: '1px solid rgba(199,248,8,0.3)',
          py: 6,
          mt: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            {/* Información del Proyecto */}
            <Box sx={{ flex: 2 }}>
              <Typography variant="h6" sx={{ color: '#C7F808', fontWeight: 700, mb: 3 }}>
                Proyecto NASA Life on Land
              </Typography>
              <Typography variant="body2" sx={{ color: '#CCCCCC', lineHeight: 1.6, mb: 2 }}>
                Monitoreo de ecosistemas terrestres en Ecuador mediante tecnología satelital y análisis de datos geoespaciales para la conservación de la biodiversidad.
              </Typography>
              <Typography variant="body2" sx={{ color: '#888', fontSize: '0.9rem' }}>
                © 2024 - Proyecto colaborativo entre instituciones nacionales e internacionales
              </Typography>
            </Box>

            {/* Enlaces Útiles */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ color: '#C7F808', fontWeight: 700, mb: 3 }}>
                Enlaces
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="/huella-humana-info" sx={{ color: '#CCCCCC', textDecoration: 'none', '&:hover': { color: '#C7F808' } }}>
                  Huella Humana
                </Link>
                <Link href="/bosques-riparios-info" sx={{ color: '#CCCCCC', textDecoration: 'none', '&:hover': { color: '#C7F808' } }}>
                  Bosques Riparios
                </Link>
                <Link href="https://www.undp.org/es/ecuador" target="_blank" sx={{ color: '#CCCCCC', textDecoration: 'none', '&:hover': { color: '#C7F808' } }}>
                  PNUD Ecuador
                </Link>
                <Link href="https://www.ambiente.gob.ec" target="_blank" sx={{ color: '#CCCCCC', textDecoration: 'none', '&:hover': { color: '#C7F808' } }}>
                  MAATE
                </Link>
              </Box>
            </Box>

            {/* Contacto */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ color: '#C7F808', fontWeight: 700, mb: 3 }}>
                Contacto
              </Typography>
              <Typography variant="body2" sx={{ color: '#CCCCCC', lineHeight: 1.6 }}>
                Para más información sobre el proyecto y sus resultados.
              </Typography>
              <Typography variant="body2" sx={{ color: '#888', mt: 1 }}>
                Ecuador - Quito
              </Typography>
            </Box>
          </Box>

          {/* Logos de las Organizaciones */}
          <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid rgba(199,248,8,0.2)' }}>
            <Typography variant="body2" sx={{ color: '#888', textAlign: 'center', mb: 4 }}>
              En colaboración con:
            </Typography>
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: { xs: 3, md: 6 },
                flexWrap: 'wrap'
              }}
            >
              <Box component="img" src={eneLogo} alt="ENE" sx={{ height: { xs: 40, md: 50 }, filter: 'brightness(0.9)' }} />
              <Box component="img" src={maateLogo} alt="MAATE" sx={{ height: { xs: 40, md: 50 }, filter: 'brightness(0.9)' }} />
              <Box component="img" src={onuLogo} alt="ONU" sx={{ height: { xs: 40, md: 50 }, filter: 'brightness(0.9)' }} />
              <Box component="img" src={nasaLogo} alt="NASA" sx={{ height: { xs: 55, md: 70 }, filter: 'brightness(0.9)' }} />
              <Box component="img" src={espeLogo} alt="ESPE" sx={{ height: { xs: 40, md: 50 }, filter: 'brightness(0.9)' }} />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HuellaHumanaInfo; 