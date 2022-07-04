import React from 'react';
import TelaCadastro from './components/TelaCadastro';
import TelaListaUsuario from './components/TelaListaUsuario';
import axios from "axios";
import styled from 'styled-components';

const ContainerDiv = styled.div`
display: flex;
text-align: center;
justify-content:center

`

export default class App extends React.Component {
  state = {
    telaAtual:"cadastro"
  }
 
  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuario irParaCadastro={this.irParaCadastro }/>
      default:
        return <div>Erro!</div>
    }
  }

  irParaCadastro = () => {
this.setState({telaAtual:"cadastro"})
  }

  irParaLista = () => {
this.setState({telaAtual:"lista"})
  }

render (){
  return(
    <ContainerDiv>
          {this.escolheTela()}
    </ContainerDiv>
  )
}
}