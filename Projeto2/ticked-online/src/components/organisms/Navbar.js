'use client';
import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeToggle } from '@/context/ThemeContext';
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
  const { toggleTheme } = useThemeToggle();
  const theme = useTheme();

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">🎟️ TicketOnline</Typography>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="/">Início</Link>
          <Link href="/filmes">Filmes</Link>
          <Link href="/contato">Contato</Link>
          <IconButton color="inherit" onClick={toggleTheme}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
