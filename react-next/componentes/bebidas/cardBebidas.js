
import "./CardBebidas.css";

export default function CardBebidas(props) {
  const { nome, valor } = props;

  return (
    <div className="card-bebida">
      <span>{nome}</span>
      <span>{valor}</span>
    </div>
  );
}


