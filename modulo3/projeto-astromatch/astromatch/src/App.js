import React, {useState} from "react";
import Cards from "./components/Cards";
import axios from "axios";
import styled from "styled-components";

const ContainerProfile = styled.div`
border: 2px solid black;
width: 380px;
margin: 60px auto;
img{
  width: 380px;
  height: 400px;
  display: block;
  background-color: transparent;
}
h1{
  position: absolute;
  top: 390px;
  right: 747px;
  font-size: 40px;
  color: white;
 -webkit-text-stroke: 1px black;
  
}
h3{
  /* position: absolute;
  top: 390px;
  right: 747px;
  font-size: 20px;
  color: white;
 -webkit-text-stroke: 1px black; */
}
`

function App() {

  const [perfil, setPerfil] = useState({})

  const obterPerfil = () => {
      const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:artur/person'
  
      axios
      .get(url)
      .then((res) => {
        setPerfil(res.data.profile);
      })
      .catch((err)=>{
          console.log(err)
      })
  }



  return (
    <ContainerProfile >
        <img src={perfil.photo} alt={perfil.photo_alt}/>
        <p><h1>{perfil.name}</h1><h3>, {perfil.age}</h3></p>
        <p><h3>{perfil.bio}</h3></p>

     <button onClick={() => obterPerfil()}>{''} Escolha perfil {''}</button>
    </ContainerProfile>
  );
}

export default App;
