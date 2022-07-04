import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CardPlaylist = styled.div`
    padding: 10px;
    margin:10px;
    display:flex;
    justify-content: space-between;
    border: solid black;
    height:20px;
    width: 200px;
`

export default class TelaPlaylist extends Component {
  state = {
    playlist : [],
  }
  
  componentDidMount(){
    this.pegarPlaylist()
  }
  
  pegarPlaylist = () => {
   const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
   
   axios.get(url, {
    headers: {
      Authorization: "artur-silva-ailton"
    }
   })
   .then((res)=>{
     this.setState({playlist: res.data.result.list})
   })
   .catch((err)=>{
     alert('Erro, Tente novamente')
   })
  }
  
  visualizarPlaylist = (id) =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

    axios.get(url, {
      headers: {
        Authorization: "artur-silva-ailton"
      }
    })
    .then((res)=>{
      // this.setState({musicas:res.data})
      console.log(res)
    })

    .catch((err)=>{

    })
  }
   
  deletarPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url, {
      headers:{
        Authorization: "artur-silva-ailton"
      }
    })
    .then(()=>{
     alert('Playlist deletada com sucesso!')
     this.pegarPlaylist()
    })

    .catch((err)=>{
     alert('Ocorreu um erro')
  
    })
  }
  
  
  
  render() {
    const listaPlaylist = this.state.playlist.map((play)=>{
      return <CardPlaylist key={play.id}>
              {play.name}
              <button onClick={() => this.deletarPlaylist (play.id) }>X</button>
             </CardPlaylist>
    })


    return (
      <div>
        <button onClick={this.props.irParaCadastro}> Cadastrar Playlist</button>
        <h1>Playlist</h1>
        <p>{listaPlaylist}</p>
        
       
      </div>
    )
  }
}
