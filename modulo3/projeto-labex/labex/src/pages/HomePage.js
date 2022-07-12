import React from 'react'
import {useNavigate} from 'react-router-dom'
import { irParaListTripsPage, irParaLogin } from '../routes/Coordinator'

export default function HomePage() {
    const navigate = useNavigate()
 
  
    return (
    <div>
          Labex
    <button onClick={()=>irParaListTripsPage(navigate)}>Ver Viagens</button>
    <button onClick={()=>irParaLogin(navigate)}>Área de Admin</button>
    </div>
  )
}
