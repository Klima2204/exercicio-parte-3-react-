import FormularioContato from '@/components/organisms/FormularioContato';
import Navbar from '@/components/organisms/Navbar';

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <FormularioContato />
      </main>
    </>
  );
}
