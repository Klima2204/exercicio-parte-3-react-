import { massas } from "../componentes/massas/massas";
import CardMassa from "../componentes/massas/cardMassa";
import "./Massa.css"

export default function Massas() {
  return (
    <div className="container">
      <h2>Escolha sua massa</h2>
      <div className="grid">
        {massas.map((massa, index) => (
          <CardMassa key={index} {...massa} />
        ))}
      </div>
    </div>
  );
}
