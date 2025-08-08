import { bebidas } from "../componentes/bebidas/bebidas";
import CardBebidas from "../componentes/bebidas/cardBebidas";
import "./Bebidas.css";

export default function Bebidas() {
  return (
    <div className="bebidas-container">
      <h2>🍹 Seção de Bebidas</h2>
      {bebidas.map((categoriaObj, index) => {
        const categoria = Object.keys(categoriaObj)[0];
        const itens = categoriaObj[categoria];

        return (
          <div key={index} className="categoria">
            <h3>{categoria}</h3>
            {itens.map((item, idx) => (
              <CardBebidas key={idx} nome={item.nome} valor={item.valor} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
