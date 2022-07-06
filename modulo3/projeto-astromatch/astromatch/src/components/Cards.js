// import React from 'react'
// import axios from 'axios'
// import React, {useState} from 'react'

// export default function Cards() {

// const [perfil, setPerfil] = useState({})

// const obterPerfil = () => {
//     const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:artur/person'

//     axios
//     .get(url)
//     .then((res) => {
//         setPerfil(res.data);
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }
 

// const escolherPessoa = () => {
//     const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person' 

//     const body = {
//         id: idPerfil,
//         choice: true,
//     };
//     axios
//     .post (url, body, {
//      headers: 'Content-Type: application/json'   
//     })

// .then(response => {
        
//     console.log(response.data);
//   })
//   .catch(err => {
//     console.log(err.response);
//   });
//  }
 
//     return (
//     <div>
//         {/* <img src={profile.photo}/> */}
//      <button onClick={() => obterPerfil()}>{''} Escolha perfil {''}</button>
//     </div>
//   )
// }
