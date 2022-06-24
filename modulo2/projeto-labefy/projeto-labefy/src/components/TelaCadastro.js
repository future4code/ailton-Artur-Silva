import React, { Component } from 'react'

export default class TelaCadastro extends Component {
  state = {
    nome:''
  }
  
  eventoNome = (event) => {
    this.setState({nome: event.targert.value})
  }
  
  
  render() {
    return (
      <div>
        <button onClick={this.props.irParaLista}> Ver Playlist</button>
        <h1>Adicionar playlist</h1>
        <input placeholder='Nome'/>
        <button>Cadastrar</button>
      </div>
    )
  }
}
