"use client"
import { useState, useEffect } from 'react';
import NovaTarefa from '../components/NovaTarefa';
import Tarefas from '../components/Tarefas';

export default function Gerenciador() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

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
      <h1>📋 Gerenciador de Tarefas</h1>
      <NovaTarefa onAdicionar={adicionarTarefa} />
      <Tarefas tarefas={tarefas} onToggleStatus={alternarStatus} />
    </div>
  );
}
