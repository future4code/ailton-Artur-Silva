import React from 'react'
import {useNavigate} from 'react-router-dom'
import { irParaHomePage } from '../routes/Coordinator'

export default function CreateTripPage() {
    const navigate = useNavigate()

  return (
    <div>
         Create Trip Page
        <button onClick={()=>irParaHomePage(navigate)}>Voltar</button>
        <button>Enviar</button>
    </div>
  )
}
