import React from 'react'
import Navbar from './navbar/Navbar.jsx'
import Mainpage from './mainpage/Mainpage.jsx'
import Pages from './mainpage/secondpage/Pages.jsx'

import './Home.css'
const Home = () => {
  return (
    <div className='d-block' style={{border:"1px solid red"}}>
      <Navbar></Navbar> 
 <Mainpage></Mainpage>
    <Pages></Pages>

    </div>
  )
}

export default Home
