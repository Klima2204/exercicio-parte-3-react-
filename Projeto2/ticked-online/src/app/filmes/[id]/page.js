'use client';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import mockFilmes from '@/data/mockFilmes';
import { Box, Typography, Button } from '@mui/material';

export default function FilmeDetalhesPage() {
  const { id } = useParams();
  const router = useRouter();
  const filme = mockFilmes.find((f) => f.id === id);

  if (!filme) return <p>Filme não encontrado.</p>;

  return (
    <Box sx={{ padding: '2rem' }}>
      <img src={filme.cartaz} alt={filme.nome} style={{ maxWidth: '300px' }} />
      <Typography variant="h4" sx={{ mt: 2 }}>{filme.nome}</Typography>
      <Typography variant="body1">{filme.genero}</Typography>
      <Typography variant="body2">Faixa etária: {filme.idade_indicada} anos</Typography>
      <Typography variant="body2" sx={{ mt: 2 }}>{filme.sinopse}</Typography>
      <Button variant="outlined" sx={{ mt: 3 }} onClick={() => router.push('/filmes')}>
        Voltar
      </Button>
    </Box>
  );
}
