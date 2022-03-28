import React, { useState, useContext } from 'react';
import { SocketContext } from '../context/SocketContext';
import { useSocket } from '../hooks/useSocket';

export const BandAdd = ({}) => {

  const [valor, setValor] = useState('');
  const { socket } = useContext( SocketContext )


  const onSubmit = (e) =>{
    e.preventDefault();
    if(valor.trim().length >= 0){
      socket.emit('crear-banda', {nombre : valor});
      setValor('');
    }
  }
  return <>
        <h3> Agregar banda </h3>

                <form onSubmit={onSubmit}>
                    <input className='form-control'
                    placeholder='Nombre que agregar'
                    value = {valor}
                    onChange={(e) => setValor(e.target.value)}
                    />
                </form>
  </>;
};
