import React from 'react'
import Navbar from './navbar/Navbar'
import './Homepage.css'
import Firstpage from './firstpage/Firstpage'
import Secondpage from './secondpage/Secondpage'
import Thirdpage from './thirdpage/Thirdpage'
import Fourthpage from './fourthpage/Fourthpage'
import Fivepage from './fivepage/Fivepage'
import Sixpage from './sixpage/Sixpage.jsx'
import Sevenpage from './sevenpage/Sevenpage.jsx'
import Eightpage from './eightpage/Eightpage.jsx'
import Footer from './footer/Footer.jsx'


const Homepage = () => {
  return (
    <div>
      <div className='home-section'>
        {/* <img src='./images/Ellipse 9 (1).png' style={{position:"absolute",top:"0px" ,right:"60px"}}></img> */}
     
      <Navbar></Navbar>
      <Firstpage></Firstpage>
      </div>

      <Secondpage></Secondpage>
      <Thirdpage></Thirdpage>
      <Fourthpage></Fourthpage>
      <Fivepage></Fivepage>
      <Sixpage></Sixpage>
      <Sevenpage></Sevenpage>
      <Eightpage></Eightpage>
      <Footer></Footer>
      </div>
    
  )
}

export default Homepage

