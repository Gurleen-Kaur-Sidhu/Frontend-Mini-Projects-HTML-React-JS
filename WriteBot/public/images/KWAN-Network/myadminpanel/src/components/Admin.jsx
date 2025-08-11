import React from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import Dashboard from './mainpage/dashboard/Dashboard'

const Admin = () => {
  return (
    <div className='' style={{backgroundColor:"rgb(181, 181, 237)",border:"2px solid red"}}>
      <Header></Header>
      <Sidebar></Sidebar>
      <Dashboard></Dashboard>
    </div>
  )
}

export default Admin
