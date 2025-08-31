import BarraProgresso from './Progresso';

export default function Tarefas({ tarefas, onToggleStatus }) {
  const periodos = ['Manhã', 'Tarde', 'Noite'];

  const filtrarPorPeriodo = (periodo) =>
    tarefas.filter((t) => t.periodo === periodo);

  const contarConcluidas = (lista) =>
    lista.filter((t) => t.status === 'concluída').length;

  const renderLista = (lista) => (
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      {lista.map((tarefa, indexGlobal) => {
        const index = tarefas.findIndex(
          (t) => t.nome === tarefa.nome && t.periodo === tarefa.periodo
        );
        const concluida = tarefa.status === 'concluída';

        return (
          <li key={indexGlobal} style={{ marginBottom: '0.5rem' }}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                checked={concluida}
                onChange={() => onToggleStatus(index)}
                style={{ marginRight: '0.5rem' }}
              />
              <span
                style={{
                  textDecoration: concluida ? 'line-through' : 'none'
                }}
              >
                {tarefa.nome}
              </span>
            </label>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
        {periodos.map((periodo) => {
          const lista = filtrarPorPeriodo(periodo);
          const concluidas = contarConcluidas(lista);

          return (
            <div key={periodo} style={{ flex: 1 }}>
              <h3>
                {periodo === 'Manhã' && '🌅'}
                {periodo === 'Tarde' && '🌇'}
                {periodo === 'Noite' && '🌃'} {periodo}
              </h3>
              {renderLista(lista)}
              <p>
                ✅ <strong>{concluidas} de {lista.length} concluídas</strong>
              </p>
              <BarraProgresso
                totalTarefas={lista.length}
                tarefasConcluidas={concluidas}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
