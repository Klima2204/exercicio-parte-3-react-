import Molhos from '@/componentes/gnocchi/Molhos';
import Lista from '../componentes/gnocchi/lista';
import './gnocchis.css';

export default function gnocchis() {
  return (
    <div>
      <h1 className='nome'>Nossos Gnocchis</h1>
      <Lista />
      <h3 className='nome'>Escolha o molho</h3>
      <Molhos />

    </div>
  );
}
