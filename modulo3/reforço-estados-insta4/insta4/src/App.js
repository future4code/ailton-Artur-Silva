import React, { useState } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const FomularioContainer = styled.div`
display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 180px;
  width: 240px;
  border: 1px solid gray;
  margin: 20px;
  padding: 30px;
  input{
    border-radius: 10px;
  }
  button{
    border-radius: 10px;
    background-color: black;
    color: white;
  }
`


function App() {
 
 const [postUsuario, setpostUsuario] = useState([ 
    {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150"
    }
  ]);

  const [usuarioNome, setnomeUsuario] = useState('');
  const [usuarioFoto, setUsuarioFoto] = useState('');
  const [postFoto, setpostFoto] = useState('');

  const onChanNomeUsuario = (event) => {
    setnomeUsuario(event.target.value)
  }

  const onChanFotoUsuario = (event) => {
    setUsuarioFoto(event.target.value)   
  }

  const onChanFotoPost = (event) => {
     setpostFoto(event.target.value)  
  }

   const adicionarNovoPost = () =>{
    
    const novoPost = {
      nomeUsuario: usuarioNome,
      fotoUsuario: usuarioFoto,
      fotoPost: postFoto
    }; 


    const novosPosts = [...postUsuario, novoPost];
    setpostUsuario(novosPosts);
     
     }


  return (
    
    <MainContainer>

        <FomularioContainer>
        <input
            placeholder={"Nome do Usuário"}
            value={usuarioNome}
            onChange={onChanNomeUsuario}
          />
          <input
            placeholder={"Link Foto do Usuário"}
            value={usuarioFoto}
            onChange={onChanFotoUsuario}
          />
          <input
            placeholder={"Link Foto do Post"}
            value={postFoto}
            onChange={onChanFotoPost}
          />
          <button onClick={adicionarNovoPost}>Criar Post</button>
        
         </FomularioContainer>
      
          {postUsuario.map((p) => {
          return (
          <Post
           nomeUsuario={p.nomeUsuario}
           fotoUsuario={p.fotoUsuario}
           fotoPost={p.fotoPost}
          />
      );
    })};
    </MainContainer>
  );
}

export default App;
