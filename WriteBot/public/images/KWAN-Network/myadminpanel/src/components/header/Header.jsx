
import React from 'react'
import './Header.css'
import Logo from './logo/Logo.jsx'

import Nav from './nav/Nav.jsx'
import Search from './search/Search.jsx'
import Sidebar from '../sidebar/Sidebar.jsx'
import Dashboard from '../mainpage/dashboard/Dashboard.jsx'
import Mainpage from '../mainpage/Mainpage.jsx'

const Header = () => {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
      <Logo></Logo>
      <Search></Search>
      <Nav></Nav>
      <Sidebar></Sidebar>
      {/* <Dashboard></Dashboard> */}
      {/* <Mainpage></Mainpage> */}

    </header>
  )
}

export default Header
