import FilmesGrid from '@/components/organisms/FilmesGrid';
import mockFilmes from '@/data/mockFilmes';

export default function TemplateFilmesPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Filmes em Cartaz</h1>
      <FilmesGrid filmes={mockFilmes} />
    </div>
  );
}
