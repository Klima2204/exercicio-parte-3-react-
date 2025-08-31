import styles from './PlantCard.module.css';
import Button from '../atoms/Button';
import PriceTag from '../atoms/PriceTag';
import PlantIcon from '../atoms/PlantIcon';
import { FaSun, FaRegMoon } from 'react-icons/fa';

export default function PlantCard({ plant }) {
  const { name, price, light } = plant;

  const lightIcon = light === 'sun' ? <FaSun color="#FFD700" /> : <FaRegMoon color="#6A5ACD" />;
  const lightLabel = light === 'sun' ? 'Sol' : 'Sombra';

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <PlantIcon size="md" />
        <h2>{name}</h2>
      </div>

      <div className={styles.details}>
        <PriceTag value={price} />
        <div className={styles.light}>
          {lightIcon}
          <span>{lightLabel}</span>
        </div>
      </div>

      <Button variant="primary">Adicionar</Button>
    </div>
  );
}
