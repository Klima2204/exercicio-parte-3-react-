export default function BarraProgresso({ totalTarefas, tarefasConcluidas }) {
  if (totalTarefas === 0) return <p>Sem tarefas cadastradas.</p>;

  const progresso = Math.round((tarefasConcluidas / totalTarefas) * 100);

  return (
    <div style={{ marginTop: '1rem' }}>
      <p>📊 Progresso: {progresso}%</p>
      <div
        style={{
          backgroundColor: '#eee',
          borderRadius: '8px',
          height: '20px',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            backgroundColor: '#4caf50',
            width: `${progresso}%`,
            height: '100%',
            transition: 'width 0.3s ease',
          }}
        />
      </div>
    </div>
  );
}
