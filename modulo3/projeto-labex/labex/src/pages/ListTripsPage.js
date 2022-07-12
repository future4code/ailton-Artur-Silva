import React from 'react'
import {useNavigate} from 'react-router-dom'
import {irParaHomePage, irParaCreatePage } from '../routes/Coordinator'



export default function ListTripsPage() {
  const navigate = useNavigate()
 
  return (
    <div>
      ListTripsPage
      <button onClick={()=>irParaHomePage(navigate)}>Voltar</button>
      <button onClick={()=>irParaCreatePage(navigate)}>inscrever-se</button>
    </div>
  )
}
