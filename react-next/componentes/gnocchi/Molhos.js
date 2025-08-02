import "./molhos.css"
export default function Molhos() {
  const molhos = [
    "Alla Puttanesca",
    "Al Pesto di Basilico",
    "Cacio e Pepe",
    "Alla Matriciana"
  ];

  return (
    <div className="molhos-container">
      <div className="molho-grid">
        {molhos.map((molho, index) => (
          <div key={index} className="molho-card">
            <h3>{molho}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
