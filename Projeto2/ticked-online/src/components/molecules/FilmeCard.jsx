'use client';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function FilmeCard({ filme }) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" height="400" image={filme.cartaz} alt={filme.nome} />
      <CardContent>
        <Typography variant="h6">{filme.nome}</Typography>
        <Typography variant="body2" color="text.secondary">{filme.genero}</Typography>
        <Typography variant="body2">Faixa etária: {filme.idade_indicada} anos</Typography>
        <Link href={`/filmes/${filme.id}`} passHref>
          <Button variant="contained" sx={{ mt: 1 }}>Ver mais informações</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
