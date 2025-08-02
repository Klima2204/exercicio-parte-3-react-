import './lista.css'

const gnocchis = [
  {
    nome: "Gnocchi de Batata",
    preco: "R$ 32,00",
    imagem: "./gnocchi_batata_exemplo.jpeg"
  },
  {
    nome: "Gnocchi de Espinafre",
    preco: "R$ 34,00",
    imagem: "./gnocchi_espinafre_exemplo.jpeg"
  },
  {
    nome: "Gnocchi de Cenoura",
    preco: "R$ 33,00",
    imagem: "./gnocchi_cenoura_exemplo.jpeg"
  },
  {
    nome: "Gnocchi de Beterraba",
    preco: "R$ 35,00",
    imagem: "./gnocchi_beterraba_exemplo.jpeg"
  },
];

export default function Lista() {
  return (
    <div className="grid">
      {gnocchis.map((item, index) => (
        <div key={index} className="card">
          <img src={item.imagem} alt={item.nome} />
          <h3>{item.nome}</h3>
          <p>{item.preco}</p>
        </div>
      ))}
    </div>
  );
}
