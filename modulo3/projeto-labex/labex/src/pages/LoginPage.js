import React from 'react'
import { irParaHomePage, irParaAdminPage } from '../routes/Coordinator'
import {useNavigate, useParams} from 'react-router-dom'

export default function LoginPage() {
    const navigate = useNavigate()
    const params = useParams()
   
    return (
    <div>
        LoginPage
        <p><input></input></p>
        <p><input></input></p>
        <button onClick={()=>irParaHomePage(navigate)}>Voltar</button>
        <button onClick={()=>irParaAdminPage(navigate,'Entrar')}>Entrar</button>

    </div>
  )
}
