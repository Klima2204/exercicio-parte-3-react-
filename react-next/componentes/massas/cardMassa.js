import Molhos from "../gnocchi/Molhos"
import "./cardMassa.css"

export default function CardMassa({ nome, imagem, valor, molhosPermitidos }) {
  return (
    <div className="card">
      <img src={imagem} alt={nome} className="imagem" />
      <h3>{nome}</h3>
      <p>{valor}</p>
      <Molhos molhosPermitidos={molhosPermitidos} />
    </div>
  );
}
