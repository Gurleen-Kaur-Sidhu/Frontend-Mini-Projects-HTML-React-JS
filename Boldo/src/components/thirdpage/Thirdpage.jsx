import React from 'react'
import './Thirdpage.css'

const Thirdpage = () => {
  return (
    <section className='thirdpage'>
        <div className='container d-flex justify-content-center'>
               <div className='third-page'>
                 
                 <div>
                    <img src='./images/Group2 216.png' height={610} width={494}></img>
                 </div>

                 <div className='third-content'>
                     
                     <div className='third-content1'>
                           <h3 className='third-content2'>
                           We connent our customers with the best and help them keep up-and stay open
                           </h3>
                           <div className='third-content3'>
                                
                                <div className='third-content4' style={{marginBottom:'24px'}}><img src='./images/Group 210.png' height={36} width={36}></img><p className='third-context5'>we connent our customers with the best</p></div>
                                <div className='third-content4' style={{marginBottom:'24px'}}><img src='./images/Group 210.png' height={36} width={36}></img><p className='third-context5'>Advisor success customer launch party</p></div>
                                <div className='third-content4'><img src='./images/Group 210.png' height={36} width={36}></img><p className='third-context5'>Business-to-consumer long tail</p></div>
                           </div>
                     </div>

                     <div>
                    <button className='border rounded-pill third-button' style={{marginTop:"56px"}}>
                        <div className='button-third'>Start Now</div>
                    </button>
                 </div>
                 </div>

                
               </div>
        </div>

    </section>
  )
}

export default Thirdpage
