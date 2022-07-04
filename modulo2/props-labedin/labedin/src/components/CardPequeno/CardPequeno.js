import React from 'react';
import { ContainerTexto, ContainerDiv } from './CardPequeno.styled';

export const CardPequeno = (props) => {
  return (
    
    <div>
    <div>
          <h4>Email: {props.email }</h4>
          <p> <h4>Endereço: {props.endereco }</h4></p>
     </div>
    </div>
  )
}
