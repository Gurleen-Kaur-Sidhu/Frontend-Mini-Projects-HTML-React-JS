import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="footerpage">
    <div className="d-flex justify-content-center">
      <div className="footer-page">
        <div className='d-flex align-items-center justify-content-evenly' style={{height:"100%",width:"100%"}}>

       <div className='footer1'>

        <div className='footer3'>
         <img src='./images/Logo (3).png'></img>
        </div>

        <div className='footer4'>
        Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
        </div>

        <div className='footer5'>
        All rights reserved.
        </div>
         
       </div>

       <div className='footer2'>

        <div className='footer6'>

            <div className='footer7'>
             <b>Landings</b>
            </div>

            <div className='footer8'>
                <div>Home</div>
             <br></br>
                <div>Products</div>
               <br></br>
                <div>Services</div>

            </div>

        </div>

        <div className='footer6'>

        <div className='footer7'>
             <b>Company</b>
            </div>

            <div className='footer8'>
                <div>Home</div>
             <br></br>
                <div>Careers <button className='footer-btn rounded-pill'><b>Hiring</b></button></div>
               <br></br>
                <div>Services</div>

            </div>

        </div>

        <div className='footer6' style={{width:"140px"}}>

        <div className='footer7'>
             <b>Resources</b>
            </div>

            <div className='footer8'>
                <div>Blog</div>
             <br></br>
                <div>Product</div>
               <br></br>
                <div>Services</div>

            </div>

        </div>

       </div>




       </div>
      </div>
      </div>
      </section>
  )
}

export default Footer
