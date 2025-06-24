import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ForestIcon from '@mui/icons-material/Forest';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <ForestIcon sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 700,
            }}
          >
            MAATE - Indicadores Ambientales
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            component={RouterLink}
            to="/huella-humana"
          >
            Huella Humana
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/bosques-riparios"
          >
            Bosques Riparios
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 