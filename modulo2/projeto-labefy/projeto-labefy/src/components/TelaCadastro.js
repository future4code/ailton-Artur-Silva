import axios from 'axios'
import React, { Component } from 'react'

export default class TelaCadastro extends Component {
  state = {
    nome:''
   }
  
  eventoNome = (event) => {
    this.setState({nome: event.target.value})
  }
  
  fazerPlaylist = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    const body = {
      name: this.state.nome
    }
    axios.post(url, body, {
      headers: {
      Authorization: 'artur-silva-ailton'
      }
    })
    .then((res)=>{
      alert('Playlist adicionada com sucesso!')
      this.setState({nome:''})
    })
    .catch((err)=>{
      alert(err.response.data.message)
    })
  }
  
 
  
  render() {
    return (
      <div>
        <button onClick={this.props.irParaLista}>Ver Playlist</button>
        <h1>Adicionar playlist</h1>
        <input 
        placeholder='Nome da Playlist'
        value={this.state.nome}
        onChange={this.eventoNome}
        />
        <button onClick={this.fazerPlaylist}>Cadastrar</button>
      </div>
    )
  }
} 