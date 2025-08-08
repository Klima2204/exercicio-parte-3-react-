'use client';
import { useState, useEffect } from 'react';
import "./cronometro.css"

export default function Cronometro() {
  const [tempo, setTempo] = useState(0)
  const [rodando, setRodando] = useState(false)

  useEffect(() => {
    let intervalo = null

    if (rodando) {
      intervalo = setInterval(() => {
        setTempo((prevTempo) => prevTempo + 1)
      }, 1000)
    } else {
      clearInterval(intervalo)
    }

    return () => clearInterval(intervalo)
  }, [rodando])

  useEffect(() => {
    document.title = `Tempo: ${tempo}s`
  }, [rodando])

  const iniciar = () => setRodando(true)
  const pausar = () => setRodando(false)
  const zerar = () => {
    setRodando(false)
    setTempo(0)
  };

  return (
    <div className='container'>
      <h1 className='timer'>{tempo} segundos</h1>
      <div className='buttons'>
        <button className='button' onClick={iniciar}>Iniciar</button>
        <button className='button' onClick={pausar}>Pausar</button>
        <button className='button' onClick={zerar}>Zerar</button>
      </div>
    </div>
  );
}
