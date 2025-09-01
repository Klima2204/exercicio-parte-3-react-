export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#222',
      color: '#fff',
      padding: '1.5rem',
      textAlign: 'center',
      marginTop: '2rem'
    }}>
      <p>&copy; {new Date().getFullYear()} CineFlix. Todos os direitos reservados.</p>
      <p>Feito com 🎬 e ❤️ por Kelvin</p>
    </footer>
  );
}
