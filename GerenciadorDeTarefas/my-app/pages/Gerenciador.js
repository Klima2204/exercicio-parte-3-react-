"use client"
import { useState } from 'react';
import NovaTarefa from '../components/NovaTarefa';
import Tarefas from '../components/Tarefas';

export default function Gerenciador() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = ({ descricao, periodo }) => {
    const novaTarefa = {
      nome: descricao,
      periodo,
      status: 'pendente',
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const alternarStatus = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].status =
      novasTarefas[index].status === 'concluída' ? 'pendente' : 'concluída';
    setTarefas(novasTarefas);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Gerenciador de Tarefas</h1>
      <NovaTarefa onAdicionar={adicionarTarefa} />
      <Tarefas tarefas={tarefas} onToggleStatus={alternarStatus} />
    </div>
  );
}
