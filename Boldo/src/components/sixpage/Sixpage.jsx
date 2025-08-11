import React from 'react'
import './Sixcard.css'

const Sixpage = () => {
    
  return (
    <section className='sixpage'>
        <div className='container'>
              
              <div className='six-content d-flex justify-content-center'>
                  <img src='./images/Image.png' height={403} width={1100}></img>
              </div>

              <div className='six-content4 d-flex justify-content-center' style={{margin:"56px 0px"}}>
                         <div className='six-content5 d-flex justify-content-between'>

                            <h2 className='six-content1'>
                            We connect our customers with the best, and help them keep up-and stay open.
                            </h2>

                            <div className='six-content2'>


                            <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">

      <button class="collapsed six-content9" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      We connect our customers with the best?<div><img src='./images/Group11 210.png' height={28} width={28}></img></div>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">

      <button class="collapsed six-content9" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Android research & development rockstar?<div><img src='./images/Group11 210.png' height={28} width={28}></img></div>
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  
</div>


















                                {/* <div className='six-content7'>
                                    <div className='six-content8'>
                                    <h6  >We connect our customers with the best?</h6>
                                    <div><img src='./images/Group11 210.png' height={28} width={28}></img></div>
                                    </div>

                                </div>

                                <div className='six-content7'style={{marginTop:"32px"}}>
                                <div className='six-content8'>
                                    <h6 className='six-content9'>Android research & development rockstar? </h6>
                                    <div><img src='./images/Group11 210.png' height={28} width={28}></img>
                                    </div>
                                </div> */}
{/* </div> */}



                            </div>

                             
                         </div>

              </div>
               
               </div></section>
  )
}

export default Sixpage




// import React from 'react';
// import './Sixcard.css';

// const Sixpage = () => {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <section className='sixpage'>
//       <div className='container'>
//         <div className='six-content d-flex justify-content-center'>
//           <img src='./images/Image.png' height={403} width={1100}></img>
//         </div>

//         <div className='six-content4 d-flex justify-content-center' style={{ margin: "56px 0px" }}>
//           <div className='six-content5 d-flex justify-content-between'>
//             <div className='six-content1'>
//               We connect our customers with the best, and help them keep up-and stay open.
//             </div>

//             <div className='six-content2'>
//               <div className='six-content7'>
//                 <div className='six-content8' onClick={handleToggle}>
//                   <div className='six-content9'>We connect our customers with the best?</div>
//                   <div>
//                     <img src='./images/Group11 210.png' height={28} width={28} />
//                   </div>
//                   {isOpen && (
//                     <div className='dropdown-content'>
//                       <p>This is the dropdown content.</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className='six-content7' style={{ marginTop: "32px" }}>
//                 <div className='six-content8' onClick={handleToggle}>
//                   <div className='six-content9'>Android research & development rockstar? </div>
//                   <div>
//                     <img src='./images/Group11 210.png' height={28} width={28} />
//                   </div>
//                   {isOpen && (
//                     <div className='dropdown-content'>
//                       <p>This is the dropdown content.</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Sixpage;






