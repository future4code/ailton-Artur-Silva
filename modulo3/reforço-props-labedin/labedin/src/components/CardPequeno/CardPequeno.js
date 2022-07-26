import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px; 
    
`
export default function CardPequeno(props) {
  return (
        <Container>
             <div>
                <h4>Email: { props.email }</h4>
               <h4>Endereco: { props.endereco }</h4>
            </div>
        </Container>
  )
}
