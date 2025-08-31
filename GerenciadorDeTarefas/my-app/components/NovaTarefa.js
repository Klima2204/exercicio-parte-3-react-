import { useState } from 'react';

export default function NovaTarefa({ onAdicionar }) {
  const [descricao, setDescricao] = useState('');
  const [periodo, setPeriodo] = useState('Manhã');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!descricao.trim()) return;

    onAdicionar({ descricao, periodo });
    setDescricao('');
    setPeriodo('Manhã');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Descrição da tarefa"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        style={{ marginRight: '1rem' }}
      />

      <select
        value={periodo}
        onChange={(e) => setPeriodo(e.target.value)}
        style={{ marginRight: '1rem' }}
      >
        <option value="Manhã">Manhã</option>
        <option value="Tarde">Tarde</option>
        <option value="Noite">Noite</option>
      </select>

      <button type="submit">Adicionar</button>
    </form>
  );
}
