import { Box, Container, Typography } from '@mui/material';

export default function StoreLayout({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Box component="header" sx={{ backgroundColor: '#c2a39a', padding: 2 }}>
        <Typography variant="h5" color="text.primary">
          🪴 Loja de Plantas
        </Typography>
      </Box>

      {/* Conteúdo */}
      <Container component="main" sx={{ flex: 1, py: 4 }}>
        {children}
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ backgroundColor: '#c2a39a', padding: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Loja de Plantas 🌱
        </Typography>
      </Box>
    </Box>
  );
}
