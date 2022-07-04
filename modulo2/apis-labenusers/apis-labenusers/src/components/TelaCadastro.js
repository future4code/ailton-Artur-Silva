import axios from 'axios'
import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerDiv = styled.div`
display: flex;
justify-content: space-between;
border: 1px solid black;
width:200px;
margin:5px;
`
const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
padding: 20px;
width: 360px;
gap: 8px;
border: 1px solid purple;
border-radius: 12px;
box-shadow: 0 0 8px black;
`
export default class TelaCadastro extends Component {
  state = {
    nome:'',
    email:''
  }
  eventoNome = (event) =>{
   this.setState({nome: event.target.value})
  }
  
  eventoEmail = (event) =>{
this.setState({email: event.target.value})
  }

  fazerCadastro = () =>{

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const body = {
    name: this.state.nome,
    email: this.state.email
   }
   axios.post(url, body, {
    headers:{
        Authorization: "artur-silva-ailton"
    }
   })
   .then((res)=>{
    alert('Usuario(a) cadastrado com sucesso!')
    this.setState({nome:'',email:''})
   })

   .catch((err)=>{
    alert(err.response.data.message)
   })
  }
  
    render() {
    return (
      <div>
        <button onClick={this.props.irParaLista}>Ir para Lista de Usuario</button>
        <h2>Cadastro</h2>
          <ul>
           <li>
           <input placeholder={'Nome'}
               value={this.state.nome}
               onChange={this.eventoNome}
            />
           </li>
           <li>
           <input placeholder={'E-mail'}
               value={this.state.email}
               onChange={this.eventoEmail}
            />
           </li>
        </ul>
        <button onClick={this.fazerCadastro}>Cadastrar</button>
        
      </div>
    )
  }
}
