import FilmesGrid from '@/components/organisms/FilmesGrid';
import mockFilmes from '@/data/mockFilmes';
import Navbar from '@/components/organisms/Navbar';

export default function FilmesPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>📽️ Filmes em Cartaz</h1>
        <FilmesGrid filmes={mockFilmes} />
      </main>
    </>
  );
}
