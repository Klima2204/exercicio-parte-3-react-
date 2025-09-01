'use client';
import { Grid } from '@mui/material';
import FilmeCard from '../molecules/FilmeCard';

export default function FilmesGrid({ filmes }) {
  return (
    <Grid container spacing={3}>
      {filmes.map((filme) => (
        <Grid item xs={12} sm={6} md={4} key={filme.id}>
          <FilmeCard filme={filme} />
        </Grid>
      ))}
    </Grid>
  );
}
