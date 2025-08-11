import React from 'react'
import Navbar from '../navbar/Navbar'
import './Aboutpage.css'
import About3 from './About3'
import About4 from './About4'
import About5 from './About5'
import About6 from './About6'
import About7 from './About7'
import Eightpage from '../eightpage/Eightpage'
import Footer from '../footer/Footer'

const Aboutpage = () => {
  return (
    <div>
    <div className='about-section'>
        <Navbar></Navbar>

        <div className='d-flex align-items-center justify-content-center' style={{marginTop:'72px'}}>

          <div className='aboutpage-1'>

            <div className='aboutpage-2'>
              <div className='aboutpage-3'>About</div>
              <div className='aboutpage-4'>We love to make great things, things that matter.</div>

            </div>

            <div className='d-flex align-items-center justify-content-center'>
             <div className='aboutpage-5'>
             Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
             </div>
            </div>

          </div>
        </div>


        <About3></About3>
        <About4></About4>
        <About5></About5>
        <About6></About6>
        <About7></About7>
        <Eightpage></Eightpage>
        <Footer></Footer>
      
      </div>
    </div>
  )
}

export default Aboutpage
