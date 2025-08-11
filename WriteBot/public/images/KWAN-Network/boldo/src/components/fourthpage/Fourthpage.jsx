// import React from 'react'
// import './Fourthpage.css'

// const Fourthpage = () => {

//   return (
//     <section className='fourthpage'>
//         <div className='container d-flex justify-content-center'>
//                <div className='fourth-page'>
                 
//                 <div className='fourth-content'>

//                     <h2 className='fourth-content1'>
//                     We connent our customers with the best and help them keep up-and stay open
//                     </h2>

//                     <div className='fourth-content2'>

//                         <div className='fourth-content-3 shadow' style={{marginBottom:"24px"}}>
//                             <div className='fourth-content4'>
//                                 <div className='fourth-img d-flex align-items-center justify-content-center'>
//                                 <img src='./images/feather.png' height={24} width={24}></img>
//                                 </div>
                                
//                                 <div className='fourth-content5'>We connent our customers with the best</div>

//                             </div>
//                         </div>
//                         <div className='fourth-content-3 shadow' style={{marginBottom:"24px"}}>
//                         <div className='fourth-content4'>
//                                 <div className='fourth-img d-flex align-items-center justify-content-center'>
//                                 <img src='./images/star.png' height={24} width={24}></img>
//                                 </div>
                                
//                                 <div className='fourth-content5'>Advisor success customer launch partyt</div>

//                             </div>
//                         </div>
//                         <div className='fourth-content-3 shadow' >
//                         <div className='fourth-content4'>
//                                 <div className='fourth-img d-flex align-items-center justify-content-center'>
//                                 <img src='./images/sun.png' height={24} width={24}></img>
//                                 </div>
                                
//                                 <div className='fourth-content5'>Business-to-consumer long tail</div>

//                             </div>
//                         </div>

//                     </div>

//                 </div>

               

//                  <div>
//                  <img src='./images/Group 281.png' height={692} width={444}></img>
//                  </div>



//                </div>
//                </div>
//                </section>
//   )
// }

// export default Fourthpage





// import React, { useState } from 'react';
// import './Fourthpage.css';

// const Fourthpage = () => {
//   const [contentText, setContentText] = useState(
//     'We connect our customers with the best and help them keep up-and stay open'
//   );

//   const contentOptions = [
//     'We connect our customers with the best',
//     'Advisor success customer launch party',
//     'Business-to-consumer long tail'
//   ];

//   const handleContentClick = (index) => {
//     setContentText(contentOptions[index]);
//   };

//   return (
//     <section className='fourthpage'>
//       <div className='container d-flex justify-content-center'>
//         <div className='fourth-page'>
//           <div className='fourth-content'>
//             <h2 className='fourth-content1'>{contentText}</h2>

//             <div className='fourth-content2'>
//               {contentOptions.map((text, index) => (
//                 <div className='fourth-content-3 shadow' key={index} style={{ marginBottom: "24px" }}>
//                   <div className='fourth-content4'>
//                     <div className='fourth-img d-flex align-items-center justify-content-center'>
//                       <img src={`./images/${index === 0 ? 'feather' : index === 1 ? 'star' : 'sun'}.png`} height={24} width={24} alt="icon" />
//                     </div>
//                     <div className='fourth-content5' onClick={() => handleContentClick(index)}>
//                       {text}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <img src='./images/Group 281.png' height={692} width={444} alt="Group" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Fourthpage;



import React, { useState } from 'react';
import './Fourthpage.css';

const Fourthpage = () => {
  const [contentText, setContentText] = useState(
    'We connect our customers with the best and help them keep up-and stay open'
  );

  const contentOptions = [
    'We connect our customers with the best',
    'Advisor success customer launch party',
    'Business-to-consumer long tail'
  ];

  const detailMessages = [
    'We connect our customers with the best and help them keep up-and stay open',
    'Our advisors ensure successful project launches with expert guidance.',
    'Explore innovative strategies for reaching consumers effectively.'
  ];

  const handleContentClick = (index) => {
    setContentText(detailMessages[index]);
  };

  return (
    <section className='fourthpage'>
      <div className='container d-flex justify-content-center'>
        <div className='fourth-page'>
          <div className='fourth-content'>
            <h2 className='fourth-content1'>{contentText}</h2>

            <div className='fourth-content2'>
              {contentOptions.map((text, index) => (
                <div className='fourth-content-3 shadow' key={index} style={{ marginBottom: "24px" }}>
                  <div className='fourth-content4'>
                    <div className='fourth-img d-flex align-items-center justify-content-center'>
                      <img src={`./images/${index === 0 ? 'feather' : index === 1 ? 'star' : 'sun'}.png`} height={24} width={24} alt="icon" />
                    </div>
                    <div className='fourth-content5' onClick={() => handleContentClick(index)}>
                      {text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img src='./images/Group 281.png' height={692} width={444} alt="Group" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fourthpage;
