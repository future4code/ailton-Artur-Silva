import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerDiv = styled.div`
display: flex;
justify-content: space-between;
border: 1px solid black;
width:200px;
margin:5px;
border-radius: 5px;
`

const Botão = styled.button`
border: transparent;
background-color: transparent;
font-weight: bold;
color: red;

`

export default class TelaListaUsuario extends Component {
 state = {
  usuarios: []
 }
    componentDidMount(){
        this.pegarUsuarios()
    }

    pegarUsuarios = async() =>{
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
//         axios.get(url, {
//         headers: {
//             Authorization: "artur-silva-ailton"
//         }
//         })
//         .then((res)=>{
//           this.setState({usuarios: res.data})
//         })
//         .catch((err)=>{
//           alert('Erro')
//         })

try {
    const res = await axios.get(url, {
        headers:{
            Authorization: "artur-silva-ailton"
        }
    })
    this.setState({usuarios:res.data})
} catch (err) {
    alert('Ocorreu um problema')
}



}
    deletaUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        // axios.delete(url, {
        //     headers:{
        //         Authorization: "artur-silva-ailton"
        //     }
        // }).then(()=>{
        //   alert('Usuario(a) deletado(a) com sucesso')
        //   this.pegarUsuarios()
        // })
        // .catch(()=>{
        //   alert('Erro')
        // })


    }
    
    render() {
        const listaDeUsuario = this.state.usuarios.map((user) =>{
            return <ContainerDiv key={user.id}>
                     {user.name}
                     <Botão onClick={()=> this.deletaUsuario(user.id)}>X</Botão>
                   </ContainerDiv>
        })
    return (
      <div>
        <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
        <h2>Lista De Usuario</h2>
        {listaDeUsuario}
      </div>
    )
  }
}
