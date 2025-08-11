
import React from 'react'
import Login from './components/Login.jsx'
// import { BrowserRouter, Route } from 'react-router-dom'
import Signup from './components/Signup.jsx'

import { BrowserRouter, Route, Routes } from "react-router-dom"

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'remixicon/fonts/remixicon.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './App.css'
import Header from './components/header/Header.jsx'
import Sidebar from './components/sidebar/Sidebar.jsx'
import Mainpage from './components/mainpage/Mainpage.jsx'
import Dashboard from './components/mainpage/dashboard/Dashboard.jsx'
import Bar from './components/Bar.jsx'
import Linechart from './components/Linechart.jsx'
import Team from './components/Team.jsx'
import Profile from './components/Profile.jsx'
import Contact from './components/Contact.jsx'
import Faq from './components/Faq.jsx'



import CalendarComponent from './components/CalendarComponent.jsx'
import Admin from './components/Admin.jsx'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/header" element={<Header />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/mainpage" element={<Mainpage />} />
          

          <Route path='/bar' element={<Bar />} />
          <Route path='/team' element={<Team />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/linechart' element={<Linechart></Linechart>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/calendar' element={<CalendarComponent />} />



        </Routes>
      </BrowserRouter>




    </div>
  )
}

export default App

