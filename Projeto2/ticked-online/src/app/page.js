import Footer from '../components/organisms/Footer';
import Navbar from '..//components/organisms/Navbar';
import { ThemeContextProvider } from '../context/ThemeContext';
import InicioPage from './inicio/page';

export default function HomePage() {
  return (
    <ThemeContextProvider>
      <Navbar/>
      <InicioPage/>
      <Footer/>
    </ThemeContextProvider>
  );
}