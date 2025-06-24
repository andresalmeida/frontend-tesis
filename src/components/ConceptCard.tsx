import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

interface ConceptCardProps {
  titulo: string;
  descripcion: string;
  icono?: React.ReactNode;
}

const ConceptCard: React.FC<ConceptCardProps> = ({ titulo, descripcion, icono }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        mb: 3,
        background: 'rgba(207, 255, 79, 0.15)',
        borderLeft: '8px solid #CFFF4F',
        borderRadius: 3,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        animation: 'fadeInConcept 1s',
      }}
    >
      {icono && (
        <Box sx={{ fontSize: 48, color: '#CFFF4F', mr: 2 }}>
          {icono}
        </Box>
      )}
      <Box>
        <Typography variant="h5" sx={{ color: '#CFFF4F', fontWeight: 700, mb: 1 }}>
          {titulo}
        </Typography>
        <Typography variant="body1" sx={{ color: '#fff' }}>
          {descripcion}
        </Typography>
      </Box>
    </Paper>
  );
};

export default ConceptCard;

// Animación fadeInConcept en index.css:
// @keyframes fadeInConcept {
//   from { opacity: 0; transform: translateY(30px); }
//   to { opacity: 1; transform: none; }
// } 