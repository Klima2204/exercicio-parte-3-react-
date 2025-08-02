import Link from 'next/link';
import "./Style.css"

export default function NavBar() {
  return (
    <nav className='nav'>
      <div className='header'>
      <img src="https://tse4.mm.bing.net/th/id/OIP.BNwtll9f6RkXlQRoQYJDKwHaHa?r=0&w=1536&h=1536&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Logo do restaurante Mamamia"
      width={100} height={100}
      className='logo'/>
      <h1>Mamamia Massas</h1>
      </div>
      <ul className="navList">
        <li><Link href="/">Início</Link></li>
        <li><Link href="/gnocchis">Gnocchi</Link></li>
        <li><Link href="/">Pastas</Link></li>
        <li><Link href="/">Bebidas</Link></li>
      </ul>
    </nav>
  );
}
