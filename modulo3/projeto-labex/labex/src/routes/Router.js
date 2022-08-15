import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ListTripsPage from '../pages/ListTripsPage';
import AdminHomePage from '../pages/AdminHomePage';
import CreateTripPage from '../pages/CreateTripPage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import LoginPage from '../pages/LoginPage';
import TripDetailsPage from '../pages/TripDetailsPage'

export default function Router() {
  return (
    <div>
     <BrowserRouter>
       <Routes>
         <Route index element = {<HomePage/>}/>
         <Route path='listTrip' element = {<ListTripsPage/>}/>
         <Route path='login' element = {<LoginPage/>}/>
         <Route path='login/admin' element = {<AdminHomePage/>}/>
         <Route path='login/admin/createTrip' element = {<CreateTripPage/>}/>
         <Route path='login/admin/createTrip/tripDetails' element = {<TripDetailsPage/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  )
}
