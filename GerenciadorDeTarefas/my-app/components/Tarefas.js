export default function Tarefas({ tarefas }) {
  const filtrarPorPeriodo = (periodo) => tarefas.filter(t => t.periodo === periodo);
  const contarConcluidas = (lista) => lista.filter(t => t.status === 'concluída').length;

  const periodos = ['Manhã', 'Tarde', 'Noite'];

  const renderLista = (lista) => (
    <ul>
      {lista.map((tarefa, index) => (
        <li key={index}>{tarefa.nome}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
        {periodos.map((periodo) => {
          const lista = filtrarPorPeriodo(periodo);
          const concluidas = contarConcluidas(lista);
          return (
            <div key={periodo}>
              <h3>
                {periodo === 'Manhã'}
                {periodo === 'Tarde'}
                {periodo === 'Noite'} {periodo}
              </h3>
              {renderLista(lista)}
              <p>
                ✅ <strong>{concluidas} de {lista.length} concluídas</strong>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
