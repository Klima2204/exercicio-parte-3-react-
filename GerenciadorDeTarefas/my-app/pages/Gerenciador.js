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
      status: 'pendente', // padrão inicial
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Gerenciador de Tarefas</h1>
      <NovaTarefa onAdicionar={adicionarTarefa} />
      <Tarefas tarefas={tarefas} />
    </div>
  );
}
