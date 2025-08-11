import React from 'react'
import './Firstpage.css'
import { motion } from 'framer-motion';

import Test from '../../assets/images/Group264.png';

const Firstpage = () => {

  const slides = [
    {img:'./images/Logo.png'},
    {img:'./images/gg.png'},
    {img:'./images/Logo.png'},
    {img:'./images/gg.png'},
];

const duplicatedSlides = [...slides, ...slides];

  return (
    <section className="mainpage-section">
      <div className="container">
        <div className='d-flex'>
        <div className='main-content'>
            <div className='main-content2'>
                <div className='main-content3'>

                    <div className='main-content6 text-light'>
                    <h2><div>Save time by building</div>
                    fast with Boldo Template</h2>
                    </div>

                    <div className='main-content8'>

                    </div>

                    <div className='main-content7'>
                       <p className='mb-0 text-light'>Funding handshake buyer bussiness-to-business metrics iPad partnership
                       First mover advantage innovator success deployment non-disclosure</p>
                    </div>

                </div>

                <div className='main-content4'>

                </div>

                <div className='main-content5'>
                    <div className='main-content9 d-flex justify-content-between'>
                       <button className='button2 rounded-pill'>Buy template</button>
                       <button className='border border-2 border-light button3 rounded-pill text-light'>Explore</button>
                       </div>
                </div>

            </div>
        </div>
        <div className='img-div' style={{zIndex:"1"}}>
                   <img src='./images/Group 256.png' width={493.86} height={231.9}></img>

                   <div className='d-flex justify-content-between' style={{marginTop:"25.76px"}}>
                    <img src='./images/Group 299 (1).png' width={192.18} height={165.34} >

                    </img>
                    <img src={Test} width={261.96} height={165.34}></img>
                   </div>

        </div>
        </div>

 
<div className=''>
<div style={{marginTop:'60px',marginBottom:"60px",height:"93px",display:"flex",alignItems:"center"}}>

<div className="overflow-hidden" >
          
            <motion.div
                className="d-flex"
                animate={{
                    x: ['-100%', '0%'],
                    transition: {
                        ease: 'linear',
                        duration: 30,
                        repeat: Infinity
                        
                    }
                }}
            >
          
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                        <div className="d-flex flex-col items-center justify-center h-full text-6xl">
                        <img src={slide.img} height={40}  width={150} style={{marginRight:"70px"}}></img>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
        {/* </div> */}






            </div>
        </div>

    </div>
</section>
  )
}

export default Firstpage
