import React from 'react';
import { Box, Container, Typography, Button, Link, Chip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import cascadaImg from '../assets/cascada.jpg';
import maateLogo from '../assets/logos/MAATE.png';
import onuLogo from '../assets/logos/ONU.png';
import nasaLogo from '../assets/logos/NASA.png';
import eneLogo from '../assets/logos/ENE.png';
import espeLogo from '../assets/logos/ESPE.png';

const BosquesRipariosInfo = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/bosques-riparios');
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
          src={cascadaImg}
          alt="Bosques Riparios"
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
            BOSQUES RIPARIOS
            <br />
            <Box component="span" sx={{ fontSize: { xs: '1.8rem', md: '3rem' }, fontWeight: 600 }}>
              ECOSISTEMAS CRÍTICOS PARA ECUADOR
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
              label="Ecosistemas" 
              sx={{ bgcolor: '#C7F808', color: '#1D2331', fontWeight: 700, cursor: 'default' }}
              onClick={() => {}}
            />
            <Chip 
              label="Conservación" 
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
            ¿Qué son los Bosques Riparios?
          </Typography>
          
          <Typography variant="body1" sx={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.8, 
            mb: 4,
            color: '#E0E0E0'
          }}>
            Los bosques riparios son ecosistemas forestales que se desarrollan en las márgenes de ríos, quebradas, riachuelos y otros cuerpos de agua dulce. Estos bosques forman una franja de vegetación que actúa como zona de transición entre los ecosistemas acuáticos y terrestres.
          </Typography>

          <Typography variant="body1" sx={{ 
            fontSize: '1.1rem', 
            lineHeight: 1.7, 
            mb: 5,
            color: '#CCCCCC'
          }}>
            En Ecuador, los bosques riparios incluyen una diversidad de especies arbóreas, arbustivas y herbáceas nativas que han evolucionado específicamente para prosperar en condiciones de alta humedad y fluctuaciones periódicas del nivel del agua. Estos bosques desempeñan un papel importante en la preservación del recurso hídrico y estabilización de los cauces, como corredores de dispersión de la biota y como albergues para la fauna en épocas secas.
          </Typography>

          {/* Importance Section */}
          <Typography variant="h4" sx={{ 
            color: '#C7F808', 
            fontWeight: 700, 
            mb: 3,
            mt: 6,
            fontSize: { xs: '1.5rem', md: '2rem' }
          }}>
            Importancia Ecosistémica
          </Typography>

          <Typography variant="body1" sx={{ 
            fontSize: '1.1rem', 
            lineHeight: 1.7, 
            mb: 3,
            color: '#CCCCCC'
          }}>
            Los bosques riparios son ecosistemas críticos que proporcionan múltiples servicios ecosistémicos esenciales para la sostenibilidad ambiental y el bienestar humano en Ecuador:
          </Typography>

          <Box sx={{ pl: 3, mb: 5 }}>
            <Typography variant="h6" sx={{ color: '#C7F808', fontWeight: 600, mb: 2 }}>
              🌊 Regulación Hídrica
            </Typography>
            <Typography variant="body1" sx={{ 
              fontSize: '1.05rem', 
              lineHeight: 1.6, 
              mb: 3,
              color: '#CCCCCC',
              pl: 2
            }}>
              Actúan como filtros naturales que purifican el agua, regulan el flujo de los ríos y previenen la erosión de las riberas, manteniendo la calidad del recurso hídrico que abastece a comunidades y ciudades.
            </Typography>

            <Typography variant="h6" sx={{ color: '#C7F808', fontWeight: 600, mb: 2 }}>
              🦋 Biodiversidad
            </Typography>
            <Typography variant="body1" sx={{ 
              fontSize: '1.05rem', 
              lineHeight: 1.6, 
              mb: 3,
              color: '#CCCCCC',
              pl: 2
            }}>
              Los bosques junto a los ríos actúan como amortiguadores para reducir el impacto de las perturbaciones antropogénicas en el río, y albergan una extraordinaria diversidad de especies, muchas de ellas endémicas.
            </Typography>

            <Typography variant="h6" sx={{ color: '#C7F808', fontWeight: 600, mb: 2 }}>
              🌿 Conectividad Ecológica
            </Typography>
            <Typography variant="body1" sx={{ 
              fontSize: '1.05rem', 
              lineHeight: 1.6, 
              mb: 3,
              color: '#CCCCCC',
              pl: 2
            }}>
              Funcionan como corredores biológicos que permiten el movimiento y dispersión de especies entre diferentes hábitats, siendo cruciales para mantener poblaciones viables y la resiliencia de los ecosistemas.
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
              📊 Datos Importantes
            </Typography>
            
            <Typography variant="body1" sx={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.7, 
              mb: 3,
              color: '#E0E0E0',
              textAlign: 'center'
            }}>
              <strong>458 especies</strong> de peces de agua dulce habitan en el Parque Nacional Yasuní, muchas dependientes de los bosques riparios.
            </Typography>

            <Typography variant="body1" sx={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.7,
              color: '#E0E0E0',
              textAlign: 'center'
            }}>
              Ecuador tenía <strong>15.8 millones de hectáreas</strong> de bosque natural en 2020, extendiéndose sobre el <strong>62%</strong> de su superficie terrestre.
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
            Proyecto NASA Life on Land
          </Typography>

          <Typography variant="body1" sx={{ 
            fontSize: '1.1rem', 
            lineHeight: 1.7, 
            mb: 4,
            color: '#CCCCCC'
          }}>
            Como parte del proyecto NASA Life on Land, el monitoreo de estos ecosistemas permite evaluar su estado de conservación y las presiones antropogénicas que enfrentan a lo largo del territorio ecuatoriano. Esta iniciativa representa un esfuerzo colaborativo entre ciencia y tecnología para la conservación de nuestros recursos naturales.
          </Typography>

          {/* References */}
          <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid #333' }}>
            <Typography variant="h6" sx={{ color: '#C7F808', fontWeight: 600, mb: 3 }}>
              Referencias
            </Typography>
            <Typography variant="body2" sx={{ color: '#888', mb: 2 }}>
              • <Link href="https://www.wwf.es/nuestro_trabajo/informe_planeta_vivo_ipv/huella_ecologica/" target="_blank" sx={{ color: '#C7F808' }}>WWF (2022)</Link> - Informe Planeta Vivo
            </Typography>
            <Typography variant="body2" sx={{ color: '#888', mb: 2 }}>
              • <Link href="https://www.sciencedirect.com/science/article/abs/pii/S0143622816306105" target="_blank" sx={{ color: '#C7F808' }}>ScienceDirect</Link> - Bosques Riparios y Biodiversidad
            </Typography>
            <Typography variant="body2" sx={{ color: '#888' }}>
              • <Link href="https://www.sciencedirect.com/science/article/pii/S2212041624000597" target="_blank" sx={{ color: '#C7F808' }}>ScienceDirect</Link> - Cobertura Forestal en Ecuador 2020
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

export default BosquesRipariosInfo; 