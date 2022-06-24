import React, { Component } from 'react'
import axios from 'axios'
import TelaCadastro from './components/TelaCadastro'
import TelaPlaylist from './components/TelaPlaylist'

export default class App extends React.Component {
state = {
TelaAtual:'CadastroPlayList'
}
escolheTela = () =>{
  switch (this.state.TelaAtual){
    case 'CadastroPlayList':
      return <TelaCadastro irParaLista={this.irParaLista}/>
    case 'Lista':
      return <TelaPlaylist irParaCadastro={this.irParaCadastro} /> 
  }
}
irParaCadastro = () =>{
 this.setState({TelaAtual: 'CadastroPlayList'})
}
irParaLista = () => {
 this.setState({TelaAtual: 'Lista'})
}


  render() {
    return (
      <div>

       {this.escolheTela()}
      </div>
    )
  }
}

