"use client"
import { useState } from 'react';
import NovaTarefa from '../components/NovaTarefa';

export default function Gerenciador() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (nova) => {
    setTarefas([...tarefas, nova]);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Gerenciador de Tarefas</h1>
      <NovaTarefa onAdicionar={adicionarTarefa} />
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            <strong>{tarefa.periodo}</strong>: {tarefa.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
}
