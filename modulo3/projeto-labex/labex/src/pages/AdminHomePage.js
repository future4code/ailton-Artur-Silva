import React from 'react'
import {useNavigate} from 'react-router-dom'
import { irParaHomePage } from '../routes/Coordinator'

export default function AdminHomePage() {
    const navigate = useNavigate()
 

  
    return (
    <div>
        AdminHomePage
        
        <button onClick={()=>irParaHomePage(navigate)}>Voltar</button>
        <button >Criar Viagem</button>
        <button >Logout</button>
    </div>
  )
}
