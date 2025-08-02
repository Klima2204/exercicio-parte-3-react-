import "./apresentacao.css"

export default function Apresentacao() {
  return (
    <section className="container">
      <div className="texto">
        <h2>Servindo massas há mais de 70 anos</h2>
        <p>Qualidade passada por gerações</p>
      </div>
    
      <div className="imagem">
        <img src="https://www.jornaldocomercio.com/_midias/jpg/2023/06/20/minuto_varejo___mamma_mia___bela_vista___nova_unidade___porto_alegre___comida_italiana___galeto___gastronomia___expansao-10244083.jpg" alt="Fachada do restaurante Mamamia"
        width={500} height={500}
        />
      </div>
    </section>
  );
}
